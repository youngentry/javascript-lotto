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
            this.setLottos();
        });
    }

    setLottos() {
        Console.readLine(this.amount + MESSAGE.PURCHASE_RESULT, (money) => {
            this.lottos = this.lottos.getLottos(this.amount);
            this.lottos.forEach((lotto) => {
                Console.print(lotto);
            });
            this.getWinningCount();
        });
    }

    getWinningCount() {
        const winningCount = [];
        let BONUS_CHANCE = 10;
        const numbersArray = this.#numbers.split(",");
        numbersArray.push(this.bonus.number);
        console.log(numbersArray, this.bonus.number);

        for (let i = 0; i < this.lottos.length; i++) {
            let count = 0;
            for (let j = 0; j < numbersArray.length; j++) {
                if (this.lottos[i].includes(parseInt(numbersArray[j])) && j < numbersArray.length - 1) {
                    count++;
                }
                if (count == 5 && j == numbersArray.length - 1) {
                    count += BONUS_CHANCE;
                }
            }
            winningCount.push(count);
        }
        console.log(winningCount);
        return winningCount;
    }
}

module.exports = Lotto;

const lt = new Lotto("1,2,3,4,5,6", "7");

lt.setAmount();
