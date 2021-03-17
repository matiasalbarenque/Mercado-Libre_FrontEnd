export default {

    filters: {

        parsePrice(val) {
            return new Intl.NumberFormat('es-AR').format(val);
        },

        parseDecimal(val) {
            if (val === 0) {
                return '';
            }
            const decimal = val.toString().split('.')[1];
            return decimal.length === 1 ? `${decimal}0` : decimal;
        },

    },

};
