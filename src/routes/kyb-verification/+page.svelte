<script lang="ts">
  import { goto } from '$app/navigation';
  import { kybStore } from '$lib/stores/kyb-store';
  import { businessDetailsSchema } from '$lib/schemas/kyb-schema';

  const abroadLogo = 'https://www.figma.com/api/mcp/asset/f269f2dc-f510-49b5-a624-1a883bcaabc3';

  let businessDetails = {
    legalCompanyName: '',
    idCompanyNumber: '',
    websiteLink: '',
    businessModel: '',
    countriesOfOperation: '',
    countryOfRegistration: '',
  };

  let errors = {};
  let submitting = false;

  kybStore.subscribe((state) => {
    if (Object.keys(state.businessDetails).length > 0) {
      businessDetails = { ...state.businessDetails, ...businessDetails };
    }
  });

  function validate() {
    const result = businessDetailsSchema.safeParse(businessDetails);
    if (!result.success) {
      errors = {};
      for (const error of result.error.issues) {
        errors[error.path[0]] = error.message;
      }
      return false;
    }
    errors = {};
    return true;
  }

  function handleNext() {
    if (!validate()) return;
    submitting = true;
    kybStore.update((state) => ({
      ...state,
      businessDetails: { ...businessDetails },
      progress: { ...state.progress, business: 50 },
    }));
    submitting = false;
    goto('/kyb-verification/documents');
  }

  const countries = [
    { value: 'br', label: '🇧🇷 Brazil' },
    { value: 'us', label: '🇺🇸 United States' },
    { value: 'mx', label: '🇲🇽 Mexico' },
    { value: 'co', label: '🇨🇴 Colombia' },
    { value: 'ar', label: '🇦🇷 Argentina' },
    { value: 'cl', label: '🇨🇱 Chile' },
    { value: 'pe', label: '🇵🇪 Peru' },
  ];
</script>

<svelte:head>
  <title>Business Details</title>
</svelte:head>

