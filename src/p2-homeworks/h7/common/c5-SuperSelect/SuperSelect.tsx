import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './../../h7.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: Array<string>
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {


    const mappedOptions: any[] = options ? options?.map((e, i) => {
        return <option key={i} value={e}>{e}</option>
    }) : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <div className={s.selectDropdown}>
            <select
                onChange={onChangeCallback}
                {...restProps}
                value={restProps.value}
            >
                {mappedOptions}
            </select>
        </div>
    )
}

export default SuperSelect
