import { Endpoint } from "payload/config";

import { isWorkflowRunning, triggerDeployWorkflow } from "../core/github/actions";

export const publicationEndpoint: Endpoint = {
    path: '/publish',
    method: 'post',
    handler: async (req, res, next) => {
        if (!req.user) {
            res.sendStatus(401);
        }

        try {
            await triggerDeployWorkflow();
            res.sendStatus(204);
        } catch (e) {
            const status = (e instanceof DeployAlreadyRunningError) ? 400 : 503;
            res.sendStatus(status);
        }
    },
};

export const isRunningEndpoint: Endpoint = {
    path: '/publication-running',
    method: 'get',
    handler: async (req, res, next) => {
        if (!req.user) {
            res.sendStatus(401);
        }

        try {
            const isRunning = await isWorkflowRunning();
            res.status(200).send(isRunning);
        } catch {
            res.sendStatus(503);
        }
    },
};
