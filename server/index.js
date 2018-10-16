(async () => {
  const response = await fetch('http://localhost:3000/users');
  const data = await response.json();
  data
    .map(user => {
      const div = document.createElement('div');
      div.innerText = user.name;
      return div;
    })
    .forEach(div => document.querySelector('body').append(div));
})();
