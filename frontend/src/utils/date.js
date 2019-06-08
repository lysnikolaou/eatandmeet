const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const getDay = (date) => {
    const d = new Date(date);
    const day = days[d.getDay()];
    const month = months[d.getMonth()];

    return `${day}, ${month} ${d.getDate()}`;
};
