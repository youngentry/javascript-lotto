const Printer = require("./Printer");
const Generator = require("./Generator");
const Customer = require("./Customer");
const LottoBonus = require("./LottoBonus");
const Validation = require("./Validation");
const { Console } = require("@woowacourse/mission-utils");

class Lotto {
    #numbers;

    constructor(numbers, bonusNumber) {
        // 입력받은 번호 유효성 검사
        this.bonus = new LottoBonus(bonusNumber);
        this.resultArray = [];
        this.validate(numbers);
        this.#numbers = numbers;
    }

    validate(numbers) {
        Validation.checkInteger(numbers);
        Validation.checkNumbersLength(numbers);
        Validation.checkRange(numbers);
        Validation.checkNumbersDuplicate(numbers);
        Validation.checkBonusDuplicate(numbers, this.bonus.number);
    }

    setResultArray() {
        console.log(this.bonus.number);
        console.log(this.#numbers);

        Console.close();
    }
}

module.exports = Lotto;

const lt = new Lotto(123456, 7);

console.log(lt.setResultArray());
