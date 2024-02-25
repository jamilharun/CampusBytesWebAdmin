import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// console.log(import.meta.env.VITE_SANITY_PROJECT_ID);
// console.log(import.meta.env.VITE_SANITY_DATABASE_TOKEN);

const client = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true,
    token: import.meta.env.VITE_SANITY_DATABASE_TOKEN,
});

const builder = imageUrlBuilder(client);

export const sClient = client;

export const urlFor = (source: any) => builder.image(source);    