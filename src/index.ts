import * as cowsay from "cowsay";
import "./styles.scss";

async function fetch_cookie() {
  const cookie_response = await fetch(
    `https://monolithdesign.com/wp-json/cookies-api/v1/cookies/?fcnonce=${Math.floor(Math.random() * 999999)}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const cookie_text = await cookie_response.json();
  const cookie = JSON.parse(cookie_text);
  return cookie.card_content;
}

async function lucky_cow() {
  const fortune_cookie = await fetch_cookie();
  document.querySelector(".cowsie").innerHTML = `<pre>${cowsay.say({ text: fortune_cookie })}</pre>`;
}

window.addEventListener("load", lucky_cow);
