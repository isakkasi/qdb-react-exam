import './QuestionRow.css'


export const QuestionRow = (props) => {

    return (
        <tr>
            <td>{props.data.no}</td>
            <td>{props.data.question}</td>
            <td className={props.data.ansA.isCorrect ? 'pr-correct' : ''}>{props.data.ansA.text}</td>
            <td className={props.data.ansB.isCorrect ? 'pr-correct' : ''}>{props.data.ansB.text}</td>
            <td className={props.data.ansC.isCorrect ? 'pr-correct' : ''}>{props.data.ansC.text}</td>
            {/* <td style={props.data.ansB.isCorrect ? {backgroundColor: 'lightgreen'} : {}}>{props.data.ansB.text}</td>
            <td style={props.data.ansC.isCorrect ? {backgroundColor: 'lightgreen'} : {}}>{props.data.ansC.text}</td> */}
        </tr>
    );
};
