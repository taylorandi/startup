async function passValues() {
  const stl = document.querySelector("#stl:checked");
  const jpeg = document.querySelector("#jpeg:checked");
  document.querySelector("#cad:checked");
  const selectedFile = document.getElementById("file").files[0];
  const qty = document.querySelector("#qty");
  const type = document.querySelector("#tysel");

  //updating to the next order number, will require database to better function. using place holder of one for now
  const orderId = 1;
  setId(orderId);
  window.location.href = "process.html";
}

async function setId(ordernum) {
  const userName = localStorage.getItem("userName");
  const date = new Date().toLocaleDateString();
  const newOrder = { name: userName, orderId: ordernum, date: date };
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
