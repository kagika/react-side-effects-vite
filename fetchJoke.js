const BASE_URL = "https://v2.jokeapi.dev/joke/Programming?type=single";

export const fetchData = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(`Here is the error ${err}`);
  }
};
