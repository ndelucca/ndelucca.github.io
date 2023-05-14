// import { navigation } from "../modules/base";
import { randomCow } from "../modules/cow";
import { fetchFortuneCookie } from "../modules/fortune";

import "../scss/main.scss";

async function lucky_cow() {
  document.querySelector(".cowsie").innerHTML = randomCow("Moo..?");
  const fortune_cookie = await fetchFortuneCookie();
  document.querySelector(".cowsie").innerHTML = randomCow(fortune_cookie);
}

window.addEventListener("load", lucky_cow);
