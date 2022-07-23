export const returnResult = (setState, course, func) => {
    if (func === 'edit') {
        console.log(func);
        setState((state) => {
            return state.map((x) => {
                if (course._id === x._id) {
                    console.log(x);
                    console.log(course);
                    return course;
                } else {
                    return x;
                }
            });
        });
        // console.log(courses);
    } else if (func === 'add' || func === 'addSimilar') {
        if (course) {
            setState((state) => [...state, course]);
        }
    } else if (func === 'delete') {
        if (course) {
            setState(state => state.filter(x => x._id !== course._id))
        }
    }
};

