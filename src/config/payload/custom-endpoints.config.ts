import { isRunningEndpoint, publicationEndpoint } from "../../api/github.api";

const payloadCustomEndpoints = [
    publicationEndpoint,
    isRunningEndpoint,
];

export default payloadCustomEndpoints;
