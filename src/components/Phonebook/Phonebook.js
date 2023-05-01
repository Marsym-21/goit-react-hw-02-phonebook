import React from 'react';
import { nanoid } from 'nanoid';

class Phonebook extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmitName = evt => {
    evt.preventDefault();

    const { name, number } = evt.target;

    const dataName = name.value;
    const dataNumber = number.value;

    const id = nanoid();

    let object = { id, dataName, dataNumber };
    this.props.onSubmit(object);
  };

  handleChangeName = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitName}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChangeName}
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            placeholder="123-45-67"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChangeName}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Phonebook;
