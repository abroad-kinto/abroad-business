<script lang="ts">
  import { enhance } from '$app/forms';
</script>

<svelte:head>
  <title>Inventory - Abroad Business</title>
</svelte:head>

<div class="min-h-screen p-4 sm:p-6 bg-gray-50">
  <div class="w-full max-w-lg mx-auto">
    <h1 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
      Inventory
    </h1>
    <form method="post" use:enhance class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Item</label>
        <input name="articulo" type="text" class="input-field" placeholder="e.g. Refrigerator" />
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
          <input name="cantidad" type="number" class="input-field" placeholder="1" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Condition</label>
          <input name="estado" type="text" class="input-field" placeholder="Good" />
        </div>
      </div>
      <button type="button" class="btn-secondary">
        Add item
      </button>
      <button type="submit" class="btn-primary">
        Continue
      </button>
    </form>
    <a href="/contrato" class="block mt-4 text-center text-sm text-gray-500 hover:text-gray-700">
      ← Back
    </a>
  </div>
</div>
