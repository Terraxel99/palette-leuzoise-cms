import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import NavGroup from 'payload/dist/admin/components/elements/NavGroup';

const ActionLinks: React.ComponentType<any> = () => {
    const { t } = useTranslation("publishing");

    return (
        <NavGroup label="Actions">
            <Link to={"/admin/publishing"}>{t('navTitle')}</Link>
        </NavGroup>
    );
}

export default ActionLinks;
