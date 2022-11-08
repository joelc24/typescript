"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    let Superman = {
        name: "Clark kent",
        age: 60,
        powers: ['Super velocidad'],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return this.name + " " + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: "Joel",
        age: 21,
        address: {
            id: 152,
            zip: "KY2 SUID",
            city: "Otawa"
        },
        getFullAddress(id) {
            var _a;
            return (_a = this.address) === null || _a === void 0 ? void 0 : _a.city;
        }
    };
    const client2 = {
        name: "Melisa",
        age: 30,
        address: {
            id: 120,
            city: "Toronto",
            zip: "K2S U2A"
        },
        getFullAddress(id) {
            var _a;
            return (_a = this.address) === null || _a === void 0 ? void 0 : _a.city;
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map