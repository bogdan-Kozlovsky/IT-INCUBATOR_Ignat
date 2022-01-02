import React from 'react'
import {Message} from './Message';
import s from './Message.module.css'
import './../../App.css'

const messageData = {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUfjaEv_dGhNzdS1Bg5O6iMWaLrqOKjT2RlA&usqp=CAU',
    name: 'Bogdan',
    message: 'Hello how are you!',
    time: '22:00',
}

const messageDataTwo = {
    avatar: 'https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=',
    name: 'Vlad',
    message: 'I heard you have a problem?',
    time: '23:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            <h2 className="title">homeworks 1</h2>

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <Message
                avatar={messageDataTwo.avatar}
                name={messageDataTwo.name}
                message={messageDataTwo.message}
                time={messageDataTwo.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
