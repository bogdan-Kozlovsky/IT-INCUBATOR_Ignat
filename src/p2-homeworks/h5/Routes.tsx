import React from 'react'
import PreJunior from "./pages/PreJunior";
import {Junior} from "./pages/Junior";
import {JuniorPlus} from "./pages/Junior+";
import {Route, Routes} from 'react-router-dom';
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIORPLUS: '/junior-plus',
    // add paths
}

export function Switch() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            {/*<Switch>*/}

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            {/*<Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>*/}

            <Routes>
                <Route path={'/'} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIORPLUS} element={<JuniorPlus/>}/>
                <Route path='*' element={<Error404/>}/>
            </Routes>
            {/*<Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>*/}

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            {/*<Route render={() => <Error404/>}/>*/}

            {/*</Switch>*/}
        </div>
    )
}

