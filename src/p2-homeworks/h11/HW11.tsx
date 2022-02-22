import React from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {UniversalTitle} from "../../components/UniversalTitle";
import s from './h11.module.css'

function HW11() {
    const [values, setValues] = React.useState<number[]>([0, 100]);

    const onChangeRange = (newValue: number) => {
        setValues([newValue, values[1]])
    }
    return (
        <div>
            <hr/>
            <UniversalTitle name={'homeworks 11'}/>
            <hr/>
            {/*should work (должно работать)*/}
            <div className={s.block}>
                <span className={s.block__span}>{values[0]}--{values[1]}</span>
                <div style={{textAlign: 'center'}}>
                    <div>
                        <SuperRange
                            onChangeRange={onChangeRange}
                            value={values[0]}
                        />
                    </div>
                    <div>
                        <SuperRange
                            onChangeRange={onChangeRange}
                            value={values[0]}
                        />
                    </div>
                </div>

            </div>

            <div>

            </div>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
