import Nav from '../components/Nav'
function Bootcamp() {
    return(
        <div class="flex flex-row justify-center items-center h-[100vh]">
            <Nav />
            <div className="border-2 w-[40vw] h-[40vh] flex flex-col gap-10">
                <h1 className='text-center text-3xl'>JavaScript Bootcamp Tuwaiq Academy</h1>
                <p className='text-center text-lg' >It's aims to develop web application interfaces using JavaScript to develop web appilcation interfaces at a professional level.</p>
            </div>
        </div>
    );
}
export default Bootcamp