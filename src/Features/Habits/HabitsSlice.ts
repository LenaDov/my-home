import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HabitRow } from './HabitRowField';
import { RootState } from '../../store/reducers/store';
import { habitsData } from '../../resources/DataMocks';

const initialState: HabitRow[] = [];

const habitsSlice = createSlice({
  name: 'habits',
  initialState: initialState,
  reducers: {
    loadHabits: {
      reducer: (state, action: PayloadAction<HabitRow[]>) => {
        return action.payload;
      },
      prepare: () => {
        return { payload: habitsData }
      }
    },
    addHabitRow(state, action) {
      const { id } = action.payload
      state.push({
        id: id,
        date: '',
        gratitude: false,
        meditation: false,
        run: false,
        learn: false,
      })
    },
    updateHabitRow(state, action) {
      const { id, habit } = action.payload
      const index = state.findIndex(row => row.id === id)
      
      if (index >= 0) {
        state[index] = habit;
      }
    }
  }
})

export const selectHabits = (state: RootState) => state.habits;

export const { loadHabits, addHabitRow, updateHabitRow } = habitsSlice.actions
export default habitsSlice.reducer
