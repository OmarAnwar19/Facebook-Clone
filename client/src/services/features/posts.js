import axios from "axios";
const baseUrl = "http://localhost:3001/posts";

//send a get req to the api
const getAll = () => {
  const req = axios.get(baseUrl);
  return req.then((res) => res.data);
};

//get one post by id
const getOne = async (id) => {
  const req = await axios.get(`${baseUrl}/${id}`);
  return req.then((res) => res.data);
};

//add a new post
const create = async (newObject) => {
  const res = await axios.post(baseUrl, newObject);
  return res.data;
};

//update an existing post
const update = (id, newObject) => {
  const req = axios.put(`${baseUrl}/${id}`, newObject);
  return req.then((res) => res.data);
};

//delete an existing post
const del = async (id) => {
  const req = await axios.delete(`${baseUrl}/${id}`);
  return req.then((res) => res.data);
};

export default { getAll, getOne, create, update, del };
