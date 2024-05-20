import axios from "../../utils/axios";

export const getPosts = async (status, search) => {
  let queryString = "";

  // filter by `Saved`
  if (status === "Saved") {
    queryString += `isSaved=true`;
  }

  // filter by `Search`
  if (search !== "") {
    queryString += `&q=${search}`;
  }

  const response = await axios.get(`/blogs/?${queryString}`);
  return response.data;
};
