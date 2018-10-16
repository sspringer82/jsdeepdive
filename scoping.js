function getUser() {
  let username = 'Basti';
  let password = 'secret';
  return {
    getUsername: function() {
      return username;
    },
    setUsername: function(name) {
      username = name;
    },
  };
}

const user = getUser();

console.log(user.getUsername());
user.setUsername('Karl-Heinz');
console.log(user.getUsername());
