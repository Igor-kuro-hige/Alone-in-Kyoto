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
let articles = [
  {
    title: "Places to be alone with yourself",
    text: "Sometimes we want to be alone, not because we are lonely, but because we need time to reflect on our thoughts and feelings.",
  },
  {
    title: "Style",
    text: "Fashion is permanent, but style is eternal. It is a way to express our personality",
  },
  {
    title: "Music",
    text: "Within endless sea of music we choose something that resonates with our soul.",
  },
  {
    title: "Travel",
    text: "Traveling is a way to discover new places, cultures, and experiences. It allows us to step out of our comfort zone and broaden our perspective on the world.",
  },
  {
    title: "Thoughts",
    text: "Just my thoughts, nothing more. I write them down to remember and reflect on them later.",
  },
];

let html = articles
  .map((article) => {
    return `<article><h3>${article.title}</h3><p>${article.text}</p></article>`;
  })
  .join("");

document.querySelector("#articles-container").innerHTML = html;
