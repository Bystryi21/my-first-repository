// const div = document.createElement("div");
// div.classList.add("wrapper");
// const ul = document.querySelector("ul");
// console.log(ul);
// console.log(div);
// ul.appendChild(div);

// //
// const header = document.createElement("h1");
// header.textContent = "DOM(Document Object Model)";
// console.log(header);
// div.insertAdjacentElement("beforebegin", header);
// const ulList = `<ul>
// <li>1</li>
// <li>2</li>
// <li>3</li>
// </ul>`;
// div.innerHTML = ulList;
// //
// //
// //
// const img = document.createElement("img");
// console.log(img);
// img.src = "https://picsum.photos/240";

// img.width = 240;
// img.classList = "Super Man";
// div.appendChild(img);
// //
// //
// //
// const elemHtml = `<div class="pDiv">
// <p>1</p>
// <p>2</p>
// </div>`;
// const ulListTwo = div.querySelector("ul");
// ulListTwo.insertAdjacentHTML("beforebegin", elemHtml);
// //
// const pDiv = document.querySelector(".pDiv");
// pDiv.children[1].classList.add("text");
// console.log(pDiv.children);
// pDiv.firstElementChild.remove();
// //
// //
// //
// const generateAutoCard = (brand, color, year) => {
//   const currentDate = new Date();
//   const currentYear = currentDate.getFullYear();
//   return `<div class="autoCard">
//   <h2>${brand.toUpperCase()} ${year}</h2>
//   <p>Автомобиль ${brand.toUpperCase()} - ${year} года. Возраст авто ${
//     currentYear - year
//   } лет<p>
//   <p>Цвет: ${color}</p>
//   <button type="button" class="btn">Удалить</button></div>`;
// };

// const carsDiv = document.createElement("div");
// carsDiv.classList.add("autos");

// const carList = [
//   { brand: "Tesla", year: "2015", color: "Красный" },
//   { brand: "Lexus", year: "2016", color: "Серый" },
//   { brand: "Nissan", year: "2012", color: "Черный" },
// ];

// const carsHtml = carList
//   //
//   .map((car) => {
//     return generateAutoCard(car.brand, car.color, car.year);
//   })
//   .join("");
// carsDiv.innerHTML = carsHtml;
// console.log(carsDiv);
// div.insertAdjacentElement("beforebegin", carsDiv);

// const buttons = document.querySelectorAll(".btn");
// console.log(buttons);
// function handleClick(e) {
//   const currentButton = e.currentTarget;
//   currentButton.closest(".autoCard").remove();
//   console.log(currentButton.parentElement);
// }
// buttons.forEach((button) => {
//   button.addEventListener("click", handleClick);
// });

// //////////////////////////////////PROMISE

// console.log("Request data...");
// setTimeout(() => {
//   console.log("Preparing data...");
//   const backendData = {
//     server: "avs",
//     port: 2000,
//     status: "working",
//   };
//   setTimeout(() => {
//     backendData.modified = true;
//     console.log("Data resived", backendData);
//   }, 2000);
// }, 2000);

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Preparing data...");
//     const backendData = {
//       server: "avs",
//       port: 2000,
//       status: "working",
//     };
//     resolve(backendData);
//   }, 2000);
// });

// p.then((data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true;
//       resolve(data);
//     }, 2000);
//   });
// })
//   .then((clientData) => {
//     clientData.fromPromise = true;
//     return clientData;
//   })
//   .then((data) => {
//     console.log("Modified data", data);
//   })
//   .catch((err) => {
//     console.error("Error", err);
//   })
//   .finally(() => {
//     console.log("Finally");
//   });

// const sleep = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(), ms);
//   });
// };

// // sleep(2000).then(() => console.log("After 2 sec"));
// // sleep(3000).then(() => console.log("After 3 sec"));
// Promise.all([sleep(2000), sleep(5000)]).then(() => {
//   console.log("All promises");
// });
// Promise.race([sleep(2000), sleep(5000)]).then(() => {
//   console.log("Race promises");
// });

