<script>
  import {Avatar} from '@skeletonlabs/skeleton'

  let thread = {
        id: 1,
        title: "This is a test thread",
        description: "This is a test thread description",
        forum: {
            id: 1,
            name: "Sci-Fi",
            description: "A forum for all things sci-fi.",
            cover: "https://cdn.midjourney.com/7fbd2804-bae3-4676-a4e4-c617f7a2297b/grid_0.png"
        }
    }

</script>

<div class="flex justify-start mb-4 mt-1"> 
  <a class="card card-hover variant-ghost max-w-sm w-full lg:max-w-2xl lg:flex" href="/thread/{thread?.id}">
    <div class="aspect-[21/9] lg:aspect-[3/5] bg-cover rounded-tl-md lg:rounded-l-md text-center variant-ghost" style="background-image: url('{thread?.forum?.cover}')" title="{thread?.forum?.name}">
    </div>
    <div class="rounded-b p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <p class="text-sm  flex items-center">
          <svg class="fill-current   w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
          </svg>
          Locked Thread
        </p>
        <div class="font-bold text-xl mb-2">Can coffee make you a better developer?</div>
        <p class="text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
      </div>
      <div class="flex items-center h-12">
        <Avatar src="https://i.pravatar.cc/160?img=48" width="w-8 -ml-2" /> 
        <Avatar src="https://i.pravatar.cc/160?img=48" width="w-8 -ml-2" /> 
        <Avatar src="https://i.pravatar.cc/160?img=48" width="w-8 -ml-2" /> 
      </div>
    </div>
  </a>
</div>


<!-- <div class="flex justify-center">
  <a class="card card-hover variant-ghost max-w-sm w-full lg:max-w-2xl lg:flex mb-2" href="/elements/cards">
    <div class="rounded p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <p class="text-sm flex items-center justify-end">
          Locked Thread
          <svg class="fill-current   w-3 h-3 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
          </svg>
        </p>
        <div class="font-bold text-xl mb-2 text-right">Can coffee make you a better developer?</div>
        <p class="text-base text-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
      </div>
      <div class="flex items-center justify-end h-12">
        <Avatar src="https://i.pravatar.cc/160?img=48" width="w-8 -ml-2" /> 
        <Avatar src="https://i.pravatar.cc/160?img=48" width="w-8 -ml-2" /> 
        <Avatar src="https://i.pravatar.cc/160?img=48" width="w-8 -ml-2" /> 
      </div>
    </div>
    <div class="aspect-[21/9] lg:aspect-[3/5] bg-cover lg:rounded-r text-center rounded-tr variant-ghost" style="background-image: url('https://cdn.midjourney.com/f5420fb3-3dab-4c0d-ac47-ec0e32a65ba6/grid_0.png')" title="Apocalypse">
    </div>
  </a>
</div>


  -->

