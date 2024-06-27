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

// PROMISE

console.log("Request data...");
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

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

// sleep(2000).then(() => console.log("After 2 sec"));
// sleep(3000).then(() => console.log("After 3 sec"));
Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log("All promises");
});
Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log("Race promises");
});
