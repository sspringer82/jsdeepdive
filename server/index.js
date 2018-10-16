fetch('http://localhost:3000/users')
  .then(response => {
    return response.json();
  })
  .then(data => console.log(data));

function createNode(data) {
  const div = document.createElement('div');
  div.innerText = data.name;
  document.querySelector('body').append(div);
}
