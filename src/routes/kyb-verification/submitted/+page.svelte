<script lang="ts">
  const abroadLogo = 'https://www.figma.com/api/mcp/asset/346739ba-1421-40c5-9e0c-b3279cd292f7';
</script>

<svelte:head>
  <title>Submission Received</title>
</svelte:head>

<div class="submitted-screen home-font">
  <main class="submitted-shell">
    <header class="submitted-header">
      <img src={abroadLogo} alt="Abroad" class="submitted-logo" />
      <button type="button" class="submitted-language"><span>🇬🇧</span><span>English</span><span>⌄</span></button>
    </header>

    <section class="submitted-content">
      <div class="submitted-icon-wrap">
        <div class="submitted-icon">🕒</div>
      </div>
      <h1>Thank you for submitting your information!</h1>
      <p>Our review process typically takes 2 to 5 business days. If we require any additional details or to confirm the next steps, we will reach out to you via email.</p>
      <p>We appreciate your cooperation and look forward to working with you.</p>
    </section>
  </main>
</div>

<style>
  .submitted-screen { min-height: 100vh; background: #f4f4f4; padding: 44px 32px 48px; }
  .submitted-shell { max-width: 1288px; margin: 0 auto; }
  .submitted-header { display: flex; align-items: center; justify-content: space-between; }
  .submitted-logo { width: 150px; height: 29px; object-fit: contain; }
  .submitted-language { display: flex; align-items: center; gap: 8px; border: 1px solid #f2f4f7; border-radius: 8px; background: #fff; color: #1b1b1b; padding: 12px 16px; font-size: 16px; line-height: 24px; font-weight: 600; }
  .submitted-content { max-width: 663px; margin: 190px auto 0; display: flex; flex-direction: column; align-items: center; text-align: center; }
  .submitted-icon-wrap { width: 110px; height: 110px; border-radius: 55px; border: 1.279px solid #f3f3f3; background: #fcfcfc; display: grid; place-items: center; }
  .submitted-icon { width: 74px; height: 74px; border-radius: 999px; display: grid; place-items: center; color: #49536e; font-size: 42px; line-height: 1; }
  .submitted-content h1 { margin-top: 12px; color: #181d27; font-size: 20px; line-height: 30px; font-weight: 600; }
  .submitted-content p { margin-top: 16px; max-width: 590px; color: #535862; font-size: 16px; line-height: 24px; font-weight: 500; }
</style>
