const user = {
  firstname: 'Klaus',
  lastname: 'Müller',
  get fullName() {
    return this.firstname + ' ' + this.lastname;
  },
  set age(age) {
    this._age = age;
  },
  get age() {
    return this._age;
  },
  getFullName: function() {
    setTimeout(() => {
      console.log(this.fullName);
    }, 1000);
  },
  getFullName2: function() {
    // var self = this;
    const callback = function() {
      console.log(this.fullName);
    };
    setTimeout(callback.bind(this), 1000);
  },
};
//const obj = Object.create();

user.getFullName();
console.log(user.fullName);
user.age = 42;
(() => {
  const user = {
    name: 'Klaus',
    lastname: 'Müller',
    getFullname() {
      return this.name + ' ' + this.lastname;
    },
  };

  function User(name, age) {
    this.name = name;
    this.age = age;
  }

  User.prototype.getUser = function() {
    return this.name + ' ' + this.age;
  };
  User.prototype.address = 'Zuhause';

  User.create = function(name, age) {
    return new User(name, age);
  };

  const bert = new User('Bert', 42);
  const ralf = new User('Ralf', 41);
  console.log(bert);
  console.log(bert.getUser());
  bert.address = 'wo anders';
  console.log(bert.hasOwnProperty('address'));
  console.log(bert.address);
  const kunnigunde = User.create('Kunnigunde', 28);
  console.log(kunnigunde);
})();

(() => {
  class Person {
    constructor(name) {
      this.name = name;
    }
  }

  class User extends Person {
    constructor(name, age) {
      super(name);
      this.age = age;
    }

    getFullname() {
      return this.name + ' ' + this.age;
    }

    static create() {
      return new User('Dummy', 14);
    }
  }

  const bäbel = new User('Bärbel', 17);

  User.prototype.getAge = function() {
    return this.age < 20 ? 'young' : 'old';
  };
  console.log(bäbel.getAge());

  const basti = new User('Basti', 14);
  console.log(basti.getAge());

  const dummy = User.create();
  console.log(dummy);
})();

const arr = [1, 2, 3];
for (let i = 0, y = arr.length; i < y; i++) {}
