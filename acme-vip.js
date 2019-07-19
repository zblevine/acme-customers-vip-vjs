const customers = [];

const nameBox = document.querySelector('#name')
const emailBox = document.querySelector('#email')
const vipBox = document.querySelector('#is-vip')
const vipCounts = document.querySelector('#count-vips');
const vips = document.querySelector("#vips");

render();

document.querySelector('#create').addEventListener('click', ev => {
  let id = Math.floor(Math.random() * 100);
  while(customers.find(customer => {
    return customer.id === id
  })) {
    id = Math.floor(Math.random() * 100);
  }

   customers.push({id: id, name: nameBox.value, email: emailBox.value, isVIP: vipBox.checked})

  render();
  console.log(customers);
});

function render() {
  vipCounts.innerHTML = `<p>${customers.length} VIPs</p>`

  vips.innerHTML = "";
  customers.forEach(customer => {
    const li = document.createElement("li");

    if (customer.isVIP) {
      li.classList.add("vip");
    }

    li.innerHTML = `${customer.name} (${customer.email})`;
    vips.appendChild(li);
  })
}


