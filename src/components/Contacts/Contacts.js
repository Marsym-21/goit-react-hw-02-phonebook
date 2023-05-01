import React from 'react';

const Contacts = props => {
  const { contacts, filter, onClick } = props;
  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(({ dataName }) =>
    dataName.toLowerCase().includes(normalizeFilter)
  );
  return (
    <ul>
      {visibleContacts.map(({ id, dataName, dataNumber }) => (
        <li key={id}>
          {dataName}: {dataNumber}{' '}
          <button type="submit" id={id} onClick={onClick}>
            Delet
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
