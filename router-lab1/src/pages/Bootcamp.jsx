import Nav from '../components/Nav'
import Image from '../assets/image.png'

function Bootcamp() {
    return( 
        <>
        <Nav />
        <div class="flex flex-row justify-center items-center h-[90vh]">
            <div className="border-2 w-[30vw] h-[80vh] flex flex-col gap-10">
                <img className="w-[30vw]" src={Image}></img>
                <h1 className='text-center text-3xl'>JavaScript Bootcamp Tuwaiq Academy</h1>
                <p className='text-center text-lg' >It's aims to develop web application interfaces using JavaScript to develop web appilcation interfaces at a professional level.</p>
            </div>
        </div>
        </>
    );
}
export default Bootcamp