import React, {useEffect, useState} from 'react';
import axios from "axios";

const Api = () => {
    const [date, setDate] = useState([])
    useEffect(() => {
        async function base() {
            let res = await axios.get('https://swapi.dev/api/people/')
            setDate(res.data.results)
        }

        base()

    }, [])
    console.log(date)
    return (
        <div>
            {date.map(m => {
                return (
                    <div>
                        <ul>
                            {/*<li>{}</li>*/}
                        </ul>
                    </div>
                )
            })}
        </div>
    );
};

export default Api;