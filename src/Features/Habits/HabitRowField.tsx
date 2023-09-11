import React from "react";
import { Checkbox } from "@mui/joy";
import { useAppDispatch } from "../../store/reducers/store";
import { updateHabitRow } from "./HabitsSlice";

export type HabitRow = {
    id: number,
    date: string,
    gratitude: boolean,
    meditation: boolean,
    run: boolean,
    learn: boolean,
}

export interface HabitRowProps {
    habit: HabitRow
}

const HabitRowField = ({ habit }: HabitRowProps) => {
    const dispatch = useAppDispatch();

    const toggleGratitude = (event: React.ChangeEvent<HTMLInputElement>) => 
        dispatch(updateHabitRow({
            id: habit.id, 
            habit: { ...habit, gratitude: event.target.checked}
        }));

        const toggleMeditation = (event: React.ChangeEvent<HTMLInputElement>) => 
        dispatch(updateHabitRow({
            id: habit.id, 
            habit: { ...habit, meditation: event.target.checked}
        }));

        const toggleRun = (event: React.ChangeEvent<HTMLInputElement>) => 
        dispatch(updateHabitRow({
            id: habit.id, 
            habit: { ...habit, run: event.target.checked}
        }));

        const toggleLearn = (event: React.ChangeEvent<HTMLInputElement>) => 
        dispatch(updateHabitRow({
            id: habit.id, 
            habit: { ...habit, learn: event.target.checked}
        }));

    return (
        <tr key={habit.date}>
            <td>{habit.date}</td>
            <td>
                <Checkbox variant='soft' checked={habit.gratitude} onChange={toggleGratitude} />
            </td>
            <td>
                <Checkbox variant='soft' checked={habit.meditation} onChange={toggleMeditation} />
            </td>
            <td>
                <Checkbox variant='soft' checked={habit.run} onChange={toggleRun} />
            </td>
            <td>
                <Checkbox variant='soft' checked={habit.learn} onChange={toggleLearn} />
            </td>
        </tr>

    )
}

export default HabitRowField