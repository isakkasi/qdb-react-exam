const toShort = (longDate) => {
    if(longDate){
        // console.log(longDate);
        let shortDate = longDate ? new Date(longDate) : undefined;
        let options = {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
        };
    
        return shortDate.toLocaleString('en-GB', options).replace(/ /g, '-');

    } else {
        return 'n/a'
    }
};

const dateParser = { toShort };
export default dateParser;
