const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/message");

class Printer {
    static spaceLine() {
        Console.print("");
    }

    static amountResult(amount, amountResult) {
        Console.print(amount + amountResult);
    }

    static lottoList(lottos) {
        lottos.forEach((lotto) => {
            Console.print("[" + lotto.toString().replaceAll(",", ", ") + "]");
        });
    }

    static lottoResult(winnings) {
        for (let i = 0; i < winnings.length; i++) {
            Console.print(MESSAGE.WINNING[`${i}`] + winnings[i] + MESSAGE.KOREAN_AMOUNT_WORD);
        }
    }
}

module.exports = Printer;
