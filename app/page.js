export default function Page() {
  const logoSrc = "/logo.png";
  const services = [
    "House Washing",
    "Driveway & Concrete Cleaning",
    "Roof Cleaning",
    "Gutter Cleaning",
    "Patio & Sidewalk Cleaning",
    "Fence Cleaning",
    "Commercial Building Washing",
    "Rust Removal",
  ];

  const reviews = [
    {
      name: "Sarah M.",
      text: "Fast response, great communication, and the house looked brand new when they finished.",
    },
    {
      name: "David R.",
      text: "Very professional and easy to work with. My driveway and patio came out way better than I expected.",
    },
    {
      name: "Jessica T.",
      text: "Showed up on time, explained everything clearly, and did an awesome job from start to finish.",
    },
  ];

  const faqs = [
    {
      q: "What areas do you service?",
      a: "We provide pressure washing services within about an hour in all directions from Kansas City, Missouri.",
    },
    {
      q: "Do you offer free quotes?",
      a: "Yes. We offer quick, straightforward quotes for residential and commercial jobs.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major forms of payment except checks.",
    },
    {
      q: "Do you use soft washing when needed?",
      a: "Yes. We use the right cleaning method for the surface to help protect your property while delivering strong results.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="Red White & Clean logo"
              className="h-14 w-auto rounded-xl object-contain"
            />
            <div>
              <p className="text-lg font-black tracking-wide text-red-600">RED WHITE & CLEAN</p>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">
                Pressure Washing
              </p>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#services" className="hover:text-red-600">Services</a>
            <a href="#about" className="hover:text-red-600">About</a>
            <a href="#reviews" className="hover:text-red-600">Reviews</a>
            <a href="#faq" className="hover:text-red-600">FAQ</a>
            <a href="#contact" className="hover:text-red-600">Contact</a>
          </nav>
          <a
            href="tel:8163194857"
            className="rounded-2xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]"
          >
            Call 816-319-4857
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-white to-blue-700 opacity-10" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 inline-block rounded-full border border-red-200 bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-red-600 shadow-sm">
              Veteran-Owned • Kansas City Area
            </p>
            <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Patriotic Service. Powerful Results. Property That Looks Brand New.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Red White & Clean delivers professional pressure washing and exterior cleaning for homes and businesses. From concrete and siding to roofs, gutters, fences, and more, we help your property stand out for all the right reasons.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-2xl bg-red-600 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-red-200 transition hover:scale-[1.02]"
              >
                Get a Free Quote
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-900 transition hover:border-blue-700 hover:text-blue-700"
              >
                View Services
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-2xl font-black text-red-600">1 Hr</p>
                <p className="text-sm text-slate-600">Service radius around KC</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-2xl font-black text-blue-700">Fast</p>
                <p className="text-sm text-slate-600">Quote response times</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-2xl font-black text-red-600">Pro</p>
                <p className="text-sm text-slate-600">Residential & commercial</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl">
              <div className="rounded-[1.5rem] bg-slate-900 p-8 text-white">
                <div className="mb-6 flex justify-center rounded-[1.5rem] bg-white p-4 shadow-lg">
                  <img
                    src={logoSrc}
                    alt="Red White & Clean logo"
                    className="max-h-64 w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Why customers choose us</p>
                <ul className="mt-6 space-y-4 text-base text-slate-200">
                  <li>✔ Veteran-owned business built on professionalism and reliability</li>
                  <li>✔ Safe cleaning methods tailored to each surface</li>
                  <li>✔ Boost curb appeal for homes, driveways, roofs, and businesses</li>
                  <li>✔ Clear communication and straightforward pricing</li>
                </ul>
                <div className="mt-8 rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-slate-300">Need your home, concrete, roof, or business exterior cleaned?</p>
                  <p className="mt-2 text-2xl font-black">Let’s make it shine.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16" id="services">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">Our Services</p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">Exterior cleaning that gets noticed</h2>
          </div>
          <p className="max-w-2xl text-slate-600">
            We clean the surfaces that matter most so your property looks sharper, safer, and better maintained.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-red-500 to-blue-700" />
              <h3 className="text-lg font-bold">{service}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Professional cleaning designed to improve appearance and help protect your exterior surfaces.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white" id="about">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">About Us</p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">Built on service, pride, and doing the job right</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Red White & Clean is a veteran-owned pressure washing business serving the Kansas City area. We believe in honest communication, strong work ethic, and delivering results that customers feel good about the moment they pull into the driveway.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Whether you need a house wash, driveway cleaning, roof treatment, or commercial exterior cleaning, our goal is simple: provide dependable service and leave your property looking clean, fresh, and cared for.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[1.75rem] bg-white/5 p-6">
              <p className="text-3xl font-black text-red-400">Veteran</p>
              <p className="mt-2 text-slate-300">Owned and operated with pride, discipline, and professionalism.</p>
            </div>
            <div className="rounded-[1.75rem] bg-white/5 p-6">
              <p className="text-3xl font-black text-blue-300">Residential</p>
              <p className="mt-2 text-slate-300">House washing, roofs, gutters, patios, sidewalks, fences, and more.</p>
            </div>
            <div className="rounded-[1.75rem] bg-white/5 p-6">
              <p className="text-3xl font-black text-red-400">Commercial</p>
              <p className="mt-2 text-slate-300">Exterior cleaning solutions that help your business look professional.</p>
            </div>
            <div className="rounded-[1.75rem] bg-white/5 p-6">
              <p className="text-3xl font-black text-blue-300">Flexible</p>
              <p className="mt-2 text-slate-300">Serving locations within roughly an hour of Kansas City, MO.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16" id="reviews">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">Customer Reviews</p>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">Trusted service with results people talk about</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-lg leading-8 text-slate-700">“{review.text}”</p>
              <p className="mt-5 font-bold text-slate-900">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white" id="faq">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">FAQ</p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">Common questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-bold">{item.q}</h3>
                <p className="mt-2 leading-7 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16" id="contact">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] bg-gradient-to-br from-red-600 to-blue-700 p-8 text-white shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/80">Get Your Free Quote</p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">Ready to clean up your property?</h2>
            <p className="mt-4 max-w-xl text-white/90">
              Reach out today for a fast quote on your home or business. We’ll help you figure out the right service and get your property looking its best.
            </p>
            <div className="mt-8 space-y-3 text-lg">
              <p><span className="font-black">Phone:</span> 816-319-4857</p>
              <p><span className="font-black">Payments:</span> All major forms accepted except checks</p>
              <p><span className="font-black">Service Area:</span> Kansas City and surrounding areas within about an hour</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-black">Request a Quote</h3>
            <div className="mt-6 grid gap-4">
              <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" placeholder="Name" />
              <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" placeholder="Phone Number" />
              <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" placeholder="Email" />
              <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" placeholder="Address / Service Location" />
              <textarea className="min-h-[140px] rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-red-500" placeholder="Tell us what you need cleaned" />
              <button className="rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:scale-[1.01]">
                Submit Request
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              This sample form is for layout/design purposes and can be connected to your email, CRM, or booking system.
              When deploying, place your uploaded logo file in the public folder as <span className="font-semibold">logo.png</span> so it appears across the site.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="Red White & Clean logo"
              className="h-14 w-auto rounded-xl object-contain"
            />
            <div>
              <p className="text-lg font-black text-red-600">Red White & Clean</p>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-600">Pressure Washing</p>
            </div>
          </div>
          <div className="text-sm text-slate-600">
            Patriotic exterior cleaning for Kansas City homes and businesses.
          </div>
        </div>
      </footer>
    </div>
  );
}
