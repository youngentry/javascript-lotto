class LottoModel {
    #money;
    #bonusNumber;
    #winnings;
    #prize;

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
}

module.exports = LottoModel;
