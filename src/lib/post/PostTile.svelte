<script>
  import { Avatar } from '@skeletonlabs/skeleton' 

  let drawerOpen = false;

  let post = {
    id: 1,
    body: "This is a test post. Do you like kim petras? I think she's pretty cool.",
    character_id: 1,
    thread_id: 1,
    created_at: "2021-01-01T00:00:00.000Z",
  }

  let character = {
		id: 1,
		firstName: "Jimmi",
		lastName: "Neutron",
		age: 1234,
		soulType: "Undead", 
		species: "Human",
		avatar: "https://cdn.midjourney.com/eaa42a60-2bae-4661-8b16-a88ea9ef45c1/grid_0.png"
	}

</script> 

 <div class="card card-hover variant-ghost rounded w-full md:w-full lg:w-1/2 px-4 py-5 sm:px-6 mt-1 mb-4">
  <div class="flex space-x-3">
    <div class="flex-shrink-0">
      <Avatar src="{character?.avatar}" width="w-40" />
    </div>
    <div class="min-w-0 flex-1">
      <p class="text-sm font-semibold text-primary">
        {character?.firstName} {character?.lastName}
      </p>
      <p class="text-sm text-primary dark:text-primary-100">
        <time datetime="{post?.created_at}">{post?.created_at}</time>
      </p>
    </div>
    <div class="flex flex-shrink-0 self-center">
      <div class="relative inline-block text-left">
        <div>
          <button type="button" class="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600" id="menu-0-button" aria-expanded="false" aria-haspopup="true" on:click="{() => drawerOpen = !drawerOpen}">
            <span class="sr-only">Open options</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
            </svg>
          </button>
        </div>

        <div class="{drawerOpen? '' : 'hidden' } absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabindex="-1">
          <div class="py-1" role="none">
            <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
            <a href="#" class="text-gray-700 flex px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-0">
              <svg class="mr-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
              <span>Add to favorites</span>
            </a>
            <a href="#" class="text-gray-700 flex px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-1">
              <svg class="mr-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z" clip-rule="evenodd" />
              </svg>
              <span>Embed</span>
            </a>
            <a href="#" class="text-gray-700 flex px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-0-item-2">
              <svg class="mr-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M3.5 2.75a.75.75 0 00-1.5 0v14.5a.75.75 0 001.5 0v-4.392l1.657-.348a6.449 6.449 0 014.271.572 7.948 7.948 0 005.965.524l2.078-.64A.75.75 0 0018 12.25v-8.5a.75.75 0 00-.904-.734l-2.38.501a7.25 7.25 0 01-4.186-.363l-.502-.2a8.75 8.75 0 00-5.053-.439l-1.475.31V2.75z" />
              </svg>
              <span>Report content</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
