<script lang="ts">
    import { urlFor } from '$lib/image-url';

    export let card;
    const { title, ingredients, pic, steps } = card;
</script>

<svelte:head>
    <title>{'WhatToEat' + (title ? ' | ' + title : '')}</title>
</svelte:head>

{#if title}
    <div class="lg:grid grid-cols-2 gap-4 my-6">
        <div>
            <h1 class="text-3xl font-semibold mb-3">{title}</h1>

            <!-- Mobile ingredients -->
            {#if ingredients?.length}
                <div class="ml-4 hidden lg:block">
                    <h3 class="text-xl font-semibold mb-1">Ingredients</h3>

                    {#each ingredients as ingredient}
                        <p class="flex items-center text-lg font-semibold">
                            <span class="text-2xl mr-2 font-normal">&diam;</span>{ingredient}
                        </p>
                    {/each}
                </div>
            {/if}
        </div>

        <img
            src={urlFor(pic).height(256).format('webp').url()}
            srcset={urlFor(pic).height(512).format('webp').url()}
            alt={title}
            class="w-full h-64 rounded-lg shadow-lg object-cover"
        />
    </div>

    <!-- Desktop ingredients -->
    {#if ingredients?.length}
        <div class="lg:hidden mb-6">
            <h3 class="text-xl font-semibold mb-1">Ingredients</h3>

            {#each ingredients as ingredient}
                <p class="flex items-center text-lg font-semibold">
                    <span class="text-2xl mr-2 font-normal">&diam;</span>{ingredient}
                </p>
            {/each}
        </div>
    {/if}

    {#if steps?.length}
        <div class="mb-6 lg:ml-4">
            <h3 class="text-xl font-semibold mb-1">Instructions</h3>
            {#each steps as step, i}
                <p class="text-lg font-semibold"><span class="mr-2">{i + 1}:</span>{step}</p>
            {/each}
        </div>
    {/if}
{/if}
