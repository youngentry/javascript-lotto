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
        const numberArray = numbers.split("");
        numberArray.forEach((number) => {
            if (parseInt(number) < 1 || parseInt(number) > 45) {
                throw new Error("[ERROR] 보너스 번호는 1에서 45사이의 숫자여야 합니다.");
            }
        });
    }

    static checkInteger(numbers) {
        const numberArray = numbers.split("");
        numberArray.forEach((number) => {
            if (Number.isInteger(parseInt(number))) {
                return true;
            }
        });
        throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    }

    static checkDuplicate(numbers, bonusNumber) {
        const numbersArray = numbers.split("");
        if (numbersArray.includes(bonusNumber)) {
            throw new Error("[ERROR] 중복된 숫자가 포함되어 있으면 안됩니다.");
        }
    }
}

module.exports = Validation;
