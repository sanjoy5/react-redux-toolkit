import { createSlice } from '@reduxjs/toolkit'

const mytasksSlice = createSlice({
    name: "myTasks",
    initialState: {
        name: "Sanjoy Sarker",
        email: "sanjoy%gmail.com",
    },
    reducers: {

    }
})

export default mytasksSlice.reducer;