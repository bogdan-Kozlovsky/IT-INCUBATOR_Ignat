import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix any
    addUser: () => void  // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.active : s.error    // need to fix with (?:)


    const disabled = error ? true : false

    return (
        <div className={s.greeting}>
            <input name={name}
                   onChange={setNameCallback}
                   className={`${inputClass} ${s.greeting__input}`}
                   placeholder={'Enter post'}/>

            <button disabled={disabled} onClick={addUser} className={`${inputClass} ${s.greeting__btn}`}>Add</button>
            <span className={s.greeting__counter}>{totalUsers}</span>
            <div>{error}</div>
        </div>
    )
}

export default Greeting
