import { useDispatch, useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import { ListOfContacts } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/phonebook-api';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  // console.log(filteredContacts);

  return (
    <ListOfContacts>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          click={() => dispatch(deleteContact(id))}
        />
      ))}
    </ListOfContacts>
  );
};

export default ContactList;
