import React, {FC} from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType// need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

const Affair: FC<AffairPropsType> = ({affair, deleteAffairCallback}) => {
    const deleteCallback = () => {
        deleteAffairCallback(affair._id)
    }

    return (
        <div className={s.affair__wrapper}>
            <div className={s.affair__cart}>
                <div style={{display: 'flex', alignItems: 'baseline'}}>
                    <span style={{color: 'orange'}}>{affair._id}.</span>
                    <h2 style={{marginLeft: '10px'}}>{affair.name}</h2>
                </div>
                <p>{affair.priority}</p>

            </div>
            <button onClick={deleteCallback} className={s.affair__btn}>X</button>

        </div>
    )
}

export default Affair
