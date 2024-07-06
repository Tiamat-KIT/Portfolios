export default function Header(){
    return (
        <header>
            <nav className="flex px-5 justify-between from-slate-600 via-slate-400 to-slate-600 bg-gradient-to-r dark:bg-slate-700 p-3">
                <h1 className="font-bold text-white text-2xl mt-1">Utakata Portfolio</h1>
                <ul className="flex justify-between flex-row list-none pl-0">
                    {["About","Blog","Devs"].map((str,idx) => <li key={idx}
                    className="text-white font-bold  p-2 ">{str}</li>)}
                </ul>
            </nav>
        </header>
    )
}
