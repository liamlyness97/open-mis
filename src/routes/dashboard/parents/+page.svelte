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


    let { data } = $props()

    const parents = data.parents

</script>

<div class="mx-auto mt-10 max-w-7xl">
    <div class="mt-16 flex justify-between gap-10">
        <div class="w-full">
            <h2 class="text-2xl font-bold">Parents</h2>
            <Table class="mt-10">
                <TableHead class="bg-slate-700 text-white">
                    <TableHeadCell>Surname</TableHeadCell>
                    <TableHeadCell>First Name</TableHeadCell>
                    <TableHeadCell>Primary Contact</TableHeadCell>
                    <TableHeadCell>Contact Number</TableHeadCell>
                    <TableHeadCell>Email Address</TableHeadCell>
                </TableHead>
                <TableBody tableBodyClass="divide-y">
                    {#each parents as parent}
                        <TableBodyRow>
                            <TableBodyCell>{parent.surname}</TableBodyCell>
                            <TableBodyCell>{parent.firstName}</TableBodyCell>
                            <TableBodyCell>{parent.primaryContact}</TableBodyCell>
                            <TableBodyCell>{parent.contactNumber}</TableBodyCell>
                            <TableBodyCell>{parent.emailAddress}</TableBodyCell>
                        </TableBodyRow>
                    {/each}
                </TableBody>
            </Table>
            </div>
            </div>
            </div>