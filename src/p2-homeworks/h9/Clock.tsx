import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import './clock.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<string>()
    const [show, setShow] = useState<boolean>(false)
    const [showDate, setShowDate] = useState<boolean>(false)


    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date().toLocaleTimeString())
        }, 1000)
        setTimerId(id)
        setShow(true)

    }
    const stringTime = new Date().toLocaleTimeString()
    const stringDate = new Date().toLocaleDateString()


    const onMouseEnter = () => {
        setShowDate(true)
    }
    const onMouseLeave = () => {
        setShowDate(false)
    }


    return (
        <div>
            <h3 style={{textAlign: 'center'}}>"Press the button to start the time"  </h3>
            <div style={{width: '300px', padding: '15px 0'}}>

                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}>
                    <div style={{marginBottom: '20px'}}>
                        {show && stringTime}
                        <div>
                            {showDate && stringDate}
                        </div>
                    </div>
                </div>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
