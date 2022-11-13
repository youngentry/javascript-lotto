class Customer {
    constructor() {
        // 구매 수량
    }

    getPurchaseAmount(money) {
        if (this.checkMoneyValidation(money)) {
            return money / 1000;
        }
    }
    checkMoneyValidation(money) {
        if (money % 1000 === 0 && money !== 0) {
            return true;
        }
        throw new Error("[ERROR] 1,000원으로 나누어 떨어지는 수를 입력해야합니다.");
    }
}

module.exports = Customer;
