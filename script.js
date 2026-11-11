function greetVisitor() {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  console.log(greeting + ", welcome to Alone in Kyoto");
}

greetVisitor();

import { categories, allArticles } from "./data.js";
async function initPage() {
  let headerResponse = await fetch("header.html");
  let headerHtml = await headerResponse.text();
  document.querySelector("#header-placeholder").innerHTML = headerHtml;
  let response = await fetch("footer.html");
  let footerHtml = await response.text();
  document.querySelector("#footer-placeholder").innerHTML = footerHtml;
  let musicBtn = document.querySelector("#music-toggle");
  let music = document.querySelector("#bg-music");
  let volumeSlider = document.querySelector("#volume-slider");
  musicBtn.addEventListener("click", function () {
    if (music.paused) {
      music.play();
      musicBtn.textContent = "⏸ Pause";
    } else {
      music.pause();
      musicBtn.textContent = "🎵 Play";
    }
  });
  volumeSlider.addEventListener("input", function () {
    music.volume = volumeSlider.value;
  });

  let form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("Form is being submitted");
    });
  }

  let sortedArticles = allArticles.sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );
  let latestArticles = sortedArticles.slice(0, 3);
  let html = latestArticles
    .map((article) => {
      return `<article><h3>${article.title}</h3><p>${article.text}</p></article>`;
    })
    .join("");

  let articlesContainer = document.querySelector("#latest-container");
  if (articlesContainer) {
    articlesContainer.innerHTML = html;
  }

  let pageSlug = document.body.id.replace("-page", "");
  console.log(pageSlug);

  let filteredArticles = allArticles.filter((article) => {
    return article.category === pageSlug;
  });

  let newHtml = filteredArticles
    .map((article) => {
      return `<article><h3>${article.title}</h3><p>${article.text}</p></article>`;
    })
    .join("");

  let blogArticlesContainer = document.querySelector("#articles-container");
  if (blogArticlesContainer) {
    blogArticlesContainer.innerHTML = newHtml;
  }

  let itemRadio = document.querySelector('input[value="item"]');
  let guideRadio = document.querySelector('input[value="guide"]');
  let durationSelect = document.querySelector("#duration");
  if (itemRadio && guideRadio && durationSelect) {
    guideRadio.addEventListener("click", function () {
      durationSelect.required = true;
    });
    itemRadio.addEventListener("click", function () {
      durationSelect.required = false;
    });
  }
}
initPage();
