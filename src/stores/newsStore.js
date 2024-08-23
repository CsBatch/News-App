import { writable } from 'svelte/store';

export const newsStore = writable({
  articles: [],
  category: 'Top-headlines'
});

let url="";
export function fetchNews(category) {
  const apiKey = import.meta.env.VITE_NEWSAPI_KEY;

  url = `https://newsapi.org/v2/everything?q=${category.toLowerCase()}&apiKey=${apiKey}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      newsStore.update(store => {
        return { ...store, articles: data.articles, category };
      });
    })
    .catch(error => {
      console.error('Error fetching news:', error);
    });
}