import path from 'path';
import { buildConfig } from 'payload/config';
import { i18nOptions } from './translations/i18nOptions';
import payloadCustomEndpoints from './config/payload/custom-endpoints.config';

import cloudinaryPlugin from "payload-cloudinary-plugin/dist/plugins";

import Users from './collections/Users';
import News from './collections/News';
import Media from './collections/Media';

import Homepage from './globals/Homepage';

import AfterNavLinks from './components/AfterNavLinks/AfterNavLinks';

import PublishingRoute from './routes/PublishingRoutes/PublishingRoute';

export default buildConfig({
  admin: {
    user: Users.slug,
    components: {
      afterNavLinks: [AfterNavLinks],
      routes: [
        { path: '/publishing', Component: PublishingRoute },
      ]
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
    cloudinaryPlugin()
  ],
  endpoints: payloadCustomEndpoints,
  i18n: i18nOptions,
});
