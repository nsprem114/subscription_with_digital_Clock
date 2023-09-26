const subscribeButton = document.getElementById('subscribeButton');
const unSubscribeButton = document.getElementById('unSubscribeButton');
const subscribeCountSpan = document.getElementById('subscriberCount');

// Initialing Subscriber Count
let subscriberCount = 0;

// function to Update Subscriber Count

function updateSubscriberCount(change) {
    subscriberCount+= change;
    subscribeCountSpan.textContent = subscriberCount;
}
// Function to Handel Subscriber
function subscribe() {
    updateSubscriberCount(1);
    alert('Thank you for you subscribibg! You subscriber #'+ subscriberCount);
}
// Function to Handel Unsubscriber
function unSubscriber() {
    if (subscriberCount > 0) {
        updateSubscriberCount(-1);
        alert('You have Unsubscribed. you are subscriber #'+subscriberCount);
    } else {
        alert('You are not Subscribed, Click on Subscribe');
    }
}

// Adding Event Listner to the Subscribe Button
subscribeButton.addEventListener('click', subscribe);
unSubscribeButton.addEventListener('click',unSubscriber);

function timeClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const session = hours>=12 ? 'PM' : 'AM';
    formateHours = hours % 12 || 12;

    const timeUpdate = `${formateHours}:${minutes}:${seconds}:${session}`;
    document.getElementById('timeClock').textContent = timeUpdate;
}
setInterval(timeClock);