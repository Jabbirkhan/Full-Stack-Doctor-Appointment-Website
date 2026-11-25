import { Outlet } from "react-router-dom";
import SideBar from "./../components/sideBar";

const Home = () => {
    return (
        <div className="flex gap-2">
            <div>
                <SideBar />
            </div>
            <div className='flex-1 sm:ml-52'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Home
