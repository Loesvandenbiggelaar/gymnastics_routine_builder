<script>
    const routes = ['/elements', '/routine_builder', '/rules'];
  </script>
  
  <nav>
    {#each routes as route}
      <a href={route} class:active={true}>
        
        {route.slice(1)} </a>
    {/each}
  </nav>
  
  <style>
    nav {
      /* Styles for your navigation */
    }
  
    a.active {
      /* Styles for the active link */
    }
  </style>