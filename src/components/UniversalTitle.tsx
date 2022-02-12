import React from 'react';
import '../App.css'
type UniversalTitlePropsType = {
    name: string
}
export const UniversalTitle = ({name, ...props}: UniversalTitlePropsType) => {
    return (
        <h2 className="title"> {name}</h2>
    );
};
