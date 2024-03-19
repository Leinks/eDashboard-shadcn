const { styleText } = require('node:util');
export const errorMessage = styleText('red');
export const infoMessage = styleText('blue');
export const successMessage = styleText('green');
export const warningMessage = styleText('yellow');