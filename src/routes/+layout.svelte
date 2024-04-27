<script>
	import Navbar from '$lib/components/ui/Navbar.svelte';
	import '../app.pcss';

	let { data, children } = $props();

	const school = data.school;
</script>

<main class=" min-h-screen w-full bg-gray-100">
	<Navbar schoolName={school.schoolName} />
	{@render children()}
</main>
