const Validation = require("./Validation");

class LottoBonus {
    #bonusNumber;

    constructor(bonusNumber) {
        this.validate(bonusNumber);
        this.bonusNumber = bonusNumber;
    }

    validate(bonusNumber) {
        Validation.checkLength(bonusNumber);
        Validation.checkRange(bonusNumber);
        Validation.checkInteger(bonusNumber);
    }
}

module.exports = LottoBonus;
