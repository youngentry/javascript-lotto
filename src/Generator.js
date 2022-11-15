const { Console, Random } = require("@woowacourse/mission-utils");
const Printer = require("./Printer");

class Generator {
    getLottos(amount) {
        return this.makeRandomLotto(amount);
    }

    makeRandomLotto(amount) {
        const sixNumber = [];
        for (let i = 0; i < amount; i++) {
            sixNumber.push(Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
        }
        return sixNumber;
    }
}

module.exports = Generator;
