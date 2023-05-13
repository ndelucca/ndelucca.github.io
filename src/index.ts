import { randomCow } from "./modules/cow";
import { fetchFortuneCookie } from "./modules/fortune";

import "./scss/main.scss";

async function lucky_cow() {
  const fortune_cookie = await fetchFortuneCookie();
  document.querySelector(".cowsie").innerHTML = `<pre>${randomCow(fortune_cookie)}</pre>`;
}

window.addEventListener("load", lucky_cow);
