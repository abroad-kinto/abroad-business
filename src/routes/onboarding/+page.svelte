<script lang="ts">
  import { goto } from '$app/navigation';
  let step = 0;
  const steps = [
    {
      title: 'Welcome to our platform!',
      cta: 'Get started',
      href: '/propiedad'
    },
    {
      title: 'Learn how to use our platform with this short tutorial.',
      cta: 'Watch tutorial',
      href: '/propiedad'
    },
    {
      title: "You're all set to get started!",
      cta: 'Go to home',
      href: '/',
      icon: 'check'
    }
  ];
</script>

<svelte:head>
  <title>Onboarding - Abroad Business</title>
</svelte:head>

<div class="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-gray-50">
  <div class="w-full max-w-md text-center">
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10">
      {#if steps[step].icon === 'check'}
        <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center">
          <svg class="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      {/if}
      <h1 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
        {steps[step].title}
      </h1>
      {#if step < steps.length - 1}
        <button
          type="button"
          class="btn-primary mb-4"
          onclick={() => step++}
        >
          {steps[step].cta}
        </button>
        <button
          type="button"
          class="text-sm text-gray-500 hover:text-gray-700"
          onclick={() => (step = steps.length - 1)}
        >
          Skip
        </button>
      {:else}
        <a href={steps[step].href} class="btn-primary inline-block">
          {steps[step].cta}
        </a>
      {/if}
    </div>
    <div class="flex justify-center gap-2 mt-6">
      {#each steps as _, i}
        <button
          type="button"
          class="w-2 h-2 rounded-full transition-colors {i === step ? 'bg-primary-500' : 'bg-gray-300'}"
          aria-label="Step {i + 1}"
          onclick={() => (step = i)}
        />
      {/each}
    </div>
  </div>
</div>
