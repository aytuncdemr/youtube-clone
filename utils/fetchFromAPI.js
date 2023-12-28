import axios from "axios";

const options = {
    headers: {
        "X-RapidAPI-Key": "7dd575bb41msh5b654c16c832d61p1dbb04jsnde1248484bb2",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
};

export default async function fetchFromAPI(query) {
    try {
        const { data } = await axios.get(
            `${"https://youtube-v31.p.rapidapi.com/" + `${query}`}`,
            options
        );

        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}
