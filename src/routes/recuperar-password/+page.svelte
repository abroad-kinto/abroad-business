<script lang="ts">
  import { enhance } from '$app/forms';
</script>

<svelte:head>
  <title>Forgot password - Abroad Business</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gray-50">
  <div class="w-full max-w-md">
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
      <h1 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
        Forgot password
      </h1>
      <form method="post" use:enhance class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            class="input-field"
            placeholder="you@example.com"
          />
        </div>
        <button type="submit" class="btn-primary">
          Send recovery link
        </button>
      </form>
      <a href="/login" class="block mt-6 text-center text-sm text-primary-600 hover:underline">
        ← Back to log in
      </a>
    </div>
  </div>
</div>
