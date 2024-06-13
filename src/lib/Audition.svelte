<script lang="ts">
  let show: boolean = false;
  let type: number = 0;
  let state0: 'inactive' | 'active' = 'active';
  let state1: 'inactive' | 'active' = 'inactive';
  let state2: 'inactive' | 'active' = 'inactive';
  let state3: 'inactive' | 'active' = 'inactive';

  function resetAll() {
    state0 = 'inactive';
    state1 = 'inactive';
    state2 = 'inactive';
    state3 = 'inactive';
  }
</script>

<section class="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
  <div class="container mx-auto px-4 md:px-6">
    <div class="flex flex-col items-center justify-center space-y-4 text-center">
      <div class="space-y-2">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl/tight text-white">Join Us</h2>
        <p class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          We are always on the lookout for talented musicians to join us. If you're interested in
          auditioning, please review the information below.
        </p>
      </div>
      <div class="flex flex-col gap-2 min-[400px]:flex-row">
        <a on:click|preventDefault={(_) => { show = true; }}
          class="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="#"
          >
          Learn More
        </a>
	{#if show}
	  <div class="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg sm:max-w-[800px]">
	    <div class="flex flex-col space-y-1.5 text-center sm:text-left">
	      <h2 class="whitespace-nowrap text-lg font-semibold leading-none tracking-tight">Auditions</h2>
	      <p class="text-sm text-muted-foreground">Candidates should be technically proficient in their target instrument, with several years of private lessons. See below for specific requirements.</p>
	    </div>
	    <div class="border-b">
	      <div class="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
		<button on:click={(_) => { type = 0; resetAll(); state0 = 'active'; }} type="button" data-state={state0} class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow">Piano</button>
		<button on:click={(_) => { type = 1; resetAll(); state1 = 'active'; }} type="button" data-state={state1} class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow">Strings</button>
		<button on:click={(_) => { type = 2; resetAll(); state2 = 'active'; }} type="button" data-state={state2} class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow">Woodwinds</button>
		<button on:click={(_) => { type = 3; resetAll(); state3 = 'active'; }} type="button" data-state={state3} class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow">Choir</button>
	      </div>
	      {#if type === 0}
		<div class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring f  ocus-visible:ring-offset-2 py-6" style="animation-duration: 0s;">
		  <h2 class="text-l font-bold">Requirements</h2>
		  <ul>
		    <li>- 1 four-octave scale in any key</li>
		    <li>- 1 five-minute solo piece</li>
		    <li>- Sight reading will be tested</li>
		  </ul>
		</div>
	      {:else if type === 1}
		<div class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring f  ocus-visible:ring-offset-2 py-6" style="animation-duration: 0s;">
		  <h2 class="text-l font-bold">Requirements</h2>
		  <ul>
		    <li>- ABRSM Grade 7 or CM Level 8</li>
		    <li>- 1 major and 1 minor three-octave scale</li>
		    <li>- 1 unaccompanied solo piece (1 movement from a standard concerto, Bach sonata/partita, or 1 full showpiece)</li>
		    <li>- 1 BAYMS excerpt (will be provided prior to audition)</li>
		    <li>- Sight reading will be tested</li>
		  </ul>
		</div>
	      {:else if type === 2}
		<div class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring f  ocus-visible:ring-offset-2 py-6" style="animation-duration: 0s;">
		  <h2 class="text-l font-bold">Requirements</h2>
		  <ul>
		    <li>- 1 chromatic scale demonstrating full range, slurred and with articulated tonguing</li>
		    <li>- 1 unaccompanied solo piece (1 movement from a standard concerto, Bach sonata/partita, or 1 full showpiece)</li>
		    <li>- 1 BAYMS excerpt (will be provided prior to audition)</li>
		    <li>- Sight reading will be tested</li>
		  </ul>
		</div>
	      {:else if type === 3}
		<div class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring f  ocus-visible:ring-offset-2 py-6" style="animation-duration: 0s;">
		  <h2 class="text-l font-bold">Requirements</h2>
		  <ul>
		    <li>- 1 song</li>
		  </ul>
		</div>
	      {/if}
	    </div>
	    <button on:click={(_) => { show = false; }} type="button" class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
	      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-4 w-4">
		<path d="M18 6 6 18"></path>
		<path d="m6 6 12 12"></path>
	      </svg>
	      <span class="sr-only">Close</span>
	    </button>
	  </div>
	{/if}
      </div>
    </div>
  </div>
</section>
