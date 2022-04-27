import type { SanityImageAssetDocument } from '@sanity/client';

export interface Card {
    title: string;
    pic: SanityImageAssetDocument;
    ingredients: [string],
    steps: [string],
};