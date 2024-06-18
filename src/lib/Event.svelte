<!--
 * (c) Copyright BAYMS
 *
 * Original Author:     Lin Jiang
 * License:             MIT License
 *
 * Event component for displaying event information.
  -->

<script>
  export let name;
  export let description;
  export let date;
  export let time;
  export let style;
</script>

<div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
  <div class="p-6">
    <h3 class="text-xl font-bold {style} mb-2">{name}</h3>
    <p class="text-gray-500 dark:text-gray-400 mb-4">{date} - {time}</p>
    <p class="text-gray-500 dark:text-gray-400">
      {description}
    </p>
  </div>
</div>
