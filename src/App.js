const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/message");
const Generator = require("./Generator");
const Customer = require("./Customer");
const Lotto = require("./Lotto");
const Printer = require("./Printer");
const LottoBonus = require("./LottoBonus");

class App {
    #amount;
    #lottoList;
    #lottoResultArray;

    constructor() {
        this.lotto;
        this.bonus;
    }

    getInput(message, callback) {
        Console.readLine(message, callback);
    }

    inputMoney = (money) => {
        Printer.spaceLine();
        this.amount = new Customer().getPurchaseAmount(money);
        this.lottoList = new Generator().getLottos(this.amount);

        Printer.amountResult(this.amount, MESSAGE.PURCHASE_RESULT);
        Printer.lottoList(this.lottoList);
        Printer.spaceLine();

        this.getInput(MESSAGE.LOTTO_NUMBER, this.inputNumbers);
    };
    inputNumbers = (numbers) => {
        Printer.spaceLine();
        this.lotto = new Lotto(numbers);

        this.getInput(MESSAGE.BONUS_NUMBER, this.inputBonusNumber);
    };

    inputBonusNumber = (bonusNumber) => {
        Printer.spaceLine();
        this.bonus = new LottoBonus(bonusNumber);
        this.lotto.validateDuplication(this.bonus.number);
        const winningCount = this.lotto.getWinningCount(this.bonus.number, this.lottoList);
        const lottoResultArray = this.lotto.getLottoResult(winningCount);

        Printer.lottoResult(lottoResultArray);
        this.lotto.showRevenue(lottoResultArray, this.amount);
        Console.close();
    };

    play() {
        this.getInput(MESSAGE.PURCHASE, this.inputMoney);
    }
}

const app = new App();
app.play();

module.exports = App;
