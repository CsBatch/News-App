import { writable } from 'svelte/store';

export const newsStore = writable({
  articles: [],
  category: 'Top-headlines'
});

let url="";
export function fetchNews(category) {

  url = `https://newsapi.org/v2/everything?q=${category.toLowerCase()}&apiKey=f32b03f1da254704ae9c19d921bbfb72`;
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