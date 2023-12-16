import { ContactForm } from "components/ContactForm/ContactForm";
// import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Div } from "components/ContactForm/ContactForm.styled";

export const App = () => {
  return (
    <Div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter></Filter>
      {/* <ContactList></ContactList> */}
    </Div>
  );
};