// const form = document.querySelector("#task-form");
// form.addEventListener("submit", handlerSubmit);
// function handlerSubmit(evt) {
//   evt.preventDefault();
//   const data = {};
//   new FormData(evt.target).forEach((value, key) => {
//     data[key] = value;
//     console.log(data);
//   });
// }

// //////////////////////////Promise 2'

// function fetchUserInfo(callback) {
//   setTimeout(() => {
//     // fetch;
//     const data = { id: 1, name: "Alex" };
//     callback(data);
//   }, 1000);
// }

// function run() {
//   fetchUserInfo((userInfo) => {
//     console.log(userInfo);
//   });
// }

// run();
//
//
//
// ///////////////////Асинхронні операції

// console.log("Start");
// console.log("Start 2");

// function timeOutTwoSeconds() {
//   console.log("timeOutTwoSeconds");
// }

// setTimeout(function () {
//   console.log("Inside timeout, after 2000 seconds");
// }, 2000);

// setTimeout(timeOutTwoSeconds, 2000);

// console.log("End");
//
//
//
/////////////////////////////// Цикли

// for (let i = 0; i < 4; i++) {
//   console.log(i);
// }

// const arr = ["a", "b", "c"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let x = 0;

// while (x <= 3) {
//   console.log(x);
//   x++;
// }

// let word = "";
// while (word.length < 5) {
//   const value = prompt("Введіть букву");
//   if (value.length === 0) {
//     break;
//   }

//   word = word + value;
//   console.log(word);
// }

// do {
//   x++;
//   console.log(x);
// } while (x < 3);
// const arr = ["a", "b", "c"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (const iter of arr) {
//   console.log(iter);
// }

// const user = {
//   name: "John",
//   age: "21",
//   isMarried: false,
// };

