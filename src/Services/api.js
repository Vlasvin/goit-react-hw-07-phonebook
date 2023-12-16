import axios from "axios";

axios.defaults.baseURL = "https://657c25fe394ca9e4af15911f.mockapi.io/contacts";

export async function fetchContacts() {
  const { data } = await axios.get(`/`);
  return data;
}
export async function addContact(item) {
  const { data } = await axios.post(`/`, item);
  return data;
}
export async function deleteContact(item) {
  const { data } = await axios.get(`/${item.id}`);
  return data;
}
