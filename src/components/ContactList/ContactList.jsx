import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = ({ filterchange, filter, filteredContacts, onDelete}) => {
  return (
    <div>
      <h2>Contacts</h2>
      <label htmlFor="Filter">Find contacts by name</label>
      <input type="text" name="Filter" value={filter} onChange={filterchange} />
      <ul>
        {filteredContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} onDelete={onDelete}/>
        ))}
      </ul>
    </div>
  );
};
