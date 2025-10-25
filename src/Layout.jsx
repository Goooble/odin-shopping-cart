import { Outlet } from "react-router"

function Layout(){
    return (
        <>
        <h1>Hola</h1>
        <Outlet></Outlet>
        </>
    )
}

export default Layout