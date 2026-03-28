<script lang="ts">
  const ownerDocs = [
    'ID card',
    'Certificate of title',
    'Proof of address',
    'Property deed'
  ];
</script>

<svelte:head>
  <title>Owner documents - Abroad Business</title>
</svelte:head>

<div class="min-h-screen p-4 sm:p-6 bg-gray-50">
  <div class="w-full max-w-lg mx-auto">
    <h1 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
      Owner documents
    </h1>
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
      <ul class="space-y-2">
        {#each ownerDocs as doc}
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="doc" value={doc} class="rounded border-gray-300 text-primary-600" />
            <span class="text-gray-700">{doc}</span>
          </label>
        {/each}
      </ul>
      <div class="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
        <p class="text-sm text-gray-600 mb-2">Upload file</p>
        <button type="button" class="btn-secondary max-w-[200px] mx-auto">
          Browse
        </button>
      </div>
      <a href="/contrato" class="btn-primary inline-block text-center">
        Continue
      </a>
    </div>
    <a href="/propietario" class="block mt-4 text-center text-sm text-gray-500 hover:text-gray-700">
      ← Back
    </a>
  </div>
</div>
