import { readable, writable } from 'svelte/store';
import sanity from './sanity';

/**
 * WRITABLE EXPORTS
 */
export let globalPopup = writable(null);
export let cards = writable([
    {
        title: 'Pizza',
        pic: 'vatican.jpg',
        id: 'dsfkhsdjfhdsjjfjghfkfdsjkf',
        ingredients: ['celery', 'bread', 'milk', 'cheese', 'apples'],
        steps: [
            'mix',
            'blend',
            'slkdjfklsdj sdlkfj lksjfkljsdklfj dslkjfsdlkjfkl',
            'askdflk dsjk lsdkjlkdsjflkj sdlkjsdlkfjdskfjd lkfjdslkfjd',
            'sdkf jfkjdsfklj dkfjdkljfdskljsdkljfdlks',
        ],
    },
    {
        title: 'Grapefruit cassarole',
        pic: 'vatican.jpg',
        id: 'dsfkhsdsdfsdfsdjfhdsgjkfdsjkf',
        ingredients: ['celery', 'bread', 'milk', 'cheese', 'apples'],
        steps: [
            'mix',
            'blend',
            'slkdjfklsdj sdlkfj lksjfkljsdklfj dslkjfsdlkjfkl',
            'askdflk dsjk lsdkjlkdsjflkj sdlkjsdlkfjdskfjd lkfjdslkfjd',
            'sdkf jfkjdsfklj dkfjdkljfdskljsdkljfdlks',
        ],
    },
    {
        title: 'Pie',
        pic: 'vatican.jpg',
        id: 'dsfkhsdjfhdssdfsdjkfdsjkf',
        ingredients: ['celery', 'bread', 'milk', 'cheese', 'apples'],
        steps: [
            'mix',
            'blend',
            'slkdjfklsdj sdlkfj lksjfkljsdklfj dslkjfsdlkjfkl',
            'askdflk dsjk lsdkjlkdsjflkj sdlkjsdlkfjdskfjd lkfjdslkfjd',
            'sdkf jfkjdsfklj dkfjdkljfdskljsdkljfdlks',
        ],
    },
    {
        title: 'Lemon suitcases',
        pic: 'vatican.jpg',
        id: 'dsfkhsdjfhdssdsdfsdfsdfsdfsdjkfdsjkf',
        ingredients: ['celery', 'bread', 'milk', 'cheese', 'apples'],
        steps: [
            'mix',
            'blend',
            'slkdjfklsdj sdlkfj lksjfkljsdklfj dslkjfsdlkjfkl',
            'askdflk dsjk lsdkjlkdsjflkj sdlkjsdlkfjdskfjd lkfjdslkfjd',
            'sdkf jfkjdsfklj dkfjdkljfdskljsdkljfdlks',
        ],
    },
]);

/**
 * SANITY FETCH FUNCTIONS
 */
// const getLogo = async (): Promise<Logo> => {
//     const logoQuery = `*[_type == 'logo'][0]`;
//     const res = await sanity.fetch(logoQuery);
//     if (res) return res;
//     else return null;
// };

// const getPageContent = async (page: string): Promise<SanityDocument> => {
//     const query = `*[_type == '${page}'][0]`;
//     const res = await sanity.fetch(query);
//     if (res) return res;
//     else return null;
// };

/**
 * READABLE EXPORTS
 */
export const btnClass = readable(
    'rounded-lg font-semibold text-xl px-3 lg:px-8 py-2 bg-violet-600 hover:bg-violet-700 active:bg-violet-800 flex justify-center items-center cursor-pointer'
);
// export const workContent = readable(null, set => {
//     getPageContent('work').then(set).catch(err => console.error(err));
// });

// export const nav = readable(null, set => {
//     getNav().then(set).catch(err => console.error(err));
// });
