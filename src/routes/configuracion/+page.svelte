<script lang="ts">
  import { enhance } from '$app/forms';
</script>

<svelte:head>
  <title>Settings - Abroad Business</title>
</svelte:head>

<div class="min-h-screen p-4 sm:p-6 bg-gray-50">
  <div class="w-full max-w-lg mx-auto">
    <h1 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
      Settings
    </h1>
    <form method="post" use:enhance class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Language</label>
        <select name="idioma" class="input-field">
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Time zone</label>
        <select name="zona" class="input-field">
          <option value="America/New_York">Eastern (GMT-5)</option>
          <option value="America/Los_Angeles">Pacific (GMT-8)</option>
          <option value="America/Santiago">Chile (GMT-3)</option>
          <option value="UTC">UTC</option>
        </select>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Currency</label>
        <select name="moneda" class="input-field">
          <option value="USD">USD</option>
          <option value="CLP">CLP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <button type="submit" class="btn-primary">
        Save
      </button>
    </form>
    <a href="/notificaciones" class="block mt-4 text-center text-sm text-gray-500 hover:text-gray-700">
      ← Back
    </a>
  </div>
</div>
