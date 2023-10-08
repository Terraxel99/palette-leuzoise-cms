import { CollectionConfig } from 'payload/types';

const News: CollectionConfig = {
    slug: 'news',
    labels: {
        singular: {
            fr: 'Actualité',
            nl: 'Nieuws',
            en: 'News',
        },
        plural: {
            fr: 'Actualités',
            nl: 'Nieuws',
            en: 'News',
        }
    },
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            label: {
                fr: 'Titre',
                nl: 'Titel',
                en: 'Heading'
            }
        }
    ]
};

export default News;