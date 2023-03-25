<script>
    let forum = {
        id: 1,
        name: "Sci-Fi",
        description: "A forum for all things sci-fi.",
        cover: "https://cdn.midjourney.com/7fbd2804-bae3-4676-a4e4-c617f7a2297b/grid_0.png"
    }
</script>

<div class="card card-hover w-1/4 md:w-1/5 lg:w-1/6  ml-4 mb-4 aspect-[3/5]" style="background-image: url('{forum?.cover}'); background-size: cover;">
    <div class="w-full h-full hover:bg-black/70 rounded-md">
        <a href="/forum/{forum?.id}" class="card">
        <div class="variant-ghost rounded-md w-full h-full opacity-0 hover:opacity-100 flex flex-col justify-center items-center p-2">
            <h3 class="text-lg font-bold text-white">{forum?.name}</h3>
            <p class="text-center text-primary-600 mt-1">{forum?.description}</p>
        </div>
    </a>
    </div>
</div>