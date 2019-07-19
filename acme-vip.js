let customers = [];

const nameBox = document.querySelector('#name')
const emailBox = document.querySelector('#email')
const vipBox = document.querySelector('#is-vip')
const vipCounts = document.querySelector('#count-vips');
const vips = document.querySelector("#vips");
const messageList = document.querySelector("#message");

render();

document.querySelector('#create').addEventListener('click', ev => {
  let id = Math.floor(Math.random() * 100);
  while (customers.find(customer => {
    return customer.id === id;
  })) {
    id = Math.floor(Math.random() * 100);
  }

   customers.push({id: id, name: nameBox.value, email: emailBox.value, isVIP: vipBox.checked})

  render();
});

function vipCount() {
  return customers.reduce((acc, cur) => {
    if (cur.isVIP) {
      return acc + 1;
    }
    return acc;
  }, 0)
}

nameBox.addEventListener('keyup', ev => {
    const nameMsg = document.querySelector('#nameMsg');
    if (!nameBox.value.length) {
        nameMsg.classList.add('turned-on');
    } else {
        nameMsg.classList.remove('turned-on');
    }
});

emailBox.addEventListener('keyup', ev => {
    const emailMsg = document.querySelector('#emailMsg');
    if (!emailBox.value.includes('@')) {
        emailMsg.classList.add('turned-on');
    } else {
        emailMsg.classList.remove('turned-on');
    }
});

function render() {
  vipCounts.innerHTML = `<p>${vipCount()} VIPs</p>`


  vips.innerHTML = "";
  customers.forEach(customer => {
    const li = document.createElement("li");

    if (customer.isVIP) {
      li.classList.add("vip");
    }

    li.innerHTML = `${customer.name} (${customer.email})
                    <button class='destroy' id="destroy${customer.id}" data-id="${customer.id}">Destroy</button>`;
    vips.appendChild(li);

    const destroyBtn = document.querySelector(`#destroy${customer.id}`);

    destroyBtn.addEventListener("click", ev => {
      const btnId = ev.target.dataset.id * 1;
      const idToDelete = customers.findIndex(customer => customer.id === btnId);
      customers.splice(idToDelete, 1);
      render();
    })
  })
}

