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

<Navbar onSelectCategory={handleCategorySelection} />
<NewsList {articles} />

<style>
  /* Global styles can go here */
</style>