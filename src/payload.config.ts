import { buildConfig } from 'payload/config';
import path from 'path';
import { payloadCloud } from '@payloadcms/plugin-cloud';

import Users from './collections/Users';
import News from './collections/News';

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    News
  ],
  localization: {
    locales: [
      'fr',
      'nl',
      'en'
    ],
    defaultLocale: 'fr',
    fallback: true
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud()
  ],
});
