<!--
 * (c) Copyright BAYMS
 *
 * Original Author:     Lin Jiang
 * License:             MIT License
 *
 * Person component for displaying member database info.
  -->

<script>
  export let name;
  export let email;
  export let phone;
</script>

<div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
  <div class="p-6">
    <h3 class="text-xl font-bold mb-2">{name}</h3>
    <p class="text-gray-500 dark:text-gray-400 mb-4">{email}</p>
    <p class="text-gray-500 dark:text-gray-400 mb-4">{phone}</p>
  </div>
</div>
