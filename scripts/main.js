// -----------------------------------------------------------------------------
// pets data
// -----------------------------------------------------------------------------
const PETS_LIST = [
  {
    id: 0,
    name: "Katrine",
    img: "katrine.png",
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
    id: 1,
    name: "Jennifer",
    img: "jennifer.png",
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
    id: 2,
    name: "Woody",
    img: "woody.png",
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
    name: "Sophia",
    img: "sophia.png",
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
    id: 4,
    name: "Timmy",
    img: "timmy.png",
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
    id: 5,
    name: "Charly",
    img: "charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
  {
    id: 6,
    name: "Scarlett",
    img: "scarlett.png",
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
    id: 7,
    name: "Freddie",
    img: "freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
];
// -----------------------------------------------------------------------------
const lengthOfPetsList = PETS_LIST.length; // number of pets
const PET_CARD_ARRAY = []; // array of object PetCard
let n; // cards in slider
let m; // cards in page
const ITEMS_ARRAY = [[], [], []]; // array of pets on items for slider
const PETS_ARRAY = []; // array of generated pets for pages
const lengthOfArray = 48; // number pets in array
const PAGES_ARRAY = []; // array of generated pages
let currentPage = 1;
const isRandom = true; // generate slider & pages random or in order
// -----------------------------------------------------------------------------
// class PetCard - pets data & generators HTML
// -----------------------------------------------------------------------------
class PetCard {
  constructor({
    id,
    name,
    img,
    type,
    breed,
    description,
    age,
    inoculations,
    diseases,
    parasites,
  }) {
    this.id = id;
    this.name = name;
    this.img = "./assets/images/pets/" + img;
    this.type = type;
    this.breed = breed;
    this.description = description;
    this.age = age;
    this.inoculations = inoculations;
    this.diseases = diseases;
    this.parasites = parasites;
  }
  generatePetCardTemplate(pageName = "main") {
    // <article class="pets-card">
    // <img src="./assets/images/pets/katrine.png" alt="cat katrine" class="pets-card__img">
    // <p>Katrine</p>
    // <div class="pets-card__button">
    //     <button name="learn_more01" class="button button_secondary">Learn more</button>
    // </div>
    // </article>
    let template = "";
    let article = document.createElement("article");
    article.className = "pets-card";
    article.setAttribute("data-id", this.id);

    this.img &&
      (template += `<img src=${pageName == "pets" ? "." : ""}${this.img} alt="${
        this.type || ""
      } ${this.name || ""}" class="pets-card__img">`);
    template += `<p>${this.name || ""}</p>`;
    template += `<div class="pets-card__button">`;
    template += `<button name="learn_more" class="button button_secondary">Learn more</button>`;
    template += `</div>`;

    article.innerHTML = template;

    return article;
  }
  generateModalTemplate(pageName = "main") {
    //     <div class="modal__wrapper">
    //         <div class="modal__button">
    //             <button name="arrowLeft" class="button button_arrow button_close"><span class="icon icon-close"></span></button>
    //         </div>
    //         <article class="modal__window">
    //             <img src="../assets/images/pets/katrine.png" alt="cat katrine">
    //             <div class="content">
    //                 <h3>Name</h3>
    //                 <h4>Type</h4>
    //                 <p>Description</p>
    //                 <ul>
    //                     <li><span class="content__property">Property: </span><span class="content__value">Value</span></li>
    //                 </ul>
    //             </div>
    //         </article>
    //     </div>
    let template = "";
    let modal = document.createElement("div");
    modal.className = "modal__wrapper";
    modal.setAttribute("data-id", this.id);

    // template += `<div class="modal__button">`;
    // template += `<button name="arrowLeft" class="button button_arrow button_close"><span class="icon icon-close"></span></button>`;
    // template += `</div>`;

    template += `<article class="modal__window">`;
    template += `<button name="arrowLeft" class="button button_arrow button_close"><span class="icon icon-close"></span></button>`;

    this.img &&
      (template += `<img src=${pageName == "pets" ? "." : ""}${this.img} alt="${
        this.type || ""
      } ${this.name || ""}">`);
    template += `<div class="content">`;

    template += `<h3>${this.name || ""}</h3>`;
    template += `<h4>${this.type || ""} - ${this.breed || ""}</h4>`;
    template += `<p>${this.description || ""}</p>`;

    template += `<ul>`;
    template += `<li><span class="content__property">Age: </span><span class="content__value">${
      this.age || ""
    }</span></li>`;
    template += `<li><span class="content__property">Inoculations: </span><span class="content__value">${
      this.inoculations || ""
    }</span></li>`;
    template += `<li><span class="content__property">Diseases: </span><span class="content__value">${
      this.diseases || ""
    }</span></li>`;
    template += `<li><span class="content__property">Parasites: </span><span class="content__value">${
      this.parasites || ""
    }</span></li>`;
    template += `</ul>`;

    template += `</div>`;
    template += `</article>`;
    template += `</div>`;

    modal.innerHTML = template;

    return modal;
  }
}
// -----------------------------------------------------------------------------
// main - init media query, generate pet-card and add handlers
// -----------------------------------------------------------------------------
window.onload = function () {
  //console.log('go!');

  // add media query
  const mQueryLarge = window.matchMedia("(min-width: 1279.9px)");
  const mQueryMedium = window.matchMedia(
    "(min-width: 767.9px) and (max-width: 1279.9px)"
  );
  const mQuerySmall = window.matchMedia("(max-width: 767.9px)");

  n = getNCardFromMediaQuery(mQueryLarge, mQueryMedium);
  m = getMCardFromMediaQuery(mQueryLarge, mQueryMedium);
  addMediaQueryHandler(mQueryLarge, mQueryMedium, mQuerySmall);

  // render pet-card
  if (PETS_LIST) {
    generatePetCards(PETS_LIST); // array of object PetCard
    renderPetCardsToSlider(); // on main page
    renderPetCardsToPagination(); // on pets page
  }

  // burger-menu
  addBurgerMenuHandler();

  // popup
  addPopupHandler();

  // slider
  addSliderHandler();

  // pages & pagination
  addPaginationHandler();
};

// -----------------------------------------------------------------------------
// add media query - recalculate number of card in slider & page,
// -----------------------------------------------------------------------------
const addMediaQueryHandler = (mQueryLarge, mQueryMedium, mQuerySmall) => {
  function handleWidthChange(e) {
    if (e.matches) {
      n = getNCardFromMediaQuery(mQueryLarge, mQueryMedium);
      m = getMCardFromMediaQuery(mQueryLarge, mQueryMedium);

      if (PETS_LIST) {
        renderPetCardsToSlider();
        renderPetCardsToPagination();
      }
    }
  }

  mQueryLarge.addListener(handleWidthChange);
  mQueryMedium.addListener(handleWidthChange);
  mQuerySmall.addListener(handleWidthChange);
};
const getNCardFromMediaQuery = (mQueryLarge, mQueryMedium) => {
  if (mQueryLarge.matches) n = 3;
  else if (mQueryMedium.matches) n = 2;
  else n = 1;

  return n;
};
const getMCardFromMediaQuery = (mQueryLarge, mQueryMedium) => {
  if (mQueryLarge.matches) m = 8;
  else if (mQueryMedium.matches) m = 6;
  else m = 3;

  return m;
};
// -----------------------------------------------------------------------------
// render pet-card - to slider & page
// -----------------------------------------------------------------------------
const generatePetCards = (data) => {
  PET_CARD_ARRAY.splice(0, PET_CARD_ARRAY.length); // empty

  data.forEach((petCard) => {
    PET_CARD_ARRAY.push(new PetCard(petCard));
  });
};
const generatePetsArrayRandom = () => {
  PETS_ARRAY.splice(0, PETS_ARRAY.length); // empty

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < lengthOfPetsList; j++) {
      nextId = getRandomInPetsArray(lengthOfPetsList, i);
      PETS_ARRAY.push(nextId);
    }
  }

  //console.log(PETS_ARRAY);
};
const generatePetsArrayOrder = () => {
  PETS_ARRAY.splice(0, PETS_ARRAY.length); // empty

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < lengthOfPetsList; j++) {
      PETS_ARRAY.push(j);
    }
  }
  // console.log(PETS_ARRAY);
};
const generatePagesArray = () => {
  PAGES_ARRAY.splice(0, PAGES_ARRAY.length); // empty

  let numberOfPages = lengthOfArray / m;

  let k = 0;
  for (let i = 0; i < numberOfPages; i++) {
    let page = { id: i + 1, cards: [] };

    for (let j = 0; j < m; j++) {
      page.cards.push(PETS_ARRAY[k]);
      k++;
    }

    PAGES_ARRAY.push(page);
  }
  //console.log(PAGES_ARRAY);
};
// render
const getNode = (className) => {
  const node = document.querySelector(className);
  if (node) {
    node.innerHTML = "";
  }
  return node;
};
const renderPetCardsToSlider = () => {
  const slider = document.querySelector(".slider");
  if (slider) {
    // main page

    if (isRandom) {
      renderItemToCarouselRandom(PET_CARD_ARRAY, ".item_active", 1);

      renderItemToCarouselRandom(PET_CARD_ARRAY, ".item_left", 0);
      renderItemToCarouselRandom(PET_CARD_ARRAY, ".item_right", 2);

      //console.log(ITEMS_ARRAY);
    } else {
      renderItemToCarouselOrder(
        PET_CARD_ARRAY,
        ".item_left",
        lengthOfPetsList - n,
        n
      );
      renderItemToCarouselOrder(PET_CARD_ARRAY, ".item_active", 0, n);
      renderItemToCarouselOrder(PET_CARD_ARRAY, ".item_right", n, n);
    }
    addPopupHandler();
  }
};
const renderPetCardsToPagination = () => {
  const pages = document.querySelector(".pages");
  if (pages) {
    // pets page

    if (isRandom) {
      generatePetsArrayRandom();
    } else {
      generatePetsArrayOrder();
    }

    generatePagesArray();

    currentPage = 1;

    renderCardsToPage(PET_CARD_ARRAY, currentPage);

    setButtonProperty(currentPage);

    addPopupHandler();
  }
};
const getRandomInPetsArray = (max, ind) => {
  let count = 0;
  let length = PETS_ARRAY.length;

  do {
    nextId = Math.floor(Math.random() * max); // [ 0, 8 )
    count++;

    found = false;

    index = length - (length % 8);

    for (let i = index; i < length; i++) {
      // check unique in every 8 block
      if (PETS_ARRAY[i] === nextId) {
        found = true;
        break;
      }
    }

    if (!found) {
      index = length - (length % 6);

      for (let i = index; i < length; i++) {
        // check unique in every 6 block
        if (PETS_ARRAY[i] === nextId) {
          found = true;
          break;
        }
      }
    }

    if (!found) {
      index = length - (length % 3);

      for (let i = index; i < length; i++) {
        // check unique in every 3 block
        if (PETS_ARRAY[i] === nextId) {
          found = true;
          break;
        }
      }
    }
  } while (count < 100 && found);

  //if (count > 98) console.log(count);

  return nextId;
};
const getRandomInItems = (max, index) => {
  let count = 0;

  do {
    nextId = Math.floor(Math.random() * max); // [ 0, 8 )
    count++;
  } while (
    count < 10 &&
    (ITEMS_ARRAY[1].indexOf(nextId) > -1 ||
      ITEMS_ARRAY[index].indexOf(nextId) > -1)
  );

  return nextId;
};
const renderItemToCarouselRandom = (petCards, className, index) => {
  ITEMS_ARRAY[index].splice(0, ITEMS_ARRAY[index].length); // empty

  let sliderItem = getNode(className);

  if (sliderItem) {
    for (let i = 0; i < n; i++) {
      nextId = getRandomInItems(lengthOfPetsList, index);

      sliderItem.append(petCards[nextId].generatePetCardTemplate("main"));
      ITEMS_ARRAY[index].push(nextId);
    }
  }
};
const renderItemToCarouselOrder = (
  petCards,
  className,
  start,
  n,
  arrayItem = []
) => {
  let sliderItem = getNode(className);

  if (sliderItem) {
    for (let i = start; i < start + n; i++) {
      sliderItem.append(
        petCards[
          (lengthOfPetsList + i) % lengthOfPetsList
        ].generatePetCardTemplate("main")
      );
    }
  }
};
const renderCardsToPage = (petCards, currentPage) => {
  let pageNode = getNode(".page__item");
  if (pageNode) {
    pageNode.setAttribute("data-id", currentPage);

    let currentArray = PAGES_ARRAY[currentPage - 1].cards;

    for (let i = 0; i < currentArray.length; i++) {
      pageNode.append(
        petCards[currentArray[i]].generatePetCardTemplate("pets")
      );
    }
  }
};
const setButtonProperty = (currentPage) => {
  setDisabled(currentPage == 1, ".nav-panel .button_top");
  setDisabled(currentPage == 1, ".nav-panel .button_left");

  setDisabled(currentPage == PAGES_ARRAY.length, ".nav-panel .button_end");
  setDisabled(currentPage == PAGES_ARRAY.length, ".nav-panel .button_right");

  setNumberOfPage(currentPage, ".nav-panel .button_arrow-active");
};
const setDisabled = (flag, selector) => {
  let el = document.querySelector(selector);
  if (el)
    if (flag) {
      el.setAttribute("disabled", "disabled");
    } else {
      el.removeAttribute("disabled");
    }
};
const setNumberOfPage = (currentPage, selector) => {
  let el = document.querySelector(selector);
  if (el) el.innerHTML = currentPage;
};
// -----------------------------------------------------------------------------
// burger-menu
// -----------------------------------------------------------------------------
const addBurgerMenuHandler = () => {
  const BURGER_MENU = document.querySelector(".burger-menu");
  const HEADER_NAVIGATION = document.querySelector(".header__navigation");
  const BLACKOUT = document.querySelector(".blackout");

  if (BURGER_MENU) {
    BURGER_MENU.addEventListener("click", () => {
      BLACKOUT.classList.toggle("blackout_active");
      BURGER_MENU.classList.toggle("burger-menu_active");
      HEADER_NAVIGATION.classList.toggle("header__navigation_active");
      document.body.classList.toggle("_lock");
    });

    const MENU_LINKS = document.querySelectorAll("a[data-goto]");
    if (MENU_LINKS.length > 0) {
      MENU_LINKS.forEach((el) => el.addEventListener("click", closeBurgerMenu));
      document
        .querySelector(".blackout")
        .addEventListener("click", closeBurgerMenu);

      function closeBurgerMenu(event) {
        if (BURGER_MENU.classList.contains("burger-menu_active")) {
          BLACKOUT.classList.remove("blackout_active");
          BURGER_MENU.classList.remove("burger-menu_active");
          HEADER_NAVIGATION.classList.remove("header__navigation_active");
          document.body.classList.remove("_lock");
        }

        event.preventDefault();
      }
    }
  }
};
// -----------------------------------------------------------------------------
// popup
// -----------------------------------------------------------------------------
const addPopupHandler = () => {
  let list_card = document.querySelectorAll(".item_active .pets-card");
  if (list_card) {
    list_card.forEach((el) => {
      el.addEventListener("click", openModalWindow);
    });
  }
};
function openModalWindow(event) {
  const clickedCard = event.currentTarget;

  if (clickedCard.classList.contains("pets-card")) {
    const id = clickedCard.getAttribute("data-id");
    //console.log(id);

    let blackout = getNode(".blackout");
    blackout.classList.add("blackout_active");
    document.body.classList.add("_lock");

    blackout.append(
      PET_CARD_ARRAY[id].generateModalTemplate(
        document.querySelector(".pages") ? "pets" : "main"
      )
    );

    // close window
    blackout.addEventListener("click", (event) => {
      let modal = document.querySelector(".modal__window");
      let btnClose = document.querySelector(".button_close");
      //let clickedItem = event.target;

      if (
        event.composedPath().indexOf(btnClose) > -1 ||
        event.composedPath().indexOf(modal) === -1
      ) {
        blackout.innerHTML = "";
        blackout.classList.remove("blackout_active");
        document.body.classList.remove("_lock");
      }
    });
  }
}
// -----------------------------------------------------------------------------
// slider
// -----------------------------------------------------------------------------
const addSliderHandler = () => {
  const CAROUSEL = document.querySelector(".carousel");

  if (CAROUSEL) {
    const BTN_LEFT = document.querySelector(".button_left");
    const BTN_RIGHT = document.querySelector(".button_right");
    const ITEM_LEFT = document.querySelector(".item_left");
    const ITEM_ACTIVE = document.querySelector(".item_active");
    const ITEM_RIGHT = document.querySelector(".item_right");

    // on click to arrow left
    const moveLeft = () => {
      moveItem("left");
    };
    // on click to arrow right
    const moveRight = () => {
      moveItem("right");
    };
    // on end of animation
    const endAnimation = (animationEvent) => {
      if (animationEvent.animationName.substring(0, 9) === "move-left") {
        CAROUSEL.classList.remove("transition-left");
        CAROUSEL.classList.remove("transition-right");

        ITEM_RIGHT.innerHTML = ITEM_ACTIVE.innerHTML;
        ITEM_ACTIVE.innerHTML = ITEM_LEFT.innerHTML;

        //render ITEM_LEFT
        if (isRandom) {
          ITEMS_ARRAY.pop();
          ITEMS_ARRAY.unshift([]);

          renderItemToCarouselRandom(PET_CARD_ARRAY, ".item_left", 0);

          //console.log(ITEMS_ARRAY);
        } else {
          let id = getFirstIdItem(ITEM_LEFT);
          renderItemToCarouselOrder(PET_CARD_ARRAY, ".item_left", +id - n, n);
        }
      } else {
        CAROUSEL.classList.remove("transition-right");
        CAROUSEL.classList.remove("transition-left");

        ITEM_LEFT.innerHTML = ITEM_ACTIVE.innerHTML;
        ITEM_ACTIVE.innerHTML = ITEM_RIGHT.innerHTML;

        //render ITEM_RIGHT
        if (isRandom) {
          ITEMS_ARRAY.shift();
          ITEMS_ARRAY.push([]);

          renderItemToCarouselRandom(PET_CARD_ARRAY, ".item_right", 2);

          //console.log(ITEMS_ARRAY);
        } else {
          let id = getLastIdItem(ITEM_RIGHT);
          renderItemToCarouselOrder(PET_CARD_ARRAY, ".item_right", +id + 1, n);
        }
      }

      // return listener after animation
      BTN_LEFT.addEventListener("click", moveLeft);
      BTN_RIGHT.addEventListener("click", moveRight);
      addPopupHandler();
    };

    // listeners
    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
    CAROUSEL.addEventListener("animationend", endAnimation);

    // start animation to move items
    const moveItem = (nameDirection) => {
      CAROUSEL.classList.add("transition-" + nameDirection);
      // remove listener before animation
      BTN_LEFT.removeEventListener("click", moveLeft);
      BTN_RIGHT.removeEventListener("click", moveRight);
    };

    const getLastIdItem = (item) => {
      let last = item.querySelector(".pets-card:last-of-type");
      return last.getAttribute("data-id");
    };
    const getFirstIdItem = (item) => {
      let first = item.querySelector(".pets-card:first-of-type");
      return first.getAttribute("data-id");
    };
  }
};
// -----------------------------------------------------------------------------
// pages & pagination
// -----------------------------------------------------------------------------
const addPaginationHandler = () => {
  const PAGES = document.querySelector(".pages");

  if (PAGES) {
    const BTN_LEFT = document.querySelector(".nav-panel .button_left");
    const BTN_TOP = document.querySelector(".nav-panel .button_top");
    const BTN_RIGHT = document.querySelector(".nav-panel .button_right");
    const BTN_END = document.querySelector(".nav-panel .button_end");

    let page = document.querySelector(".page");

    // on click to arrow left
    const moveLeft = () => {
      currentPage--;

      page.classList.add("fade-page");
      setTimeout(() => page.classList.remove("fade-page"), 1000);
      setTimeout(() => openPage(PET_CARD_ARRAY, currentPage), 500);
    };
    // on click to arrow top
    const moveTop = () => {
      currentPage = 1;

      page.classList.add("fade-page");
      setTimeout(() => page.classList.remove("fade-page"), 1000);
      setTimeout(() => openPage(PET_CARD_ARRAY, currentPage), 500);
    };
    // on click to arrow right
    const moveRight = () => {
      currentPage++;

      page.classList.add("fade-page");
      setTimeout(() => page.classList.remove("fade-page"), 1000);
      setTimeout(() => openPage(PET_CARD_ARRAY, currentPage), 500);
    };
    // on click to arrow end
    const moveEnd = () => {
      currentPage = PAGES_ARRAY.length;

      page.classList.add("fade-page");
      setTimeout(() => page.classList.remove("fade-page"), 1000);
      setTimeout(() => openPage(PET_CARD_ARRAY, currentPage), 500);
    };

    // listeners
    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_TOP.addEventListener("click", moveTop);
    BTN_RIGHT.addEventListener("click", moveRight);
    BTN_END.addEventListener("click", moveEnd);
  }

  const openPage = (PET_CARD_ARRAY, currentPage) => {
    renderCardsToPage(PET_CARD_ARRAY, currentPage);
    setButtonProperty(currentPage);
    addPopupHandler();
  };
};
