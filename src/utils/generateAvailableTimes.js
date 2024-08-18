export function generateAvailableTimes(startTime, endTime) {
    const times = [];

    // Helper function to convert 12-hour time to 24-hour time
    const convertTo24Hour = (time) => {
        const [hour, modifier] = time.split(' ');
        let [hours, minutes] = hour.split(':');
        if (!minutes) minutes = '00';
        hours = hours ? hours.toString() : '00'; // Ensure hours is a string
        if (modifier === 'PM' && hours !== '12') {
            hours = (parseInt(hours, 10) + 12).toString();
        }
        if (modifier === 'AM' && hours === '12') {
            hours = '00';
        }
        return `${hours.padStart(2, '0')}:${minutes}`;
    };

    // Helper function to convert 24-hour time back to 12-hour time
    const convertTo12Hour = (time) => {
        let [hours, minutes] = time.split(':');
        const modifier = parseInt(hours, 10) >= 12 ? 'PM' : 'AM';
        hours = (parseInt(hours, 10) % 12 || 12).toString(); // Convert 0 to 12 for midnight
        return `${hours}:${minutes} ${modifier}`;
    };

    // Convert start and end times to 24-hour format
    let currentTime = convertTo24Hour(startTime);
    const endTime24 = convertTo24Hour(endTime);

    // Generate time slots
    while (currentTime < endTime24) {
        const [hours, minutes] = currentTime.split(':');
        const nextHour = (parseInt(hours, 10) + 1).toString();
        const nextTime = `${nextHour.padStart(2, '0')}:${minutes}`;
        const formattedTimeSlot = `${convertTo12Hour(currentTime)} - ${convertTo12Hour(nextTime)}`;
        times.push(formattedTimeSlot);
        currentTime = nextTime;
    }

    return times;
}