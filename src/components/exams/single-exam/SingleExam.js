import { useParams } from 'react-router-dom';

export const SingleExam = () => {
    let {id} = useParams();

    console.log(id);

    return <h1>One Exam with id: {id}</h1>;
};
