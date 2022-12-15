const { Console } = require("@woowacourse/mission-utils");

class OutputView {
    printPurchaseResult(amount, purchasedLottos) {
        Console.print(amount + "개를 구매했습니다.");
        purchasedLottos.forEach((purchasedLotto) => {
            Console.print(purchasedLotto);
        });
    }

    printWinnings(winningArray) {
        const rankArray = [3, 4, 5, 5, 6];
        const prizeArray = ["(5,000원)", "(50,000원)", "(1,500,000원)", "보너스 볼 일치 (30,000,000원)", "(2,000,000,000원)"];
        rankArray.forEach((rank, index) => {
            Console.print(rank + "개 일치, " + prizeArray[index] + " - " + winningArray[index] + "개");
        });
    }

    printRevenue(revenue) {
        Console.print("총 수익률은 " + revenue + "%입니다.");
    }
}

module.exports = OutputView;
