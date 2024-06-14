<script>
  export let name;
  export let description;
  export let date;
  export let time;
</script>

<div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
  <div class="p-6">
    <h3 class="text-xl font-bold text-white mb-2">{name}</h3>
    <p class="text-gray-500 dark:text-gray-400 mb-4">{date} - {time}</p>
    <p class="text-gray-500 dark:text-gray-400">
      {description}
    </p>
  </div>
</div>
