<script lang="ts">
  import { goto } from '$app/navigation';
  import { kybStore } from '$lib/stores/kyb-store';

  const abroadLogo = 'https://www.figma.com/api/mcp/asset/49b67cb8-7fb5-47f5-9a11-bf8286533d74';

  let regulatory = {
    regulatoryPenalties: '',
    kycFlowDocument: null,
    originOfFunds: '',
    amlPolicy: null,
    licenseRequirement: '',
    licenseExplanation: '',
  };

  let errors = {};
  let submitting = false;

  kybStore.subscribe((state) => {
    if (state.regulatory.originOfFunds) {
      regulatory = { ...state.regulatory };
    }
  });

  const licenseOptions = [
    { value: 'yes', label: 'Yes, we have a license' },
    { value: 'no_partner', label: 'No, we partner with a licensed entity' },
    { value: 'not_required', label: 'No, license is not required for our activities' },
  ];

  function handleFileChange(field, event) {
    const input = event.target;
    const files = input.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    if (file.size > 10 * 1024 * 1024) {
      errors[field] = `File "${file.name}" exceeds 10 MB limit`;
      return;
    }

    errors[field] = '';
    regulatory = { ...regulatory, [field]: file };
  }

  function validate() {
    errors = {};
    if (!regulatory.originOfFunds.trim()) errors.originOfFunds = 'Origin of funds is required';
    if (regulatory.originOfFunds.trim().length < 10) errors.originOfFunds = 'Please provide more detail (at least 10 characters)';
    if (!regulatory.licenseRequirement) errors.licenseRequirement = 'Please select an option';
    return Object.values(errors).every((e) => !e);
  }

  function handleNext() {
    if (!validate()) return;
    submitting = true;
    kybStore.update((state) => ({
      ...state,
      regulatory,
      progress: { ...state.progress, regulatory: 100 },
    }));
    submitting = false;
    goto('/kyb-verification/business-activities');
  }
</script>

<svelte:head>
  <title>Regulatory & Compliance</title>
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
        <article class="kyb-step kyb-step--active"><h3>Regulatory &amp; Compliance</h3><div class="kyb-step__bar"></div><p>0%</p></article>
        <article class="kyb-step"><h3>Business Activities &amp; Clients</h3><div class="kyb-step__bar"></div><p>0%</p></article>
      </aside>

      <section class="kyb-form">
        <h1>Regulatory &amp; Compliance</h1>

        <div class="kyb-block">
          <p class="kyb-label">Has the company ever been subject to regulatory penalties or investigations?</p>
          <textarea
            bind:value={regulatory.regulatoryPenalties}
            rows="4"
            placeholder="Write a description...."
          ></textarea>
        </div>

        <div class="kyb-block">
          <p class="kyb-label">Do you conduct due diligence on your clients before onboarding?</p>
          <p>Please upload your KYC Flow</p>
          <label class="kyb-upload" class:error={errors.kycFlowDocument}>
            <span class="kyb-upload__icon">&#x2914;</span>
            {#if regulatory.kycFlowDocument}
              <span>File selected: {regulatory.kycFlowDocument.name}</span>
            {:else}
              <span>Upload 1 supported file. Max 10 MB.</span>
            {/if}
            <input type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" on:change={(e) => handleFileChange('kycFlowDocument', e)} hidden />
          </label>
          {#if errors.kycFlowDocument}
            <span class="field-error">{errors.kycFlowDocument}</span>
          {/if}
        </div>

        <div class="kyb-block">
          <p class="kyb-label">What are the Origin sources of funds for your business?</p>
          <textarea
            bind:value={regulatory.originOfFunds}
            rows="4"
            placeholder="Write a description...."
            class:error={errors.originOfFunds}
          ></textarea>
          {#if errors.originOfFunds}
            <span class="field-error">{errors.originOfFunds}</span>
          {/if}
        </div>

        <div class="kyb-block">
          <p class="kyb-label">Please attach the AML policy</p>
          <label class="kyb-upload" class:error={errors.amlPolicy}>
            <span class="kyb-upload__icon">&#x2914;</span>
            {#if regulatory.amlPolicy}
              <span>File selected: {regulatory.amlPolicy.name}</span>
            {:else}
              <span>Upload 1 supported file. Max 10 MB.</span>
            {/if}
            <input type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" on:change={(e) => handleFileChange('amlPolicy', e)} hidden />
          </label>
          {#if errors.amlPolicy}
            <span class="field-error">{errors.amlPolicy}</span>
          {/if}
        </div>

        <div class="kyb-block">
          <p class="kyb-label">Do you require a license?</p>
          <p>If not, explain why you don't need one and who your licensed partner is.</p>
          <select
            bind:value={regulatory.licenseRequirement}
            class:error={errors.licenseRequirement}
          >
            <option value="">Select option</option>
            {#each licenseOptions as option}
              <option value={option.value}>{option.label}</option>
            {/each}
          </select>
          {#if errors.licenseRequirement}
            <span class="field-error">{errors.licenseRequirement}</span>
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
  .kyb-block { margin-top: 18px; display: flex; flex-direction: column; gap: 8px; }
  .kyb-label { color: #1d2433; font-size: 14px; line-height: 20px; font-weight: 600; }
  .kyb-block > p { color: #6a6a6a; font-size: 14px; line-height: 20px; font-weight: 500; }
  textarea { width: 100%; min-height: 116px; border: 1px solid #e1e6ef; border-radius: 8px; padding: 8px 9px; color: #1d2433; font-size: 14px; line-height: 20px; resize: none; }
  textarea.error { border-color: #f97066; }
  select { width: 100%; height: 47px; border: 1px solid #e1e6ef; border-radius: 8px; background: #fff; padding: 0 9px; color: #1d2433; font-size: 16px; line-height: 24px; font-weight: 600; appearance: none; cursor: pointer; }
  select.error { border-color: #f97066; }
  .kyb-upload { width: 100%; height: 122px; border: 1px solid #e9eaeb; border-radius: 8px; background: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; color: #535862; font-size: 14px; line-height: 20px; font-weight: 500; cursor: pointer; }
  .kyb-upload.error { border-color: #f97066; }
  .kyb-upload__icon { width: 40px; height: 40px; border-radius: 50%; border: 6px solid #fafafa; background: #f5f5f5; display: grid; place-items: center; color: #535862; }
  .kyb-next { width: 100%; margin-top: 8px; }
  .kyb-next:disabled { opacity: 0.6; cursor: not-allowed; }
  .field-error { color: #f97066; font-size: 12px; line-height: 16px; }
  @media (max-width: 1080px) { .kyb-layout { flex-direction: column; } .kyb-steps, .kyb-form { width: 100%; max-width: 496px; } }
</style>
