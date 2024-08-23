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
        height="300px"/>

      <div class="card-body">
        <h5 class="card-title">
          {title.slice(0, 60)}...<small>Read More</small>
        </h5>
        <p class="card-text"><small class="text-white">{author}</small></p>
        <p class="card-text">
          <small class="text-white">Published at : {publishedAt}</small>
        </p>
      </div>
    </div>
  </a>
</div>

<style>
    .card{
        border-radius: 20px;
        background-color: rgb(10, 10, 28);

    }
</style>