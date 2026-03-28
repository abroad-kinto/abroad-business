<script lang="ts">
  import { enhance } from '$app/forms';
</script>

<svelte:head>
  <title>Tenant details - Abroad Business</title>
</svelte:head>

<div class="min-h-screen p-4 sm:p-6 bg-gray-50">
  <div class="w-full max-w-lg mx-auto">
    <h1 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
      Tenant details
    </h1>
    <form method="post" use:enhance class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Tenant first name</label>
        <input name="nombre" type="text" class="input-field" placeholder="First name" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Tenant last name</label>
        <input name="apellido" type="text" class="input-field" placeholder="Last name" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input name="correo" type="email" class="input-field" placeholder="you@example.com" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
        <input name="telefono" type="tel" class="input-field" placeholder="+1 234 567 8900" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">ID / Tax number</label>
        <input name="rut" type="text" class="input-field" placeholder="ID or tax number" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Profession</label>
        <input name="profesion" type="text" class="input-field" placeholder="Profession" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
        <input name="nacionalidad" type="text" class="input-field" placeholder="Nationality" />
      </div>
      <label class="flex items-center gap-2">
        <input type="checkbox" name="mascotas" class="rounded border-gray-300 text-primary-600" />
        <span class="text-sm text-gray-700">Pets</span>
      </label>
      <button type="submit" class="btn-primary">
        Save
      </button>
    </form>
    <a href="/" class="block mt-4 text-center text-sm text-gray-500 hover:text-gray-700">
      ← Back
    </a>
  </div>
</div>
