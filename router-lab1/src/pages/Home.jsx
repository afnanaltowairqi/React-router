import Nav from '../components/Nav'
function Home() {
    return(
        <div>
            <Nav />
            <div className="flex flex-row justify-center items-center h-[40vh]">
                <p className='text-6xl'>Hello!</p>
            </div>
        </div>
    );
}
export default Home