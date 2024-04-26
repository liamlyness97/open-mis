<script lang="ts">
	import type { PageData } from './$types';
	let { data } = $props();
</script>

<div class="py-3 bg-white bg-opacity-75">
	<div class="max-w-7xl mx-auto flex justify-between">
		<p class="font-bold">Open MIS</p>
		<nav>
			<a class="font-bold" href="/" title="Dashboard">Dashboard</a>
		</nav>
	</div>
</div>

<div class="max-w-7xl mx-auto mt-10">
	<h1 class="text-2xl font-bold mb-5">Welcome to Open MIS</h1>
	<p><span class="font-bold">School:</span> {data.school[0].schoolName}</p>
	<p><span class="font-bold">Your Name:</span> Liam Lyness</p>
	<p><span class="font-bold">Position:</span> Web Developer</p>
	<p><span class="font-bold">Attendance:</span> 98.3%</p>
</div>
