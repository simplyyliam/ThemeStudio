import { Outlet } from "react-router-dom";


export default function Layout() {
    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <Outlet/>
        </div>
    )
}