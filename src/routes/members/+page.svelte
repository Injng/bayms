<!--
 * (c) Copyright BAYMS
 *
 * Original Author:     Lin Jiang
 * License:             MIT License
 *
 * Members page showing the graduating seniors.
  -->

<script lang="ts">
  import Header from '../../lib/Header.svelte'
  import Footer from '../../lib/Footer.svelte'
  import Member from '../../lib/Member.svelte'

  export let data

  let auth = data.user !== null
</script>

<div class="flex flex-col min-h-dvh">
  <Header {auth} />
  <main class="flex-1">
      <section class="w-full py-12 md:py-24 lg:py-32">
      <div class="container mx-auto px-4 md:px-6">
        <div class="flex flex-col items-center justify-center space-y-4 text-center">
          <div class="space-y-2">
            <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl/tight">Graduating Seniors</h2>
            <p class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Meet our talented graduating seniors who have been an integral part of our orchestra.
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {#each data.members as member}
              <Member src={member.picture} name={member.name} instruments={member.instruments} bio={member.bio} />
            {/each}
          </div>
        </div>
      </div>
    </section>
   </main>
  <Footer />
</div>

