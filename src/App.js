const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/message");
const Generator = require("./Generator");
const Customer = require("./Customer");
const Lotto = require("./Lotto");
const Printer = require("./Printer");

class App {
    amount;
    paidLottos;
    expectNumbers;
    bonusNumber;
    winningNumber;

    constructor() {
        this.customer = new Customer();
        this.generator = new Generator();
    }

    // 입력받아 결과 출력
    // Customer : getPurchaseAmount(money) => 금액 입력 받아 로또 수량 amount 반환
    // Generator : getLottos(amount) => 랜덤 로또 배열 lottos 반환
    // Lotto : getNumbers => 숫자 입력 받아 로또 배열 numbers 반환
    // Drawing :

    getInput(message, callback) {
        Console.readLine(message, callback);
    }

    inputMoney = (money) => {
        this.amount = this.customer.getPurchaseAmount(money);
        this.paidLottos = this.generator.getLottos(this.amount);
        Printer.spaceLine();
        Printer.lottos(this.amount, MESSAGE.PURCHASE_RESULT, this.paidLottos);
        this.getInput(MESSAGE.LOTTO_NUMBER, this.inputNumbers);
    };

    inputNumbers = (numbers) => {
        Printer.spaceLine();
        this.expectNumbers = new Lotto(numbers);
        this.getInput(MESSAGE.BONUS_NUMBER, this.inputBonusNumber);
    };

    inputBonusNumber = (bonusNumber) => {
        Console.print("비교 결과 출력");
    };

    play() {
        this.getInput(MESSAGE.PURCHASE, this.inputMoney);
    }
}

const app = new App();
app.play();

module.exports = App;
