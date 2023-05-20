import * as cowsay from "cowsay";
export { randomCow };

function randomCow(text: string) {
  return cowsay.say({ text: text });
}
