class Customer {
    constructor() {
        this.purchaseAmount = null;
    }

    setPurchaseAmount(money) {
        this.purchaseAmount = this.divideBy1000(money);
        return;
    }

    divideBy1000(money) {
        if (this.checkMoneyValidation(money)) {
            return money / 1000;
        }
    }

    checkMoneyValidation(money) {
        if (money % 1000 === 0) {
            return true;
        }
        throw new Error("[ERROR] 1,000원으로 나누어 떨어지는 수를 입력해야합니다.");
    }
}

module.exports = Customer;
