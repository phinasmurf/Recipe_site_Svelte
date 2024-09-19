<script>
    import Counter from "$lib/Counter.svelte";   

    import PasswordInput from "$lib/passwordInput.svelte";
    import Kogebog from "./kogebog/+page.svelte";
    let name = "svelte"
</script>

<Kogebog />

<div class="mt-2 ml-4">
    <h1 class="">Velkommen til en vild kogebog</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    <p>Hej, {name}</p>
</div>

<div class="ml-4">
    <!--<Counter />
    <PasswordInput /> -->
</div>
