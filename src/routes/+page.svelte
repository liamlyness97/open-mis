<script lang="ts">
	import type { PageData } from './$types';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Checkbox,
		TableSearch
	} from 'flowbite-svelte';

	let { data } = $props();
	let pupils = $derived(data.pupils);

	const school = data.school[0];
</script>

<div class="mx-auto mt-10 max-w-7xl">
	<h1 class="mb-5 text-2xl font-bold">Welcome to Open MIS</h1>
	<p><span class="font-bold">School:</span> {school.schoolName}</p>
	<p><span class="font-bold">Local Authority:</span> {school.localAuthority}</p>
	<p><span class="font-bold">Your Name:</span> Liam Lyness</p>
	<p><span class="font-bold">Position:</span> Web Developer</p>
	<p><span class="font-bold">Attendance:</span> 98.3%</p>

	<Table class="mt-10">
		<TableHead class="bg-slate-700 text-white">
			<TableHeadCell>Surname</TableHeadCell>
			<TableHeadCell>First Name</TableHeadCell>
			<TableHeadCell>Middle Name(s)</TableHeadCell>
			<TableHeadCell>Current Year</TableHeadCell>
		</TableHead>
		<TableBody tableBodyClass="divide-y">
			{#each pupils as pupil}
				<TableBodyRow>
					<TableBodyCell>{pupil.surname}</TableBodyCell>
					<TableBodyCell>{pupil.firstName}</TableBodyCell>
					<TableBodyCell>{pupil.middleNames}</TableBodyCell>
					<TableBodyCell>{pupil.currentYear}</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</div>
