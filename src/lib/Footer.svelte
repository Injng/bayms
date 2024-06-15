<!--
 * (c) Copyright BAYMS
 *
 * Original Author:     Lin Jiang
 * License:             MIT License
 *
 * Footer component with donation and sponsor information.
  -->

<script lang="ts">
  import Social from '../lib/Social.svelte';
</script>

<footer class="bg-gray-900 text-white p-6 md:py-12 w-full">
  <div class="container mx-auto max-w-7xl grid grid-cols-2 gap-96 text-sm justify-stretch">
    <div class="grid gap-1 justify-items-start">
      <h3 class="font-semibold">Donate</h3>
      <p>We are a non-profit organization dedicated to developing and sponsoring children’s musical talents through active involvement in community services.﻿

	Donations are always accepted at BAYMS and tax-deductible as the law may allow. Check with your tax-advisor.﻿

	Please send donations, payable to BAYMS, to:﻿</p>
      <em>3417 Monte Sereno Terrace, Fremont, CA 94539, United States</em>
    </div>
    <div class="grid gap-1 justify-items-end">
      <h3 class="font-semibold">Sponsors</h3>
      <ul class="list-disc">
	<li>LinkedIn</li>
	<li>Apple</li>
	<li>Qualcomm</li>
	<li>Cisco</li>
	<li>Ebay</li>
	<li>Oracle</li>
	<li>Intel</li>
	<li>Applied Materials﻿</li>
	<li>Meta</li>
	<li>Juniper Networks</li>
	<li>ByteDance</li>
	<li>Google</li>
      </ul>
    </div>
  </div>
  <Social />
</footer>
