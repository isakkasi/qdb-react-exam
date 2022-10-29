import { useState } from 'react';
import { useEffect } from 'react';

import * as confServices from '../../../services/configurationServices';

import styles from './Filter.module.css';

export const Filter = (
    {
        // questions,
        // filterQuestions,
        // qty
    }
) => {
    const initialFilter = { course: 'any' };

    const [filterData, setFilterData] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState(initialFilter);

    useEffect(() => {
        confServices.getAllCourses()
        .then((result) => {
            // console.log(result);
            setFilterData((state) => result);
        });
    }, []);

    // useEffect(() => {
    //     filterQuestions(selectedFilter);
    // }, [selectedFilter]);

    const filterOnChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        setSelectedFilter((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));

        // filterQuestions(selectedFilter);
    };

    const clearBtnClick = () => {
        setSelectedFilter({ course: 'any' });
    };

    return (
        <div className={styles.filter}>
            <label htmlFor="course">
                Course:
                <select name="course" id="course" onChange={filterOnChange} value={selectedFilter.course}>
                    <option key="0" value="any">
                        -- Any type --
                    </option>
                    {filterData.map((x) => (
                        <option key={x._id} value={x._id}>
                            {x.internalRef} - {x.title}
                        </option>
                    ))}
                </select>
            </label>

            <button className={styles.clearButton} onClick={clearBtnClick}>
                X
            </button>
            <div>
                <span>Qty: 0</span>
            </div>
        </div>
    );
};
