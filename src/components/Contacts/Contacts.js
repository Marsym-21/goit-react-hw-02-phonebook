import React from 'react';
import css from './Contacts.module.css';
const Contacts = props => {
  const { contacts, filter, onClick } = props;
  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(({ dataName }) =>
    dataName.toLowerCase().includes(normalizeFilter)
  );
  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id, dataName, dataNumber }) => (
        <li className={css.item} key={id}>
          &#10003; {dataName}: {dataNumber}{' '}
          <button
            className={css.contact_btn}
            type="submit"
            id={id}
            onClick={onClick}
          >
            Delet
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
