import type { SanityDocument } from '@sanity/client';
import { readable, writable } from 'svelte/store';
import sanity from './sanity';

/**
 * WRITABLE EXPORTS
 */
export let globalPopup = writable(null);

/**
 * SANITY FETCH FUNCTIONS
 */
const getCards = async (): Promise<SanityDocument | null> => {
    const query = `*[_type == 'card']`;
    const res = await sanity.fetch(query);
    if (res) return res;
    else return null;
};

/**
 * READABLE EXPORTS
 */
export const btnClass = readable(
    'rounded-lg font-semibold text-xl px-3 lg:px-8 py-2 bg-violet-600 hover:bg-violet-700 active:bg-violet-800 flex justify-center items-center cursor-pointer'
);

export const cards = readable(null, set => {
    getCards().then(set).catch(err => console.error(err));
});
