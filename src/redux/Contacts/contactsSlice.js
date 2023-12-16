import { createSlice } from "@reduxjs/toolkit";
import {
  getAllContactsAction,
  addContactAction,
  deleteContactAction,
} from "../Contacts/contactsOperations";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(getAllContactsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllContactsAction.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllContactsAction.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addContactAction.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContactAction.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      });
  },
});
console.log(contactsSlice);
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
