<script lang="ts">

	let { data } = $props();

	const school = data.school[0];
</script>

<div class="mx-auto mt-10 max-w-7xl">
	<h1 class="mb-5 text-2xl font-bold">Welcome to Open MIS</h1>
	<p><span class="font-bold">School:</span> {school.schoolName}</p>
	<p><span class="font-bold">Local Authority:</span> {school.localAuthority}</p>
	<p><span class="font-bold">Your Name:</span> Liam Lyness</p>
	<p><span class="font-bold">Position:</span> Web Developer</p>
	<p><span class="font-bold">Attendance:</span> 98.3%</p>

	
</div>
