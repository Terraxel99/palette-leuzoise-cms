import React, { useEffect, useState } from "react";

import { Button } from "payload/components/elements";

import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const PublishingPage: React.FC<{}> = () => {
    const { t } = useTranslation('publishing');
    
    const [isJobRunning, setIsJobRunning] = useState<boolean>(true);

    const triggerDeploy = async () => {
        setIsJobRunning(true);

        try {
            const result = await fetch('/api/publish', {
                method: 'post',
            });

            if (!result || result?.status !== 204) {
                throw new Error();
            }

            toast.success(t('deploySuccessfullyTriggered'));
        } catch {
            toast.error(t('deployFailed'));
            setIsJobRunning(false);
        }
    };

    useEffect(() => {
        const fetchRunning = async () => {
            const data = await (await fetch('/api/publication-running')).json();           
            setIsJobRunning(data === true);
        };

        fetchRunning()
            .catch(() => toast.error('Impossible de récupérer le statut du job de publication.'));
    }, []);

    return (
        <div>
            <h1>{t('title')}</h1>

            <div>
                <p></p>
                <Button disabled={isJobRunning} onClick={triggerDeploy}>Publish website</Button>
            </div>
        </div>
    );
}

export default PublishingPage;
