const Printer = require("./Printer");

class Generator {
    constructor() {
        this.lottos = [];
    }

    setLottos(amount) {
        for (let i = 0; i < amount; i++) {
            this.lottos.push(this.makeRandomLotto());
        }
        return;
    }

    makeRandomLotto() {
        const sixNumber = [];
        for (let i = 0; i < 6; i++) {
            sixNumber.push(Math.ceil(Math.random() * 45));
        }
        return sixNumber.sort((a, b) => a - b);
    }
}

module.exports = Generator;
