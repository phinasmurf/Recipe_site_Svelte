<script>
    let password = '';
</script>

<main>
    <input class="my-2 rounded-lg ring ring-teal-400/25" type="password" bind:value={password}>

    <p class="text-xs text-teal-400"> Dit kodeord er: {password}</p>
</main>