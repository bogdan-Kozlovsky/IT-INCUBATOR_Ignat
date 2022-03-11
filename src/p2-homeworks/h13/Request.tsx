import React, {useState} from 'react';
import {RequestsAPI} from "./RequestsAPI";

const Request = () => {
    const [valueChecked, setValueChecked] = useState<boolean>(false)
    const [description, setDescription] = useState<string>('server response')
    const click = () => {
        RequestsAPI.createBody(valueChecked)
            .then(resolve => {
                setDescription(resolve.data.info)
                setValueChecked(resolve.data.yourBody.success)
            })
            .catch(Error => {
                setDescription(Error.response.data.info)
                alert(Error);
            })
    }

    return (
        <div style={{paddingBottom: '20px'}}>
            <p style={{padding: '10px 0'}}>{description}</p>
            <button style={{marginRight: '20px'}} onClick={click}>Click</button>
            <input
                checked={valueChecked}
                type="checkbox"
                onChange={(event) => setValueChecked(event.currentTarget.checked)}
            />
        </div>
    );
};

export default Request;