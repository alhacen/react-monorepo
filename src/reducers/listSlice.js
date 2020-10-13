import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'

const axios = require('axios');

const initialState = {
  items: [],
  status: 'idle',
  error: null
}
const sleep = milliseconds => {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
export const fetchList = createAsyncThunk('users/fetchList', async () => {
  const response = await axios.get('https://alhaqhassan.github.io/my_gits/lists.json')
  sleep(1000);//delay of 1s in fetching data
  return response.data
})

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: {
      reducer(state, action) {
        console.log(action)
        const data = action.payload
        state.items = state.items.concat(data)
      },
      prepare(title) {
        return {
          payload: {
            title: title
          }
        }
      }
    },
    removeItem(state,action){
      let index = action.payload;
      console.log(index)
      state.items.splice(index,1);
    }
  },
  extraReducers: {
    [fetchList.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchList.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.items = state.items.concat(action.payload)
    },
    [fetchList.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

export const { addItem,removeItem } = listSlice.actions

export default listSlice.reducer

export const selectAllList = state => state.list.items

export const selectStatus = state => state.list.status