<script>
    let opskrifter = [
        {
            titel: "Madpandekager",
            billed: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            tid: "20-30 minutter - lavet 8 gange"
        },
        {
            titel: "Pasta Alfredo",
            billed: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            tid: "15-20 minutter - lavet 5 gange"
        },
        {
            titel: "Smoothie",
            billed: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            tid: "5-7 minutter - lavet 1 gang"
        }
    ]
</script>


<section class="bg-white">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">Kogebog :D</h1>

        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            
            {#each opskrifter as opskrift}
                <div class="lg:flex">
                    <img class="object-cover w-full h-56 rounded-lg lg:w-64" src={opskrift.billed} alt="">

                    <div class="flex flex-col justify-between py-6 lg:mx-6">
                        <a href="#" class="text-xl font-semibold text-gray-800 hover:underline ">
                            {opskrift.titel}
                        </a>
                        
                        <span class="text-sm text-gray-500">{opskrift.tid}</span>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>