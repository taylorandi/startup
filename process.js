function displayOrder() {
    const orderNum = localStorage.getItem("orderId");
    const order = JSON.parse(orderNum);
    const tableBodyEl = document.querySelector('#order');
    const orderEl = document.createElement('p');
    orderEl.textContent = order.name;
    const number = order.orderId;
    tableBodyEl.innerHTML = `Your Order Number is: ${number}`;
}


displayOrder();