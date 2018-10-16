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
