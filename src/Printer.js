const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/message");

class Printer {
    // 메시지 출력
    constructor() {}

    static lottos(amount, message, lottos) {
        Console.print(amount + message);
        lottos.forEach((lotto) => {
            Console.print(lotto);
        });
        this.spaceLine();
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
// const print = new Printer();
// print.purchase();
// print.purchaseAmount(2);
// print.sixNumbers([
//     [1, 2, 3, 4, 5, 6],
//     [2, 3, 4, 5, 6, 7],
// ]);
// print.inputLottoNumber("1,2,3,4,5,6");
// print.inputBonusNumber(7);
// print.lottoResult([1, 0, 0, 0, 1]);

module.exports = Printer;
