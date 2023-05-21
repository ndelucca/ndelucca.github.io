import { randomCow } from "./modules/cow";
import { fetchFortuneCookie } from "./modules/fortune";

const lucky_cow = async () => {
  document.querySelector(".cowsie").innerHTML = randomCow("Moo..?");
  const fortune_cookie = await fetchFortuneCookie();
  document.querySelector(".cowsie").innerHTML = randomCow(fortune_cookie);
};

window.addEventListener("load", lucky_cow);
