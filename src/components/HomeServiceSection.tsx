import { homeServices, services } from "@/config/service";

export default function HomeServiceSection() {
  return (
    <div
      id="services"
      className="flex flex-col space-y-8 overflow-x-hidden"
    >
      <div className="flex flex-col space-y-4">
        <div className="px-8 md:px-16">
          <h1 className="text-4xl font-extrabold">Our Services</h1>
        </div>
        <div className="flex overflow-x-hidden whitespace-no-wrap">
          <div className="shrink-0 relative">
            <div className="shrink-0 flex space-x-4 animate-marquee">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="shrink-0 bg-white/20 p-2 rounded-2xl"
                >
                  <div className="capitalize bg-white/20 p-3 rounded-lg">
                    {service}
                  </div>
                </div>
              ))}
            </div>
            <div className="shrink-0 flex absolute top-0 space-x-4 animate-inverse-marquee">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="shrink-0 bg-white/20 p-2 rounded-2xl"
                >
                  <div className="capitalize bg-white/20 p-3 rounded-lg">
                    {service}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 px-8 md:flex-row md:space-x-4 md:flex-nowrap md:overflow-x-scroll md:px-16">
        {homeServices.map((service, index) => (
          <div
            key={index}
            className="flex flex-col space-y-8 bg-secondary/20 p-8 rounded-md md:shrink-0 md:w-1/3 "
          >
            <h1 className="flex-1 text-2xl font-bold">{service.title}</h1>
            <p className="opacity-80">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
