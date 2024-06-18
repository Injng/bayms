<!--
 * (c) Copyright BAYMS
 *
 * Original Author:     Lin Jiang
 * License:             MIT License
 *
 * Member component for rendering a card with member information.
  -->

<script lang="ts">
    export let src: string
    export let name: string
    export let instruments: [string]
    export let bio: string

    let instrumentString = instruments.join(', ')
</script>

<div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
  <img
    src={src}
    width="300"
    height="300"
    style="aspect-ratio: 300 / 300; object-fit: cover;"
    alt={name}
    class="rounded-t-lg object-cover w-full h-48"
  />
  <div class="p-6">
    <h3 class="text-xl font-bold mb-2">{name}</h3>
    <p class="text-gray-500 dark:text-gray-400 mb-4">{instrumentString}</p>
    <p class="text-gray-500 dark:text-gray-400">
      {bio}
    </p>
  </div>
</div>
