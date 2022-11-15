class Validation {
    static validateExpectNumbers(numbers) {
        this.checkNumbersLength(numbers);
        this.checkNumbersDuplicate(numbers);
        this.checkRange(numbers);
        this.checkNumber(numbers);
    }

    static checkNumbersLength(numbers) {
        if (Array.isArray(numbers)) numbers = numbers.join();
        if (numbers.split(",").length !== 6) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        }
    }

    static checkRange(numbers) {
        if (Array.isArray(numbers)) numbers = numbers.join();
        const numberArray = numbers.split(",");
        numberArray.forEach((number) => {
            if (parseInt(number) < 1 || parseInt(number) > 45) {
                throw new Error("[ERROR] 로또 번호는 1에서 45사이의 숫자여야 합니다.");
            }
        });
    }

    static checkNumber(numbers) {
        if (Array.isArray(numbers)) numbers = numbers.join();
        const numberArray = numbers.split(",");
        numberArray.forEach((number) => {
            if (!/^\d+$/g.test(number)) {
                throw new Error("[ERROR] 숫자를 입력해야 합니다.");
            }
        });
    }

    static checkNumbersDuplicate(numbers) {
        if (Array.isArray(numbers)) numbers = numbers.join();
        const setNumbers = new Set(numbers.split(","));
        if (numbers.split(",").length !== setNumbers.size) {
            throw new Error("[ERROR] 중복된 숫자가 포함되어 있으면 안됩니다.");
        }
    }

    static checkBonusDuplicate(numbers, bonusNumber) {
        const numbersArray = numbers.split(",");
        if (numbersArray.includes(bonusNumber.toString())) {
            throw new Error("[ERROR] 보너스 번호는 로또 번호와 중복된 숫자가 포함되어 있으면 안됩니다.");
        }
    }
}

module.exports = Validation;
