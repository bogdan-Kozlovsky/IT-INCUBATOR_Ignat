import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'

export type UsersPropsType = {
    name:string
    _id:string
}

export type NamePropsType = {
    name:Array<string>
    setName:() => void
}

type GreetingContainerPropsType = {
    users: Array<UsersPropsType> // need to fix any
    addUserCallback: (name:string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<NamePropsType>('') // need to fix any
    const [error, setError] = useState<any>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any

        e.currentTarget.value.length > 0 ?  setName(e.currentTarget.value) :   setError('Шляпа!')
    }
    const addUser = () => {
        // name && addUserCallback(name) && alert(`Hello  ${name}!`)
        if (name) {
            addUserCallback(name)
            alert(`Hello  ${name}!`) // need to fix
        }

        setName('')
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
