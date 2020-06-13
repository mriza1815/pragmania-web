import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { getTodayDate } from '../../utils';

const GuestBook = props => {

  const [guests, setGuests] = useState([])
  const [form, setForm] = useState({ name: null, date: null, subject: null, message: null })
  
  const {name, subject, message} = form

  const handleOnChange = e => {
    const {name : inputName, value :  newValue} = e.currentTarget
    setForm(oldForm => ({...oldForm, [inputName]: newValue}))
  }

  const isFormValid = () => name && subject && message
  
  const resetForm = () => setForm({name: "", subject: "", message: "", date: null})

  const saveNewGuest = e => {
    e.preventDefault()
    if(isFormValid()){
      setGuests(oldGuests => [...oldGuests, {name, subject, message, date: getTodayDate()}])
      resetForm()
    } else{
      alert("Please fill all fields!")
    }
  }

  const renderGuest = (guest, key) => (
    <div key={key} className="bg-white col d-flex p-075em mt-1em">
      <div className="d-flex row justify-space">
        <span className="bold text-12">{guest.name}</span>
        <span className="text-09">{guest.date}</span>
      </div>
      <div>
        <p className="mt-1em lh-2em">
          <span>{guest.message}</span>
        </p>
      </div>
    </div>
  )

  const renderForm = () => (
    <form className="d-flex col bg-dark p-2em w-30" onSubmit={saveNewGuest}>
      <input type="text" placeholder="Name" className="input mt-2em br-5" name="name" value={name} onChange={handleOnChange}/>
      <input type="text" placeholder="Subject" className="input mt-2em br-5" name="subject" value={subject} onChange={handleOnChange}/>
      <textarea placeholder="Message" className="textarea mt-2em br-5" rows={10} name="message" value={message} onChange={handleOnChange}>{message}</textarea>
      <button className="fill-button self-center mt-2em bg-green" type="submit"><span className="text-dark">SEND</span></button>
    </form>
  )

  const renderGuests = () => (
    <div className="bg-dark p-2em scroll-list w-50 ml-2em guestbook-list">
      {guests.map(renderGuest)}
    </div>
  )
  
  return (
    <section id="guestbook" className="w-100 d-flex col align-center p-2em guestbook">
      <span className="bold h1 text-cream">GUESTBOOK</span>
      <div className="mt-1em d-flex row w-80">
        {renderForm()}
        {renderGuests()}
      </div>
    </section>
  );
};

GuestBook.propTypes = {};

export default GuestBook;