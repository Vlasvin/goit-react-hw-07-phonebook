import { createSlice } from "@reduxjs/toolkit";
import {
  getAllContactsAction,
  addContactAction,
  deleteContactAction,
} from "./contactsOperations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = "";
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(getAllContactsAction.pending, handlePending)
      .addCase(getAllContactsAction.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllContactsAction.rejected, handleRejected)
      .addCase(addContactAction.pending, handlePending)
      .addCase(addContactAction.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addContactAction.rejected, handleRejected)
      .addCase(deleteContactAction.pending, handlePending)
      .addCase(deleteContactAction.fulfilled, (state, action) => {
        const idToDelete = action.payload;
        state.items = state.items.filter(
          (contact) => contact.id !== idToDelete
        );
        state.isLoading = false;
      })
      .addCase(deleteContactAction.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
