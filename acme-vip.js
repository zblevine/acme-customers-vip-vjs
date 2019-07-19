let customers = [{id: 1, name: 'aa', email: 'bbb', isVIP: true},
                   {id: 33, name: 'vvv', email: 'google', isVIP: false}];

const nameBox = document.querySelector('#name')
const emailBox = document.querySelector('#email')
const vipBox = document.querySelector('#is-vip')
const vipCounts = document.querySelector('#count-vips');
const vips = document.querySelector("#vips");

const allDestroy = document(querySelectorAll)

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

document.querySelectorAll('.destroy').addEventListener('click', ev => {
  console.log('test');
  let btnId = ev.target.dataset.id;
  customers = customers.filter((cust) => cust.id !== btnId);
  render();
})


function render() {
  console.log('hello');
  vipCounts.innerHTML = `<p>${customers.length} VIPs</p>`

  vips.innerHTML = "";
  customers.forEach(customer => {
    const li = document.createElement("li");

    if (customer.isVIP) {
      li.classList.add("vip");
    }

    li.innerHTML = `${customer.name} (${customer.email})
                    <button class='destroy' data-id="${customer.id}">Destroy</button>`;
    vips.appendChild(li);
  })
}


