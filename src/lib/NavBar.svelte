<script>
    let isOpen = false;

    function toggleMenu(){
        isOpen = !isOpen;
    }

</script>


<!-- Dette er farven af navbar-->
<nav class="relative bg-gray-700 shadow">
    <div class="container px-6 py-3 mx-auto md:flex">
        <div class="flex items-center justify-between">
            <a href="/">
                <img class="w-32 h-32 sm:h-20 sm:w-20" src="/rounded_cat_logo.gif" alt="">
            </a>

            <!-- Mobile menu button -->
            <div class="flex lg:hidden">
                <button on:click={toggleMenu} type="button" class="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                    {#if isOpen}
                        <!-- kryds -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    {:else}
                    <!-- To streger -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
                     {/if}
                    
                </button>
            </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    
        <div class="{isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out md:bg-gray-700 bg-gray-100 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between">
            <div class="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
                
                <!-- Hover til hover over Home, About etc.-->
                <a href="#/" class="px-2.5 py-2 text-midnight transition-colors duration-300 transform rounded-lg hover:bg-gray-100 md:mx-2">Home</a>
                <a href="/counterside" class="px-2.5 py-2 text-blue-950 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 md:mx-2">Counter(about)</a>
                <a href="/kogebog" class="px-2.5 py-2 text-blue-950 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 md:mx-2">Recipes</a>
            </div>
            
            <!-- Søge ikonet -->
            <div class="relative mt-4 md:mt-0">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    
                    <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </span>

                <input type="text" class="w-full py-2 pl-10 pr-4 text-blue-500 bg-white border rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search">
            </div>
            
        </div>
    </div>
</nav>
