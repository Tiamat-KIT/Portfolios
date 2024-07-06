type LayoutDirectories = "Left" | "Right" | "children" | "Modal"
type LayoutType = {
    [key in LayoutDirectories]: React.ReactNode
}

export default LayoutType