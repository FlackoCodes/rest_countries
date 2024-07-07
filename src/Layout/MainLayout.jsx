import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";

const MainLayout = () => {
  return (
    <>
    <Nav />
    <Outlet />
    </>
  )
}

export default MainLayout