import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsSlice";
import {
  ContForm,
  ContLabel,
  ContInput,
  AddButton,
} from "./ContactForm.styled";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    if (
      (name === "name" && /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ' ]*$/.test(value)) ||
      (name === "number" && /^[0-9-]*$/.test(value))
    ) {
      if (name === "name") {
        setName(value);
      } else if (name === "number") {
        setNumber(value);
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
      dispatch(addContact(newContact));
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
