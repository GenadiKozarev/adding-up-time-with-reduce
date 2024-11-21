// Select all elements with a 'data-time' attribute and convert the NodeList to an array
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
// Process the time nodes to calculate total seconds
const seconds = timeNodes
    // Extract the 'data-time' attribute values from each node
    .map(node => node.dataset.time)
    // Convert time codes (in 'mm:ss' format) to total seconds
    .map(timeCode => {
        // Split the time code into minutes and seconds,
        // and convert both to numbers using parseFloat
        const [min, sec] = timeCode.split(':').map(parseFloat);
        return min * 60 + sec;
    })
    .reduce((totalSeconds, videoSeconds) => totalSeconds + videoSeconds);
// Function to convert seconds to "hh:mm:ss" format
const formatTime = seconds => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;
    // Use padStart to ensure two-digit format for minutes and seconds
    return `${hours}:${
        minutes.toString().padStart(2, '0')}:${
        secondsLeft.toString().padStart(2, '0')}
    `;
};
console.log(formatTime(seconds));
const totalDuration = formatTime(seconds);
const total = document.querySelector('h3');
total.innerText += ` ${totalDuration}`;
