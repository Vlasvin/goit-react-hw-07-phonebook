import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
// import { contactsSlice } from "../../redux/Contacts/contactsSlice";
import {
  ContForm,
  ContLabel,
  ContInput,
  AddButton,
} from "./ContactForm.styled";
import { addContactAction } from "../../redux/Contacts/contactsOperations";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    const trimmedValue = value.trim();
    if (
      (name === "name" && /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ' ]*$/.test(trimmedValue)) ||
      (name === "number" && /^[0-9-]*$/.test(trimmedValue))
    ) {
      if (name === "name") {
        setName(trimmedValue);
      } else if (name === "number") {
        setNumber(trimmedValue);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      dispatch(addContactAction(newContact));
    }
    setName("");
    setNumber("");
  };

  return (
    <ContForm onSubmit={handleSubmit}>
      <ContLabel>
        Name
        <ContInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </ContLabel>

      <ContLabel>
        Number
        <ContInput
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </ContLabel>

      <AddButton type="submit">Add contact</AddButton>
    </ContForm>
  );
};
