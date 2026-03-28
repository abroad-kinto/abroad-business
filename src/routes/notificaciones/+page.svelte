<script lang="ts">
  const items = [
    { title: 'New property added', time: '2 hours ago', action: 'View details' },
    { title: 'Lease contract completed', time: 'Yesterday', action: 'View details' },
    { title: 'Rent payment pending', time: '3 days ago', action: 'View details' }
  ];
</script>

<svelte:head>
  <title>Notifications - Abroad Business</title>
</svelte:head>

<div class="min-h-screen p-4 sm:p-6 bg-gray-50">
  <div class="w-full max-w-lg mx-auto">
    <h1 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
      Notifications
    </h1>
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100">
      {#each items as item}
        <div class="p-4 sm:p-5">
          <p class="font-medium text-gray-900">{item.title}</p>
          <p class="text-sm text-gray-500 mt-0.5">{item.time}</p>
          <button type="button" class="mt-2 text-sm text-primary-600 hover:underline">
            {item.action}
          </button>
        </div>
      {/each}
    </div>
    <a href="/configuracion" class="btn-primary mt-6 inline-block text-center">
      Continue
    </a>
    <a href="/calendario" class="block mt-4 text-center text-sm text-gray-500 hover:text-gray-700">
      ← Back
    </a>
  </div>
</div>
