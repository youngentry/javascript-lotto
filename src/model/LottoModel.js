class LottoModel {
    #money;
    #bonusNumber;
    #winnings;
    #prize;
    #revenue;

    setMoney(money) {
        this.#money = money;
    }

    getMoney() {
        return this.#money;
    }

    setBonusNumber(bonusNumber) {
        this.#bonusNumber = bonusNumber;
    }

    getBonusNumber() {
        return this.#bonusNumber;
    }

    setBonusNumber(bonusNumber) {
        this.#bonusNumber = bonusNumber;
    }

    getBonusNumber() {
        return this.#bonusNumber;
    }

    setWinnings(winnings) {
        this.#winnings = winnings;
    }

    getWinnings() {
        return this.#winnings;
    }

    setPrize(prize) {
        this.#prize = prize;
    }

    getPrize() {
        return this.#prize;
    }

    setRevenue(revenue) {
        this.#revenue = revenue;
    }

    getRevenue() {
        return this.#revenue;
    }
}

module.exports = LottoModel;
