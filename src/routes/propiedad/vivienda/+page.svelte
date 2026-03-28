<script lang="ts">
  let selected = null;
  const options = [
    { id: 'casa', label: 'House' },
    { id: 'departamento', label: 'Apartment' },
    { id: 'otro', label: 'Other' }
  ];
</script>

<svelte:head>
  <title>Select your housing type - Abroad Business</title>
</svelte:head>

<div class="min-h-screen flex flex-col p-4 sm:p-6 bg-gray-50">
  <div class="w-full max-w-lg mx-auto flex-1 flex flex-col">
    <h1 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
      Select your housing type
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 flex-1">
      {#each options as o}
        <button
          type="button"
          class="card-option {selected === o.id ? 'selected' : ''}"
          onclick={() => (selected = o.id)}
        >
          <span class="font-medium">{o.label}</span>
          {#if selected === o.id}
            <svg class="w-5 h-5 mt-1 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          {/if}
        </button>
      {/each}
    </div>
    <a
      href={selected ? '/propiedad/confirmar' : '#'}
      class="btn-primary mt-6 inline-block text-center {!selected ? 'opacity-50 pointer-events-none' : ''}"
    >
      Continue
    </a>
    <a href="/propiedad" class="block mt-4 text-center text-sm text-gray-500 hover:text-gray-700">
      ← Back
    </a>
  </div>
</div>
