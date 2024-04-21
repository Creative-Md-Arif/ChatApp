import { createSlice } from '@reduxjs/toolkit'



export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    value : 0,
  },

  reducers: {
   // eslint-disable-next-line no-unused-vars
   loggeduser: (state, Action) =>{
     state.value += Action.payload;
    console.log(Action);

   }
  
  },
});

// Action creators are generated for each case reducer function
export const { loggeduser} = userSlice.actions

export default userSlice.reducer