// for (key in user) {
//   if (key === "age") {
//     break;
//   }
//   console.log(key, user[key]);
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (i = 0; i <= 10; i++) {
//   console.log(i);
// }

// const input = prompt("Введіть число");
// const number = Number(input);
// if (!isNaN(number) && number >= 0 && number <= 10) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${number} * ${i} = ${i * number} `);
//   }
// }

// /////////////ASYNC AWAIT
// const data = await promise
// async function getData() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data2 = await data.json();
//   console.log(data2);
// .then((data) => {
//   return data.json();
// })
// .then((data) => {
//   console.log(data);
// })
// .catch((error) => {});
// }

// getData();

// async function errorTest() {
//   const data = await fetch("sdgdsgdsgdsgdgds").catch((error) => {
//     console.log("error", error);
//     return { error: true };
//   });
//   console.log(data);
//   let info = [];
//   try {
//     const data = await fetch("dsgsgdg1s");
//     console.log(data);

//     info = await data.json();
//     console.log(info);
//   } catch (error) {
//     console.log(error);
//   }
//   if (info.lemgth === 0) {
//     return;
//   }
//   const text = info[0].text;
//   console.log("dsgsgdg1s");
//
// }
// errorTest();
// const URL = "https://jsonplaceholder.typicode.com/todos/";

// const btn = document.querySelector("#my-button");
// const btn2 = document.querySelector("#my-button2");
// const loading = document.querySelector("#loading");
// // console.log(btn2);
// btn.addEventListener("click", () => {
//   addLoader();
//   fetch(URL)
//     .then((data) => {
//       return data.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .finally(() => {
//       removeLoader();
//     });
// });
// //
// btn2.addEventListener("click", async () => {
//   addLoader();
//   const meta = await fetch(URL);
//   const data = await meta.json();
//   removeLoader();
//   console.log(data);
// });

// function addLoader() {
//   loading.classList.add("show");
// }

// function removeLoader() {
//   loading.classList.remove("show");
// }

// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }
// async function loadJson(url) {
//   try {
//     const meta = await fetch(url);
//     if (!meta.ok) {
//       throw new Error(`${meta.status}`);
//     }
//     const data = await meta.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// loadJson("no-such-user.json");
//
//
// TEST HOMEWORK 12
// const api = "https://pixabay.com/api/";
// const apiKey = "44781462-ae4aaccc0a5ec19c0259ffb3b";
// const imageType = "photo";
// const orientation = "horizontal";
// const safeSearch = true;
// const loader = document.querySelector("#loader");
// const form = document.querySelector("#search-form");
// const gallery = document.querySelector(".gallery");
// const page = 1;
// const perPage = 15;
// const totalPages = Math.ceil(100 / perPage);

// async function fetchImage(q) {
//   const url = `${api}?key=${apiKey}&q=${encodeURIComponent(
//     q
//   )}&image_type=${imageType}&orientation=${orientation}&safesearch=${safeSearch}`;
//   try {
//     const response = await axios.get(url);
//     if (response.status !== 200) {
//       throw new Error("Network response was not ok");
//     }
//     if (response.data.hits.length === 0) {
//       throw new Error("No images found");
//     }
//     return response.data.hits;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

// form.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   const searchQuery = evt.target.search.value.trim();

//   if (!searchQuery) {
//     iziToast.error({
//       title: "Error",
//       message: "Search field cannot be empty!",
//     });
//     return;
//   }

//   loader.style.display = "block";

//   fetchImage(searchQuery)
//     .then((images) => {
//       loader.style.display = "none";
//       gallery.innerHTML = createModalWindow(images);
//       lightbox.refresh();
//     })
//     .catch((error) => {
//       loader.style.display = "none";
//       if (error.message === "No images found") {
//         iziToast.error({
//           title: "Error",
//           message:
//             "Sorry, there are no images matching your search query. Please try again!",
//         });
//       } else {
//         iziToast.error({
//           title: "Error",
//           message: "Failed to fetch images. Please try again later.",
//         });
//       }
//     });
// });

// function createModalWindow(images) {
//   return images
//     .map(
//       (
//         image
//       ) => `<a href="${image.largeImageURL}" data-lightbox="gallery" data-title="${image.tags}">
//         <img src="${image.webformatURL}" alt="${image.tags}" />
//         <div class="info">
//           <p><strong>Likes:</strong> ${image.likes}</p>
//           <p><strong>Views:</strong> ${image.views}</p>
//           <p><strong>Comments:</strong> ${image.comments}</p>
//           <p><strong>Downloads:</strong> ${image.downloads}</p>
//         </div>
//       </a>`
//     )
//     .join("");
// }

// let lightbox = new SimpleLightbox(".gallery a", {
//   captionsData: "alt",
//   captionDelay: 250,
// });

//
//CLASS WORK
// const searchForm = document.querySelector(".search-form");
// const articlesContainer = document.querySelector(".articles");
// const loadMoreBtn = document.querySelector('[data-action="load-more"]');
// const spinner = document.querySelector(".spinner");

// const hiddenClass = "is-hidden";

// function hide(button) {
//   button.classList.add(hiddenClass);
// }

// function show(button) {
//   button.classList.remove(hiddenClass);
// }

// function disable(button, spinner) {
//   button.disabled = true;
//   spinner.classList.remove(hiddenClass);
// }

// function enable(button, spinner) {
//   button.disabled = false;
//   spinner.classList.add(hiddenClass);
// }

// const BASE_URL = "http://newsapi.org";
// const ENDPOINT = "v2/everything";
// const API_KEY = "dd82ff3604224bf1b224da3ef75c9135";

// axios.defaults.baseURL = BASE_URL;

// function getNews({ q = "", page = 1, pageSize = 5 } = {}) {
//   return axios
//     .get(ENDPOINT, {
//       params: {
//         apiKey: API_KEY,
//         q,
//         page,
//         pageSize,
//         language: "en",
//       },
//     })
//     .then(({ data }) => data);
// }

// const params = {
//   q: "",
//   page: 1,
//   pageSize: 5,
//   maxPage: 0,
// };

// // ховаємо кнопку при першому завантаженні сторінки
// hide(loadMoreBtn);

// searchForm.addEventListener("submit", handleSearch);

// async function handleSearch(event) {
//   event.preventDefault(); // step 1.1

//   // step 1.2.
//   articlesContainer.innerHTML = "";
//   params.page = 1;

//   const form = event.currentTarget;
//   params.q = form.elements.query.value.trim(); // step 1.3.

//   // 1.4.
//   if (!params.q) {
//     Notiflix.Notify.failure("Введіть запит!");
//     form.reset();
//     return;
//   }

//   // перед запитом показую кнопку та включаю спінер
//   show(loadMoreBtn);
//   disable(loadMoreBtn, spinner);

//   try {
//     // отримали відповідь від серверу з новинами
//     const { articles, totalResults } = await getNews(params);

//     // порахували максимальну сторінку яка можлива в нашій пошуковій видачі (для цього треба кількість усіх нови поділити на кількість новин на одній сторінці)
//     params.maxPage = Math.ceil(totalResults / params.pageSize);

//     // малюємо розмітку
//     appendArticlesMarkup(articles);

//     //перевірка на те, що по-перше, у нас взагалі є результати, і на те, що кількість статей не дорівнює кількості всіх результатів (якщо вони рівні, то у нас не існує наступних сторінок)
//     if (articles.length > 0 && articles.length !== totalResults) {
//       // розблоковуємо кнопку для натискань
//       enable(loadMoreBtn, spinner);
//       // коли кнопка розблокується і стане доступною для взаємодії - ми повісимо на неї обробник
//       loadMoreBtn.addEventListener("click", handleLoadMore);
//     } else {
//       // ховаємо кнопку якщо немає результатів по запиту, або не існує наступної сторінки
//       hide(loadMoreBtn);
//     }

//     console.log(articles, totalResults);
//     console.log(params);
//   } catch (err) {
//     console.log(err);
//     Notiflix.Notify.failure(`Помилка під час запиту: ${err}`);
//   } finally {
//     form.reset();
//   }
// }

// /*
//  1. збільшуємо значення сторінки на 1
//  2. відключаємо кнопку та включаємо спінер
//  3. робимо запит на сервер
//  4. отримуємо відповідь
//  5. відмальовуємо розмітку
//  6. після запиту: включити кнопку та перевірити чи не досягли ми ліміту наших сторінок (перевірити поточну сторінку та максимальну сторінку яку ми порахували раніше), якщо ми досягли останньої сторінки, то ховаємо кнопку(+ повідомлення) та видаляємо слухача подій з нашої кнопки

// */

// async function handleLoadMore() {
//   params.page += 1;
//   disable(loadMoreBtn, spinner);

//   try {
//     // отримали відповідь від серверу з новинами
//     const { articles } = await getNews(params);

//     // малюємо розмітку
//     appendArticlesMarkup(articles);
//   } catch (err) {
//     console.log(err);
//     Notiflix.Notify.failure(`Помилка під час запиту: ${err}`);
//   } finally {
//     // розблоковуємо кнопку для натискань
//     enable(loadMoreBtn, spinner);

//     // якщо поточна сторінка рівна максимальні сторінці, то наступних сторінок не існує
//     if (params.page === params.maxPage) {
//       hide(loadMoreBtn);
//       loadMoreBtn.removeEventListener("click", handleLoadMore);
//     }
//   }
// }

// //
// //
// //
// //
// //
// //
// //
// //
// //
// function appendArticlesMarkup(articles) {
//   const markup = articles
//     .map(
//       ({ url, urlToImage, title, author, description }) => `
//    <li>
//      <a href="${url}" target="_blank" rel="noopener noreferrer">
//        <article>
//          <img src="${urlToImage}" alt="" width="480">
//          <h2>${title}</h2>
//          <p>Posted by: ${author}</p>
//          <p>${description}</p>
//        </article>
//      </a>
//    </li>`
//     )
//     .join("");

//   articlesContainer.insertAdjacentHTML("beforeend", markup);
// }

//
//
//
// NEW HOME WORK
// const gallery = document.querySelector(".gallery");
// const loadMoreBtn = document.querySelector('[data-action="load-more"]');
// const spinner = document.querySelector(".spinner");
// const searchForm = document.querySelector(".search-form");

// const hiddenClass = "is-hidden";
// const API_KEY = "44781462-ae4aaccc0a5ec19c0259ffb3b";
// const imageType = "photo";
// const orientation = "horizontal";
// const safeSearch = true;

// let q = "";
// let page = 1;
// let perPage = 15;
// let maxPage = 0;

// const api = "https://pixabay.com/api/";

// function hide(button) {
//   button.classList.add(hiddenClass);
// }

// function show(button) {
//   button.classList.remove(hiddenClass);
// }

// function disable(button, spinner) {
//   button.disabled = true;
//   spinner.classList.remove(hiddenClass);
// }

// function enable(button, spinner) {
//   button.disabled = false;
//   spinner.classList.add(hiddenClass);
// }

// async function fetchImages(q, page, perPage) {
//   const url = `${api}?key=${API_KEY}&q=${encodeURIComponent(
//     q
//   )}&image_type=${imageType}&orientation=${orientation}&safesearch=${safeSearch}&page=${page}&per_page=${perPage}`;

//   try {
//     const response = await axios.get(url);

//     if (response.status !== 200) {
//       throw new Error("Network response was not ok");
//     }

//     const { hits, totalHits } = response.data;

//     return { hits, totalHits };
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

// hide(loadMoreBtn);

// searchForm.addEventListener("submit", handleSearch);

// async function handleSearch(event) {
//   event.preventDefault();

//   gallery.innerHTML = "";
//   page = 1;

//   const form = event.currentTarget;
//   q = form.elements.search.value.trim();

//   if (!q) {
//     iziToast.error({
//       title: "Error",
//       message: "Search field cannot be empty!",
//     });
//     return;
//   }

//   show(loadMoreBtn);
//   disable(loadMoreBtn, spinner);

//   try {
//     const { hits, totalHits } = await fetchImages(q, page, perPage);

//     maxPage = Math.ceil(totalHits / perPage);
//     appendImagesMarkup(hits);

//     if (hits.length > 0 && hits.length !== totalHits) {
//       enable(loadMoreBtn, spinner);
//       loadMoreBtn.addEventListener("click", handleLoadMore);
//     } else {
//       hide(loadMoreBtn);
//     }
//   } catch (error) {
//     console.error(error);
//     iziToast.error({
//       title: "Error",
//       message: "Failed to fetch images. Please try again later.",
//     });
//   } finally {
//     form.reset();
//   }
// }

// async function handleLoadMore() {
//   page += 1;
//   disable(loadMoreBtn, spinner);

//   try {
//     const { hits } = await fetchImages(q, page, perPage);
//     appendImagesMarkup(hits);
//   } catch (error) {
//     console.error(error);
//     iziToast.error({
//       title: "Error",
//       message: "Failed to fetch more images. Please try again later.",
//     });
//   } finally {
//     enable(loadMoreBtn, spinner);

//     if (page === maxPage) {
//       hide(loadMoreBtn);
//       loadMoreBtn.removeEventListener("click", handleLoadMore);
//     }
//   }
// }

// function appendImagesMarkup(images) {
//   const markup = images
//     .map(
//       (image) => `<li>
//         <a href="${image.largeImageURL}" data-lightbox="gallery" data-title="${image.tags}">
//           <img src="${image.webformatURL}" alt="${image.tags}" />
//           <div class="info">
//             <p><strong>Likes:</strong> ${image.likes}</p>
//             <p><strong>Views:</strong> ${image.views}</p>
//             <p><strong>Comments:</strong> ${image.comments}</p>
//             <p><strong>Downloads:</strong> ${image.downloads}</p>
//           </div>
//         </a>
//       </li>`
//     )
//     .join("");

//   gallery.insertAdjacentHTML("beforeend", markup);
// }

// let lightbox = new SimpleLightbox(".gallery a", {
//   captionsData: "alt",
//   captionDelay: 250,
// });

// ReBuild Home Work
const API_KEY = "44781462-ae4aaccc0a5ec19c0259ffb3b";
const api = "https://pixabay.com/api/";
const imageType = "photo";
const orientation = "horizontal";
const safeSearch = true;

const gallery = document.querySelector(".gallery");
const loadMoreBtn = document.querySelector('[data-action="load-more"]');
const spinner = document.querySelector(".spinner");
const searchForm = document.querySelector(".search-form");
const hiddenClass = "is-hidden";
let q = "";
let page = 1;
let perPage = 15;
let maxPage = 0;

async function fetchImages(q, page, perPage) {
  const url = `${api}?key=${API_KEY}&q=${encodeURIComponent(
    q
  )}&image_type=${imageType}&orientation=${orientation}&safesearch=${safeSearch}&page=${page}&per_page=${perPage}`;
  // console.log(url);
  try {
    const response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error("Network response was nor ok");
    }
    const { hits, totalHits } = response.data;
    return { hits, totalHits };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function hide(button) {
  button.classList.add("is-hidden");
}

function show(button) {
  button.classList.remove("is-hidden");
}

function disable(button, spinner) {
  button.disabled = true;
  spinner.classList.remove("is-hidden");
}

function enable(button, spinner) {
  button.disabled = false;
  spinner.classList.add("is-hidden");
}
// fetchImages("example query", 1, 15);

hide(loadMoreBtn);

searchForm.addEventListener("submit", handleSearch);

async function handleSearch(event) {
  event.preventDefault();

  gallery.innerHTML = "";
  page = 1;

  const form = event.currentTarget;
  q = form.elements.search.value.trim();
  if (!q) {
    iziToast.error({
      title: "Error",
      message: "Search field cannot be empty!",
    });
    return;
  }

  show(loadMoreBtn);
  disable(loadMoreBtn, spinner);

  try {
    const { hits, totalHits } = await fetchImages(q, page, perPage);

    if (hits.length === 0) {
      iziToast.warning({
        title: "No Results",
        message: "Sorry, there are no images matching your search query.",
      });
      hide(loadMoreBtn);
      return;
    }

    maxPage = Math.ceil(totalHits / perPage);
    appendImagesMarkup(hits);

    if (hits.length > 0 && hits.length !== totalHits) {
      enable(loadMoreBtn, spinner);
      loadMoreBtn.addEventListener("click", handleLoadMore);
    } else {
      hide(loadMoreBtn);
    }
    smoothScroll();
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: "Error",
      message: "Failed to fetch images. Please try again later.",
    });
  } finally {
    form.reset();
  }
}

