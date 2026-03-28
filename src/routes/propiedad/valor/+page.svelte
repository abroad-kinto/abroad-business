<script lang="ts">
  let saleValue = 2000000;
  let commission = 100000;
  const step = 100000;
</script>

<svelte:head>
  <title>Value and commission - Abroad Business</title>
</svelte:head>

<div class="min-h-screen flex flex-col p-4 sm:p-6 bg-gray-50">
  <div class="w-full max-w-lg mx-auto">
    <h1 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
      Property
    </h1>
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          My property has a sale value of:
        </label>
        <div class="flex items-center gap-2">
          <button
            type="button"
            class="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
            onclick={() => (saleValue = Math.max(0, saleValue - step))}
          >
            −
          </button>
          <input
            type="text"
            class="input-field text-center flex-1"
            value={saleValue.toLocaleString('en-US')}
            readonly
          />
          <button
            type="button"
            class="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
            onclick={() => (saleValue += step)}
          >
            +
          </button>
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          My property has a commission of:
        </label>
        <div class="flex items-center gap-2">
          <button
            type="button"
            class="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
            onclick={() => (commission = Math.max(0, commission - step))}
          >
            −
          </button>
          <input
            type="text"
            class="input-field text-center flex-1"
            value={commission.toLocaleString('en-US')}
            readonly
          />
          <button
            type="button"
            class="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
            onclick={() => (commission += step)}
          >
            +
          </button>
        </div>
      </div>
    </div>
    <a href="/propiedad/detalles" class="btn-primary mt-6 inline-block text-center">
      Continue
    </a>
    <a href="/propiedad/confirmar" class="block mt-4 text-center text-sm text-gray-500 hover:text-gray-700">
      ← Back
    </a>
  </div>
</div>
