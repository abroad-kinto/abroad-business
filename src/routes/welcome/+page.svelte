<script lang="ts">
  import { goto } from '$app/navigation';
  const logoMark = 'https://www.figma.com/api/mcp/asset/460cdc23-c712-4384-af93-6ab65c5c962d';
</script>

<svelte:head>
  <title>Welcome to Abroad</title>
</svelte:head>

<div class="min-h-screen bg-[#f3f4f6] relative overflow-hidden home-font welcome-grid-lines">
  <div
    class="absolute top-[-393px] left-[-35px] h-[967px] w-[278px] rounded-[176px] blur-[44px]"
    style="background: rgba(255, 255, 255, 0.8);"
    aria-hidden="true"
  ></div>
  <div
    class="absolute top-[-374px] right-[-33px] h-[967px] w-[278px] rounded-[176px] blur-[44px]"
    style="background: rgba(255, 255, 255, 0.8);"
    aria-hidden="true"
  ></div>

  <main class="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
    <div class="w-full max-w-[432px] flex flex-col items-center gap-[28px]">
      <div class="w-[238px] h-[238px] rounded-full border-[3px] border-[#52b898] bg-white flex items-center justify-center">
        <img src={logoMark} alt="Abroad logo" class="w-[124px] h-[97px] object-contain" />
      </div>

      <div class="w-full max-w-[339px] text-center flex flex-col gap-3">
        <h1 class="text-[#181d27] text-[30px] font-semibold leading-[38px]">
          Welcome to Abroad
        </h1>
        <p class="text-[#535862] text-[18px] leading-[28px] font-medium">
          Enter the six digit verification code sent to
          chidozieuzoechi10@gmail.com
        </p>
      </div>

      <div class="w-full">
        <button type="button" class="home-signup-btn" on:click={() => goto('/kyb-verification')}>
          Get Started
        </button>
      </div>
    </div>
  </main>
</div>
