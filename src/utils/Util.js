/**
 * @description Check empty of value
 * @param value Value check
 * @returns {boolean} true if value is empty
 */
export const isEmpty = (value) => {
    return String(value).trim() === "";
}