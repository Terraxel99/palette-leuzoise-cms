import path from 'path';

import { buildConfig } from 'payload/config';
import { i18nOptions } from './translations/i18nOptions';

import Users from './collections/Users';
import News from './collections/News';
import Homepage from './globals/Homepage';

import AfterNavLinks from './components/AfterNavLinks/AfterNavLinks';

import PublishingRoute from './routes/PublishingRoutes/PublishingRoute';
import payloadCustomEndpoints from './config/payload/custom-endpoints.config';

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
    News
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
  endpoints: payloadCustomEndpoints,
  i18n: i18nOptions,
});
