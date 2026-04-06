<script lang="ts">
  import { goto } from '$app/navigation';
  import { kybStore } from '$lib/stores/kyb-store';

  const abroadLogo = 'https://www.figma.com/api/mcp/asset/95c2bfa8-0cae-4190-bac6-13f90c2a39d3';

  let businessActivities = {
    highRiskJurisdictions: '',
    expectedTransactionVolume: '',
    geographicAreaOfActivities: '',
    financialStatements: null,
  };

  let errors = {};
  let submitting = false;

  kybStore.subscribe((state) => {
    if (state.businessActivities.geographicAreaOfActivities) {
      businessActivities = { ...state.businessActivities };
    }
  });

  function handleFileChange(event) {
    const input = event.target;
    const files = input.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    if (file.size > 10 * 1024 * 1024) {
      errors.financialStatements = `File "${file.name}" exceeds 10 MB limit`;
      return;
    }

    errors.financialStatements = '';
    businessActivities = { ...businessActivities, financialStatements: file };
  }

  function validate() {
    errors = {};
    if (!businessActivities.highRiskJurisdictions.trim()) {
      errors.highRiskJurisdictions = 'This field is required (write "None" if not applicable)';
    }
    if (!businessActivities.expectedTransactionVolume.trim()) {
      errors.expectedTransactionVolume = 'Expected transaction volume is required';
    }
    if (!businessActivities.geographicAreaOfActivities.trim()) {
      errors.geographicAreaOfActivities = 'Geographic area is required';
    }
    return Object.values(errors).every((e) => !e);
  }

  function handleNext() {
    if (!validate()) return;
    submitting = true;
    kybStore.update((state) => ({
      ...state,
      businessActivities,
      progress: { ...state.progress, activities: 100 },
    }));
    submitting = false;
    goto('/kyb-verification/confirmation');
  }
</script>

