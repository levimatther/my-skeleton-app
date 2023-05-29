<script lang="ts">
	// Do not re-order this CSS. theme > all > app
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	// Svelte Global Imports
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	// Skeleton Global Imports
	import {
		Drawer,
		drawerStore,
		AppShell,
		AppBar,
		Modal,
		storePopup
	} from '@skeletonlabs/skeleton';
	import type { ModalComponent } from '@skeletonlabs/skeleton';
	// Floating UI GLobal Imports
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';

	// App-specific components
	import Navigation from '$lib/components/navigation/Navigation.svelte';
	import threadCRUD from '$lib/components/thread/ThreadCRUD.svelte';
	import UserSettings from '$lib/components/navigation/UserSettings.svelte';

	

	export let data;
	console.log('layout page ', data);

	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => data.subscription.unsubscribe();
	});

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
		drawerStore.open({});
	}

	// Popup Settings

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

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
				<UserSettings session={data?.session} />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>

	<!-- Page Route Content -->
	<main class="mx-12 my-6">
    	<slot />
	</main>
</AppShell>
