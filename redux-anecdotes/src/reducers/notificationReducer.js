import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: 'Welcome to Anecdotes app!',
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    clearNotification() {
      return ''
    }
  }
})

export const { setNotification, clearNotification } = notificationSlice.actions

export const setNotificationWithTimeout = (message, timeInSeconds) => {
  return async dispatch => {
    dispatch(setNotification(message))
    setTimeout(() => {
      dispatch(clearNotification())
    }, timeInSeconds * 1000)
  }
}

export default notificationSlice.reducer