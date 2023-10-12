import express from 'express';
import payload from 'payload';

import { mediaManagement } from 'payload-cloudinary-plugin';

require('dotenv').config();
const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

app.use(mediaManagement());

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(process.env.PAYLOAD_PORT);
}

start();
