async function loadId() {
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
  passValues(orderNum);
}

function passValues(orderNum) {
  const stl = document.querySelector("#stl:checked");
  const jpeg = document.querySelector("#jpeg:checked");
  document.querySelector("#cad:checked");
  const selectedFile = document.getElementById("file").files[0];
  const qty = document.querySelector("#qty");
  const type = document.querySelector("#tysel");
  //fetching the number of the last order so the new one can be compiled
  orderNum.orderId = 1;
  setId(orderNum);
  //updating to the next order number, will require database to better function. using place holder of one for now
  

  window.location.href = "process.html";
}

async function setId(orderId) {
  const userName = localStorage.getItem("userName");
  const newOrder = { name: userName, orderId: orderId, date: date }
  try {
    const response = await fetch('/api/orderId', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newOrder),
    });

    // Store the new order
    const order = await response.json();
    localStorage.setItem('orderId', JSON.stringify(newOrder));
  } catch {
  }
}
passValues();