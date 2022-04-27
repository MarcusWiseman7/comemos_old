<script lang="ts">
    import '../app.css';
</script>

<svelte:head>
    <title>Comemos</title>
</svelte:head>

<div
    class="flex flex-col items-center justify-between pt-20 w-screen min-h-screen text-white bg-slate-500 select-none overflow-x-hidden"
>
    <header
        class="fixed left-0 top-0 right-0 z-10 flex items-center justify-between px-4 lg:px-10 h-20 mb-6 shadow-lg bg-slate-800"
    >
        <a href="/" class="font-semibold text-4xl cursor-pointer">Comemos!</a>
    </header>

    <main class="min-h-max w-full px-3.5 lg:w-2/3 lg:max-w-4xl lg:px-0">
        <slot />
    </main>

    <footer class="flex justify-center items-center w-full bg-slate-800 py-4">
        Marcus Wiseman &copy; {new Date().getFullYear()}
    </footer>
</div>
