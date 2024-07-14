import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {resetBooking} from '../Redux/bookingSlice'
import { motion } from 'framer-motion';
const ConfirmationPopup = () => {
    const dispatch = useDispatch();
    const booking = useSelector((state) => state.booking);
    const handleClose = () => {
        dispatch(resetBooking());
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="confirmation-popup"
            >
                <h2 className='mb-3' style={{fontWeight:'600'}}>Booking Confirmed !</h2>
                <h5>Selected Horse: <span className='fw-bold'>{booking.horse.name}</span></h5>
                <h5>Thank you for Booking, <span className='fw-bold'>{booking.user.name} !!</span></h5>
                <button type='button'  className='close my-3' onClick={handleClose}>Close</button>
            </motion.div>
        </>
    )
}

export default ConfirmationPopup