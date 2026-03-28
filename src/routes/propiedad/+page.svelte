<script lang="ts">
  import { goto } from '$app/navigation';
  let selectedType = null;
  const types = [
    { id: 'vivienda', label: 'Housing', icon: 'home' },
    { id: 'comercio', label: 'Commercial', icon: 'shop' },
    { id: 'terreno', label: 'Land', icon: 'land' }
  ];
</script>

<svelte:head>
  <title>Select your property type - Abroad Business</title>
</svelte:head>

<div class="min-h-screen flex flex-col p-4 sm:p-6 bg-gray-50">
  <div class="w-full max-w-lg mx-auto flex-1 flex flex-col">
    <h1 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
      Select your property type
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 flex-1">
      {#each types as t}
        <button
          type="button"
          class="card-option {selectedType === t.id ? 'selected' : ''}"
          onclick={() => (selectedType = t.id)}
        >
          {#if t.icon === 'home'}
            <svg class="w-12 h-12 text-current mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          {:else if t.icon === 'shop'}
            <svg class="w-12 h-12 text-current mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          {:else}
            <svg class="w-12 h-12 text-current mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
            </svg>
          {/if}
          <span class="font-medium">{t.label}</span>
          {#if selectedType === t.id}
            <svg class="w-5 h-5 mt-1 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          {/if}
        </button>
      {/each}
    </div>
    <a
      href={selectedType === 'vivienda' ? '/propiedad/vivienda' : selectedType === 'comercio' ? '/propiedad/comercio' : selectedType ? '/propiedad/terreno' : '#'}
      class="btn-primary mt-6 inline-block text-center {!selectedType ? 'opacity-50 pointer-events-none' : ''}"
    >
      Continue
    </a>
    <a href="/" class="block mt-4 text-center text-sm text-gray-500 hover:text-gray-700">
      ← Back
    </a>
  </div>
</div>
