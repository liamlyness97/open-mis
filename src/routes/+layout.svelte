<script>
	import Navbar from '$lib/components/ui/Navbar.svelte';
	import TopBar from '$lib/components/ui/TopBar.svelte';
	import '../app.pcss';
	import 'iconify-icon'

	let { data, children } = $props();

</script>

<main class="bg-gray-100 layout">

	<div class="flex items-center border-r-2 border-b-2 ">
		<img class="w-20" src="/omis-logo.png" alt="">
	</div>
	
	<div class="flex items-center px-10 justify-between w-full border-b-2">
        <form>
            <input class="border-none bg-gray-100" type="text" name="search" placeholder="Search something...">
        </form>
        <div>
            <button class="rounded-full bg-cyan-500 w-10 h-10 text-white font-bold">LL</button>
        </div>
    </div>

	<div class="border-r-2">

	</div>

	<div class="w-full h-full p-10">
		{@render children()}
	</div>
</main>

<style>
	.layout {
		height: 100vh;
		width: 100%;
		display: grid;
		grid-template-columns: 90px auto;
		grid-template-rows: 90px auto;
	}
</style>