
import { Link } from 'react-router-dom'

function Header() {
  return (
    <section>
        <div className='bg-red-500 h-20'>
            <div className="main flex justify-evenly pt-4">

            {/* Left Nav  */}
            <div className=''>
                <Link to={"/"}>
                    MovieMax
                </Link>
            </div>

            {/* Middle Nav  */}
            <div>
                <input 
                className='outline-none px-20 py-2 rounded-md font-normal'
                type="text" />
            </div>

                {/* Right Nav  */}
            <div>
                <Link
                to={'/movies'}
                className='font-bold text-white cursor-pointer hover:text-gray-400 transition-all p-4 m-4'
                >Movies</Link>

                <Link
                to={"/shows"}
                className='font-bold text-white cursor-pointer hover:text-gray-400 transition-all p-4 m-4'
                >Shows</Link>
            </div>
            </div>

        </div>
    </section>
  )
}

export default Header