async function passValues() {
  const stl = document.querySelector("#stl:checked");
  const jpeg = document.querySelector("#jpeg:checked");
  const cad = document.querySelector("#cad:checked");
  const selectedFile = document.getElementById("file").files[0];
  const qty = document.querySelector("#qty");
  const tysel = document.querySelector("#tysel");

  //updating to the next order number, will require database to better function. using place holder of one for now
  getPrevOrderNum();
  
}

async function getPrevOrderNum(){
  order = 1;
    try {
        // Get the latest high scores from the service
        const response = await fetch('/api/orderId');
        order = await response.json();


    } catch {
        // If there was an error then just use the last saved scores
        const scoresText = localStorage.getItem('orderId');
        if (scoresText) {
            order = JSON.parse(scoresText);
        }
    }
    
    var number = order[0].orderId;
    setId(number + 1);
}


async function setId(ordernum) {
  const userName = localStorage.getItem("userName");
  const date = new Date().toLocaleDateString();
  const newOrder = { name: userName, orderId: ordernum, date: date, qty: qty.value, type: tysel.value };
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
  window.location.href = "process.html";
}

