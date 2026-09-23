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
document.addEventListener("DOMContentLoaded", function () {
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

  let categories = [
    {
      name: "Places to be alone",
      slug: "place-to-be-alone",
      description:
        "Sometimes we want to be alone, not because we are lonely, but because we need time to reflect on our thoughts and feelings.",
    },
    {
      name: "Style",
      slug: "style",
      description:
        "Fashion is permanent, but style is eternal.It is a way to express our personality",
    },
    {
      name: "Music",
      slug: "music",
      description:
        "Within endless sea of music we choose something that resonates with our soul.",
    },
    {
      name: "Travel",
      slug: "travel",
      description:
        "Traveling is a way to discover new places, cultures, and experiences. It allows us to step out of our comfort zone and broaden our perspective on the world.",
    },
    {
      name: "Thoughts",
      slug: "thoughts",
      description:
        "Just my thoughts, nothing more. I write them down to remember and reflect on them later.",
    },
  ];

  let allArticles = [
    {
      title: "Indigo",
      category: "style",
      text: "One of the most popular colors in traditional Japanese fashion.",
      date: "2026-08-01",
    },
    {
      title: "Kogin",
      category: "style",
      text: "A traditional Japanese textile technique characterized by its distinctive stitching patterns.",
      date: "2026-08-02",
    },
    {
      title: "Sashiko",
      category: "style",
      text: "A traditional Japanese embroidery style known for its simple, geometric patterns.",
      date: "2026-08-03",
    },
    {
      title: "Fushimi Inari",
      category: "travel",
      text: "One of the most famous temples in Kyoto, known for its thousands of red torii gates.",
      date: "2026-08-01",
    },
    {
      title: "Enoshima",
      category: "travel",
      text: "A small island off the coast of Kamakura, known for its shrine and scenic views.",
      date: "2026-08-02",
    },
    {
      title: "Odaiba",
      category: "travel",
      text: "A modern entertainment district in Tokyo with shopping centers, attractions, and a beach.",
      date: "2026-08-03",
    },
    {
      title: "is it ok to be alone sometimes?",
      category: "thoughts",
      text: "Being alone doesn't mean being lonely. It can be a valuable opportunity for self-reflection and personal growth.",
      date: "2026-08-01",
    },
    {
      title: "How to become stronger",
      category: "thoughts",
      text: "Building resilience and inner strength takes time and practice.",
      date: "2026-08-02",
    },
    {
      title: "Piece of Mind",
      category: "thoughts",
      text: "Maintaining a balanced mindset is crucial for overall well-being.",
      date: "2026-08-03",
    },
    {
      title: "Tool",
      category: "music",
      text: "Tool is an American rock band known for their progressive and experimental sound.",
      date: "2026-08-01",
    },
    {
      title: "Relax",
      category: "music",
      text: "Relaxing music to help you unwind and de-stress.",
      date: "2026-08-02",
    },
    {
      title: "Meditation",
      category: "music",
      text: "Calming music to support your meditation practice.",
      date: "2026-08-03",
    },
    {
      title: "Kamogawa river walk",
      category: "place-to-be-alone",
      text: `You flow with the river, and your thoughts are your alone. Relax and
          enjoy adventure that will bring balance to your mind and soul.`,
      date: "2026-08-01",
    },
    {
      title: "Kyoto park",
      category: "place-to-be-alone",
      text: `Huge and quiet, just avoid the center, where usually tourist gather.
          Find a bench, or bring blanket with you, and enjoy the nature, and
          your own thoughts.`,
      date: "2026-08-02",
    },
    {
      title: "Gion walk",
      category: "place-to-be-alone",
      text: `Anceint streets are like a time machine, you can imagine being here a hundread years ago, get lost in your thoughts, and enjoy the moment,and the beauty of the city.`,
      date: "2026-08-03",
    },
  ];

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
});
