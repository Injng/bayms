<script lang="ts">
  export let auth;
</script>

<header class="px-4 lg:px-6 h-14 flex items-center sticky top-0 bg-gray-900 text-white">
  <a class="flex items-center justify-center" href="/">
    <span class="text-lg font-semibold">BAYMS</span>
  </a>
  <nav class="ml-auto flex gap-4 sm:gap-6">
    <a class="text-sm font-normal hover:underline underline-offset-4" href="/members">
      Members
    </a>
    {#if auth}
      <a class="text-sm font-normal hover:underline underline-offset-4" href="/private">
	Dashboard
      </a>
      <form class="flex" method="POST" action="?/logout">
	<button class="h-full flex items-start text-sm font-bold hover:underline underline-offset-4" type="submit">
	  Logout
	</button>
      </form>
    {:else}
      <a class="text-sm font-bold hover:underline underline-offset-4" href="/auth">
	Login
      </a>
    {/if}
  </nav>
</header>
