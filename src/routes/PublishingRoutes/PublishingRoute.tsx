import React, { useEffect } from "react";

import { AdminView } from "payload/config";
import { useStepNav } from 'payload/components/hooks';
import { Eyebrow, Gutter } from 'payload/components/elements'; 
import { DefaultTemplate } from 'payload/components/templates';

import { useTranslation } from 'react-i18next';

import PublishingPage from "../../components/PublishingPage/PublishingPage";

const PublishingRoute: AdminView = ({ user, canAccessAdmin }) => {
    const { t } = useTranslation('publishing');
    const { setStepNav } = useStepNav();

    useEffect(() => {
        setStepNav([{ label: t('navTitle') }]);
    }, [setStepNav]);

    return (
        <DefaultTemplate>
            <Eyebrow />
            
            <Gutter className="publishing-page__wrap">
                <PublishingPage />
            </Gutter>
        </DefaultTemplate>
    );
};

export default PublishingRoute;
