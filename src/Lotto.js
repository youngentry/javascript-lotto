const Printer = require("./Printer");
const Generator = require("./Generator");
const Customer = require("./Customer");

class Lotto {
    #numbers;

    constructor(numbers) {
        this.printer = new Printer();
        this.generator = new Generator();
        this.customer = new Customer();
        this.validate(numbers);
        this.#numbers = numbers;
    }

    validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        }
    }

    // TODO: 추가 기능 구현
}

module.exports = Lotto;
