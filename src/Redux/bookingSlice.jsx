import { createSlice } from '@reduxjs/toolkit';

export const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    horse: null,
    date: '',
    time: '',
    user: {
      name: '',
      email: '',
      phone: ''
    },
    confirmed: false
  },
  reducers: {
    setBookingDetails(state, action) {
      state.horse = action.payload.horse;
      state.date = action.payload.date;
      state.time = action.payload.time;
      state.user = action.payload.user;
    },
    confirmBooking(state) {
      state.confirmed = true;
    },
    resetBooking(state) {
      state.horse = null;
      state.date = '';
      state.time = '';
      state.user = { name: '', email: '', phone: '' };
      state.confirmed = false;
    }
  }
});

export const { setBookingDetails, confirmBooking, resetBooking } = bookingSlice.actions;

