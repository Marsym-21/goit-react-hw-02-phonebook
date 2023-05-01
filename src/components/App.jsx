import React from 'react';
import Phonebook from './Phonebook';
export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
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
          <Phonebook />
        </div>
      </div>
    );
  }
}
