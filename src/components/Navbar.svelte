<script>
  import logo from "../lib/images/svelte-logo.svg";
  import github from "../lib/images/github.svg";

  export let onSelectCategory;

  const categories = [
    "Top-headlines",
    "Science",
    "Sports",
    "Business",
    "Technology",
    "Health",
  ];

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
    <ul>
      {#each categories as category}
        <li>
          <a href="#{category}" on:click={() => handleCategoryClick(category)}>
            {category}
          </a>
        </li>
      {/each}
    </ul>
  </nav>

  <div class="corner">
    <a href="https://github.com/CsBatch" class="github">
      <img src={github} alt="GitHub" />
    </a>
  </div>
</div>

<style>
  .navbar {
    display: flex;
    position: fixed;
    width: 100vw;
    justify-content: space-between;
    z-index: 1000;
  }

  .corner {
    width: 5em;
    height: 5em;
  }

  .corner a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .corner img {
    width: 3em;
    height: 3em;
    object-fit: contain;
  }
  .corner .github img {
    filter: brightness(10%) saturate(100%) invert(60%) sepia(91%) saturate(7441%) hue-rotate(0deg) brightness(104%) contrast(101%);
  }

  li {
    cursor: pointer;
    padding: 5px 10px;
  }

  nav {
    color: rgb(255, 120, 10);
    text-shadow: 0px 0px 5px black;
    display: flex;
    justify-content: center;
    border-radius: 16px;
    background-color: rgba(19, 19, 19, 0.827);
        box-shadow: inset 0 1px 20px -5px rgba(250, 214, 129, 0.499);
    backdrop-filter: blur(2.7px);
    -webkit-backdrop-filter: blur(2.7px);
    /* border: 1px solid rgb(255, 255, 255); */
  }

  ul {
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
  ul li{
    display: flex;
  }

  ul a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    color: var(--color-text);
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
    flex: 1;
  }

  a:hover {
    color: rgb(255, 255, 255);
  }

  @media (max-width: 955px) {

    .navbar{
      padding-top: 10px;
    }
    .corner img {
    width: 10em;
    height: 10em;
    object-fit: contain;
  }
    nav {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      justify-content: space-between;
      gap: 0;
      padding: 5px;
      overflow-x: scroll;
    }

    a {
      font-size: 0.2rem;
      padding: 8px 10px;
    }

    .corner {
      width: 3em;
      height: 1em;
    }
  }
</style>
