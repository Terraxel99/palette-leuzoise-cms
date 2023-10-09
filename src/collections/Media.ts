import type { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
    slug: 'media',
    upload: {
        disableLocalStorage: true,
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
        {
            name: 'caption',
            type: 'richText',
            admin: {
                elements: ['link'],
            },
        },
    ],
}

export default Media;
