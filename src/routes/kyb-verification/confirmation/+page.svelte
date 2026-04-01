<script lang="ts">
  import { goto } from '$app/navigation';
  const abroadLogo = 'https://www.figma.com/api/mcp/asset/95c2bfa8-0cae-4190-bac6-13f90c2a39d3';

  const cards = [
    { title: 'Business Information', status: '100% completed', done: true, route: '/kyb-verification' },
    { title: 'Ownership and Management Structure', status: '100% completed', done: true, route: '/kyb-verification/ownership/saved' },
    { title: 'Regulatory and Compliance', status: '100% completed', done: true, route: '/kyb-verification/regulatory' },
    { title: 'Business Activities and Clients', status: '100% completed', done: true, route: '/kyb-verification/business-activities' }
  ];
</script>

<svelte:head>
  <title>Confirmation</title>
</svelte:head>

<div class="confirm-screen home-font">
  <main class="confirm-shell">
    <header class="confirm-header">
      <img src={abroadLogo} alt="Abroad" class="confirm-logo" />
      <button type="button" class="confirm-language"><span>🇬🇧</span><span>English</span><span>⌄</span></button>
    </header>

    <section class="confirm-body">
      <h1>Confirmation</h1>
      <p>Please take your time and go through your information submitted and confirm all details before you submit</p>

      <div class="confirm-list">
        {#each cards as card}
          <article class="confirm-item">
            <div>
              <h2>{card.title}</h2>
              <span class:ok={card.done}>{card.done ? '◉' : '◌'} {card.status}</span>
            </div>
            <button type="button" class="confirm-edit" on:click={() => goto(card.route)}>✎ Edit</button>
          </article>
        {/each}
      </div>

      <button type="button" class="confirm-submit confirm-submit--active" on:click={() => goto('/kyb-verification/submitted')}>
        Submit
      </button>
    </section>
  </main>
</div>

<style>
  .confirm-screen { min-height: 100vh; background: #f4f4f4; padding: 44px 32px 48px; }
  .confirm-shell { max-width: 1288px; margin: 0 auto; }
  .confirm-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 56px; }
  .confirm-logo { width: 150px; height: 29px; object-fit: contain; }
  .confirm-language { display: flex; align-items: center; gap: 8px; border: 1px solid #f2f4f7; border-radius: 8px; background: #fff; color: #1b1b1b; padding: 12px 16px; font-size: 16px; line-height: 24px; font-weight: 600; }
  .confirm-body { width: 496px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px; }
  .confirm-body h1 { color: #181d27; font-size: 36px; font-size: 34px; font-size: 24px; line-height: 32px; font-weight: 600; }
  .confirm-body p { color: #9d9d9d; font-size: 16px; line-height: 24px; font-weight: 500; }
  .confirm-list { display: flex; flex-direction: column; gap: 12px; }
  .confirm-item { background: #fafafa; border-radius: 15px; padding: 16px 17px; display: flex; align-items: center; justify-content: space-between; }
  .confirm-item h2 { color: #535862; font-size: 18px; line-height: 28px; font-weight: 600; }
  .confirm-item span { color: #858585; font-size: 16px; line-height: 24px; font-weight: 500; }
  .confirm-item span.ok { color: #5c9583; }
  .confirm-edit { height: 43px; border: 1px solid #f2f4f7; border-radius: 8px; background: #fff; color: #1b1b1b; font-size: 16px; line-height: 24px; font-weight: 600; padding: 0 12px; }
  .confirm-submit { width: 100%; height: 48px; border: 0; border-radius: 8px; background: linear-gradient(90deg, #52b898 0%, #20685f 100%); color: #fff; font-size: 16px; line-height: 24px; font-weight: 600; }
  .confirm-submit--active { opacity: 1; }
</style>
