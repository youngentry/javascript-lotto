const { Console } = require("@woowacourse/mission-utils");

const validateMoneyInput = (moneyInput, callback) => {
    try {
        if (moneyInput % 1000 === 0 && moneyInput !== 0) return true;
        throw new Error("[Error] 잘못된 금액 입력");
    } catch {
        Console.print("[Error]");
        return callback();
    }
};

console.log(validateMoneyInput(1000));

module.exports = { validateMoneyInput };
