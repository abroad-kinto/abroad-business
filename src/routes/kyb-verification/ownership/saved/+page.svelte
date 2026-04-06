<script lang="ts">
  import { goto } from '$app/navigation';
  import { kybStore } from '$lib/stores/kyb-store';

  const abroadLogo = 'https://www.figma.com/api/mcp/asset/b354202e-b3f6-4e4d-9ee8-95395ddb64fd';

  let people = [];

  kybStore.subscribe((state) => {
    people = state.ownership;
  });

  function removePerson(id) {
    kybStore.update((state) => {
      const filtered = state.ownership.filter((p) => p.id !== id);
      return {
        ...state,
        ownership: filtered,
        progress: {
          ...state.progress,
          ownership: filtered.length === 0 ? 0 : Math.min(filtered.length * 30, 100),
        },
      };
    });
  }

  function copyLink(link) {
    navigator.clipboard.writeText(link).catch(() => {});
  }

  function addNew() {
    goto('/kyb-verification/ownership');
  }

  function handleNext() {
    goto('/kyb-verification/regulatory');
  }
</script>

<svelte:head>
  <title>Ownership and Management Structure</title>
</svelte:head>

<div class="kyb-screen home-font">
  <main class="kyb-container">
    <header class="kyb-header">
      <img src={abroadLogo} alt="Abroad" class="kyb-logo" />
      <button type="button" class="kyb-language"><span>🇬🇧</span><span>English</span><span>⌄</span></button>
    </header>

    <section class="kyb-layout">
      <aside class="kyb-steps">
        <div class="kyb-steps__line"></div>
        <article class="kyb-step">
          <h3>Business Details</h3>
          <div class="kyb-step__bar"><span class="kyb-step__bar-full"></span></div>
          <p>100%</p>
        </article>
        <article class="kyb-step kyb-step--active">
          <h3>Ownership &amp; Management Structure</h3>
          <div class="kyb-step__bar"><span class="kyb-step__bar-mid"></span></div>
          <p class="kyb-step__percent-active">
            {#if people.length > 0}30%{:else}0%{/if}
          </p>
        </article>
        <article class="kyb-step"><h3>Regulatory &amp; Compliance</h3><div class="kyb-step__bar"></div><p>0%</p></article>
        <article class="kyb-step"><h3>Business Activities &amp; Clients</h3><div class="kyb-step__bar"></div><p>0%</p></article>
      </aside>

      <section class="kyb-docs">
        <h1>Ownership and Management Structure</h1>
        <p class="kyb-docs__intro">Enter the details of your directors, shareholders, and UBOs according to your company structure.</p>

        {#if people.length > 0}
          <div class="kyb-list">
            {#each people as person (person.id)}
              <div class="kyb-item">
                <div class="kyb-item__row">
                  <span>{person.fullName}</span>
                  <div class="kyb-badge" class:kyb-badge--success={person.kycStatus === 'approved'} class:kyb-badge--warning={person.kycStatus !== 'approved'}>
                    KYC {person.kycStatus === 'approved' ? 'APPROVED' : 'PENDING'}
                  </div>
                  <button type="button" class="kyb-delete" on:click={() => removePerson(person.id)} aria-label="Remove">&#x1f5d1;</button>
                </div>
                {#if person.kycStatus !== 'approved'}
                  <div class="kyb-item__link-row">
                    <a href={person.kycVerificationLink} target="_blank" rel="noopener">{person.kycVerificationLink}</a>
                    <button type="button" class="kyb-copy" on:click={() => copyLink(person.kycVerificationLink)}>Copy link</button>
                  </div>
                {/if}
              </div>
            {/each}
          </div>
        {:else}
          <p class="kyb-empty">No individuals added yet. Add at least one person to continue.</p>
        {/if}

        <button type="button" class="kyb-add" on:click={addNew}>+ Add new individual</button>

        {#if people.length > 0}
          <button type="button" class="home-signup-btn kyb-next" on:click={handleNext}>Next</button>
        {/if}
      </section>
    </section>
  </main>
</div>

<style>
  .kyb-screen { min-height: 100vh; background: #fff; padding: 44px 32px 48px; }
  .kyb-container { max-width: 1288px; margin: 0 auto; }
  .kyb-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 32px; }
  .kyb-logo { width: 150px; height: 29px; object-fit: contain; }
  .kyb-language { display: flex; align-items: center; gap: 8px; padding: 12px 16px; border: 1px solid #f2f4f7; border-radius: 8px; background: #fff; color: #1b1b1b; font-size: 16px; line-height: 24px; font-weight: 600; }
  .kyb-layout { display: flex; align-items: flex-start; gap: 75px; padding: 16px 0; }
  .kyb-steps { width: 382px; position: relative; padding-left: 28px; padding-top: 8px; display: flex; flex-direction: column; gap: 20px; }
  .kyb-steps__line { position: absolute; left: 7px; top: 12px; width: 1px; height: 390px; background: #e9eaeb; }
  .kyb-step { position: relative; background: #fcfcfc; border: 1px solid #f2f4f7; border-radius: 15px; padding: 15px 18px; }
  .kyb-step::before { content: ''; position: absolute; left: -28px; top: 40px; width: 13.846px; height: 13.846px; border-radius: 50%; border: 1px solid #d5d7da; background: #fff; }
  .kyb-step--active::before { border-color: #5c9583; }
  .kyb-step h3 { color: #535862; font-size: 18px; line-height: 28px; font-weight: 600; }
  .kyb-step p { margin-top: 5px; color: #a8a8a8; font-size: 14px; line-height: 20px; font-weight: 500; }
  .kyb-step__percent-active { color: #52b898; }
  .kyb-step__bar { margin-top: 13px; width: 100%; height: 3px; border-radius: 4px; background: #f2f4f7; }
  .kyb-step__bar span { display: block; height: 100%; border-radius: 4px; background: linear-gradient(90deg, #52b898 0%, #20685f 100%); }
  .kyb-step__bar-full { width: 311px; }
  .kyb-step__bar-mid { width: 54px; }
  .kyb-docs { width: 496px; }
  .kyb-docs h1 { color: #181d27; font-size: 24px; line-height: 32px; font-weight: 600; }
  .kyb-docs__intro { margin-top: 10px; color: #6a6a6a; font-size: 14px; line-height: 20px; font-weight: 500; }
  .kyb-list { margin-top: 24px; display: flex; flex-direction: column; gap: 7px; }
  .kyb-item { border: 1px solid #e1e6ef; border-radius: 8px; background: #fafafa; padding: 12px 15px; }
  .kyb-item__row { display: flex; align-items: center; gap: 10px; color: #1d2433; font-size: 16px; line-height: 24px; font-weight: 600; }
  .kyb-badge { margin-left: auto; padding: 2px 12px; border-radius: 8px; font-size: 12px; line-height: 18px; font-weight: 600; }
  .kyb-badge--success { background: #e3f1ed; color: #5c9583; }
  .kyb-badge--warning { background: #fcedd7; color: #c1862c; }
  .kyb-delete { background: none; border: 0; color: #f97066; font-size: 12px; cursor: pointer; padding: 0 4px; }
  .kyb-item__link-row { margin-top: 8px; display: flex; align-items: center; justify-content: space-between; gap: 10px; }
  .kyb-item__link-row a { color: #535862; font-size: 14px; line-height: 20px; font-weight: 600; text-decoration: underline; }
  .kyb-copy { width: 83px; height: 30px; border: 1px solid #f2f4f7; border-radius: 8px; background: #fcfcfc; color: #282828; font-size: 12px; line-height: 18px; font-weight: 600; cursor: pointer; }
  .kyb-add { width: 100%; height: 48px; border: 1px solid #f2f4f7; border-radius: 8px; background: #fafafa; color: #282828; font-size: 16px; line-height: 24px; font-weight: 600; margin-top: 7px; cursor: pointer; }
  .kyb-empty { margin-top: 24px; color: #858585; font-size: 14px; line-height: 20px; text-align: center; }
  .kyb-next { width: 100%; margin-top: 14px; }
  @media (max-width: 1080px) { .kyb-layout { flex-direction: column; } .kyb-steps, .kyb-docs { width: 100%; max-width: 496px; } }
</style>
