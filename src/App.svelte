<script>
  import Navbar from './components/Navbar.svelte';
  import NewsList from './components/NewsList.svelte';
  import { newsStore, fetchNews } from './stores/newsStore.js';
  import { onMount } from 'svelte';

  let articles = [];
  let category = 'Science';

  const unsubscribe = newsStore.subscribe(store => {
    articles = store.articles;
    category = store.category;
  });

  function handleCategorySelection(selectedCategory) {
    fetchNews(selectedCategory);
  }

  onMount(() => {
    fetchNews(category);
  });
</script>
<header>
  <Navbar onSelectCategory={handleCategorySelection} />
</header>
<main>
  <h1>--&gt{category.toUpperCase()}&lt--</h1>
  <NewsList {articles} />
</main>

<style>
  /* Global styles can go here */
  h1{
    color: rgb(255, 131, 86);
  }
</style>