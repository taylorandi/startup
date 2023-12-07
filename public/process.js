async function displayId() {
    orderNum = [];
    try {
        // Get the latest high scores from the service
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
    const orderEl = document.createElement('p');
    orderEl.textContent = orderNum.name;
    tableBodyEl.innerHTML = `Your Order Number is: ${orderNum.orderId}`;
}


displayId();