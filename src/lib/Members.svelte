<!--
 * (c) Copyright BAYMS
 *
 * Original Author:     Lin Jiang
 * License:             MIT License
 *
 * Members database view component for the dashboard.
  -->

<script lang="ts">
    import Person from "./Person.svelte";

    export let members: any[];
    console.log(members);

    let searchQuery = "";

    const dummyAccept = (_: string) => {};
    const dummyReject = (_: string) => {};

    $: filteredMembers = members.filter(
        (member) =>
            member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            member.email.toLowerCase().includes(searchQuery.toLowerCase()),
    );
</script>

<div class="p-6">
    <div class="mb-4">
        <input
            type="text"
            bind:value={searchQuery}
            placeholder="Search members..."
            class="w-full p-2 border rounded"
        />
    </div>

    <div>
        {#each filteredMembers as member (member.email)}
            <Person
                person={member}
                type="member"
                onAccept={dummyAccept}
                onReject={dummyReject}
            />
        {/each}
    </div>
</div>
