import React, { Fragment, useEffect } from "react";
import { Typography, Sheet, Table} from "@mui/joy";

import HabitRow from "./HabitRowField";
import { useAppDispatch, useAppSelector } from "../../store/reducers/store";
import { selectHabits, loadHabits } from "./HabitsSlice";


const Habits = () => {
    const habits = useAppSelector(selectHabits);
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      dispatch(loadHabits());
    }, [dispatch]);

    return (
        <Fragment>
            <Typography level="h2" color="primary">Habit Tracker</Typography>
            <Sheet sx={{
                mx: 'auto', // margin left & right
                my: 1, // margin top & bottom
                py: 3, // padding top & bottom
                px: 2, // padding left & right
                borderRadius: 'sm',
                boxShadow: 'md',
            }}>
                <Table
                    borderAxis="none"
                    color="neutral"
                    size="lg"
                    stickyHeader
                    hoverRow
                >
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Gratitude</th>
                            <th>Meditation</th>
                            <th>Run</th>
                            <th>Learn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {habits.map((row) => (
                            <HabitRow key={row.date} habit={row} />
                        ))}
                    </tbody>
                </Table>
            </Sheet>
        </Fragment>
    )
}

export default Habits