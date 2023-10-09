import GithubRequest from "../models/github-request.model";

const fetchGithubApi = (request: GithubRequest, additionalOptions?: any) => 
    fetch(request.url, {
        ...request.options,
        ...additionalOptions,
    });


export { fetchGithubApi };
