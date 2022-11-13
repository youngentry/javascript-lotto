const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/message");
const Generator = require("./Generator");
const Customer = require("./Customer");
const Lotto = require("./Lotto");
const Printer = require("./Printer");

class App {
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
        const amount = this.customer.getPurchaseAmount(money);
        const lottos = this.generator.getLottos(amount);
        Printer.printLottos(lottos);
        this.getInput(MESSAGE.LOTTO_NUMBER, this.inputNumbers);
    };

    inputNumbers = (numbers) => {
        console.log("number", numbers);
    };

    play() {
        this.getInput(MESSAGE.PURCHASE, this.inputMoney);
    }
}

const app = new App();
app.play();

module.exports = App;
