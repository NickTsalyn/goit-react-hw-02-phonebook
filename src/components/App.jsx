import { Formik, Field, Form } from 'formik';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  filterchange = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const {filter} = this.state
    const filteredContacts = this.getFilteredContacts()
    return (
      <div>
        <div>
          <h1>Phonebook</h1>
          <Formik
            initialValues={{
              name: '',
              number: '',
            }}
            onSubmit={values => {
              const newContact = {
                id: nanoid(),
                name: values.name,
                number: values.number,
              };

              this.setState(prevState => ({
                contacts: [...prevState.contacts, newContact],
              }));

              values.name = "";
              values.number = ""
            }}
          >
            <Form>
              <label htmlFor="Name">Name</label>
              <Field
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                placeholder="type name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <label htmlFor="Number">Number</label>
              <Field
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <button type="submit">Add contact</button>
            </Form>
          </Formik>
        </div>
        <ContactList
          contacts={this.state.contacts}
          value={filter}
          filteredContacts={filteredContacts}
          filterchange={this.filterchange}
        />
      </div>
    );
  }
}
