import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODQ1ZWY3NDNjOGYxYjdhOGI1ZDBjYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjkxOTI4MSwiZXhwIjoxNjg3MTc4NDgxfQ._AAAEVgGr-V7UtOVF29AiweMEm64oa427TszAE8eH6A";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer  ${TOKEN}` },
});
