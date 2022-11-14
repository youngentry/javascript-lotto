class Customer {
    getPurchaseAmount(money) {
        if (this.checkMoneyValidation(money)) {
            return money / 1000;
        }
    }
    checkMoneyValidation(money) {
        money = money.trim();
        if (money % 1000 === 0 && parseInt(money) !== 0 && money) {
            return true;
        }
        throw new Error("[ERROR] 1,000원으로 나누어 떨어지는 수를 입력해야합니다.");
    }
}

module.exports = Customer;
