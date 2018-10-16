(() => {
  let name: string;

  class User {
    name: string;
    age: number;
  }

  class Collection<T> {
    items: T[];

    add(item: T) {
      this.items.push(item);
    }
  }

  const c = new Collection<string>();

  function add(a: User, b: number): number {
    return a.age + b;
  }

  add({ name: 'Hans', age: 3 }, 5);

  console.log(name);
})();
