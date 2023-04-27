const petsData = [
  {
    id: 0,
    name: "Jennifer",
    img: "./images/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: 1,
    name: "Sophia",
    img: "./images/sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: 2,
    name: "Woody",
    img: "./images/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    id: 3,
    name: "Scarlett",
    img: "./images/scarlet.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: 4,
    name: "Katrine",
    img: "./images/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: 5,
    name: "Timmy",
    img: "./images/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    id: 6,
    name: "Freddie",
    img: "./images/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    id: 7,
    name: "Charly",
    img: "./images/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

function RandomNumber(min, max) {
  var totalNumbers = max - min + 1,
    arrayTotalNumbers = [],
    arrayRandomNumbers = [],
    tempRandomNumber;
  while (totalNumbers--) {
    arrayTotalNumbers.push(totalNumbers + min);
  }
  while (arrayTotalNumbers.length) {
    tempRandomNumber = Math.round(
      Math.random() * (arrayTotalNumbers.length - 1)
    );
    arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
    arrayTotalNumbers.splice(tempRandomNumber, 1);
  }
  return arrayRandomNumbers;
}
let randomNmb = RandomNumber(0, 7);
window.addEventListener("resize", () => {
  let oldPageSize = pageSize;
  getPageSize();
  if (oldPageSize !== pageSize) {
    deletePets();
    addCardsActive();
    addCardsLeft();
    addCardsRight();
  }
});
let pageSize;
const getPageSize = () => {
  if (window.innerWidth > 1220) {
    pageSize = "decktop";
  }
  if (window.innerWidth < 1221 && window.innerWidth >= 768) {
    pageSize = "tablet";
  }
  if (window.innerWidth < 768) {
    pageSize = "mobile";
  }
};
getPageSize();

const sliderActive = document.getElementById("pet_cards-active");
const sliderLeft = document.getElementById("pet_cards-left");
const sliderRight = document.getElementById("pet_cards-right");
const slider = document.querySelector(".slider");
const addCardsActive = () => {
  const mixedArr = mixRandomNmb(randomNmb);
  if (pageSize === "mobile") {
    let numIndex = mixedArr.slice(0, 1);
    for (let num of numIndex) {
      let petsDataIndex = petsData[num];
      let template = "";
      const card = document.createElement("div");
      template += `<img src="${petsDataIndex.img}" alt="img" />`;
      template += `<p>${petsDataIndex.name}</p>`;
      template += `<img
          class="btn"
          src="./images/button_learn_more.png"
          alt="img"
      />`;
      template += `</div>`;
      card.innerHTML = template;
      card.className = "pet_card";
      card.setAttribute("id", petsDataIndex.id);
      sliderActive.insertAdjacentElement("afterbegin", card);
    }
  }
  if (pageSize === "tablet") {
    let numIndex = mixedArr.slice(0, 2);
    for (let num of numIndex) {
      let petsDataIndex = petsData[num];
      let template = "";
      const card = document.createElement("div");
      template += `<img src="${petsDataIndex.img}" alt="img" />`;
      template += `<p>${petsDataIndex.name}</p>`;
      template += `<img
          class="btn"
          src="./images/button_learn_more.png"
          alt="img"
      />`;
      template += `</div>`;
      card.innerHTML = template;
      card.className = "pet_card";
      card.setAttribute("id", petsDataIndex.id);
      sliderActive.insertAdjacentElement("afterbegin", card);
    }
  }
  if (pageSize === "decktop") {
    let numIndex = mixedArr.slice(0, 3);
    for (let num of numIndex) {
      let petsDataIndex = petsData[num];
      let template = "";
      const card = document.createElement("div");
      template += `<img src="${petsDataIndex.img}" alt="img" />`;
      template += `<p>${petsDataIndex.name}</p>`;
      template += `<img
          class="btn"
          src="./images/button_learn_more.png"
          alt="img"
      />`;
      template += `</div>`;
      card.innerHTML = template;
      card.className = "pet_card";
      card.setAttribute("id", petsDataIndex.id);
      sliderActive.insertAdjacentElement("afterbegin", card);
    }
  }
};

const addCardsLeft = () => {
  const mixedArr = mixRandomNmb(randomNmb);
  if (pageSize === "mobile") {
    let numIndex = mixedArr.slice(0, 1);
    for (let num of numIndex) {
      let petsDataIndex = petsData[num];
      let template = "";
      const card = document.createElement("div");
      template += `<img src="${petsDataIndex.img}" alt="img" />`;
      template += `<p>${petsDataIndex.name}</p>`;
      template += `<img
          class="btn"
          src="./images/button_learn_more.png"
          alt="img"
      />`;
      template += `</div>`;
      card.innerHTML = template;
      card.className = "pet_card";
      card.setAttribute("id", petsDataIndex.id);
      sliderLeft.insertAdjacentElement("afterbegin", card);
    }
  }
  if (pageSize === "tablet") {
    let numIndex = mixedArr.slice(0, 2);
    for (let num of numIndex) {
      let petsDataIndex = petsData[num];
      let template = "";
      const card = document.createElement("div");
      template += `<img src="${petsDataIndex.img}" alt="img" />`;
      template += `<p>${petsDataIndex.name}</p>`;
      template += `<img
          class="btn"
          src="./images/button_learn_more.png"
          alt="img"
      />`;
      template += `</div>`;
      card.innerHTML = template;
      card.className = "pet_card";
      card.setAttribute("id", petsDataIndex.id);
      sliderLeft.insertAdjacentElement("afterbegin", card);
    }
  }
  if (pageSize === "decktop") {
    let numIndex = mixedArr.slice(0, 3);
    for (let num of numIndex) {
      let petsDataIndex = petsData[num];
      let template = "";
      const card = document.createElement("div");
      template += `<img src="${petsDataIndex.img}" alt="img" />`;
      template += `<p>${petsDataIndex.name}</p>`;
      template += `<img
          class="btn"
          src="./images/button_learn_more.png"
          alt="img"
      />`;
      template += `</div>`;
      card.innerHTML = template;
      card.className = "pet_card";
      card.setAttribute("id", petsDataIndex.id);
      sliderLeft.insertAdjacentElement("afterbegin", card);
    }
  }
};
const addCardsRight = () => {
  const mixedArr = mixRandomNmb(randomNmb);
  if (pageSize === "mobile") {
    let numIndex = mixedArr.slice(0, 1);
    for (let num of numIndex) {
      let petsDataIndex = petsData[num];
      let template = "";
      const card = document.createElement("div");
      template += `<img src="${petsDataIndex.img}" alt="img" />`;
      template += `<p>${petsDataIndex.name}</p>`;
      template += `<img
          class="btn"
          src="./images/button_learn_more.png"
          alt="img"
      />`;
      template += `</div>`;
      card.innerHTML = template;
      card.className = "pet_card";
      card.setAttribute("id", petsDataIndex.id);
      sliderRight.insertAdjacentElement("afterbegin", card);
    }
  }
  if (pageSize === "tablet") {
    let numIndex = mixedArr.slice(0, 2);
    for (let num of numIndex) {
      let petsDataIndex = petsData[num];
      let template = "";
      const card = document.createElement("div");
      template += `<img src="${petsDataIndex.img}" alt="img" />`;
      template += `<p>${petsDataIndex.name}</p>`;
      template += `<img
          class="btn"
          src="./images/button_learn_more.png"
          alt="img"
      />`;
      template += `</div>`;
      card.innerHTML = template;
      card.className = "pet_card";
      card.setAttribute("id", petsDataIndex.id);
      sliderRight.insertAdjacentElement("afterbegin", card);
    }
  }
  if (pageSize === "decktop") {
    let numIndex = mixedArr.slice(0, 3);
    for (let num of numIndex) {
      let petsDataIndex = petsData[num];
      let template = "";
      const card = document.createElement("div");
      template += `<img src="${petsDataIndex.img}" alt="img" />`;
      template += `<p>${petsDataIndex.name}</p>`;
      template += `<img
          class="btn"
          src="./images/button_learn_more.png"
          alt="img"
      />`;
      template += `</div>`;
      card.innerHTML = template;
      card.className = "pet_card";
      card.setAttribute("id", petsDataIndex.id);
      sliderRight.insertAdjacentElement("afterbegin", card);
    }
  }
};

addCardsActive();
addCardsLeft();
addCardsRight();
function mixRandomNmb(arr) {
  return arr
    .map((i) => [Math.random(), i])
    .sort()
    .map((i) => i[1]);
}

const bottonArrowForward = document.querySelector(".botton_arrow_forward");
const bottonArrowBack = document.querySelector(".botton_arrow_back");

const moveLeft = () => {
  slider.classList.add("transition-left");
  bottonArrowBack.removeEventListener("click", moveLeft);
};
bottonArrowBack.addEventListener("click", moveLeft);
const moveRight = () => {
  slider.classList.add("transition-right");
  bottonArrowForward.removeEventListener("click", moveRight);
};
bottonArrowForward.addEventListener("click", moveRight);

slider.addEventListener("animationend", (event) => {
  if (event.animationName === "move-left") {
    slider.classList.remove("transition-left");
    let leftCards = document.querySelector("#pet_cards-left").innerHTML;
    document.querySelector("#pet_cards-active").innerHTML = leftCards;
    document.querySelector("#pet_cards-left").innerHTML = "";
    addCardsLeft();
  } else {
    slider.classList.remove("transition-right");
    let rightCards = document.querySelector("#pet_cards-right").innerHTML;
    document.querySelector("#pet_cards-active").innerHTML = rightCards;
    document.querySelector("#pet_cards-right").innerHTML = "";
    addCardsRight();
  }
  bottonArrowBack.addEventListener("click", moveLeft);
  bottonArrowForward.addEventListener("click", moveRight);
});

const deletePets = () => {
  while (sliderActive.firstChild) {
    sliderActive.removeChild(sliderActive.firstChild);
  }
  while (sliderLeft.firstChild) {
    sliderLeft.removeChild(sliderLeft.firstChild);
  }
  while (sliderRight.firstChild) {
    sliderRight.removeChild(sliderRight.firstChild);
  }
};
const modalWindow = document.querySelector(".modal_window");
const modalCloseBtn = document.querySelector(".modal_close_btn");
let coverBlackOut = document.querySelector(".cover");
let bodyOverflow = document.querySelector("body");
const modalBtn = document.querySelector(".btn");

function addModal(e) {
  if (e.target.parentNode.classList.contains("pet_card")) {
    coverBlackOut.style.display = "cover--blackout";
    let cardId = e.target.parentNode.getAttribute("id");
    const id = petsData.find((item) => item.id == cardId);
    modalWindow.classList.add("modal_window--active");
    let petsDataIndex = id;
    let template = "";
    const card = document.createElement("div");
    template += `<img src="${petsDataIndex.img}" alt="img" />`;
    template += `<div class="modal_content">`;
    template += `<h2>${petsDataIndex.name}</h2>`;
    template += `<h3>${petsDataIndex.type} - ${petsDataIndex.breed}</h3>`;
    template += `<p>${petsDataIndex.description}</p>`;
    template += `<ul>`;
    template += `<li>Age: <span>${petsDataIndex.age}</span></li>`;
    template += `<li>Inoculations:<span>${petsDataIndex.inoculations}</span></li>`;
    template += `<li>Diseases: <span>${petsDataIndex.diseases}</span></li>`;
    template += `<li>Parasites: <span>${petsDataIndex.parasites}</span></li>`;
    template += `</ul>`;
    template += `</div>`;
    template += `</div>`;
    card.innerHTML = template;
    card.className = "pet_modal_window";
    card.setAttribute("id", "pet_modal_window");
    modalWindow.insertAdjacentElement("afterbegin", card);
    bodyOverflow.classList.toggle("body--overflow");
    coverBlackOut.classList.toggle("cover--blackout");
  }
}

slider.addEventListener("click", addModal);

const closeModalWindow = () => {
  const modalWindowId = document.getElementById("pet_modal_window");
  if (modalWindow.classList.contains("modal_window--active")) {
    modalWindowId.parentNode.removeChild(modalWindowId);
    modalWindow.classList.remove("modal_window--active");
    bodyOverflow.classList.toggle("body--overflow");
    coverBlackOut.classList.toggle("cover--blackout");
  }
};
modalCloseBtn.addEventListener("click", closeModalWindow);
coverBlackOut.addEventListener("click", closeModalWindow);
