import { Title } from '../common/Title';
import appStyles from '../../App.module.css';
import styles from './Configuration.module.css';
import { Card } from './cards/Card';
import { Courses } from './courses/Courses';
import { Ata } from './ata/Ata';
import { Types } from './types/Types';

export const Configuration = () => {
    return (
        <section className={appStyles.card}>
            <div>
                <Title icon="fa fa-screwdriver-wrench fa-fw">Configuration</Title>

                <Card title="Courses">
                    <Courses />
                </Card>

                <Card title="ATA">
                    <Ata  />
                </Card>

                <Card title="Types" >
                    <Types />
                </Card>

                <div className={styles.gridContainer}>
                    <div className={styles.gridItem}></div>
                    <div className={styles.gridItem}></div>
                    <div className={styles.gridItem}></div>
                </div>
            </div>
        </section>
    );
};
