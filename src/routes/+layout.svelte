<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { page } from '$app/stores';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/navigation/Navigation.svelte';
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	
	// Modal
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import threadCRUD from '$lib/components/thread/ThreadCRUD.svelte';

	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation'

	export let data;

	$: ({ supabase } = data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth')
		})

		return () => data.subscription.unsubscribe()
	})

	const modalComponentRegistry: Record<string, ModalComponent> = {

	// Custom Modal 1
	threadCRUD: {
		// Pass a reference to your custom component
		ref: threadCRUD,
		// Add the component properties as key/value pairs
		props: {},
		// Provide a template literal for the default component slot
		slot: ``
	}
};

	function drawerOpen(): void {
	drawerStore.open({})



}

$: classesSidebar = $page.url.pathname === '/' ? 'w-0 lg:w-64' : 'w-0 lg:w-64';

</script>

<Drawer>
	<h2 class="p-4">Navigation</h2>
	<hr />
	<Navigation />
</Drawer>

<Modal components={modalComponentRegistry} />
<!-- App Shell -->

<AppShell slotSidebarLeft="bg-surface-500/5 {classesSidebar}">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="variant-ghost-surface">
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<strong class="text-xl uppercase">EMDASH</strong>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://discord.gg/8YCvmYbA"
					target="_blank"
					rel="noreferrer"
				>
					Discord
				</a>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
		
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		 <Navigation/>
	</svelte:fragment>


	<!-- Page Route Content -->
	<slot />
</AppShell>
 

