<script lang="ts">
  import { enhance } from '$app/forms';
</script>

<svelte:head>
  <title>Sign up - Abroad Business</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gray-50">
  <div class="w-full max-w-md">
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
      <h1 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
        Sign up
      </h1>
      <form method="post" action="?/register" use:enhance class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            class="input-field"
            placeholder="Your name"
          />
        </div>
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
        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">
            Confirm password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            class="input-field"
            placeholder="••••••••"
          />
        </div>
        <label class="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="terms"
            required
            class="mt-1 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
          />
          <span class="text-sm text-gray-600">
            I accept the terms and conditions
          </span>
        </label>
        <button type="submit" class="btn-primary">
          Sign up
        </button>
      </form>
      <p class="mt-6 text-center text-sm text-gray-600">
        Already have an account?
        <a href="/login" class="text-primary-600 font-medium hover:underline">
          Log in
        </a>
      </p>
    </div>
    <a href="/" class="block mt-4 text-center text-sm text-gray-500 hover:text-gray-700">
      ← Back to home
    </a>
  </div>
</div>
