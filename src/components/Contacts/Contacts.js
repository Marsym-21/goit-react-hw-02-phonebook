import React from 'react';

const Contacts = props => {
  const { contacts, filter } = props;
  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(({ dataName }) =>
    dataName.toLowerCase().includes(normalizeFilter)
  );
  console.log(visibleContacts);
  return (
    <ul>
      {visibleContacts.map(({ id, dataName, dataNumber }) => (
        <li key={id} id={id}>
          {dataName}: {dataNumber}
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
