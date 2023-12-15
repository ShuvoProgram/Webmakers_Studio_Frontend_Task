import avatar from '../assets/Avatar.png';

function Testimonial() {
  return (
    <section className="relative isolate overflow-hidden bg-gray-50 px-6 py-24 sm:py-32 lg:px-8 hidden lg:block">
    <div className="mx-auto max-w-2xl lg:max-w-4xl">
      <img className="mx-auto h-12" src="https://i.ibb.co/M1VzxtT/Companylogo.png" alt="Zilla Digital Logo"/>
      <figure className="mt-10">
        <blockquote className="text-center text-5xl font-semibold leading-8 text-gray-900 sm:text-[34px] sm:leading-9">
          <p>We’ve been with unicraft to kick start every new project and can’t imagine working without it.</p>
        </blockquote>
        <figcaption className="mt-10">
          <img className="mx-auto h-16 w-16 rounded-full object-cover" src={avatar} alt=""/>
          <div className="mt-4 flex items-center justify-center flex-col space-x-3 text-base">
            <div className="font-semibold text-gray-900">Candice Wu</div>
            
            <div className="text-gray-600">Product Manager, Sisyphus</div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
  )
}

export default Testimonial