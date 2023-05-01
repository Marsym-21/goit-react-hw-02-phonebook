import React from 'react';

const Contacts = props => {
  const { contacts } = props;
  return (
    <ul>
      {contacts.map(({ name, id }) => (
        <li key={id} id={id}>
          {name}
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
