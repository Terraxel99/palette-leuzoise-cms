import { buildConfig } from 'payload/config';
import path from 'path';
import cloudinaryPlugin from "payload-cloudinary-plugin/dist/plugins";

import Users from './collections/Users';
import News from './collections/News';
import Media from './collections/Media';

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    News,
    Media
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
    cloudinaryPlugin()
  ],
});
