<script>
  import NewsCard from "./NewsCard.svelte";
  export let articles = [];
</script>

<div class="container">
  <div class="row">
    {#if articles.length > 0}
      {#each articles as article}
        {#if article.title}
          <div class="newsItem col-lg-3 col-md-6">
            <NewsCard
              newsUrl={article.url}
              title={article.title}
              urlToImage={article.urlToImage
                ? article.urlToImage
                : "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"}
              author={article.author}
              publishedAt={article.publishedAt}
            />
          </div>
        {/if}
      {/each}
    {/if}
  </div>
</div>

<style>

</style>
