import { FormOverlay } from "./FormOverlay"

export const Details =({
    onClose,
    data
}) => {
    // let keys = Object.keys(data);
    // let entries = Object.entries(data)
    // const customMap = Array.prototype.map.bind(this);
    // console.log(data);

    return (
        <FormOverlay onClose={onClose}>
            <h3>Details</h3>
            {Object.entries(data).map((row) => {
                return (
                    <div>
                        <h3>{row[0]}</h3>
                        <p>{row[1]}</p>
                    </div>
                    )
            }
            )
            }
        
        </FormOverlay>
    )
}