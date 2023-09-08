import React, { Fragment } from "react";
import { Typography, Sheet, Table, Checkbox } from "@mui/joy";
import moment from "moment";

function createData(
    date: string,
    gratitude: boolean,
    meditation: boolean,
    run: boolean,
    learn: boolean,
) {
    return { date, gratitude, meditation, run, learn };
}

const data = [
    createData('09/08/23', true, true, false, false),
    createData('09/07/23', true, false, true, false),
    createData('09/06/23', false, true, true, false),
    createData('09/05/23', true, false, true, true),
    createData('09/04/23', true, true, true, true),
];

const Habits = () => {
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
                        {data.map((row) => (
                            <tr key={row.date}>
                                <td>{row.date}</td>
                                <td>
                                    <Checkbox variant='soft' checked={row.gratitude} onChange={() => { }} />
                                </td>
                                <td>
                                    <Checkbox variant='soft' checked={row.meditation} onChange={() => { }} />
                                </td>
                                <td>
                                    <Checkbox variant='soft' checked={row.run} onChange={() => { }} />
                                </td>
                                <td>
                                    <Checkbox variant='soft' checked={row.learn} onChange={() => { }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Sheet>
        </Fragment>
    )
}

export default Habits