<script lang="ts">
    import Person from "./Person.svelte";
    import { createEventDispatcher } from "svelte";

    export let applicants: any[];

    const dispatch = createEventDispatcher();
    let searchQuery = "";

    $: filteredApplicants = applicants.filter(
        (applicant) =>
            applicant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            applicant.email.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    function handleAccept(email: string) {
        dispatch("accept", { email });
    }

    function handleReject(email: string) {
        dispatch("reject", { email });
    }
</script>

<div class="p-6">
    <div class="mb-4">
        <input
            type="text"
            bind:value={searchQuery}
            placeholder="Search applicants..."
            class="w-full p-2 border rounded"
        />
    </div>

    <div>
        {#each filteredApplicants as applicant (applicant.email)}
            <Person
                person={applicant}
                type="applicant"
                onAccept={handleAccept}
                onReject={handleReject}
            />
        {/each}
    </div>
</div>
