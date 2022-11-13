const { Console, Random } = require("@woowacourse/mission-utils");
const Printer = require("./Printer");

class Generator {
    constructor() {
        // 랜덤한 로또를 담은 배열
    }

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

const gene = new Generator();

module.exports = Generator;
