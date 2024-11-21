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
    });
