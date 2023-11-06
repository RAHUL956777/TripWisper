import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const RAPID_API_KEY = "31fb558a45mshd151eee28198471p1dee7ajsnbaf0ea4d57e1";
const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "X-RapidAPI-Key": RAPID_API_KEY,
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);

    return data;
  } catch (error) {
    console.log(`Error while fecthing rapid api: ${error}`);
  }
};

export default getPlacesData;
