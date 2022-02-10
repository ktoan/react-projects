import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM2ZmI4ZmUwYzA3YzQ1ZjQ1ODRhNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDQ5OTM4MCwiZXhwIjoxNjQ0NzU4NTgwfQ.w23x2QBsTl8IaFvOvAMinBID5NQlRky2HjYfMnFydUs";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
