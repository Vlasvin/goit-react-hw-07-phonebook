import { ContList } from "components/ContactList/ContactList.styled";
import { Contact } from "components/Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { contactsSlice } from "../../redux/Contacts/contactsSlice";
// import { deleteContact } from "../../redux/Contacts/contactsSlice";

export const ContactList = () => {
  const filter = useSelector((state) => state.filter.filter);
  const contacts = useSelector((state) => state.contacts.item);
  const dispatch = useDispatch();
  console.log(contacts);

  const handleDeleteContact = (id) => {
    dispatch(contactsSlice.actions.deleteContact(id));
  };

  const getVisibleContacts = (filter) => {
    if (!contacts) {
      return [];
    }
    const normalizedFilter = filter ? filter.toLowerCase() : "";
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts(filter);

  return (
    <ContList>
      {visibleContacts.map((contact) => {
        const formattedName = contact.name
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        return (
          <Contact
            key={contact.id}
            contact={contact}
            formattedName={formattedName}
            deleteContact={() => handleDeleteContact(contact.id)}
          ></Contact>
        );
      })}
    </ContList>
  );
};
