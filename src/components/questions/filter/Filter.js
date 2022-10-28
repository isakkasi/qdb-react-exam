import { useState } from 'react';
import { useEffect } from 'react';

import * as confServices from '../../../services/configurationServices';

import styles from './Filter.module.css';

export const Filter = () => {
    const [filterData, setFilterData] = useState([[], [], []]);

    useEffect(() => {
        Promise.all([confServices.getAllAta(), confServices.getAllType(), [1, 2, 3]]).then((result) => {
            // console.log(result);
            setFilterData((state) => result);
        });
    }, []);

    return (
        <div className={styles.filter}>
            <label htmlFor="type">
                Type:
                <select name="type" id="type">
                    <option key="0" value="any">
                        -- Any type --
                    </option>
                    {filterData[1].map((x) => (
                        <option key={x._id} value="x._id">
                            {x.short}
                        </option>
                    ))}
                </select>
            </label>
            <label htmlFor="ata">
                ATA:
                <select name="ata" id="ata">
                    <option key="0" value="any">
                        -- Any ATA --
                    </option>
                    {filterData[0].map((x) => (
                        <option key={x._id} value={x._id}>
                            {x.ata} {x.title}
                        </option>
                    ))}
                </select>
            </label>
            <label htmlFor="level">
                Level:
                <select name="level" id="level">
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
        </div>
    );
};
