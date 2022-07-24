import { useEffect, useState } from 'react';

import * as dashboardServices from '../../services/dashboardServices';

import styles from './Dashboard.module.css';
import { Box } from './box/Box';
import { Title } from '../common/Title';

import appStyles from '../../App.module.css';

export const Dashboard = () => {
    const [info, setInfo] = useState({});

    useEffect(() => {
        dashboardServices.getInfo().then((result) => setInfo(result));
    }, []);

    let questions = {
        count: info.questions,
        icon: 'fa-solid fa-question fa-fw',
        name: 'Questions',
        color: 'green',
        link: '/questions',
    };
    let ata = {
        count: info.ata,
        icon: 'fa-solid fa-book fa-fw',
        name: 'Ata',
        color: 'blue',
        link: '/configuration',
    };
    let courses = {
        count: info.ata,
        icon: 'fa-solid fa-graduation-cap fa-fw',
        name: 'Courses',
        color: 'red',
        link: '/configuration',
    };

    return (
        <section className={appStyles.card}>
            <div>
                <Title icon="fa fa-dashboard fa-fw">Dashboard</Title>

                <div className={styles.boxes}>
                    <div>
                        <Box options={questions} />
                    </div>
                    <div>
                        <Box options={ata} />
                    </div>
                    <div>
                        <Box options={courses} />
                    </div>
                </div>
            </div>
        </section>
    );
};
