type LayoutProps = {
    children: React.ReactNode,
}

export default function Layout(props:LayoutProps){
    return (
        <>
            <div className="containter mx-auto px-5 place-content-center">
                <span className="flex space-x-4">
                    <div>{props.children}</div>
                </span> 
            </div>
            
        </>
    )
}
