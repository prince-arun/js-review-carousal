let reviews = [
  {
    id: 1,
    name: "Anamika",
    job: "MERN developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "A MERN (MongoDB, Express.js, React, and Node.js) developer is skilled in using these technologies to develop full-stack web applications. They utilize MongoDB for the database, Express.js as the web application framework, React for the front-end user interface, and Node.js as the server-side runtime environment.",
  },
  {
    id: 2,
    name: "Angelinaa",
    job: "Web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "A web designer is a creative professional who designs and creates visually appealing and user-friendly websites. They have expertise in graphic design, layout, color schemes, and typography to ensure an aesthetically pleasing and functional online presence for businesses and individuals.",
  },
  {
    id: 3,
    name: "Arun Prince",
    job: "Blockchain Developer",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "A blockchain developer specializes in developing decentralized applications (DApps) and smart contracts using blockchain technology. They have a deep understanding of various blockchain platforms, such as Ethereum or Hyperledger, and possess programming skills to implement secure and transparent decentralized solutions.",
  },
  {
    id: 4,
    name: "Saravanan",
    job: "Ai Developer",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "An AI developer is skilled in designing, developing, and implementing artificial intelligence solutions. They possess expertise in machine learning, deep learning, natural language processing, and data analysis to create intelligent systems that can automate tasks, make predictions, and improve decision-making processes. ",
  },
];

let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let randomBtn = document.querySelector(".random-btn");
let author = document.getElementById("author");
let img = document.getElementById("person-img");
let info = document.getElementById("info");
let job = document.getElementById("job");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

const showPerson = (person) => {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
