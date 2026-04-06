<script lang="ts">
  import { goto } from '$app/navigation';
  import { kybStore } from '$lib/stores/kyb-store';

  const abroadLogo = 'https://www.figma.com/api/mcp/asset/c25a1236-046a-4cca-941e-149088562a96';

  let status = 'person';
  let fullName = '';
  let role = '';
  let ownershipPercentage = '';
  let kycVerificationLink = '';
  let errors = {};

  const roles = [
    'Director',
    'Shareholder',
    'CEO',
    'CFO',
    'Managing Partner',
    'Authorized Signatory',
    'UBO (Ultimate Beneficial Owner)',
  ];

  function generatePersonaLink(name) {
    const id = Math.random().toString(36).substring(2, 12);
    return `https://inquiry.withpersona.com/verify?inquiry-id=inq_${id}`;
  }

  function validate() {
    errors = {};
    if (!fullName.trim()) errors.fullName = 'Full name is required';
    if (!role) errors.role = 'Role is required';
    if (!ownershipPercentage.trim()) {
      errors.ownershipPercentage = 'Ownership percentage is required';
    } else {
      const num = parseFloat(ownershipPercentage.replace('%', ''));
      if (isNaN(num) || num <= 0 || num > 100) {
        errors.ownershipPercentage = 'Must be between 1 and 100';
      }
    }
    return Object.keys(errors).length === 0;
  }

  function copyLink() {
    navigator.clipboard.writeText(kycVerificationLink).catch(() => {});
  }

  function handleSave() {
    if (!validate()) return;

    const kycLink = kycVerificationLink || generatePersonaLink(fullName);

    const newPerson = {
      id: crypto.randomUUID(),
      status,
      fullName: fullName.trim(),
      role,
      ownershipPercentage: ownershipPercentage.includes('%')
        ? ownershipPercentage
        : `${ownershipPercentage}%`,
      kycVerificationLink: kycLink,
      kycStatus: 'pending',
    };

    kycVerificationLink = kycLink;

    kybStore.update((state) => {
      const updated = [...state.ownership, newPerson];
      return {
        ...state,
        ownership: updated,
        progress: {
          ...state.progress,
          ownership: Math.min(updated.length * 30, 100),
        },
      };
    });
  }

  function handleNext() {
    goto('/kyb-verification/ownership/saved');
  }
</script>

<svelte:head>
  <title>Ownership and Management Structure</title>
</svelte:head>

