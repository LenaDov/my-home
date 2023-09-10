function createData(
    date: string,
    gratitude: boolean,
    meditation: boolean,
    run: boolean,
    learn: boolean,
) {
    return { date, gratitude, meditation, run, learn };
}

export const habitsData = [
    createData('09/08/23', true, true, false, false),
    createData('09/07/23', true, false, true, false),
    createData('09/06/23', false, true, true, false),
    createData('09/05/23', true, false, true, true),
    createData('09/04/23', true, true, true, true),
];