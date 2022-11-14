const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, UNIT } = require("./constant/message");

class Printer {
    constructor() {}

    static amountResult(amount, amountResult) {
        Console.print(amount + amountResult);
    }

    static lottos(lottos) {
        lottos.forEach((lotto) => {
            Console.print(lotto);
        });
    }

    static spaceLine() {
        Console.print("");
    }

    static lottoResult(winnings) {
        for (let i = 0; i < winnings.length; i++) {
            Console.print(MESSAGE.WINNING[`${i}`] + winnings[i] + MESSAGE.KOREAN_AMOUNT_WORD);
        }
    }
}

module.exports = Printer;
