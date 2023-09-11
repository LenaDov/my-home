import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/reducers/store';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [
        {id: 1, text: '', completed: false},
        {id: 2, text: '', completed: false},
        {id: 3, text: '', completed: false}
    ],
    reducers: {
      updateTask(state, action) {
        const { id, text } = action.payload
        const task = state.find(task => task.id === id)
        if (task) {
            task.text = text
        }
      },
      toggleTask(state, action) {
        const task = state.find(todo => todo.id === action.payload)
        if (task) {
            task.completed = !task.completed
        }
      }
    }
   })

   export const selectTasks = (state: RootState) => state.tasks;

   export const { updateTask, toggleTask } = tasksSlice.actions
   export default tasksSlice.reducer
