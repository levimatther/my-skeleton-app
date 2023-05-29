<script lang="ts">
  import ForumDetailsCard from "$lib/components/forum/ForumDetailsCard.svelte";
  import { modalStore } from "@skeletonlabs/skeleton";
  import type { ModalSettings } from "@skeletonlabs/skeleton";
  export let data;
  let forum = data?.props?.forum;

  function modalCRUD(): void {
      const prompt: ModalSettings = {
          type: 'component',
          component: 'threadCRUD',
          title: `Create a ${forum.title} Thread`,
          body: 'Complete the form below and then press submit.',
          value: {
              characters: [],
              forum: forum,
          },
			  response: (r: any) => {
				if (r) console.log('response:', r);
        // send a post request to the server to create a thread
        // then update the forum threads

        fetch('/api/thread', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(r),
        })
			}

      }
      modalStore.trigger(prompt);
  }

</script>

<ForumDetailsCard forum={forum} />
<div class="flex justify-end">
  <button class="btn variant-ghost m-2" on:click={modalCRUD}>Create Thread</button>
</div>
