import { useEffect } from 'react';
import { useState } from 'react';
import { NewItemBtn } from '../../common/NewItemBtn';
import { AddCourseForm } from './AddCourseForm';

import * as configurationServices from '../../../services/configurationServices';

export const Courses = () => {
    const [formOpen, setFormOpen] = useState(false);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        configurationServices.getAllCourses().then((result) => setCourses(result));
    }, []);

    const addNewCourse = () => {
        setFormOpen((state) => !state);
    };

    const getNewCourse = (course) => {
        if (course) {
            courses.push(course);
        }
    };

    return (
        <div>
            <table className="w3-table w3-striped">
                <thead>
                    <tr>
                        <th>IntId</th>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Students qty</th>
                        <th>Start</th>
                        <th>End</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((x) => {
                        let start = x.start ? new Date(x.start) : undefined;
                        let end = x.end ? new Date(x.end) : undefined;
                        let options = {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                        };

                        return (
                            <tr key={x._id}>
                                <td> {x.internalRef} </td>
                                <td> {x.title} </td>
                                <td>{x.location}</td>
                                <td>{x.students}</td>
                                <td>{start && start.toLocaleString('en-GB', options)}</td>
                                <td>{end && end.toLocaleString('en-GB', options)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <NewItemBtn onClick={addNewCourse}>Add Course</NewItemBtn>

            {formOpen && <AddCourseForm onClose={addNewCourse} getNewCourse={getNewCourse} />}
        </div>
    );
};
