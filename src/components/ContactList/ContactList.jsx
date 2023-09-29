export const ContactList = ({ filterchange, filter, filteredContacts }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <label htmlFor="Filter">Find contacts by name</label>
      <input type="text" name="Filter" value={filter} onChange={filterchange} />
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
