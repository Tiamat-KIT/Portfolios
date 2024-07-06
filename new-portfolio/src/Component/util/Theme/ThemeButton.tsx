import {useTheme} from "next-themes"


export default function ThemeChangeButton(){
    const {theme,setTheme} = useTheme()
    return <button className="btn text-primary" onClick={theme=="light" ? () => setTheme("dracula") : () => setTheme("light")}>theme</button>
} 