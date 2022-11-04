import { useState } from 'react';
import { useEffect } from 'react';

import * as confServices from '../../../services/configurationServices';

import styles from './Filter.module.css';

export const Filter = ({ questions, filterQuestions, qty }) => {
    const initialFilter = { type: 'any', ata: 'any', level: 'any' };

    const [filterData, setFilterData] = useState([[], [], []]);
    const [selectedFilter, setSelectedFilter] = useState(initialFilter);

    useEffect(() => {
        Promise.all([confServices.getAllAta(), confServices.getAllType(), [1, 2, 3]]).then((result) => {
            // console.log(result);
            setFilterData((state) => result);
        });
    }, []);

    useEffect(() => {
        filterQuestions(selectedFilter);
    }, [selectedFilter]);

    const filterOnChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        setSelectedFilter((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));

        filterQuestions(selectedFilter);
    };

    const clearBtnClick = () => {
        setSelectedFilter({ type: 'any', ata: 'any', level: 'any' });
    };

    return (
        <div className={styles.filter}>
            <label htmlFor="type">
                Type:
                <select name="type" id="type" onChange={filterOnChange} value={selectedFilter.type}>
                    <option key="0" value="any">
                        -- Any type --
                    </option>
                    {filterData[1].sort((a,b) => a.short.localeCompare(b.short)).map((x) => (
                        <option key={x._id} value={x._id}>
                            {x.short}
                        </option>
                    ))}
                </select>
            </label>
            <label htmlFor="ata">
                ATA:
                <select name="ata" id="ata" onChange={filterOnChange} value={selectedFilter.ata}>
                    <option key="0" value="any">
                        -- Any ATA --
                    </option>
                    {filterData[0].sort((a,b) => a.ata.localeCompare(b.ata)).map((x) => (
                        <option key={x._id} value={x._id}>
                            {x.ata} {x.title}
                        </option>
                    ))}
                </select>
            </label>
            <label htmlFor="level">
                Level:
                <select name="level" id="level" onChange={filterOnChange} value={selectedFilter.level}>
                    <option key="0" value="any">
                        -- Any level --
                    </option>
                    {filterData[2].map((x) => (
                        <option key={x} value={x}>
                            {x}
                        </option>
                    ))}
                </select>
            </label>
            <button className={styles.clearButton} onClick={clearBtnClick}>
                X
            </button>
            <div>
                <span>Qty: {qty}</span>
            </div>
        </div>
    );
};
