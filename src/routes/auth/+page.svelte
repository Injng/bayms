<script lang="ts">
  import Header from '../../lib/Header.svelte';
  import Footer from '../../lib/Footer.svelte';
</script>

<div class="flex flex-col min-h-dvh">
  <Header />
  <main class="flex-1 flex bg-white items-center justify-center">
    <div class="w-full max-w-md p-6 bg-gray-900 rounded-lg shadow-md">
      <h1 class="text-3xl font-bold mb-6 text-center text-white">Login</h1>
      <form method="POST" action="?/login">
	<div class="mb-4">
          <label
            class="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="email"
            >
            Email
          </label>
          <input
            class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
            name="email"
            placeholder="Enter your email"
            type="email"
            />
	</div>
	<div class="mb-6">
          <label
            class="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="password"
            >
            Password
          </label>
          <input
            class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
            name="password"
            type="password"
            placeholder="Enter your password"
            />
	</div>
	<!--
	<div class="flex items-center justify-between mb-6">
          <a href="#" class="text-blue-200 hover:text-blue-700 text-sm">
            Forgot Password?
          </a>
	</div>
	-->
	<button
          class="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full bg-gray-300 hover:bg-gray-700 text-black hover:text-white font-bold py-2 px-4 rounded"
          type="submit"
          >
          Login
	</button>
      </form>
    </div>
  </main>
  <Footer />
</div>
