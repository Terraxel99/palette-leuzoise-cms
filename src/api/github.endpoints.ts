import { Endpoint } from "payload/config";

import { isWorkflowRunning } from "../core/github/actions";

export const publicationEndpoint: Endpoint = {
    path: '/publish',
    method: 'post',
    handler: async (req, res, next) => {
        if (!req.user) {
            res.sendStatus(401);
        }

        // Github check is running

        res.sendStatus(200);
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
