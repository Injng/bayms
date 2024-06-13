<script lang="ts">
  import Header from '../lib/Header.svelte';
  import Hero from '../lib/Hero.svelte';
  import Event from '../lib/Event.svelte';
  import About from '../lib/About.svelte';
  import Audition from '../lib/Audition.svelte';
  import Footer from '../lib/Footer.svelte';
</script>

<div class="flex flex-col min-h-dvh">
  <Header />
  <main class="flex-1">
    <Hero />
    <section class="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div class="container mx-auto px-4 md:px-6">
        <div class="flex flex-col items-center justify-center space-y-4 text-center">
          <div class="space-y-2">
            <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Upcoming Events</h2>
            <p class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Check out our upcoming concerts and community service events.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
	  <Event />
        </div>
      </div>
    </section>
    <About />
    <Audition />
  </main>
  <Footer />
</div>