<div class="kyb-business home-font">
  <main class="kyb-business__container">
    <header class="kyb-business__header">
      <img src={abroadLogo} alt="Abroad" class="kyb-business__logo" />
      <button type="button" class="kyb-business__lang">
        <span>🇬🇧</span>
        <span>English</span>
        <span>⌄</span>
      </button>
    </header>

    <section class="kyb-business__content">
      <aside class="kyb-business__steps">
        <div class="kyb-business__rail"></div>
        <article class="kyb-step kyb-step--active">
          <h3>Business Details</h3>
          <div class="kyb-step__progress"><span class="kyb-step__fill" style="width: 50%;"></span></div>
          <p>50%</p>
        </article>
        <article class="kyb-step">
          <h3>Ownership &amp; Management Structure</h3>
          <div class="kyb-step__progress"></div>
          <p>0%</p>
        </article>
        <article class="kyb-step">
          <h3>Regulatory &amp; Compliance</h3>
          <div class="kyb-step__progress"></div>
          <p>0%</p>
        </article>
        <article class="kyb-step">
          <h3>Business Activities &amp; Clients</h3>
          <div class="kyb-step__progress"></div>
          <p>0%</p>
        </article>
      </aside>

      <section class="kyb-business__form-wrap">
        <h1>Business Details</h1>
        <nav class="kyb-business__tabs" aria-label="Sections">
          <a href="/kyb-verification" class="kyb-business__tab kyb-business__tab--active">Business Details</a>
          <a href="/kyb-verification/documents" class="kyb-business__tab">Documents</a>
        </nav>

        <form class="kyb-business__form" on:submit|preventDefault={handleNext}>
          <label>
            Legal company name
            <input
              bind:value={businessDetails.legalCompanyName}
              placeholder="Enter legal company name"
              class:error={errors['legalCompanyName']}
            />
            {#if errors['legalCompanyName']}
              <span class="field-error">{errors['legalCompanyName']}</span>
            {/if}
          </label>

          <label>
            ID Company Number
            <input
              bind:value={businessDetails.idCompanyNumber}
              placeholder="Enter company ID number"
              class:error={errors['idCompanyNumber']}
            />
            {#if errors['idCompanyNumber']}
              <span class="field-error">{errors['idCompanyNumber']}</span>
            {/if}
          </label>

          <label>
            Please attach the link of your website company
            <input
              bind:value={businessDetails.websiteLink}
              placeholder="www.example.com"
              class:error={errors['websiteLink']}
            />
            {#if errors['websiteLink']}
              <span class="field-error">{errors['websiteLink']}</span>
            {/if}
          </label>

          <label>
            Describe the company business Model
            <textarea
              bind:value={businessDetails.businessModel}
              rows="4"
              placeholder="Describe the business model..."
              class:error={errors['businessModel']}
            ></textarea>
            {#if errors['businessModel']}
              <span class="field-error">{errors['businessModel']}</span>
            {/if}
          </label>

          <label>
            In which countries does your business operate?
            <select bind:value={businessDetails.countriesOfOperation} class:error={errors['countriesOfOperation']}>
              <option value="">Select country</option>
              {#each countries as country}
                <option value={country.value}>{country.label}</option>
              {/each}
            </select>
            {#if errors['countriesOfOperation']}
              <span class="field-error">{errors['countriesOfOperation']}</span>
            {/if}
          </label>

          <label>
            Which country is your business registered in?
            <select bind:value={businessDetails.countryOfRegistration} class:error={errors['countryOfRegistration']}>
              <option value="">Select country</option>
              {#each countries as country}
                <option value={country.value}>{country.label}</option>
              {/each}
            </select>
            {#if errors['countryOfRegistration']}
              <span class="field-error">{errors['countryOfRegistration']}</span>
            {/if}
          </label>

          <button type="submit" class="home-signup-btn kyb-business__next" disabled={submitting}>
            {submitting ? 'Saving...' : 'Next'}
          </button>
        </form>
      </section>
    </section>
  </main>
</div>

<style>
  .kyb-business { min-height: 100vh; background: #fff; padding: 30px 24px 40px; }
  .kyb-business__container { max-width: 1288px; margin: 0 auto; }
  .kyb-business__header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 60px; }
  .kyb-business__logo { width: 136px; height: 27px; object-fit: contain; }
  .kyb-business__lang { display: flex; align-items: center; gap: 8px; border: 1px solid #e9eaeb; border-radius: 8px; background: #fff; color: #181d27; padding: 10px 12px; font-size: 16px; font-weight: 500; line-height: 24px; }
  .kyb-business__content { display: flex; gap: 96px; align-items: flex-start; }
  .kyb-business__steps { position: relative; width: 382px; display: flex; flex-direction: column; gap: 20px; padding-left: 28px; }
  .kyb-business__rail { position: absolute; left: 12px; top: 12px; width: 1px; height: 414px; background: #e9eaeb; }
  .kyb-step { background: #fafafa; border: 1px solid #f2f4f7; border-radius: 15px; padding: 15px 18px; position: relative; }
  .kyb-step::before { content: ''; position: absolute; left: -35px; top: 30px; width: 12px; height: 12px; border-radius: 999px; border: 1px solid #d5d7da; background: #fff; }
  .kyb-step h3 { color: #535862; font-size: 18px; line-height: 28px; font-weight: 600; }
  .kyb-step p { margin-top: 5px; color: #a8a8a8; font-size: 14px; line-height: 20px; font-weight: 500; }
  .kyb-step__progress { margin-top: 13px; width: 100%; height: 3px; border-radius: 4px; background: #f2f4f7; }
  .kyb-step--active::before { border-color: #5c9583; }
  .kyb-step--active .kyb-step__fill { display: block; height: 100%; border-radius: 4px; background: linear-gradient(90deg, #52b898 0%, #20685f 100%); }
  .kyb-business__form-wrap { width: 496px; }
  .kyb-business__form-wrap h1 { color: #181d27; font-size: 24px; line-height: 32px; font-weight: 600; }
  .kyb-business__tabs { margin-top: 21px; display: flex; gap: 24px; border-bottom: 1px solid #eaecf0; }
  .kyb-business__tab { color: #535862; font-size: 16px; line-height: 24px; font-weight: 500; padding-bottom: 10px; text-decoration: none; }
  .kyb-business__tab--active { color: #20685f; border-bottom: 2px solid #20685f; }
  .kyb-business__form { margin-top: 20px; display: flex; flex-direction: column; gap: 21px; }
  .kyb-business__form label { display: flex; flex-direction: column; gap: 8px; color: #181d27; font-size: 14px; line-height: 18px; font-weight: 500; position: relative; }
  .kyb-business__form input,
  .kyb-business__form textarea,
  .kyb-business__form select { width: 100%; border: 1px solid #d5d7da; border-radius: 8px; background: #fff; padding: 11px 12px; color: #181d27; font-size: 16px; line-height: 24px; font-weight: 500; }
  .kyb-business__form textarea { min-height: 116px; resize: none; }
  .kyb-business__form select { appearance: none; cursor: pointer; }
  .kyb-business__form input.error,
  .kyb-business__form textarea.error,
  .kyb-business__form select.error { border-color: #f97066; }
  .field-error { color: #f97066; font-size: 12px; line-height: 16px; margin-top: 4px; }
  .kyb-business__next { margin-top: 4px; cursor: pointer; }
  .kyb-business__next:disabled { opacity: 0.6; cursor: not-allowed; }
  @media (max-width: 1080px) { .kyb-business__content { flex-direction: column; gap: 36px; } .kyb-business__steps, .kyb-business__form-wrap { width: 100%; max-width: 496px; } }
</style>
