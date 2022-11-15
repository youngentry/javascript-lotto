const { Random } = require("@woowacourse/mission-utils");
const { OPTION } = require("../constant/message");

class Generator {
    getLottos(amount) {
        return this.makeRandomLotto(amount);
    }

    makeRandomLotto(amount) {
        const randomLottos = [];
        for (let i = 0; i < amount; i++) {
            randomLottos.push(Random.pickUniqueNumbersInRange(OPTION.LOW_NUMBER, OPTION.HIGH_NUMBER, OPTION.LENGTH).sort((a, b) => a - b));
        }
        return randomLottos;
    }
}

module.exports = Generator;
