import { useContext } from "react";
import { DarkTheme } from "./DarkTheme";

const Section = () => {
    const { dark, setDark } = useContext(DarkTheme);
    return (
        <div>
            <button onClick={() => setDark(!dark)}>Dark</button>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perspiciatis explicabo debitis ex suscipit vero neque consequatur, nobis consequuntur natus.
        </div>
    )
}

export default Section;