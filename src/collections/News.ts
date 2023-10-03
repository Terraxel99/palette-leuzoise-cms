import { CollectionConfig } from 'payload/types';

const News: CollectionConfig = {
    slug: 'news',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            label: 'Actualité - Titre'
        }
    ]
};

export default News;