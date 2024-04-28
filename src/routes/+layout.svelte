<script>
	import Navbar from '$lib/components/ui/Navbar.svelte';
	import '../app.pcss';

	let { data, children } = $props();

	const school = data.school;
</script>

<main class="h-screen w-full flex flex-col bg-gray-100">
	<Navbar schoolName={school.schoolName} />
	<div class="w-full flex h-full">
		<div class="w-[400px] bg-cyan-800 flex flex-col">
			<div class="flex flex-col text-white  text-3xl p-10 gap-5">
				<a href="/">Dashboard</a>
				<a href="/dashboard/pupils">Pupils</a>
				<a href="/dashboard/parents">Parents</a>
				<a href="/dashboard/staff">Staff</a>
			</div>
		</div>
		<div class="w-full h-full">
			{@render children()}
		</div>
	</div>
</main>
