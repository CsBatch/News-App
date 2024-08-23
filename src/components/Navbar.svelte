<script>
  import logo from "../lib/images/svelte-logo.svg";
  import github from "../lib/images/github.svg";

  export let onSelectCategory;

  const categories = ["Top-headlines", "Science", "Sports", "Business", "Technology", "Health"];

  function handleCategoryClick(category) {
    onSelectCategory(category);
  }
  
</script>

<div class="navbar">
  <div class="corner">
    <a href="https://kit.svelte.dev">
      <img src={logo} alt="SvelteKit" />
    </a>
  </div>
  <nav>
    <svg viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
    </svg>
    <ul>
      {#each categories as category}
      <li>
        <a href="#{category}" on:click={() => handleCategoryClick(category)}>
          {category}
        </a>
      </li>
      {/each}
    </ul>
    <svg viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
    </svg>
  </nav>

  <div class="corner">
    <a href="https://github.com/sveltejs/kit">
      <img src={github} alt="GitHub" />
    </a>
  </div>
</div>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
  }

  .corner {
    width: 3em;
    height: 3em;
  }

  .corner a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .corner img {
    width: 2em;
    height: 2em;
    object-fit: contain;
  }

  li {
    cursor: pointer;
    padding: 5px 10px;
  }

  nav {
    color: white;
    display: flex;
    justify-content: center;
    --background: rgba(0, 0, 0, 0.7);
  }

  svg {
    width: 2em;
    height: 3em;
    display: block;
  }

  path {
    fill: var(--background);
  }

  ul{
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  ul a{
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    color: var(--color-text);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--color-theme-1);
  }
</style>
