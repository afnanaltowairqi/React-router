import { Link } from "react-router-dom"
function Nav() {
    return(
        <div className="bg-[#553c5c] h-[13vh] flex justify-start pl-4 items-center gap-8 ">
            <Link to ="./Home"><p className="text-[#ffffff] font-sans text-lg">Home</p></Link>
            <Link to ="./Bootcamp"> <p className="text-[#ffffff] font-sans text-lg">Bootcamp</p> </Link>
            <Link to ="./Login"> <p className="text-[#ffffff] font-sans text-lg">Login</p></Link>
        </div>
    );
}
export default Nav