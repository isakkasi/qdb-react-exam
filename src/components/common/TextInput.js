

export const TextInput = (props) => {
    
    
    return (
        <div>
            <label htmlFor={props.name}>
                <b>{props.children}</b>
            </label>
            <input type="text" name={props.name} id={props.name} />
        </div>
    );
};
