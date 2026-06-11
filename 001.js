let spans = document.querySelectorAll(".cards span");

setTimeout(() => {
    hidCards()

}, 2000);

function hidCards() {

    console.log(spans);
    for (i = 0; i < spans.length; i++) {
        spans[i].classList.add('hidden');
    }
}
spans.addEventListener('click',flipcard(Event))



function test() {
    // Define the function that will be called when the button is clicked
    function handleClick(event) {
        console.log('Button was clicked!');

        // Example: Change the background color of the button
        button.style.backgroundColor = 'lightblue';
    }

    // Add the event listener to the button
    button.addEventListener('click', handleClick);

    // Optionally, log a message indicating that the event listener is attached
    console.log('Event listener added for click event.');
}