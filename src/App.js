import { useState } from "react";
import styled from "styled-components";
import { DarkTheme } from "./DarkTheme";
import Header from "./Header";
import Main from "./Main";

const Dark = styled.div`
background: #333;
color: #fff;

&.on {
    background: #fff;
    color: #333;  
}
`

const App = () => {
    const [dark, setDark] = useState(false);
    return (
        <DarkTheme.Provider value={{ dark, setDark }}>
            <Dark className={dark ? 'on' : ''}>
                <div>App</div>
                <Header />
                <Main />
            </Dark>
        </DarkTheme.Provider>
    )
}

export default App;