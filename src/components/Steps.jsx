import arrow from '../assets/Group.png'

function Steps() {
    return (
        <section className="mx-auto mb-20 max-w-5xl px-4 sm:px-6 lg:px-8 py-8 shadow-md">
            <h2 className="font-headline text-2xl font-semibold sm:text-3xl text-center">How it works</h2>
            <p className="text-sm text-center mt-4">Premium designs, unlimited requests, super fast delivery, for one flat monthly fee.</p>
            <div className="grid sm:grid-cols-8 gap-16 sm:gap-8 mt-10 sm:mt-10 pb-20">
                <div className="relative text-center col-span-2">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                        <div className="w-full h-full flex items-center justify-center">
                            <h1 className="text-[10rem] font-semibold text-gradient bg-gradient-to-b from-rgba-pink-800 to-rgba-pink-100 bg-clip-text text-transparent">1</h1>
                        </div>
                    </div>
                    <div className="absolute max-w-[22rem] top-10">
                        <h3 className="font-headline font-bold text-xl text-gray-800 sm:text-3xl mt-6 sm:mt-10">Subscribe</h3>
                        <p className="leading-relaxed text-sm text-gray-500 mt-2">Subscribe to a plan & you’ll get an instant access to your private Slack channel.</p>
                    </div>
                </div>
                <div className='w-10 relative'>
                    <img src={arrow} alt="" className='absolute top-16'/>
                </div>
                <div className="relative text-center col-span-2">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                        <div className="w-full h-full flex items-center justify-center">
                            <h1 className="text-[10rem] font-semibold text-gradient bg-gradient-to-b from-rgba-pink-800 to-rgba-pink-100 bg-clip-text text-transparent">2</h1>
                        </div>
                    </div>
                    <div className="absolute max-w-[22rem] top-10">
                        <h3 className="font-headline font-bold text-xl text-gray-800 sm:text-3xl mt-6 sm:mt-10">Request</h3>
                        <p className="leading-relaxed text-sm text-gray-500 mt-2">Submit any number of requests. We will work through them, one at a time, ensuring consistent updates every 24-48 hours</p>
                    </div>
                </div>
                <div className='w-10 relative'>
                    <img src={arrow} alt="" className='absolute top-16 left-5'/>
                </div>
                <div className="relative text-center col-span-2">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                        <div className="w-full h-full flex items-center justify-center">
                            <h1 className="text-[10rem] font-semibold text-gradient bg-gradient-to-b from-rgba-pink-800 to-rgba-pink-100 bg-clip-text text-transparent">3</h1>
                        </div>
                    </div>
                    <div className="absolute max-w-[22rem] top-10">
                        <h3 className="font-headline font-bold text-xl text-gray-800 sm:text-3xl mt-6 sm:mt-10">Revise</h3>
                        <p className="leading-relaxed text-sm text-gray-500 mt-2">Need changes? We guarantee unlimited revisions until you are 200% satisfied.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Steps;