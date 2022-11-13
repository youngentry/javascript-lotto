const Printer = require("./Printer");
const Generator = require("./Generator");
const Customer = require("./Customer");
const LottoBonus = require("./LottoBonus");

class Lotto {
    #numbers;

    constructor(numbers) {
        // 입력받은 번호 유효성 검사
        this.bonus;
        this.validate(numbers);
        this.#numbers = numbers;
    }

    validate(numbers) {
        if (numbers.toString().length !== 6) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        }
    }
}

module.exports = Lotto;
