
import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './features/tasks/tasksSlice'
import mytasksSlice from './features/mytasks/mytasksSlice'

const store = configureStore({
    reducer: {
        tasksSlice: tasksSlice,
        mytasksSlice: mytasksSlice,
    },
})

export default store