<div class="kyb-screen home-font">
  <main class="kyb-container">
    <header class="kyb-header">
      <img src={abroadLogo} alt="Abroad" class="kyb-logo" />
      <button type="button" class="kyb-language">
        <span>🇬🇧</span>
        <span>English</span>
        <span>⌄</span>
      </button>
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
          <div class="kyb-step__bar"></div>
          <p>0%</p>
        </article>
        <article class="kyb-step">
          <h3>Regulatory &amp; Compliance</h3>
          <div class="kyb-step__bar"></div>
          <p>0%</p>
        </article>
        <article class="kyb-step">
          <h3>Business Activities &amp; Clients</h3>
          <div class="kyb-step__bar"></div>
          <p>0%</p>
        </article>
      </aside>

      <section class="kyb-docs">
        <h1>Ownership and Management Structure</h1>
        <p class="kyb-docs__intro">
          Enter the details of your directors, shareholders, and UBOs according to your company structure.
        </p>

        <div class="kyb-people">
          <div class="kyb-person-card">
            <div class="kyb-grid">
              <label>
                Status
                <select bind:value={status}>
                  <option value="person">Person</option>
                  <option value="organization">Organization</option>
                </select>
              </label>

              <label>
                Full Name
                <input
                  bind:value={fullName}
                  placeholder="Enter full name"
                  class:error={errors.fullName}
                />
                {#if errors.fullName}
                  <span class="field-error">{errors.fullName}</span>
                {/if}
              </label>

              <label>
                Role
                <select bind:value={role} class:error={errors.role}>
                  <option value="">Select role</option>
                  {#each roles as r}
                    <option value={r}>{r}</option>
                  {/each}
                </select>
                {#if errors.role}
                  <span class="field-error">{errors.role}</span>
                {/if}
              </label>

              <label>
                Ownership Percentage
                <input
                  bind:value={ownershipPercentage}
                  placeholder="e.g. 2%"
                  class:error={errors.ownershipPercentage}
                />
                {#if errors.ownershipPercentage}
                  <span class="field-error">{errors.ownershipPercentage}</span>
                {/if}
              </label>
            </div>

            {#if kycVerificationLink}
              <div class="kyb-kyc">
                <h3>KYC Verification</h3>
                <p>Send this link to the individual so they can verify their details.</p>
                <div class="kyb-kyc__box">
                  <div class="kyc-brand">&#x2731; persona</div>
                  <div class="kyb-kyc__row">
                    <p>{kycVerificationLink}</p>
                    <button type="button" class="kyb-copy" on:click={copyLink}>Copy link</button>
                  </div>
                </div>
              </div>
            {/if}
          </div>
        </div>

        <div class="kyb-actions">
          <button type="button" class="kyb-btn-secondary" on:click={handleSave}>Save</button>
          <button type="button" class="kyb-btn-primary" on:click={handleNext}>View all &amp; Continue</button>
        </div>
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
  .kyb-step__bar { margin-top: 13px; width: 100%; height: 3px; border-radius: 4px; background: #f2f4f7; }
  .kyb-step__bar span { display: block; width: 143px; height: 100%; border-radius: 4px; background: linear-gradient(90deg, #52b898 0%, #20685f 100%); }
  .kyb-step__bar-full { width: 311px; }
  .kyb-docs { width: 496px; }
  .kyb-docs h1 { color: #181d27; font-size: 24px; line-height: 32px; font-weight: 600; }
  .kyb-docs__intro { margin-top: 10px; color: #6a6a6a; font-size: 14px; line-height: 20px; font-weight: 500; }
  .kyb-people { margin-top: 12px; display: flex; flex-direction: column; gap: 8px; width: 100%; }
  .kyb-person-card { width: 100%; border: 1px solid #f2f4f7; border-radius: 10px; background: #fff; padding: 17px 20px; }
  .kyb-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 21px; }
  .kyb-grid label { display: flex; flex-direction: column; gap: 8px; color: #1d2433; font-size: 14px; line-height: 20px; font-weight: 500; }
  .kyb-grid input,
  .kyb-grid select {
    width: 100%; height: 47px; border: 1px solid #e1e6ef; border-radius: 8px; background: #fff; padding: 0 9px;
    color: #1d2433; font-size: 16px; line-height: 24px; font-weight: 600;
  }
  .kyb-grid select { appearance: none; cursor: pointer; }
  .kyb-grid input.error,
  .kyb-grid select.error { border-color: #f97066; }
  .field-error { color: #f97066; font-size: 12px; line-height: 16px; }
  .kyb-kyc { margin-top: 12px; }
  .kyb-kyc h3 { color: #1d2433; font-size: 14px; line-height: 20px; font-weight: 500; }
  .kyb-kyc p { color: #6a6a6a; font-size: 12px; line-height: 18px; font-weight: 500; }
  .kyb-kyc__box { margin-top: 7px; border: 1px solid #e9eaeb; border-radius: 8px; background: #fff; padding: 16px 24px; }
  .kyc-brand { color: #202535; font-size: 22px; line-height: 1; font-weight: 700; }
  .kyb-kyc__row { margin-top: 8px; display: flex; align-items: center; justify-content: space-between; gap: 10px; }
  .kyb-kyc__row p { color: #535862; font-size: 14px; line-height: 20px; font-weight: 600; text-decoration: underline; max-width: 301px; }
  .kyb-copy { width: 78px; height: 38px; border: 1px solid #f2f4f7; border-radius: 8px; background: #fcfcfc; color: #282828; font-size: 12px; line-height: 18px; font-weight: 600; cursor: pointer; }
  .kyb-actions { display: flex; gap: 12px; margin-top: 14px; flex-direction: column; }
  .kyb-btn-primary { width: 100%; height: 48px; border: 0; border-radius: 8px; background: linear-gradient(90deg, #52b898 0%, #20685f 100%); color: #fff; font-size: 16px; line-height: 24px; font-weight: 600; cursor: pointer; }
  .kyb-btn-secondary { width: 100%; height: 48px; border: 1px solid #f2f4f7; border-radius: 8px; background: #fafafa; color: #1b1b1b; font-size: 16px; line-height: 24px; font-weight: 600; cursor: pointer; order: -1; }
  @media (max-width: 1080px) { .kyb-layout { flex-direction: column; } .kyb-steps, .kyb-docs { width: 100%; max-width: 496px; } }
</style>
