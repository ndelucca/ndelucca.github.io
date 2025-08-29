export { fetchFortuneCookie };

const fallbackFortunes = [
  "A journey of a thousand miles begins with a single step.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Fortune favors the bold.",
  "What doesn't kill you makes you stronger.",
  "The only constant in life is change.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "In the middle of difficulty lies opportunity.",
  "Be yourself; everyone else is already taken.",
  "Life is what happens to you while you're busy making other plans.",
  "The future belongs to those who believe in the beauty of their dreams."
];

const getRandomFallbackFortune = (): string => {
  return fallbackFortunes[Math.floor(Math.random() * fallbackFortunes.length)];
};

const fetchFortuneCookie = async (): Promise<string> => {
  try {
    const response = await fetch('https://dummyjson.com/quotes/random');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data && data.quote && data.author) {
      return `${data.quote} - ${data.author}`;
    } else if (data && data.quote) {
      return data.quote;
    } else {
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.warn('Failed to fetch quote from API, using fallback:', error);
    return getRandomFallbackFortune();
  }
};
