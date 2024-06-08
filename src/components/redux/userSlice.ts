
import { createSlice } from '@reduxjs/toolkit'



const themeSlice = createSlice({
  name: "user",
  initialState: {
    name: "Iroka",
    age: "Ntomchukwu",
  },
  reducers: {
    changeName(state, { payload }) {
      state.name = payload
    },
    changeAge(state, { payload }) {
      state.age = payload
    },
  }
})


export const { changeName,changeAge } = themeSlice.actions
export default themeSlice.reducer