class DeployAlreadyRunningError extends Error {
    constructor(msg: string) {
        super(msg);
    }
}
