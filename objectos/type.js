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
