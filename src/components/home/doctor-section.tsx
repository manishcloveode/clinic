export default function DoctorsSection() {
    const doctors = [
        {
            name: "DR. ARIS",
            title: "Medical Aesthetic",
            subtitle: "Doctor",
            image: "/doc1.png"
        },
        {
            name: "DR. PREETHA",
            title: "Medical Aesthetic",
            subtitle: "Doctor",
            image: "/doc2.png"
        },
        {
            name: "DR. ASHVINIA",
            title: "Medical Aesthetic",
            subtitle: "Doctor",
            image: "/doc3.png"
        },
        {
            name: "DR. CHARMAINE",
            title: "Medical Aesthetic",
            subtitle: "Doctor",
            image: "/doc4.png"
        }
    ]

    return (
        <div className="container mt-[100px] mx-auto">
            <div className="bg-[#2F5649] py-4 px-6">
                <h2 className="text-white text-center text-lg font-medium">Meet Our Doctors</h2>
            </div>

            <div className=" px-4 py-12 grid grid-cols-4 gap-8">
                {doctors.map((doctor, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="w-64 h-64 rounded-full overflow-hidden mb-4">
                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="w-full h-full object-cover"
                                width={256}
                                height={256}
                            />
                        </div>
                        <div className="bg-white p-4 px-6 mt-[-100px]">
                            <h3 className="text-2xl font-bold tracking-wide mb-2">{doctor.name}</h3>
                            <p className="text-gray-500 text-lg">{doctor.title}</p>
                            <p className="text-gray-500 text-lg">{doctor.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

