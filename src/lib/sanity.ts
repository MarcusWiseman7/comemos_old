import sanityClient from '@sanity/client';

const sanity = sanityClient({
    projectId: 'mx4idz8o',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true,
});

export default sanity;
