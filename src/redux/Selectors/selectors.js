import { createSelector } from "@reduxjs/toolkit";

export const selectIsLoading = ({ contacts }) => contacts.isLoading;
export const selectError = ({ contacts }) => contacts.error;
export const selectFilter = ({ filter }) => filter.filter;

export const selectContacts = ({ contacts }) =>
  [...contacts.items].sort((a, b) => a.name.localeCompare(b.name));
export const selectContactItems = ({ contacts }) => contacts.items;

export const selectVisibleContacts = createSelector(
  [selectContactItems, selectFilter],
  (contacts, filter) => {
    if (!contacts) {
      return [];
    }

    const normalizedFilter = filter ? filter.toLowerCase() : "";
    const filteredContacts = contacts.filter((contact) =>
      contact.name.trim().toLowerCase().includes(normalizedFilter)
    );
    return filteredContacts;
  }
);
