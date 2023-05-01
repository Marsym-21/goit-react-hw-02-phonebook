import React from 'react';
import { nanoid } from 'nanoid';

class Phonebook extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmitName = evt => {
    evt.preventDefault();
    const id = nanoid();
    const { name } = this.state;
    let object = { name, id };
    console.log(object);
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
            type="text"
            placeholder="Enter number"
            // value={}
            // onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Phonebook;
