import axios from "axios";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export default async function fetchFromAPI(query) {
  try {

    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_RAPID_API_BASE_URL + `${query}`}`,
      options
    );

    return data;
  } catch (error) {
    console.error("Error:",error);
  }
}
