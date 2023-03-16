import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
  users: [
    {
      id: 1,
      user: "@ashraful",
      name: "Ashraful Islam",
      image:
        "https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbiUyMGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      email: "ash123@gmail.com",
      role: "Admin",
      plan: "enterprise",
      status: "pending",
    },
  ],
};


export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload)
        }
    }
})

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
