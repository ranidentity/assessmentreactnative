export function formatDateString(dateString) {
    const date = new Date(dateString);

    // Format the date
    // const dateFormatter = new Intl.DateTimeFormat('zh-CN', {
    //     year: 'numeric',
    //     month: '2-digit',
    //     day: '2-digit',
    //     weekday: 'long'
    // });
    // const formattedDate = dateFormatter.format(date);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = date.toLocaleDateString('zh-CN', options);


    // Get the day of the week
    const daysOfWeek = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const dayOfWeek = daysOfWeek[date.getDay()];
// console.log(formattedDateString); // Output: "今天 04/01/2024 星期一"
    // Combine the strings
    return `今天 ${formattedDate} ${dayOfWeek}`;
}