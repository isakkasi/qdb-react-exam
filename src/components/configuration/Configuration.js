import { Title } from '../common/Title';
import { Card } from './cards/Card';
import { Courses } from './courses/Courses';
import { Ata } from './ata/Ata';
import { Types } from './types/Types';

import appStyles from '../../App.module.css';
import { Type } from './type/Type';

export const Configuration = () => {

    const displayTypes = false;

    return (
        <section className={appStyles.card}>
            <div>
                <Title icon="fa fa-screwdriver-wrench fa-fw">Configuration</Title>

                <Card title="Courses">
                    <Courses />
                </Card>

                <Card title="ATA">
                    <Ata />
                </Card>
                
                <Card title="Type">
                    <Type />
                </Card>

                {displayTypes && <Card title="Types">
                    <Types />
                </Card>}
            </div>
        </section>
    );
};
