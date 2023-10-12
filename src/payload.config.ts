import path from 'path';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { buildConfig } from 'payload/config';
import cloudinaryPlugin from "payload-cloudinary-plugin/dist/plugins";

import { i18nOptions } from './translations/i18nOptions';
import payloadCustomEndpoints from './config/payload/custom-endpoints.config';

import PublishingRoute from './routes/PublishingRoutes/PublishingRoute';
import ActionLinks from './components/ActionLinks/ActionLinks';

import Users from './collections/Users';
import News from './collections/News';
import Media from './collections/Media';
import Homepage from './globals/Homepage';

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    components: {
      afterNavLinks: [ActionLinks],
      views: {
        PublishingView: { path: '/publishing', Component: PublishingRoute },
      }
    },
  },
  collections: [
    Users,
    News,
    Media
  ],
  globals: [
    Homepage
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
    cloudinaryPlugin(),
  ],
  editor: slateEditor({ }),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI,
  }),
  endpoints: payloadCustomEndpoints,
  i18n: i18nOptions,
});
