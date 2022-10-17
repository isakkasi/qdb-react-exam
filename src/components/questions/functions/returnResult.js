export const returnResult = (setState, item, func) => {
    if (func === 'edit') {
        // console.log(func);
        setState((state) => {
            return state.map((x) => {
                if (item._id === x._id) {
                    // console.log(x);
                    // console.log(item);
                    return item;
                } else {
                    return x;
                }
            });
        });
        // console.log(courses);
    } else if (func === 'add' || func === 'addSimilar') {
        if (item) {
            setState((state) => [item, ...state]);
        }
    } else if (func === 'delete') {
        if (item) {
            setState(state => state.filter(x => x._id !== item._id))
        }
    }
};

