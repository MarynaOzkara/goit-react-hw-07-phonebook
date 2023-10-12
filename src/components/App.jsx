import ContactForm from './ContactForm/ContactForm';
import { Container, Title, SubTitle, Message } from './App.styled';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/phonebook-api';
import Loader from './Loader/Loader';

const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const length = contacts.length;
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>

      {length > 0 ? (
        <Filter />
      ) : (
        <Message>Contact list is empty! Add your first contact.</Message>
      )}
      {isLoading && !error && <Loader />}
      {length > 0 && <ContactList />}
    </Container>
  );
};
export default App;
