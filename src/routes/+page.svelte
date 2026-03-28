<script lang="ts">
  import { goto } from '$app/navigation';

  // Home landing screen (Figma: 1:21869)
  let email = 'chidozieuzoechi10@gmail.com';

  const abroadLogo = 'https://www.figma.com/api/mcp/asset/8677deb3-d255-436e-9bbc-4250b686be76';
  const tokensIcon = 'https://www.figma.com/api/mcp/asset/2a1e2dee-76bd-4a4c-a2cc-1594e62b3539';
  const weroLogo = 'https://www.figma.com/api/mcp/asset/21704649-4072-4219-81f9-f22b4f93e08c';
</script>

<svelte:head>
  <title>Abroad Business - Sign up</title>
</svelte:head>

<div class="min-h-screen bg-white flex items-center justify-center p-6 home-font">
  <div class="w-full max-w-[1200px] flex flex-col lg:flex-row gap-8 items-stretch">
    <!-- Left: Account creation -->
    <section class="lg:w-[663px] flex flex-col justify-center items-center pb-10 lg:pb-0">
      <header class="w-full flex flex-col items-center gap-3">
        <img src={abroadLogo} alt="Abroad logo" class="w-[71px] h-[55px] object-contain" />
        <p class="text-[#181d27] text-[20px] font-semibold leading-[30px] text-center w-full">
          Create your Abroad account
        </p>
      </header>

      <div class="w-full mt-8 max-w-[432px] flex flex-col items-center gap-[15px]">
        <div class="w-full flex flex-col items-center bg-transparent">
          <div class="w-full flex flex-col gap-2 items-start">
            <label for="home-email" class="text-[#1d2433] text-[14px] font-medium leading-[20px]">
              E-mail
            </label>
            <input
              id="home-email"
              type="email"
              class="home-input-home"
              bind:value={email}
              aria-label="E-mail"
            />
          </div>

          <button
            type="button"
            class="home-signup-btn mt-5"
            on:click={() => goto('/welcome')}
          >
            Sign Up
          </button>

          <div class="mt-6 w-full flex items-center justify-center gap-2 text-[16px] whitespace-nowrap">
            <p class="text-[#535862] font-medium">
              Already have an account?
            </p>
            <a href="/login" class="text-[#5c9583] font-semibold hover:underline">
              Login
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Right: Hero / dotted map + transfer cards -->
    <section class="flex-1 flex items-center justify-center">
      <div class="home-hero relative w-full lg:h-[868px] min-h-[520px] rounded-[16px] bg-white border border-[#eef2f7] overflow-hidden">
        <div class="home-world-dots" aria-hidden="true"></div>

        <h2 class="home-font text-[#181d27] font-semibold text-[28px] sm:text-[30px] leading-[38px] tracking-[-0.6px] absolute top-[56px] left-[28px] lg:top-[92px] lg:left-[72px]">
          Empowering payments<br />
          beyond borders
        </h2>

        <!-- Cards are absolutely positioned to match the composition on desktop -->
        <div class="relative pointer-events-none flex flex-col items-center justify-center gap-6 pt-44 pb-12 lg:absolute lg:inset-0 lg:flex-row lg:items-start lg:justify-start lg:pt-0">
          <!-- Esteban card (left) -->
          <div class="home-transfer-card w-[306px] p-5 lg:absolute lg:left-[10%] lg:top-[59%]">
            <div class="text-[14px] font-semibold text-[#282828] text-center tracking-[-0.28px]">
              Send Money
            </div>
            <div class="mt-5 flex items-center gap-[10px]">
              <div class="w-[30px] h-[30px] rounded-[8px] bg-[#e9f7f2] border border-[#5c9583] rotate-45 flex items-center justify-center">
                <div class="w-[10px] h-[10px] bg-[#52b898] rounded-[2px] -rotate-45"></div>
              </div>
              <div class="flex flex-col">
                <div class="text-[14px] font-semibold text-[#181d27] leading-[17px]">
                  Esteban Sanchez
                </div>
                <div class="text-[12px] font-medium text-[#6b7280] leading-[12px]">
                  ***********008
                </div>
              </div>
            </div>

            <div class="mt-4">
              <div class="flex items-end gap-2">
                <div class="text-[18px] font-semibold text-[#181d27] leading-[21px]">
                  R$
                </div>
                <div class="text-[26px] font-semibold text-[#181d27] leading-[34px]">
                  2.000
                </div>
              </div>
              <div class="mt-2 flex items-center gap-2">
                <img src={tokensIcon} alt="" class="w-[15px] h-[15px] object-contain" />
                <div class="text-[12px] font-medium text-[#6b7280] leading-[14px]">
                  $373.90
                </div>
              </div>
            </div>
          </div>

          <!-- Alex card (right) -->
          <div class="home-transfer-card w-[306px] p-5 lg:absolute lg:left-[52%] lg:top-[42%]">
            <div class="text-[14px] font-semibold text-[#282828] text-center tracking-[-0.28px]">
              Send Money
            </div>

            <div class="mt-5 flex items-center gap-[10px]">
              <div class="w-[30px] h-[30px] rounded-[8px] bg-white border border-[#e9eef4] flex items-center justify-center">
                <img src={weroLogo} alt="" class="w-[26px] h-[6px] object-contain" />
              </div>
              <div class="flex flex-col">
                <div class="text-[14px] font-semibold text-[#181d27] leading-[17px]">
                  Alex Grey
                </div>
                <div class="text-[12px] font-medium text-[#6b7280] leading-[12px]">
                  ***********008
                </div>
              </div>
            </div>

            <div class="mt-4">
              <div class="flex items-end gap-2">
                <div class="text-[18px] font-semibold text-[#181d27] leading-[21px]">
                  €
                </div>
                <div class="text-[26px] font-semibold text-[#181d27] leading-[34px]">
                  80.00
                </div>
              </div>
              <div class="mt-2 flex items-center gap-2">
                <img src={tokensIcon} alt="" class="w-[15px] h-[15px] object-contain" />
                <div class="text-[12px] font-medium text-[#6b7280] leading-[14px]">
                  $103.90
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
