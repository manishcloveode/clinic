import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'
const services = [
    {
        title: "Column 1",
        items: [
            "Fractional Laser",
            "Dermaroller",
            "Medlite C6 Laser",
            "Platelet Rich Plasma (PRP)"
        ]
    },
    {
        title: "Column 2",
        items: [
            "Venus Freeze",
            "MesoLipo Fat Melting Injections",
            "Zeltiq Coolsculpting",
            "HCG Weight Loss Program"
        ]
    },
    {
        title: "Column 3",
        items: [
            "Nexus Hair Implantation",
            "Female Laser Rejuvenation",
            "Tattoo Removal",
            "Dermal Fillers"
        ]
    },
    {
        title: "Column 4",
        items: [
            "Skin Peel",
            "Non Surgical Threadlift",
            "Ion Magnum",
            "Candela Gentle YAG Laser"
        ]
    }
]

export default function Footer() {
    return (
        <div className="bg-[#1b4d46] text-white">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-4xl font-bold mb-8">Services you may like...</h2>

                <div className="grid md:grid-cols-4 gap-8">
                    {services.map((column, idx) => (
                        <ul key={idx} className="space-y-3">
                            {column.items.map((item, index) => (
                                <li key={index} className="text-lg">{item}</li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
            <div className="border-t-2 border-b-2 border-white">
                <div className="text-center px-6 py-12 grid md:grid-cols-2 gap-12 relative">
                    {/* First Section */}
                    <div className="space-y-6">
                        <Image
                            src="/logo_nexus1-1-3-1.png"
                            alt="Nexus Clinic Logo"
                            width={200}
                            height={60}
                            className=""
                        />
                        <div className="space-y-4 text-start text-lg leading-relaxed">
                            <p>
                                Founded in 2001, Nexus Clinic is a top-notch aesthetic center, providing a comprehensive range of non-surgical aesthetic procedures and advanced laser treatments.
                            </p>
                            <p>
                                Nexus Clinic is dedicated to serve our clients needs by providing confidential, professional and personalized aesthetic services to both local and regional market.
                            </p>
                        </div>
                    </div>

                    {/* Vertical Line */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-white"></div>

                    {/* Second Section */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Nexus Clinic Kuala Lumpur</h3>
                        <div className="space-y-2">
                            <p>LG 10, Lower Ground Floor,</p>
                            <p>Wisma UOA II, Jalan Pinang,</p>
                            <p>50450 Kuala Lumpur,</p>
                            <p>Malaysia.</p>
                        </div>
                        <div className="space-y-2">
                            <p>Mobile: 016-7025699 / 03-21635699</p>
                            <p>Main Line: +016-9215699</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p>Monday – Saturday</p>
                                <p>9.00am to 6.00pm</p>
                            </div>
                            <div>
                                <p>Sundays : Close</p>
                                <p>Public Holiday : Close</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-6 items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Link
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1877f2] p-2 rounded-full hover:opacity-90 transition-opacity"
                    >
                        <Facebook className="w-6 h-6" />
                    </Link>
                    <Link
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#E4405F] p-2 rounded-full hover:opacity-90 transition-opacity"
                    >
                        <Instagram className="w-6 h-6" />
                    </Link>
                    <Link
                        href="https://tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black p-2 rounded-full hover:opacity-90 transition-opacity"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="w-6 h-6 fill-current"
                        >
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                    </Link>
                </div>
                <div className="text-center text-sm md:text-base">
                    © 2024 Mozart Simfoni Sdn Bhd (1139843-D)
                </div>


                <div className="flex items-center gap-6 text-sm md:text-base">
                    <Link
                        href="/terms"
                        className="hover:underline"
                    >
                        Terms Of Use
                    </Link>
                    <Link
                        href="/privacy"
                        className="hover:underline"
                    >
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </div>

    )
}

