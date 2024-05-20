import axios from "../../utils/axios";

export const getPost = async (id) => {
  const response = await axios.get(`/blogs/${id}`);
  return response.data;
};

export const patchPost = async ({id,mutationData}) => {
  const response = await axios.patch(`/blogs/${id}`, mutationData, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  return response.data;
};
