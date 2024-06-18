<!--
 * (c) Copyright BAYMS
 *
 * Original Author:     Lin Jiang
 * License:             MIT License
 *
 * Dashboard page.
  -->

<script lang="ts">
  import Header from "../../lib/Header.svelte"
  import Footer from "../../lib/Footer.svelte"
  import Info from "../../lib/Info.svelte"
  import Calendar from "../../lib/Calendar.svelte"

  export let data

  let state0: 'inactive' | 'active' = 'active'
  let state1: 'inactive' | 'active' = 'inactive'
  let state2: 'inactive' | 'active' = 'inactive'
  let state3: 'inactive' | 'active' = 'inactive'

  function resetAll() {
    state0 = 'inactive'
    state1 = 'inactive'
    state2 = 'inactive'
    state3 = 'inactive'
  }

  const user = data.user[0]
</script>

<div class="flex flex-col min-h-dvh">
  <Header auth={true} />
  <main class="flex-1 flex flex-col">
    <div class="bg-gray-100 py-6">
      <div class="container mx-auto max-w-4xl">
        <div dir="ltr" data-orientation="horizontal" class="border-b border-gray-200">
          <div
            role="tablist"
            aria-orientation="horizontal"
            class="h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground flex"
            tabindex="-1"
            data-orientation="horizontal"
            style="outline:none"
          >
            <button
              data-state={state0}
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
              on:click={(_) => { resetAll(); state0 = 'active'; }}
            >
              Info
            </button>
            <button
              data-state={state1}
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
              on:click={(_) => { resetAll(); state1 = 'active'; }}
            >
              Events
            </button>
          </div>
          <div
            data-state="active"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:R7nqdtfbpf:-trigger-info"
            id="radix-:R7nqdtfbpf:-content-info"
            tabindex="0"
            class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            style="animation-duration:0s"
          >
          {#if state0 === 'active'}
            <Info {user} />
          {:else if state1 === 'active'}
            <Calendar events={data.events} locations={data.locations} /> 
          {/if}
          </div>
          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:R7nqdtfbpf:-trigger-events"
            hidden=""
            id="radix-:R7nqdtfbpf:-content-events"
            tabindex="0"
            class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          ></div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</div>
