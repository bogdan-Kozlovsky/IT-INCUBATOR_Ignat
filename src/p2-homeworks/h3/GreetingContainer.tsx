import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';

export type UsersPropsType = {
    name: string
    _id: string
}

export type NamePropsType = {
    name: Array<string>
    setName: () => void
}

type GreetingContainerPropsType = {
    users: Array<UsersPropsType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        if (e.currentTarget.value) {
            setName(e.currentTarget.value)
            setError('')
        }
    }
    const addUser = () => {
        if (name) {
            addUserCallback(name)
            alert(`Hello  ${name}!`) // need to fix
        } else {
            setError('ERROR!')
        }

        setName('')
    }

    const totalUsers = users.length // need to fix

    return (
        <div>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
            />

            {/*<SuperInputText*/}
            {/*    value={name}*/}
            {/*    // onChangeText={setNameCallback}*/}
            {/*    onEnter={addUser}*/}
            {/*    error={error}*/}
            {/*    // spanClassName={s.testSpanError}*/}
            {/*/>*/}
        </div>
    )
}

export default GreetingContainer
