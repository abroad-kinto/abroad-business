<script lang="ts">
  import { goto } from '$app/navigation';
  const abroadLogo = 'https://www.figma.com/api/mcp/asset/f269f2dc-f510-49b5-a624-1a883bcaabc3';
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
          <div class="kyb-step__progress"><span class="kyb-step__fill"></span></div>
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

        <form class="kyb-business__form">
          <label>Legal company name <input value="Sabi Industries" /></label>
          <label>ID Company Number <input value="8897748484830" /></label>
          <label>Please attach the link of your website company <input value="www.sabi.com" /></label>
          <label>Describe the company business Model <textarea rows="4">Our business model is ....</textarea></label>
          <label>
            In which countries does your business operate?
            <button type="button" class="kyb-select"><span>🇧🇷 Brazil</span><span>⌄</span></button>
          </label>
          <label>
            Which country is your business registered in?
            <button type="button" class="kyb-select"><span>🇧🇷 Brazil</span><span>⌄</span></button>
          </label>
          <button type="button" class="home-signup-btn kyb-business__next" on:click={() => goto('/kyb-verification/documents')}>Next</button>
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
  .kyb-step--active .kyb-step__fill { display: block; height: 100%; width: 143px; border-radius: 4px; background: linear-gradient(90deg, #52b898 0%, #20685f 100%); }
  .kyb-business__form-wrap { width: 496px; }
  .kyb-business__form-wrap h1 { color: #181d27; font-size: 24px; line-height: 32px; font-weight: 600; }
  .kyb-business__tabs { margin-top: 21px; display: flex; gap: 24px; border-bottom: 1px solid #eaecf0; }
  .kyb-business__tab { color: #535862; font-size: 16px; line-height: 24px; font-weight: 500; padding-bottom: 10px; text-decoration: none; }
  .kyb-business__tab--active { color: #20685f; border-bottom: 2px solid #20685f; }
  .kyb-business__form { margin-top: 20px; display: flex; flex-direction: column; gap: 21px; }
  .kyb-business__form label { display: flex; flex-direction: column; gap: 8px; color: #181d27; font-size: 14px; line-height: 18px; font-weight: 500; }
  .kyb-business__form input, .kyb-business__form textarea { width: 100%; border: 1px solid #d5d7da; border-radius: 8px; background: #fff; padding: 11px 12px; color: #181d27; font-size: 16px; line-height: 24px; font-weight: 500; resize: none; }
  .kyb-business__form textarea { min-height: 116px; }
  .kyb-select { display: flex; align-items: center; justify-content: space-between; width: 100%; border: 1px solid #d5d7da; border-radius: 8px; background: #fff; padding: 11px 12px; color: #181d27; font-size: 16px; line-height: 24px; font-weight: 500; }
  .kyb-business__next { margin-top: 4px; }
  @media (max-width: 1080px) { .kyb-business__content { flex-direction: column; gap: 36px; } .kyb-business__steps, .kyb-business__form-wrap { width: 100%; max-width: 496px; } }
</style>
