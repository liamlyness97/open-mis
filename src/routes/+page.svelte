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
	let staff = $derived(data.staff);

	const school = data.school[0];
</script>

<div class="mx-auto mt-10 max-w-7xl">
	<h1 class="mb-5 text-2xl font-bold">Welcome to Open MIS</h1>
	<p><span class="font-bold">School:</span> {school.schoolName}</p>
	<p><span class="font-bold">Local Authority:</span> {school.localAuthority}</p>
	<p><span class="font-bold">Your Name:</span> Liam Lyness</p>
	<p><span class="font-bold">Position:</span> Web Developer</p>
	<p><span class="font-bold">Attendance:</span> 98.3%</p>

	<div class="mt-16 flex justify-between gap-10">
		<div class="w-1/2">
			<h2 class="text-xl font-bold">Pupils</h2>
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
		<div class="w-1/2">
			<h2 class="text-xl font-bold">Staff</h2>
			<Table class="mt-10">
				<TableHead class="bg-slate-700 text-white">
					<TableHeadCell>Surname</TableHeadCell>
					<TableHeadCell>First Name</TableHeadCell>
					<TableHeadCell>Middle Name(s)</TableHeadCell>
					<TableHeadCell>Category</TableHeadCell>
				</TableHead>
				<TableBody tableBodyClass="divide-y">
					{#each staff as staff}
						<TableBodyRow>
							<TableBodyCell>{staff.surname}</TableBodyCell>
							<TableBodyCell>{staff.firstName}</TableBodyCell>
							<TableBodyCell>{staff.middleNames}</TableBodyCell>
							<TableBodyCell>{staff.category}</TableBodyCell>
						</TableBodyRow>
					{/each}
				</TableBody>
			</Table>
		</div>
	</div>
</div>
