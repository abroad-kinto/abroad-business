<script lang="ts">
  import { enhance } from '$app/forms';
</script>

<svelte:head>
  <title>Property details - Abroad Business</title>
</svelte:head>

<div class="min-h-screen p-4 sm:p-6 bg-gray-50">
  <div class="w-full max-w-lg mx-auto">
    <h1 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
      Property details
    </h1>
    <form method="post" use:enhance class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="sm:col-span-2">
          <label class="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input name="ubicacion" type="text" class="input-field" placeholder="Location" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Property number</label>
          <input name="numero" type="text" class="input-field" placeholder="No." />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <input name="direccion" type="text" class="input-field" placeholder="Address" />
        </div>
        <div class="sm:col-span-2">
          <label class="block text-sm font-medium text-gray-700 mb-1">Reference</label>
          <input name="referencia" type="text" class="input-field" placeholder="Reference" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Total size m²</label>
          <input name="tamano_total" type="number" class="input-field" placeholder="0" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Built m²</label>
          <input name="construidos" type="number" class="input-field" placeholder="0" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
          <input name="habitaciones" type="number" class="input-field" placeholder="0" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
          <input name="banos" type="number" class="input-field" placeholder="0" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Parking spaces</label>
          <input name="estacionamientos" type="number" class="input-field" placeholder="0" />
        </div>
      </div>
      <button type="submit" class="btn-primary">
        Continue
      </button>
    </form>
    <a href="/propiedad/valor" class="block mt-4 text-center text-sm text-gray-500 hover:text-gray-700">
      ← Back
    </a>
  </div>
</div>
