

export default function Aspiration() {
    return (
        <div className="relative min-h-screen flex">

            <div className="w-1/2 bg-[#2F5649] p-16 flex flex-col justify-center">
                <h1 className="text-[#E6DFD1] text-6xl font-light leading-tight mb-12">
                    Beauty has the power
                    <br />
                    to spawn aspiration
                </h1>
                <div className="space-y-6 text-white text-xl">
                    <p>
                        Nexus Clinic is dedicated to serve our clients
                        needs by providing confidential, professional and
                        personalised aesthetic services.
                    </p>
                    <p>
                        Our highly experienced doctors and expert
                        medical staff will to help determine the best
                        treatment for the results you seek.
                    </p>
                </div>
                <button className="mt-12 bg-[#E6DFD1] text-[#2F5649] py-4 rounded-lg text-xl font-medium hover:bg-opacity-90 transition-colors">
                    Explore Services
                </button>
            </div>
            <div className="w-1/2 bg-gray-100">
                <img
                    src="/aspiration.webp"
                    alt="Medical Professional"
                    className="w-full h-full object-cover"
                />
            </div>


        </div>
    )
}

