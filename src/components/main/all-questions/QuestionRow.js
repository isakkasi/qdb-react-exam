
export const QuestionRow = (props) => {

    return (
        <tr>
            <td>{props.data.no}</td>
            <td>{props.data.question}</td>
            <td style={props.data.ansA.isCorrect ? {backgroundColor: 'lightgreen'} : {}}>{props.data.ansA.text}</td>
            <td style={props.data.ansB.isCorrect ? {backgroundColor: 'lightgreen'} : {}}>{props.data.ansB.text}</td>
            <td style={props.data.ansC.isCorrect ? {backgroundColor: 'lightgreen'} : {}}>{props.data.ansC.text}</td>
        </tr>
    );
};
