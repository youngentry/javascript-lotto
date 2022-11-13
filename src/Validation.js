class Validation {
    static checkNumbersLength(number) {
        if (number.toString().length !== 6) {
            throw new Error("[ERROR] 보너스 번호는 6개여야 합니다.");
        }
    }
    static checkBonusLength(number) {
        if (number.toString().length !== 1) {
            throw new Error("[ERROR] 보너스 번호는 1개여야 합니다.");
        }
    }

    static checkRange(numbers) {
        const numberArray = numbers.toString().split("");
        numberArray.forEach((number) => {
            if (parseInt(number) < 1 || parseInt(number) > 45) {
                throw new Error("[ERROR] 보너스 번호는 1에서 45사이의 숫자여야 합니다.");
            }
        });
    }

    static checkInteger(numbers) {
        const numberArray = numbers.toString().split("");
        numberArray.forEach((number) => {
            if (!Number.isInteger(parseInt(number))) {
                throw new Error("[ERROR] 숫자를 입력해야 합니다.");
            }
        });
    }

    static checkBonusDuplicate(numbers, bonusNumber) {
        const numbersArray = numbers.toString().split("");
        if (numbersArray.includes(bonusNumber.toString())) {
            throw new Error("[ERROR] 중복된 숫자가 포함되어 있으면 안됩니다.");
        }
    }

    static checkNumbersDuplicate(numbers) {
        const setNumbers = new Set(numbers.toString().split(""));
        if (numbers.toString().length !== setNumbers.size) {
            throw new Error("[ERROR] 중복된 숫자가 포함되어 있으면 안됩니다.");
        }
    }
}

module.exports = Validation;
