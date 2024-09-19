<script>
    let count = 0

    $: doubled = count * 2;

    function increment() {
        count += 1
    }

    function decrement() {
        count -= 1
    }

    $: console.log('count er trykket på, {count} gange')
</script>

<div> 
    <button on:click={increment}> Counten er på {count}</button>
    <p>{count} fordoblet er {doubled}</p>
    
    <!-- <button on:click={increment}>+</button>
    <button on:click={decrement}>-</button> -->
</div>

<style>
    button {
        background-color: cadetblue;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    }
</style>