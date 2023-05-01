import React from 'react';
// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
export class App extends React.Component {
  state = {
    contacts: [],
  };

  getDataForm = data => {
    const { contacts } = this.state;
    this.setState({ contacts: contacts.push(data) });
    console.log(contacts);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div className="bookcontacts">
          <h1>PhoneBook</h1>
          <Phonebook onSubmit={this.getDataForm} />
          <h1>Contacts</h1>
          <Contacts contacts={this.contacts} />
        </div>
      </div>
    );
  }
}
