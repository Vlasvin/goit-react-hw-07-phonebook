import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "Services/api";

export const getAllContactsAction = createAsyncThunk(
  "contacts/fetchAll",
  async () => {
    try {
      const data = await fetchContacts();
      return data;
    } catch (error) {}
  }
);
export const addContactAction = createAsyncThunk(
  "contacts/addContact",
  async (newContact, { rejectWithValue }) => {
    try {
      const data = await addContact(newContact);
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
      await deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue("Failed to delete contact. Please try again.");
    }
  }
);
