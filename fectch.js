// function loadUsers (){
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
//   .then (data => displayUser(data))
  
// }



const loadUsers2 = async() => {
  console.log('loadUsers2');
 try{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  
  displayUser(data)

 }
 catch(err){
  console.log(err);
 }
}


function displayUser(users){
  const displayContainer = document.getElementById('display_container');

  for (let user of users){
    const {name, username, email, address} = user;
    const div = document.createElement('div');
    div.classList.add('border-4', 'border-l-gray-600', 'mb-4', 'shawdow-lg',)
    div.innerHTML = `<h2 class='font-bold text-2xl'>Name: ${name}</h2>
    <p>Username: ${username}</p>
    <p>Email: ${email}</p>
   <p>${address.street}</p>
   <p>${address.city}</p>
   <p>${address.zipcode}</p>`
    displayContainer.appendChild(div)
  }
}





loadUsers2();