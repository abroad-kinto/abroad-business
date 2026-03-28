<script lang="ts">
  import { enhance } from '$app/forms';
</script>

<svelte:head>
  <title>Log in - Abroad Business</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gray-50">
  <div class="w-full max-w-md">
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
      <h1 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
        Log in
      </h1>
      <form method="post" action="?/login" use:enhance class="space-y-4">
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
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            class="input-field"
            placeholder="••••••••"
          />
        </div>
        <button type="submit" class="btn-primary">
          Log in
        </button>
        <a
          href="/recuperar-password"
          class="block text-center text-sm text-primary-600 hover:underline"
        >
          Forgot password
        </a>
      </form>
      <p class="mt-6 text-center text-sm text-gray-600">
        Don't have an account?
        <a href="/registro" class="text-primary-600 font-medium hover:underline">
          Sign up
        </a>
      </p>
    </div>
    <a href="/" class="block mt-4 text-center text-sm text-gray-500 hover:text-gray-700">
      ← Back to home
    </a>
  </div>
</div>
