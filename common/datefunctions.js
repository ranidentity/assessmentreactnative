
import moment from 'moment-timezone';
export function formatDateString(dateString) {
    const date = moment(dateString);
    const formattedTime = date.format('YYYY-MM-DD');

    // Get the day of the week
    const daysOfWeek = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const dayOfWeek = daysOfWeek[date.day()];
    // Combine the strings
    return `今天 ${formattedTime} ${dayOfWeek}`;
}