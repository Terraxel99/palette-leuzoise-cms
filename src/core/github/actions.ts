import { fetchGithubApi } from "../helpers/fetch.helper";
import { githubRequests } from "../requests/github.requests";
import { GithubCredentials } from "../models/github-workflow-credentials.model";
import { getGithubCredentials } from "./credentials";

export async function isWorkflowRunning(): Promise<boolean> {
    const creds: GithubCredentials = getGithubCredentials();
    const workflowId = getGithubPublishActionWorkflowId();

    if (!workflowId) {
        throw new Error('Workflow ID not set.');
    }

    try {
        const request = githubRequests.workflowLastRun(creds.repositoryOwner, creds.repositoryName, workflowId, creds.token);
        const result = await fetchGithubApi(request);

        if (!result || result.status !== 200) {
            throw new Error();
        }

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

export async function triggerDeployWorkflow(): Promise<void> {
    const isAlreadyRunning = await isWorkflowRunning();

    if (isAlreadyRunning) {
        throw new DeployAlreadyRunningError('The deployment job is already running');
    }

    const creds: GithubCredentials = getGithubCredentials();
    const workflowId = getGithubPublishActionWorkflowId();
    const branchName = getGithubDeployBranch();

    if (!workflowId || !branchName || !branchName.length) {
        throw new Error('Either workflow id or branch (or both) is/are not defined.');
    }

    const request = githubRequests.triggerDeployWorkflow(creds.repositoryOwner, creds.repositoryName, workflowId, branchName, creds.token);
    const result = await fetchGithubApi(request);

    if (!result || result.status !== 204) {
        throw new Error('Could not start deployment workflow');
    }
}

function getGithubDeployBranch() {
    return process.env.GITHUB_DEPLOY_BRANCH;
}

function getGithubPublishActionWorkflowId(): string {
    return process.env.GITHUB_WORKFLOW_ID;
}
