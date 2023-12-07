async function displayId() {
    orderNum = [];
    try {
        // Get the highest order from the service
        //will further implement to search for username
        const response = await fetch('/api/orderId');
        orderNum = await response.json();


    } catch {
        // If there was an error then just use the last saved scores
        const scoresText = localStorage.getItem('orderId');
        if (scoresText) {
            orderNum = JSON.parse(scoresText);
        }
    }

    displayOrder(orderNum);
}

function displayOrder(orderNum) {
    const tableBodyEl = document.querySelector('#order');
    tableBodyEl.innerHTML = `Your Order Number is: ${orderNum.orderId}`;
}


displayId();