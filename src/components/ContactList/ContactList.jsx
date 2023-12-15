import { ContList } from "components/ContactList/ContactList.styled";
import { Contact } from "components/Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export const ContactList = () => {
  const filter = useSelector((state) => state.filter.filter);
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const getVisibleContacts = (filter) => {
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
