import GithubRequest from "../models/github-request.model";

const gitHubApiBaseUrl = 'https://api.github.com';

export const githubRequests = {
    workflowLastRun: (repositoryOwner: string, repositoryName: string, workflowId: string, token: string): GithubRequest => {
        return {
            url: `${gitHubApiBaseUrl}/repos/${repositoryOwner}/${repositoryName}/actions/workflows/${workflowId}/runs?per_page=1`,
            options: {
                method: 'get',
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        }
    },

    triggerDeployWorkflow: (repositoryOwner: string, repositoryName: string, workflowId: string, branch: string, token: string): GithubRequest => {
        return {
            url: `${gitHubApiBaseUrl}/repos/${repositoryOwner}/${repositoryName}/actions/workflows/${workflowId}/dispatches`,
            options: {
                method: 'post',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    ref: branch,
                })
            }
        };
    },
};
