import { cards } from '$lib/stores';
import type { Card } from '$lib/ts-interfaces';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
    const id = params.id;
    let card;

    cards.subscribe((value: [Card] | null) => {
        if (value) {
            card = value.find((c) => c._id == id);
        }
    });

    if (card) {
        return {
            body: { card },
        };
    }

    return {
        status: 404,
    };

}
