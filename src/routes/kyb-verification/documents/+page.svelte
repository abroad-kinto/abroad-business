<script lang="ts">
  import { goto } from '$app/navigation';

  const abroadLogo = 'https://www.figma.com/api/mcp/asset/9def4654-0a19-4509-9c9e-15fc86e16bd2';
  const uploadIcon = 'https://www.figma.com/api/mcp/asset/88515fa2-4cd9-4235-9a11-bf8286533d74';

  const uploadCards = [
    {
      title: 'Certificate of Incorporation',
      description: 'A copy of the official certificate confirming the legal formation of your company.',
      hint: 'Upload up to 5 supported files. Max 10 MB per file.'
    },
    {
      title: 'Articles of Association or By laws',
      description: "The document outlining the company's internal governance structure and operational rules.",
      hint: 'Upload up to 5 supported files. Max 10 MB per file.'
    },
    {
      title: 'Corporate Tax certification',
      description: '',
      hint: 'Upload up to 5 supported files. Max 10 MB per file.'
    },
    {
      title: 'Proof of Address of the Company',
      description:
        "A recent utility bill, lease agreement, or other official document confirming the company's operating address (issued within the last 3 months).",
      hint: 'Upload 1 supported file. Max 10 MB.'
    }
  ];
</script>

<svelte:head>
  <title>Business Details - Documents</title>
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
        <article class="kyb-step kyb-step--active">
          <h3>Business Details</h3>
          <div class="kyb-step__bar"><span></span></div>
          <p>50%</p>
        </article>
        <article class="kyb-step">
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
        <h1>Business Details</h1>
        <nav class="kyb-tabs" aria-label="Sections">
          <a href="/kyb-verification" class="kyb-tab">Business Details</a>
          <a href="/kyb-verification/documents" class="kyb-tab kyb-tab--active">Documents</a>
        </nav>

        <div class="kyb-docs__list">
          {#each uploadCards as card}
            <article class="kyb-upload-card">
              <h2>{card.title}</h2>
              {#if card.description}
                <p>{card.description}</p>
              {/if}
              <button type="button" class="kyb-dropzone">
                <span class="kyb-dropzone__icon">
                  <img src={uploadIcon} alt="" />
                </span>
                <span>{card.hint}</span>
              </button>
            </article>
          {/each}
        </div>

        <button type="button" class="home-signup-btn kyb-next" on:click={() => goto('/kyb-verification/ownership')}>
          Next
        </button>
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
  .kyb-layout { display: flex; align-items: flex-start; gap: 50px; }
  .kyb-steps { width: 382px; position: relative; padding-left: 28px; padding-top: 8px; display: flex; flex-direction: column; gap: 20px; }
  .kyb-steps__line { position: absolute; left: 7px; top: 12px; width: 1px; height: 390px; background: #e9eaeb; }
  .kyb-step { position: relative; background: #fcfcfc; border: 1px solid #f2f4f7; border-radius: 15px; padding: 15px 18px; }
  .kyb-step::before { content: ''; position: absolute; left: -28px; top: 40px; width: 13.846px; height: 13.846px; border-radius: 50%; border: 1px solid #d5d7da; background: #fff; }
  .kyb-step--active::before { border-color: #5c9583; }
  .kyb-step h3 { color: #535862; font-size: 18px; line-height: 28px; font-weight: 600; }
  .kyb-step p { margin-top: 5px; color: #a8a8a8; font-size: 14px; line-height: 20px; font-weight: 500; }
  .kyb-step__bar { margin-top: 13px; width: 100%; height: 3px; border-radius: 4px; background: #f2f4f7; }
  .kyb-step__bar span { display: block; width: 143px; height: 100%; border-radius: 4px; background: linear-gradient(90deg, #52b898 0%, #20685f 100%); }
  .kyb-docs { width: 496px; }
  .kyb-docs h1 { color: #181d27; font-size: 24px; line-height: 32px; font-weight: 600; }
  .kyb-tabs { display: flex; align-items: flex-end; gap: 16px; margin-top: 21px; border-bottom: 1px solid #e9eaeb; }
  .kyb-tab { padding: 0 4px 7px; color: #3a3c42; font-size: 16px; line-height: 24px; font-weight: 500; text-decoration: none; }
  .kyb-tab--active { color: #457063; border-bottom: 2px solid #457063; }
  .kyb-docs__list { margin-top: 16px; display: flex; flex-direction: column; gap: 20px; }
  .kyb-upload-card h2 { color: #1d2433; font-size: 14px; line-height: 20px; font-weight: 600; }
  .kyb-upload-card p { margin-top: 2px; color: #6a6a6a; font-size: 14px; line-height: 20px; font-weight: 500; }
  .kyb-dropzone { width: 100%; margin-top: 8px; height: 122px; border: 1px solid #e9eaeb; border-radius: 8px; background: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; color: #535862; font-size: 14px; line-height: 20px; font-weight: 500; }
  .kyb-dropzone__icon { width: 40px; height: 40px; border-radius: 999px; border: 6px solid #fafafa; background: #f5f5f5; display: grid; place-items: center; }
  .kyb-dropzone__icon img { width: 20px; height: 20px; object-fit: contain; }
  .kyb-next { width: 100%; margin-top: 24px; }
  @media (max-width: 1080px) { .kyb-layout { flex-direction: column; } .kyb-steps, .kyb-docs { width: 100%; max-width: 496px; } }
</style>
