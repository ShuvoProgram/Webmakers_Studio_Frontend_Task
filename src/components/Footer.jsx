import twitter from '../assets/socialLogo/twitter.png';
import fb from '../assets/socialLogo/fb.png';
import dribble from '../assets/socialLogo/dribble.png';
import github from '../assets/socialLogo/github.png';
import linkedin from '../assets/socialLogo/linkedin.png';
import angelList from '../assets/socialLogo/angelList.png';


function Footer() {
    return (
        <footer className="flex justify-center text-gray-600 body-font">
            <div className="container max-w-6xl border-t">
                <div className="container px-5 py-7 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="flex-shrink-0 md:mx-0 text-center md:text-left md:mt-0 mt-10">
                        <a className="flex title-font font-medium items-start md:justify-start justify-start text-gray-700">
                            <span className="text-2xl">UniCraft</span>
                        </a>
                       <p className='flex items-start flex-col'>
                       <span className="text-sm text-gray-500">Design amazing digital experiences that
                            </span>
                        <span className="text-sm text-gray-500">
                            create more happy in the world.</span>
                       </p>
                    </div>
                </div>
                <div className="container mx-auto py-4 px-3 grid grid-cols-2">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© {new Date().getFullYear()} Untitled UI. All rights reserved.
                        </p>
                        <span className="grid grid-cols-3 md:grid-cols-6 gap-5 sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a className="ml-4 text-gray-500">
                                <img src={twitter} alt="" className='h-6'/>
                            </a>
                            <a className="ml-4 text-gray-500">
                            <img src={linkedin} alt="" className='h-6'/>
                            </a>
                            <a className="ml-4 text-gray-500">
                            <img src={fb} alt="" className='h-6'/>
                            </a>
                            <a className="ml-4 text-gray-500">
                            <img src={github} alt="" className='h-6'/>
                            </a>
                            <a className="ml-4 text-gray-500">
                            <img src={angelList} alt="" className='h-6'/>
                            </a>
                            <a className="ml-4 text-gray-500">
                            <img src={dribble} alt="" className='h-6'/>
                            </a>
                        </span>
                    </div>
            </div>
        </footer>
    )
}

export default Footer;