async function handleLoadMore() {
  page += 1;
  disable(loadMoreBtn, spinner);
  try {
    const { hits } = await fetchImages(q, page, perPage);
    if (hits.length === 0) {
      iziToast.warning({
        title: "No Results",
        message: "Sorry, there are no more images matching your search query.",
      });
      hide(loadMoreBtn);
      return;
    }
    appendImagesMarkup(hits);
    smoothScroll();
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: "Error",
      message: "Failed to fetch more images. Please try again later.",
    });
  } finally {
    enable(loadMoreBtn, spinner);
    if (page === maxPage) {
      hide(loadMoreBtn);
      loadMoreBtn.removeEventListener("click", handleLoadMore);
    }
  }
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function smoothScroll() {
  const { height: cardHeight } = document
    .querySelector(".gallery-item")
    .getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: "smooth",
  });
}

function appendImagesMarkup(images) {
  const markup = images
    .map(
      (image) => `<li class="gallery-item">
        <a href="${image.largeImageURL}" data-lightbox="gallery" data-title="${image.tags}">
          <img src="${image.webformatURL}" alt="${image.tags}" />
          <div class="info">
            <p><strong>Likes:</strong> ${image.likes}</p>
            <p><strong>Views:</strong> ${image.views}</p>
            <p><strong>Comments:</strong> ${image.comments}</p>
            <p><strong>Downloads:</strong> ${image.downloads}</p>
          </div>
        </a>
      </li>`
    )
    .join("");

  gallery.insertAdjacentHTML("beforeend", markup);
  lightbox.refresh();
}
