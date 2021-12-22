import React, {FC} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'


type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

const Affairs: FC<AffairsPropsType> = ({data, deleteAffairCallback, setFilter}) => {
    const mappedAffairs = data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={deleteAffairCallback}
        />
    ))

    const setAll = () => {
        setFilter('all')
    } // need to fix
    const setHigh = () => {
        setFilter('high')
    }
    const setMiddle = () => {
        setFilter('middle')
    }
    const setLow = () => {
        setFilter('low')
    }

    return (
        <div className={s.affairs__wrapper}>
            <div className={s.affairs__box}>
                {mappedAffairs}

                <div className={s.affairs__btn_box}>
                    <button className={s.affairs__btn} onClick={setAll}>All</button>
                    <button className={s.affairs__btn} onClick={setHigh}>High</button>
                    <button className={s.affairs__btn} onClick={setMiddle}>Middle</button>
                    <button className={s.affairs__btn} onClick={setLow}>Low</button>
                </div>
            </div>
        </div>
    )
}

export default Affairs
