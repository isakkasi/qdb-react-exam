const capFirst = (text) => {
    if (text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    } else {
        return '';
    }
};

const stringParser = { capFirst };
export default stringParser;
