function createData(
    id: number,
    date: string,
    gratitude: boolean,
    meditation: boolean,
    run: boolean,
    learn: boolean,
) {
    return { id, date, gratitude, meditation, run, learn };
}

export const habitsData = [
    createData(1,'09/08/23', true, true, false, false),
    createData(2, '09/07/23', true, false, true, false),
    createData(3, '09/06/23', false, true, true, false),
    createData(4, '09/05/23', true, false, true, true),
    createData(5, '09/04/23', true, true, true, true),
];

export const tasksMock = [{ text: 'eat', checked: true }, { text: 'love', checked: false }, { text: 'dance', checked: false }];