import { MapPin, Phone } from 'lucide-react'

export default function LocationSection() {
    return (
        <div className="grid md:grid-cols-2 gap-8 bg-[#faf7f2] p-6 mt-12">
            <div className="w-full h-[600px] relative">
                <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=101.65277862548828%2C3.138651408548042%2C101.71224975585938%2C3.1702919603319313&layer=mapnik"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    className="rounded-lg"
                    title="OpenStreetMap"
                />
            </div>


            <div className="space-y-8 ">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Locate Us At</h2>
                    <h3 className="text-4xl font-bold text-[#1b4d46] mb-6">Nexus Clinic Kuala Lumpur</h3>

                    <div className="flex gap-3 items-start">
                        <MapPin className="w-5 h-5 mt-1 text-[#1b4d46]" />
                        <p className="text-lg">
                            LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang,<br />
                            50450 Kuala Lumpur, Malaysia.
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex gap-3 items-center">
                        <Phone className="w-5 h-5 text-[#1b4d46]" />
                        <p className="text-lg">016-7025699 / 03-21635699</p>
                    </div>
                    <p className="text-lg pl-8">+016-9215699</p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-4">Operating Hours Are</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-lg">Monday – Saturday</span>
                            <span className="text-lg">9.00am to 6.00pm</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-lg">Sundays</span>
                            <span className="text-lg">Closed</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-lg">Public Holiday</span>
                            <span className="text-lg">Closed</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

