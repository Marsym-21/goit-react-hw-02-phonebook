import React from 'react';
const Phonebook = props => {
  // const { } = props
  return (
    <form
    // onSubmit={ }
    >
      <label>
        Name
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // onChange={this.handleChange}
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
      {/* <button type="submit">Sign up as {login}</button> */}
    </form>
  );
};

export default Phonebook;
