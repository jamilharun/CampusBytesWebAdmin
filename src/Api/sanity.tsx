import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sClient = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true,
    token: import.meta.env.VITE_SANITY_DATABASE_TOKEN,
});

const builder = imageUrlBuilder(sClient);

export const urlFor = (source) => builder.image(source);    