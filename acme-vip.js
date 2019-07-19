const customers = [];

const nameBox = Document.querySelector('#name')
const emailBox = Document.querySelector('#email')
const vipBox = Document.querySelector('#is-vip')

Document.querySelector('#create').addEventListener('click', ev => {
   customers.push({name: nameBox.value, email: emailBox.value, isVIP: vipBox.value}) 
});