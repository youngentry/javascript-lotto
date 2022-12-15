const { Console } = require("@woowacourse/mission-utils");

class InputView {
    inputMoney = (callback) => {
        Console.readLine("구입금액을 입력해 주세요.", callback);
    };
    inputLottoNumber = (callback) => {
        Console.readLine("당첨 번호를 입력해 주세요.", callback);
    };
    inputBonusNumber = (callback) => {
        Console.readLine("보너스 번호를 입력해 주세요.", callback);
    };
    inputRestart = (callback) => {
        Console.readLine("다시 실행하려면 1, 종료하려면 2를 입력해 주세요.", callback);
    };
}

module.exports = InputView;
