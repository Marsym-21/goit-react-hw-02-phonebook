import React from 'react';
// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';
export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', dataName: 'Rosie Simpson', dataNumber: '459-12-56' },
      { id: 'id-2', dataName: 'Hermione Kline', dataNumber: '443-89-12' },
      { id: 'id-3', dataName: 'Eden Clements', dataNumber: '645-17-79' },
    ],
    filter: '',
  };

  chahgeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getDataForm = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
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
          <Filter value={this.state.filter} onChange={this.chahgeFilter} />
          <Contacts contacts={this.state.contacts} filter={this.state.filter} />
        </div>
      </div>
    );
  }
}
