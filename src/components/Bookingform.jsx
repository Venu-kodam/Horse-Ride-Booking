import React, { useState } from 'react'
import { setBookingDetails, confirmBooking } from '../Redux/bookingSlice'
import { useDispatch } from 'react-redux';
const Bookingform = ({ selectedHorse, onBack }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  //for validations 
  const validateName = (name) => {
    return name.length >= 3;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };
  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    const newErrors = {}
    if (!validateName(name)) {
      newErrors.name = 'Name should be atleast 3 characters';
    }

    if (!validateEmail(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!validatePhone(phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    dispatch(setBookingDetails({
      horse: selectedHorse,
      date,
      time,
      user: { name, email, phone }
    }));
    dispatch(confirmBooking());

  };
  return (
    <form onSubmit={handlesubmit}>
      <h2 className='text-center text-white'>Booking Form</h2>
      <h5 className='text-center text-white'>Booked Horse: {selectedHorse.name}</h5>
      <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="time" className="form-control" value={time} onChange={(e) => setTime(e.target.value)} required />
      <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      {errors.name && <small className="error my-1 text-danger">{errors.name}</small>}
      <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      {errors.email && <small className="error my-1 text-danger">{errors.email}</small>}
      <input type="tel" className="form-control" placeholder='Phone' maxLength={10} value={phone} onChange={(e) => setPhone(e.target.value)} required />
      {errors.phone && <small className="error my-1 text-danger">{errors.phone}</small>}
      <div className="buttons d-flex align-items-center justify-content-center gap-3 my-3">
        <button type='submit' className='submit' >Submit</button>
        <button type="button" className='back' onClick={onBack}>Back</button>
      </div>
    </form>
  )
}

export default Bookingform

