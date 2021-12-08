import React, {FC} from 'react'
import s from './Message.module.css'

interface MessageProps {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message: FC<MessageProps> = (
    {avatar, name, message, time}) => {
    return (
        <div className={s.message__wrapper}>
            <img className={s.message__avatar} src={avatar} alt="аватар"/>
            <div className={s.message__box}>
                <div>
                    <h3>{name}</h3>
                    <p>{message}</p>
                </div>
                <p>{time}</p>
                <span className={s.decor}></span>
            </div>

        </div>
    );
};

