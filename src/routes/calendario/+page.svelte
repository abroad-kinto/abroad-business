<script lang="ts">
  const month = 'February 2026';
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = Array.from({ length: 28 }, (_, i) => i + 1);
  const events = [{ text: 'Property visit', date: 17 }];
</script>

<svelte:head>
  <title>Calendar - Abroad Business</title>
</svelte:head>

<div class="min-h-screen p-4 sm:p-6 bg-gray-50">
  <div class="w-full max-w-lg mx-auto">
    <h1 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
      Calendar
    </h1>
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
      <p class="font-medium text-gray-800">{month}</p>
      <div class="grid grid-cols-7 gap-1 text-center text-sm text-gray-600">
        {#each days as d}
          <span>{d}</span>
        {/each}
        {#each dates as d}
          <button
            type="button"
            class="p-2 rounded-lg {d === 17 ? 'bg-primary-100 text-primary-700 font-medium' : 'hover:bg-gray-100'}"
          >
            {d}
          </button>
        {/each}
      </div>
      <div>
        <h2 class="text-sm font-medium text-gray-700 mb-2">Events for February 17</h2>
        <ul class="space-y-2">
          {#each events as e}
            <li class="flex items-center gap-2 text-gray-700">
              <span class="w-2 h-2 rounded-full bg-primary-500"></span>
              {e.text}
            </li>
          {/each}
        </ul>
      </div>
      <a href="/notificaciones" class="btn-primary inline-block text-center">
        Continue
      </a>
    </div>
    <a href="/" class="block mt-4 text-center text-sm text-gray-500 hover:text-gray-700">
      ← Back
    </a>
  </div>
</div>
