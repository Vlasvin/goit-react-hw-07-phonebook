import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "Services/api";

export const getAllContactsAction = createAsyncThunk(
  "contacts/fetchAll",
  async () => {
    try {
      const data = await fetchContacts();
      return data;
    } catch (error) {
      // return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  }
);
export const addContactAction = createAsyncThunk(
  "contacts/addContact",
  async (data, { rejectWithValue }) => {
    try {
      const data = await addContact();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  }
);
export const deleteContactAction = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      const data = await deleteContact();
      console.log(data);
      return data;
    } catch (error) {}
  }
);
