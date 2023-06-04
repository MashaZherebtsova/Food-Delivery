import React, { useState } from 'react';
import css from './ShopingCart.module.css';
import { nanoid } from 'nanoid';

export function ShopingCart({ addContact }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [fhone, setFhone] = useState('');
  const [adress, setAdress] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const isContactEsist = addContact({ id: nanoid(6), name });
    if (!isContactEsist) {
      reset();
    }
  };
  function handleChange(e) {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setFhone(value);
        break;
      default:
        break;
    }
  }

  const reset = () => {
    setName('');
    setEmail('');
    setAdress('');
    setFhone('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formLabel}>
        Name:
        <input
          className={css.formName}
          placeholder="name"
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
        ></input>
      </label>
      <label className={css.formLabel}>
        Email:
        <input
          className={css.formName}
          placeholder="Email"
          onChange={handleChange}
          type="text"
          name="name"
          value={email}
        ></input>
      </label>
      <label className={css.formLabel}>
        Fhone:
        <input
          className={css.formName}
          placeholder="Fhone"
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={fhone}
        ></input>
      </label>
      <label className={css.formLabel}>
        Adress:
        <input
          className={css.formName}
          placeholder="Adress"
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={adress}
        ></input>
      </label>
      <button>Submit</button>
    </form>
  );
}
