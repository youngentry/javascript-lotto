const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/message");
const Generator = require("./Generator");
const Customer = require("./Customer");
const Lotto = require("./Lotto");
const Printer = require("./Printer");
const LottoBonus = require("./LottoBonus");
const Validation = require("./Validation");

class App {
    amount;
    lottos;
    winningNumber;

    constructor() {
        this.customer = new Customer();
        this.generator = new Generator();
        this.lotto;
        this.bonus;
    }

    getInput(message, callback) {
        Console.readLine(message, callback);
    }

    inputMoney = (money) => {
        Printer.spaceLine();
        this.amount = this.customer.getPurchaseAmount(money);
        this.lottos = this.generator.getLottos(this.amount);
        Printer.amountResult(this.amount, MESSAGE.PURCHASE_RESULT);
        Printer.lottos(this.lottos);
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
        const winningCount = this.lotto.getWinningCount(this.bonus.number, this.lottos);
        const lottoPlaceArray = this.lotto.getLottoResult(winningCount);
        console.log(winningCount, "이긴 숫자");
        console.log(lottoPlaceArray, "당첨내역");
        this.lotto.showResult(lottoPlaceArray, this.amount);
    };

    play() {
        this.getInput(MESSAGE.PURCHASE, this.inputMoney);
    }
}

const app = new App();
app.play();

module.exports = App;
