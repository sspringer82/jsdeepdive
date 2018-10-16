(() => {
    let name;
    class User {
    }
    class Collection {
        add(item) {
            this.items.push(item);
        }
    }
    const c = new Collection();
    function add(a, b) {
        return a.age + b;
    }
    add({ name: 'Hans', age: 3 }, 5);
    console.log(name);
})();
