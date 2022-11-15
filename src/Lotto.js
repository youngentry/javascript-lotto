const Validation = require("./Validation");
const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, UNIT, OPTION, BONUS_OPTION } = require("./constant/message");

class Lotto {
    #numbers;

    constructor(numbers) {
        this.resultArray = [];
        this.validate(numbers);
        this.#numbers = numbers;
    }

    validate(numbers) {
        Validation.validateExpectNumbers(numbers);
    }
    validateDuplication(bonus) {
        Validation.checkBonusDuplicate(this.#numbers, bonus);
    }

    getWinningCount(bonus, lottos) {
        const winningCount = [];
        const numbersArray = this.#numbers.split(",");
        numbersArray.push(bonus);

        for (let i = 0; i < lottos.length; i++) {
            let count = 0;
            for (let j = 0; j < numbersArray.length; j++) {
                if (lottos[i].includes(parseInt(numbersArray[j])) && j < numbersArray.length - 1) {
                    count++;
                }
                if (count == 5 && j == numbersArray.length - 1) {
                    count += BONUS_OPTION.CHANCE;
                }
            }
            winningCount.push(count);
        }
        return winningCount;
    }

    getLottoResult(winningCount) {
        for (let i = 0; i < 5; i++) {
            this.resultArray.push(winningCount.filter((el) => el == i + 3).length);
        }
        // 5, 4, 3, 1, 2 순서로 담긴 등수를 5, 4, 3, 2, 1 순서로 바꿔주기
        this.resultArray[4] += winningCount.filter((el) => el > BONUS_OPTION.CHANCE).length;
        [this.resultArray[3], this.resultArray[4]] = [this.resultArray[4], this.resultArray[3]];

        return this.resultArray;
    }

    getRevenue(resultArray, amount) {
        let sum = 0;
        for (let i = 0; i < 5; i++) {
            sum += UNIT[i] * resultArray[i];
        }
        return ((sum / amount / OPTION.PRICE) * 100).toFixed(1);
    }

    showRevenue(resultArray, amount) {
        Console.print(MESSAGE.YIELD + " " + this.getRevenue(resultArray, amount) + "%" + MESSAGE.KOREAN_ENDING_WORD);
    }
}

module.exports = Lotto;
