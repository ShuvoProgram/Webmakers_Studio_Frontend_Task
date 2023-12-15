function HeroSection() {
  return (
    <section className="text-center max-w-6xl mx-10 mt-11 pb-20">
    <h1 className="my-3 text-3xl font-bold tracking-tight text-gray-800 md:text-6xl dark:text-gray-100">Elevate Your Presence with Seamless Design and Innovation.</h1>
    <div>
        <p className=" mx-auto my-2 text-base text-gray-600 md:leading-relaxed dark:text-gray-400">
        From strategic planning to digital presence, we are your dedicated partner in achieving solo success.
        </p>
    </div>
    <div className="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row">
        <a className="inline-block w-auto min-w-[250px] px-6 py-4 text-white transition-all bg-gray-800 dark:bg-white dark:text-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white shadow-slate-300 dark:shadow-slate-700 hover:shadow-2xl hover:shadow-slate-400 hover:-translate-y-px"
            href="">View Pricing
        </a>
    </div>
</section>
  )
}

export default HeroSection;