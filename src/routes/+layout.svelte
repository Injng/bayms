<!--
 * (c) Copyright BAYMS
 *
 * Original Author:     Lin Jiang
 * License:             MIT License
 *
 * Layout file for Supabase Auth.
  -->

  <script>
  import { goto, invalidate } from '$app/navigation';
  import { onMount } from 'svelte';
  import "../app.css";

  export let data;
  $: ({ session, supabase } = data);

  onMount(() => {
          const { data: { user } } = supabase.auth.getUser()
          const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
                  if (!newSession) {
                  /**
                   * Queue this as a task so the navigation won't prevent the
                   * triggering function from completing
                   */
                  setTimeout(() => {
                          goto('/', { invalidateAll: true });
                          });
                  }
                  if (newSession?.expires_at !== session?.expires_at) {
                  invalidate('supabase:auth');
                  }
                  });

          return () => data.subscription.unsubscribe();
          });
</script>

<slot></slot><style></style>
