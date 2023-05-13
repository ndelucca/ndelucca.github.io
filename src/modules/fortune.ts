export { fetchFortuneCookie };

async function fetchFortuneCookie(): Promise<string> {
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
