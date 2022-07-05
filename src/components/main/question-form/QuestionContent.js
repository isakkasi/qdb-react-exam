export const QuestionContent = (props) => {
    return (
        <div>
            <div className="w3-container">
                <label className="w3-left w3-show-inline-block  w3-xlarge w3-margin-right">Question</label>
                <textarea className="w3-input" type="text" onChange={props.data.changeHandler} name="question" value={props.question?.question}></textarea>
            </div>
            <div className="w3-container w3-margin-top">
                <label className="w3-left w3-show-inline-block  w3-xlarge w3-margin-right">A. </label>
                <div className="w3-twothird">
                    <textarea className="w3-input" type="text" onChange={props.data.changeHandler} name="ansA" value={props.question?.ansA?.text}></textarea>
                </div>
                <div className="w3-quarter">
                    <input className="w3-radio w3-margin-left" type="radio" name="correct" value="ansA" onChange={props.data.changeHandler}/>
                </div>
            </div>
            <div className="w3-container w3-margin-top">
                <label className="w3-left w3-show-inline-block  w3-xlarge w3-margin-right">B. </label>
                <div className="w3-twothird">
                    <textarea className="w3-input" type="text" onChange={props.data.changeHandler} name="ansB" value={props.question?.ansB?.text}></textarea>
                </div>
                <div className="w3-quarter">
                    <input className="w3-radio w3-margin-left" type="radio" name="correct" value="ansB" onChange={props.data.changeHandler} />
                </div>
            </div>
            <div className="w3-container w3-margin-top">
                <label className="w3-left w3-show-inline-block  w3-xlarge w3-margin-right">C. </label>
                <div className="w3-twothird">
                    <textarea className="w3-input" type="text" onChange={props.data.changeHandler} name="ansC" value={props.question?.ansC?.text}></textarea>
                </div>
                <div className="w3-quarter">
                    <input className="w3-radio w3-margin-left" type="radio" name="correct" value="ansC" onChange={props.data.changeHandler} />
                </div>
            </div>
        </div>
    );
};
