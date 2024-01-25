import { Component } from 'react';
import { ContactList } from './Contacts/ContactList';
import contacts from '../contacts.json';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 24,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}
