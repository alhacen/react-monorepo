import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducers/counterSlice'
import listReducer from '../reducers/listSlice'
export default configureStore({
  reducer: {
    counter: counterReducer,
    list: listReducer
  }
})