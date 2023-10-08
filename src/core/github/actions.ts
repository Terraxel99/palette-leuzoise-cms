import { GithubCredentials } from "../models/github-workflow-credentials.model";
import { getGithubCredentials } from "./credentials";

export async function isWorkflowRunning(): Promise<boolean> {
    const creds: GithubCredentials = getGithubCredentials();
    const workflowId = getGithubPublishActionWorkflowId();

    if (!workflowId) {
        throw new Error('Workflow ID not set.');
    }

    try {
        const result = await fetch(`https://api.github.com/repos/${creds.repositoryOwner}/${creds.repositoryName}/actions/workflows/${workflowId}/runs?per_page=1`, {
            method: 'get',
            headers: {
                Authorization: `Bearer ${creds.token}`,
            }
        });

        const data = await result.json();

        if (!data?.workflow_runs?.length || data?.workflow_runs?.length === 0) {
            return false;
        }

        const lastRun = data.workflow_runs[0];
        return lastRun?.conclusion === null;
    } catch (e) {
        throw new Error('Unexpected error while fetching GitHub for last action run.');
    }
}

function getGithubPublishActionWorkflowId(): string {
    return process.env.GITHUB_WORKFLOW_ID;
}