<svelte:head>
  <title>Business Activities & Clients</title>
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
        <article class="kyb-step"><h3>Business Details</h3><div class="kyb-step__bar"><span class="kyb-step__bar-full"></span></div><p>100%</p></article>
        <article class="kyb-step"><h3>Ownership &amp; Management Structure</h3><div class="kyb-step__bar"><span class="kyb-step__bar-full"></span></div><p>100%</p></article>
        <article class="kyb-step"><h3>Regulatory &amp; Compliance</h3><div class="kyb-step__bar"><span class="kyb-step__bar-full"></span></div><p>100%</p></article>
        <article class="kyb-step kyb-step--active"><h3>Business Activities &amp; Clients</h3><div class="kyb-step__bar"></div><p>0%</p></article>
      </aside>

      <section class="kyb-form">
        <h1>Business Activities &amp; Clients</h1>

        <div class="kyb-block">
          <p class="kyb-label">Are there any high-risk jurisdictions involved in your business operations?</p>
          <textarea
            bind:value={businessActivities.highRiskJurisdictions}
            rows="4"
            placeholder="Write a description...."
            class:error={errors.highRiskJurisdictions}
          ></textarea>
          {#if errors.highRiskJurisdictions}
            <span class="field-error">{errors.highRiskJurisdictions}</span>
          {/if}
        </div>

        <div class="kyb-block">
          <p class="kyb-label">What is your Expected Transaction Volume (Monthly)</p>
          <input
            type="text"
            bind:value={businessActivities.expectedTransactionVolume}
            placeholder="e.g. $650,000"
            class:error={errors.expectedTransactionVolume}
          />
          {#if errors.expectedTransactionVolume}
            <span class="field-error">{errors.expectedTransactionVolume}</span>
          {/if}
        </div>

        <div class="kyb-block">
          <p class="kyb-label">Geographic area of activities: (country(ies) of business activities/operation)</p>
          <input
            type="text"
            bind:value={businessActivities.geographicAreaOfActivities}
            placeholder="e.g. Brazil, Mexico, Colombia"
            class:error={errors.geographicAreaOfActivities}
          />
          {#if errors.geographicAreaOfActivities}
            <span class="field-error">{errors.geographicAreaOfActivities}</span>
          {/if}
        </div>

        <div class="kyb-block">
          <p class="kyb-label">Can you provide audited financial statements for the last fiscal year?</p>
          <label class="kyb-upload" class:error={errors.financialStatements}>
            <span class="kyb-upload__icon">&#x2914;</span>
            {#if businessActivities.financialStatements}
              <span>File selected: {businessActivities.financialStatements.name}</span>
            {:else}
              <span>Upload 1 supported file. Max 10 MB.</span>
            {/if}
            <input type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx" on:change={handleFileChange} hidden />
          </label>
          {#if errors.financialStatements}
            <span class="field-error">{errors.financialStatements}</span>
          {/if}
        </div>

        <button type="button" class="home-signup-btn kyb-next" on:click={handleNext} disabled={submitting}>
          {submitting ? 'Saving...' : 'Next'}
        </button>
      </section>
    </section>
  </main>
</div>

<style>
  .kyb-screen { min-height: 100vh; background: #fff; padding: 44px 32px 48px; }
  .kyb-container { max-width: 1288px; margin: 0 auto; }
  .kyb-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 56px; }
  .kyb-logo { width: 150px; height: 29px; object-fit: contain; }
  .kyb-language { display: flex; align-items: center; gap: 8px; padding: 12px 16px; border: 1px solid #f2f4f7; border-radius: 8px; background: #fff; color: #1b1b1b; font-size: 16px; line-height: 24px; font-weight: 600; }
  .kyb-layout { display: flex; align-items: flex-start; gap: 46px; padding: 16px 0; }
  .kyb-steps { width: 382px; position: relative; padding-left: 28px; display: flex; flex-direction: column; gap: 20px; }
  .kyb-steps__line { position: absolute; left: 7px; top: 12px; width: 1px; height: 410px; background: #e9eaeb; }
  .kyb-step { position: relative; background: #fcfcfc; border: 1px solid #f2f4f7; border-radius: 15px; padding: 15px 18px; }
  .kyb-step::before { content: ''; position: absolute; left: -28px; top: 40px; width: 13.846px; height: 13.846px; border-radius: 50%; border: 1px solid #d5d7da; background: #fff; }
  .kyb-step--active::before { border-color: #5c9583; }
  .kyb-step h3 { color: #535862; font-size: 18px; line-height: 28px; font-weight: 600; }
  .kyb-step p { margin-top: 5px; color: #a8a8a8; font-size: 14px; line-height: 20px; font-weight: 500; }
  .kyb-step__bar { margin-top: 13px; width: 100%; height: 3px; border-radius: 4px; background: #f2f4f7; }
  .kyb-step__bar span { display: block; height: 100%; border-radius: 4px; background: linear-gradient(90deg, #52b898 0%, #20685f 100%); }
  .kyb-step__bar-full { width: 312px; }
  .kyb-form { width: 496px; }
  .kyb-form h1 { color: #181d27; font-size: 24px; line-height: 32px; font-weight: 600; }
  .kyb-block { margin-top: 14px; display: flex; flex-direction: column; gap: 8px; }
  .kyb-label { color: #1d2433; font-size: 14px; line-height: 20px; font-weight: 600; }
  textarea { width: 100%; min-height: 116px; border: 1px solid #e1e6ef; border-radius: 8px; padding: 8px 9px; color: #1d2433; font-size: 14px; line-height: 20px; resize: none; }
  textarea.error { border-color: #f97066; }
  input { width: 100%; height: 47px; border: 1px solid #e1e6ef; border-radius: 8px; background: #fff; padding: 0 9px; color: #1d2433; font-size: 16px; line-height: 24px; font-weight: 600; }
  input.error { border-color: #f97066; }
  .kyb-upload { width: 100%; height: 122px; border: 1px solid #e9eaeb; border-radius: 8px; background: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; color: #535862; font-size: 14px; line-height: 20px; font-weight: 500; cursor: pointer; }
  .kyb-upload.error { border-color: #f97066; }
  .kyb-upload__icon { width: 40px; height: 40px; border-radius: 50%; border: 6px solid #fafafa; background: #f5f5f5; display: grid; place-items: center; color: #535862; }
  .kyb-next { width: 100%; margin-top: 16px; }
  .kyb-next:disabled { opacity: 0.6; cursor: not-allowed; }
  .field-error { color: #f97066; font-size: 12px; line-height: 16px; }
  @media (max-width: 1080px) { .kyb-layout { flex-direction: column; } .kyb-steps, .kyb-form { width: 100%; max-width: 496px; } }
</style>
