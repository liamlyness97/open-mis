<script lang="ts">
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


    let {data} = $props()

    const pupils = data.pupils
</script>

<div class="mx-auto mt-10 max-w-7xl">
    <div class="mt-16 flex justify-between gap-10">
        <div class="w-full">
            <h2 class="text-2xl font-bold">Pupils</h2>
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
    </div>
</div>