const { Console, Random } = require("@woowacourse/mission-utils");
const Printer = require("./Printer");

class Generator {
    #lottos;
    constructor(amount) {
        // 랜덤한 로또를 담은 배열
        this.#lottos = this.getLottos(amount);
    }

    getLottos(amount) {
        return this.makeRandomLotto(amount);
    }

    makeRandomLotto(amount) {
        const sixNumber = [];
        for (let i = 0; i < amount; i++) {
            sixNumber.push(Random.pickUniqueNumbersInRange(1, 45, 6));
        }
        return sixNumber.sort((a, b) => a - b);
    }
}

const gene = new Generator();
console.log(gene.getLottos(3));

module.exports = Generator;
