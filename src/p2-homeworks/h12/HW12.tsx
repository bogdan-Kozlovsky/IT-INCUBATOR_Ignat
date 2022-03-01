import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";
import {UniversalTitle} from "../../components/UniversalTitle";


function HW12() {
    const themes: string[] = ['dark', 'red', 'some'];
    const theme: string = useSelector<AppStoreType, string>(state => state.themeReducer.theme)
    const dispatch = useDispatch()
    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeAC(theme))
    }

    return (
        <>
            <hr/>
            <UniversalTitle name={'homeworks 12'}/>
            <div className={`${s[theme]} ${s.wrapper}`}>
                <span className={s[theme + '-text']}>

            </span>
                <SuperRadio
                    name={'radio1'}
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallback}
                />
                {/*should work (должно работать)*/}
                {/*SuperSelect or SuperRadio*/}

            </div>
            <hr/>

        </>

    );
}

export default HW12;
