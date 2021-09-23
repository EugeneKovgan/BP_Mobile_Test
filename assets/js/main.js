let priceRateFirst = document.querySelector(".price-rate__first");
let priceRateSecond = document.querySelector(".price-rate__second");
let btnLink = document.querySelector(".btn-link");

let bannerHeaderItemDescriptions = document.querySelector(
  ".banner__header-item-descriptions"
);
let bannerLogoTitle = document.querySelector(".banner__logo-title-h1");
let item1Title = document.querySelector(".item-1-title");
let item2Title = document.querySelector(".item-2-title");
let item3Title = document.querySelector(".item-3-title");
let firstBannerTitle = document.querySelector("#firstBannerTitle");
let firstBannerPlus = document.querySelector("#firstBannerPlus");
let firstBannerDescription = document.querySelector("#firstBannerDescription");
let firstMonth = document.querySelector("#firstMonth");
let secondBannerTitle = document.querySelector("#secondBannerTitle");
let secondBannerPlus = document.querySelector("#secondBannerPlus");
let secondBannerDescription = document.querySelector(
  "#secondBannerDescription"
);

let PricePoint = document.querySelector(".price-rate__price-point");
let secondMonth = document.querySelector("#secondMonth");
let footerTitle = document.querySelector(".footer__title");
let footerLeft = document.querySelector("#footer-left");
let footerRight = document.querySelector("#footer-right");
let bannerLogoDescriptionItems = document.querySelector(
  ".banner__logo-description-items"
);

// ======================    get languages, change and add styles class
// let currentLocation = "zh";
let currentLocation = (window.navigator =
  window.navigator.language ??
  window.navigator.systemLanguage ??
  window.navigator.userLanguage ??
  "en");

// let arrLang = ["en", "es", "fr", "ja", "nl", "ru", "zh"];

let urlLang = window.location.href;
console.log(`your language from URL is- ${urlLang}`);
console.log(`your language from OS is - ${currentLocation}`);

if (currentLocation === "es") {
  bannerLogoDescriptionItems.classList.add("--es");
}
if (currentLocation === "fr") {
  bannerLogoDescriptionItems.classList.add("--fr");
  bannerLogoTitle.classList.add("--fr");
  secondBannerDescription.classList.add("--fr");
  secondBannerTitle.classList.add("--fr");
  firstBannerDescription.classList.add("--fr");
}
if (currentLocation === "ja") {
  firstBannerPlus.classList.add("--ja");
  secondBannerPlus.classList.add("--ja");
  firstBannerTitle.classList.add("--ja");
  secondBannerTitle.classList.add("--ja");
  bannerLogoDescriptionItems.classList.add("--ja");
}
if (currentLocation === "nl") {
  bannerLogoDescriptionItems.classList.add("--nl");
}

if (currentLocation === "ru") {
  bannerLogoDescriptionItems.classList.add("--ru");
  bannerLogoTitle.classList.add("--ru");
  firstBannerDescription.classList.add("--ru");
}
if (currentLocation === "zh") {
  bannerLogoDescriptionItems.classList.add("--zh");
}

// ======================    get language pack
async function getTranslation(locale) {
  let langPack = await fetch(`../assets/localizations/${locale}.json`);
  let data = await langPack.json();
  return data;
}
// let price = "9.99";
async function getTranslatePack() {
  let change = await getTranslation(currentLocation);
  bannerLogoTitle.innerHTML = change["Unlimited Access<br>to All Features"];
  item1Title.innerHTML = change["Unlimited documents"];
  item2Title.innerHTML = change["Count mode"];
  item3Title.innerHTML = change["Text recognition (OCR)"];
  firstBannerTitle.innerHTML = change["Monthly"];
  firstBannerPlus.innerHTML =
    change["<strong>{{price}}</strong><br>per month"].slice(30);
  firstBannerDescription.innerHTML = change["3 DAYS FREE"];
  firstMonth.innerHTML = change["{{price}}/month"].slice(9);
  secondMonth.innerHTML = change["{{price}}/month"].slice(9);
  secondBannerTitle.innerHTML = change["Annually"];
  PricePoint.innerHTML = change["-83%"];
  secondBannerPlus.innerHTML =
    change["<strong>{{price}}</strong><br>per year"].slice(30);
  secondBannerDescription.innerHTML = change["MOST POPULAR"];
  btnLink.innerHTML = change["Continue"];
  footerTitle.innerHTML = change["Auto-renewable. Cancel anytime."];
  footerLeft.innerHTML = change["Terms of Use"];
  bannerHeaderItemDescriptions.innerHTML = change["Restore"];
  footerRight.innerHTML = change["Privacy Policy"];
}

// ======================    changes of tariff plan
priceRateFirst.addEventListener("click", function () {
  if (!priceRateFirst.classList.contains("active")) {
    priceRateFirst.classList.add("active");
    priceRateSecond.classList.remove("active");
    btnLink.setAttribute("href", "https://apple.com/");
    console.log(btnLink.href);
  }
});

priceRateSecond.addEventListener("click", function () {
  if (!priceRateSecond.classList.contains("active")) {
    priceRateSecond.classList.add("active");
    priceRateFirst.classList.remove("active");
    btnLink.setAttribute("href", "https://google.com/");
    console.log(btnLink.href);
  }
});

getTranslatePack();