<!-- SCRIPT -->
<script>
    // Import Global Styles
    import '$lib/global.css'

    // Iconify for cool icons!
    import Icon from '@iconify/svelte';
    // Import to check routing URL
    import { page } from '$app/stores';
    const routes = [
        { name: 'Elements', path: '/elements', icon: 'mdi:magnify-scan' },
        { name: 'Routine Builder', path: '/routine_builder', icon: 'material-symbols:sports-gymnastics' },
        { name: 'Rules', path: '/rules', icon: 'material-symbols:book-4' },
    ];
    // Set currentPath to see if the link is active
    $: current_path = $page.route.id;

    $: current_lang = 'en';
</script>

<!-- HEADER COMPONENT -->
<header id="header">
  <a href="/" id="header_logo">Gymnastics Routine Builder</a>
  <nav>
    {#each routes as route}
      <a
      class="page_nav"
      href={route.path}
      class:active={current_path == route.path}>
        <Icon icon={route.icon} />
        {route.name}
    </a>
    {/each}
  </nav>
  <nav id="language_selector">
    {current_lang}
    <Icon icon="material-symbols:language" />
  </nav>
</header>
  <slot />

<!-- STYLES -->
<style>
header {
    display: flex;
    justify-content: space-between;
}
nav {
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 12px;
    /* Styles for your navigation */
}

a {
    text-decoration: none; /* Remove underline */
    color: inherit; /* Inherit color from parent element */
    font-size: 20px;
}

a.active {
    /* Styles for the active link */
    color: red;
}

/* Language Selector */
#language_selector {
/* Aligning the icons */
display: flex;
align-items: center;
gap: 0.2em;

/* Hover */
cursor: pointer;
}
</style>