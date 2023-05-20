export { fetchFortuneCookie };

async function fetchFortuneCookie(): Promise<string> {
  const cookieResponse = await fetch(
    `https://monolithdesign.com/wp-json/cookies-api/v1/cookies/?fcnonce=${Math.floor(Math.random() * 999999)}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const cookieText = await cookieResponse.json();
  const cookie = JSON.parse(cookieText);
  return cookie.card_content;
}
