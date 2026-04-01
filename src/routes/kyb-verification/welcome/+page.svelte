<script lang="ts">
  import { goto } from '$app/navigation';

  const abroadLogo = 'https://www.figma.com/api/mcp/asset/8c83e08f-db45-4243-86dc-75b7f3521077';

  const cards = [
    {
      title: 'Corporate Documents',
      description:
        'Certificate of incorporation, Corporate tax certification, Articles of association or by laws, Proof of address of the company'
    },
    {
      title: 'Ownership Documents',
      description: 'List of directors, List of shareholders/UBOs and their ownership %, Persona Verification'
    },
    {
      title: 'Compliance Documents',
      description: 'Upload AML Policy, Attach KYC flow'
    }
  ];
</script>

<svelte:head>
  <title>Welcome to KYB Verification</title>
</svelte:head>

<div class="kyb-welcome home-font">
  <main class="kyb-welcome__shell">
    <header class="kyb-welcome__header">
      <img src={abroadLogo} alt="Abroad" class="kyb-welcome__logo" />
      <button type="button" class="kyb-welcome__lang"><span>🇬🇧</span><span>English</span><span>⌄</span></button>
    </header>

    <section class="kyb-welcome__content">
      <h1>Welcome to KYB Verification</h1>
      <p>Before we begin, here's what you'll need to complete your KYB application quickly</p>

      <div class="kyb-welcome__cards">
        {#each cards as card}
          <article class="kyb-welcome__card">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <div class="kyb-welcome__preview" aria-hidden="true">
              <div class="kyb-welcome__preview-avatar"></div>
              <div class="kyb-welcome__preview-line"></div>
              <div class="kyb-welcome__preview-line kyb-welcome__preview-line--short"></div>
              <div class="kyb-welcome__preview-line kyb-welcome__preview-line--tiny"></div>
            </div>
          </article>
        {/each}
      </div>

      <button type="button" class="home-signup-btn kyb-welcome__start" on:click={() => goto('/kyb-verification')}>
        Get Started
      </button>
    </section>
  </main>
</div>

<style>
  .kyb-welcome { min-height: 100vh; background: #f4f4f4; padding: 56px 32px 80px; }
  .kyb-welcome__shell { max-width: 1020px; margin: 0 auto; }
  .kyb-welcome__header { display: flex; align-items: center; justify-content: space-between; }
  .kyb-welcome__logo { width: 150px; height: 29px; object-fit: contain; }
  .kyb-welcome__lang { display: flex; align-items: center; gap: 8px; border: 1px solid #f2f4f7; border-radius: 8px; background: #fff; color: #1b1b1b; padding: 12px 16px; font-size: 16px; line-height: 24px; font-weight: 600; }
  .kyb-welcome__content { margin-top: 44px; }
  .kyb-welcome__content h1 { color: #181d27; font-size: 34px; font-size: 24px; line-height: 32px; font-weight: 600; }
  .kyb-welcome__content > p { margin-top: 10px; color: #6a6a6a; font-size: 18px; line-height: 28px; font-weight: 500; }
  .kyb-welcome__cards { margin-top: 35px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
  .kyb-welcome__card { background: #fcfcfc; border: 1px solid #f2f4f7; border-radius: 15px; padding: 18px 14px 12px; min-height: 306px; display: flex; flex-direction: column; }
  .kyb-welcome__card h2 { color: #000; font-size: 28px; font-size: 18px; line-height: 28px; font-weight: 600; }
  .kyb-welcome__card p { margin-top: 7px; color: #858585; font-size: 14px; line-height: 20px; font-weight: 500; }
  .kyb-welcome__preview { margin-top: auto; height: 150px; border-radius: 12px; background: #f9f9f9; border: 1px solid #f2f4f7; padding: 14px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; }
  .kyb-welcome__preview-avatar { width: 42px; height: 42px; border-radius: 999px; background: linear-gradient(180deg, #8a73f8 0%, #6c4cf4 100%); }
  .kyb-welcome__preview-line { width: 100%; height: 8px; background: #ececec; border-radius: 21px; }
  .kyb-welcome__preview-line--short { width: 86%; }
  .kyb-welcome__preview-line--tiny { width: 70%; }
  .kyb-welcome__start { width: 342px; margin: 40px auto 0; }
  @media (max-width: 1060px) { .kyb-welcome__cards { grid-template-columns: 1fr; } .kyb-welcome__start { width: 100%; max-width: 342px; } }
</style>
