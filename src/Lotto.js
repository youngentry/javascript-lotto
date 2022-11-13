const Printer = require("./Printer");
const Generator = require("./Generator");
const Customer = require("./Customer");
const LottoBonus = require("./LottoBonus");
const Validation = require("./Validation");
const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/message");

class Lotto {
    #numbers;

    constructor(numbers, bonusNumber) {
        // 입력받은 번호 유효성 검사
        this.amount = new Customer();
        this.lottos = new Generator();
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

    setAmount() {
        Console.readLine(MESSAGE.PURCHASE, (money) => {
            this.amount = this.amount.getPurchaseAmount(money);
        });
    }
}

module.exports = Lotto;

const lt = new Lotto("1,2,3,4,5,6", "7");

lt.setAmount();
