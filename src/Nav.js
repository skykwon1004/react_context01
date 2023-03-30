import { useContext } from "react";
import { DarkTheme } from "./DarkTheme";

const Nav = () => {
    const { dark, setDark } = useContext(DarkTheme);
    return (
        <div>
            {
                dark ? 'x' : 'o'
            }
            {/* toggle로 쓰고싶으면 !dark 쓰면 된다 */}
            <button onClick={() => setDark(!dark)}>ox</button>
        </div>
    )
}

export default Nav;