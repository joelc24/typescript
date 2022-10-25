"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'No lastname'}`.toUpperCase();
        }
        return `${firstName} ${lastName || 'No lastname'}`;
    };
    const name = fullName('Tony');
})();
