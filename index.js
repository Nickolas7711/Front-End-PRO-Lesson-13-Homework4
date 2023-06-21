const OPERATIONS = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y,
};

class SuperMath {
    constructor() {
    this.input();
    }

    input() {
        do {
            this.x = +prompt('Введить значення - X');
        } while (isNaN(this.x));

        do {
            this.y = +prompt('Введить значення - Y');
        } while (isNaN(this.y));

        do {
            this.znak = prompt(`Введить знак математичної операції ${this.getOperations()}`);
        } while (!OPERATIONS[this.znak]);

        return this;
    }

    check() {
        const confirFromUser = confirm(`Здійснити вирахування: ${this.x} ${this.znak} ${this.y}?`);

        return confirFromUser ? OPERATIONS[this.znak](this.x, this.y) : this.input().check();
    }

    getOperations() {
        return Object.keys(OPERATIONS).join(', ');
    }
}

const math = new SuperMath();

alert(`Результат вирахування: ${math.x} ${math.znak} ${math.y} = ${math.check()}`);