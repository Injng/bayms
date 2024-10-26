<!--
 * (c) Copyright BAYMS
 *
 * Original Author:     Lin Jiang
 * License:             MIT License
 *
 * Members database view component for the dashboard.
  -->

<script lang="ts">
    import Person from "./Person.svelte"

    export let persons
    export let locations

    let showAddLocation: boolean = false
</script>

<div class="p-6 bg-white rounded-lg shadow-md">
    {#if showAddLocation}
        <div class="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg sm:max-w-[800px]">
          <div class="flex flex-col space-y-1.5 text-center sm:text-left">
            <h2 class="whitespace-nowrap text-lg font-semibold leading-none tracking-tight">Create Location</h2>

          <button on:click={(_) => { showAddLocation = false; }} type="button" class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-4 w-4">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
            </svg>
            <span class="sr-only">Close</span>
          </button>
          </div>
        </div>
    {/if}
    <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold">Members</h2>
    </div>
    <div class="p-4">
        <div class="grid grid-cols-3 grid-rows-auto gap-6 mt-8">
            {#each persons as person}
              <Person style={"text-black"} name={person.name} email={person.email} phone={person.phone} />
            {/each}
        </div>
    </div>
</div>
