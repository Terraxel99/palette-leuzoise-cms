import { GithubCredentials } from "../models/github-workflow-credentials.model";

export function getGithubCredentials(): GithubCredentials {
    const repositoryOwner = process.env.GITHUB_REPO_OWNER;
    const repositoryName = process.env.GITHUB_REPO_NAME;
    const token = process.env.GITHUB_ACCESS_TOKEN;

    if (!repositoryOwner || repositoryOwner === '') {
        throw new Error('Repository owner not set.');
    }

    if (!repositoryName || repositoryName === '') {
        throw new Error('Repository name not set.');
    }

    if (!token || token === '') {
        throw new Error('Access token not set.');
    }

    return {
        repositoryName,
        repositoryOwner,
        token,
    };
}
