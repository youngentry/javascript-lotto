const Validation = require("./Validation");

class LottoBonus {
    number;

    constructor(bonusNumber) {
        this.validate(bonusNumber);
        this.number = bonusNumber;
    }

    validate(bonusNumber) {
        Validation.checkBonusLength(bonusNumber);
        Validation.checkRange(bonusNumber);
        Validation.checkInteger(bonusNumber);
    }
}

module.exports = LottoBonus;
