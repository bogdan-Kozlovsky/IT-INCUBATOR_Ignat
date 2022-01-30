import React, {useState} from 'react'
import {ageSortingAC, homeWorkReducer, sortDownAC, sortUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import '../../App.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any
    console.log('set', people)
    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}>
            {/*{p}*/}
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                <p>{p.name}</p>
                <p>{p.age}</p>
            </div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortUpAC()))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortDownAC()))
    const ageSorting = () => setPeople(homeWorkReducer(initialPeople, ageSortingAC()))

    return (
        <div>
            <hr/>
            <h2 className="title">homeworks 8</h2>

            {/*should work (должно работать)*/}
            <div style={{width: '300px', paddingBottom: '20px'}}>
                {finalPeople}


                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={ageSorting}>check 18</SuperButton>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}

            <hr/>
        </div>
    )
}

export default HW8
