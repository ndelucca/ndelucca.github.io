import { say } from "cowsay";
export { randomCow };
const randomCow = (text: string) => {
  return say({ text: text });
};
