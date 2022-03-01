import React from 'react'
import './../h5.css'
import HW7 from "../../h7/HW7";
import HW8 from "../../h8/HW8";
import HW9 from "../../h9/HW9";
import HW10 from "../../h10/HW10";
import HW11 from "../../h11/HW11";
import HW12 from "../../h12/HW12";
import Api from "../../../Api";

export function Junior() {
    return (
        <div className='wrapper'>
            <div style={{padding: '40px 0'}}>
                {/*<Api/>*/}

            </div>

            <HW7/>
            <HW8/>
            <HW9/>
            <HW10/>
            <HW11/>
            <HW12/>

        </div>
    )
}


// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз