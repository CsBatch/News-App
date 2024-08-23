<script>
  export let newsUrl;
  export let title;
  export let urlToImage;
  export let author;
  export let publishedAt;
</script>

<div class="newsCards my-2">
  <a href={newsUrl}>
    <div class="card mb-3 text-white">
      <img
        src={urlToImage}
        class="rounded-start"
        alt="This could not be loaded"
        height="200px"/>

      <div class="card-body">
        <h5 class="card-title">
          {title.slice(0, 60)}...<small>Read More</small>
        </h5>
        <p class="card-text">
          {#if author!=="null"} by 
            <small class="">{author}</small>
            {:else}
            " "
          {/if}
        </p>
        <p class="card-text">
          <small class="">Published at : {publishedAt.slice(0, 10)} | {publishedAt.slice(11, 16)}</small>
        </p>
      </div>
    </div>
  </a>
</div>

<style>
    .card{
        border-radius: 20px;
        background-color: rgba(19, 19, 19, 0.827);
        box-shadow: inset 0 2px 20px -0px rgba(250, 214, 129, 0.701);
    }

    .card-body{
      color: rgb(253, 218, 162);
    }
    a{
      text-decoration: none;
    }

    @media (max-width: 955px){
      .newsCards{
        padding: 0 25px 0 25px;
        height: 400px;
      }

      .newsCards a .card{
        height: 100%;
      }
    }
</style>