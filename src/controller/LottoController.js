const { validateMoneyInput } = require("../utilities/validation");

class LottoController {
    #model;
    #inputView;
    #outputView;
    constructor(model, inputView, outputView) {
        this.#model = model;
        this.#inputView = inputView;
        this.#outputView = outputView;
    }

    convertMoneyToAmount(money) {
        return money / 1000;
    }

    validateInput(input, callback) {
        validateMoneyInput(input, callback);
    }
}
