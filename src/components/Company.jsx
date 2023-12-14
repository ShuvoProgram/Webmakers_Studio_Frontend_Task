import zaiper from '../assets/companyLogo/Vector.png';
import spotify from '../assets/companyLogo/Vector(1).png';
import zoom from '../assets/companyLogo/Vector(2).png';
import slack from '../assets/companyLogo/Card2.png';
import amazon from '../assets/companyLogo/Logo.png';
import adobe from '../assets/companyLogo/Card.png';

function Company() {
    return (
        <section className="bg-white flex justify-center dark:bg-gray-900 mt-[100px]">
            <div className='max-w-4xl'>
                <div className='flex justify-center my-4 text-gray-400'>
                    <h1 className='text-center'>Trusted By 250+ Companies</h1>
                </div>
                <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
                    <div className="flex max-w-md lg:max-w-none w-auto lg:w-full flex-wrap items-center justify-center lg:justify-between px-5 gap-6 text-gray-500 dark:text-gray-400">
                        <a className="m-4 lg:mx-0 w-28 flex items-center justify-center" target="_blank">
                           <img src={zaiper} className='h-9'/>
                        </a>
                        <a className="m-4 lg:mx-0 w-28 flex items-center justify-center" target="_blank">
                            <img src={spotify} alt="" className='h-9'/>
                        </a>
                        <a className="m-4 lg:mx-0 w-28 flex items-center justify-center" target="_blank">
                            <img src={zoom} alt=""/>
                        </a>
                        <a className="m-4 lg:mx-0 w-28 flex items-center justify-center" target="_blank">
                           <img src={slack} alt=""/>
                        </a>
                        <a className="m-4 lg:mx-0 w-28 flex items-center justify-center" target="_blank">
                        <img src={amazon} alt=""/>
                        </a>
                        <a className="m-4 lg:mx-0 w-28 flex items-center justify-center" target="_blank">
                        <img src={adobe} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Company;