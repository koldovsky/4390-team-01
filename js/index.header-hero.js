console.log("index.header-hero.js loaded");

const APP_STORE_KEY = "appStoreClicks";
const GOOGLE_PLAY_KEY = "googlePlayClicks";

const appStoreBtn = document.getElementById("appStoreBtn");
const googlePlayBtn = document.getElementById("googlePlayBtn");
const appStoreCount = document.getElementById("appStoreCount");
const googlePlayCount = document.getElementById("googlePlayCount");

if (appStoreBtn && googlePlayBtn && appStoreCount && googlePlayCount) {
  let appStoreClicks = +localStorage.getItem(APP_STORE_KEY) || 0;
  let googlePlayClicks = +localStorage.getItem(GOOGLE_PLAY_KEY) || 0;

  appStoreCount.textContent = `${appStoreClicks} downloads`;
  googlePlayCount.textContent = `${googlePlayClicks} downloads`;

  appStoreBtn.addEventListener("click", () => {
    appStoreClicks++;
    localStorage.setItem(APP_STORE_KEY, appStoreClicks);
    appStoreCount.textContent = `${appStoreClicks} downloads`;
    console.log("App Store clicked:", appStoreClicks);
  });

  googlePlayBtn.addEventListener("click", () => {
    googlePlayClicks++;
    localStorage.setItem(GOOGLE_PLAY_KEY, googlePlayClicks);
    googlePlayCount.textContent = `${googlePlayClicks} downloads`;
    console.log("Google Play clicked:", googlePlayClicks);
  });
} else {
  console.warn("Buttons or counters not found");
}
