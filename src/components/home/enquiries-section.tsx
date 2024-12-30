'use client'

import { useState } from 'react'

export default function ConsultationForm() {
    const [service, setService] = useState('Face')

    return (
        <>
            <div className="container mx-auto bg-[#F5F1E6] flex">
                <div className="w-1/2 p-16">
                    <img
                        src="/enquiry.webp"
                        alt="Medical Professional"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-1/2 p-16">
                    <h1 className="text-[#2F5649] text-5xl font-normal mb-16 leading-tight">
                        For Consultation or treatment
                        <br />
                        enquiries{' '}
                        <span className="text-[#2F5649]">
                            contact@nexus-clinic.com
                        </span>
                    </h1>

                    <form className="space-y-8">
                        <div className="space-y-2">
                            <label className="text-[#2F5649] text-lg">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full border-b border-[#2F5649] bg-transparent py-2 focus:outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[#2F5649] text-lg">
                                WhatsApp Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                required
                                className="w-full border-b border-[#2F5649] bg-transparent py-2 focus:outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[#2F5649] text-lg">
                                Which service are you enquiring about? <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                                className="w-full border-b border-[#2F5649] bg-transparent py-2 focus:outline-none"
                            >
                                <option value="Face">Face</option>

                            </select>
                        </div>


                        <div className="border rounded p-4 bg-white">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4" />
                                <span className="text-gray-700">I m not a robot</span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="bg-[#2F5649] text-white px-12 py-3 rounded-md text-lg hover:bg-opacity-90 transition-colors"
                        >
                            Submit
                        </button>

                    </form>
                </div>
            </div>
            <div className="text-start bg-[#F5F1E6] mx-auto p-16">
                <div>
                    <h1 className="text-2xl font-bold  text-black ">
                        Discover Premier Care at Nexus Aesthetic Clinic
                    </h1>
                    <h2 className="text-gray-600 mb-4 text-lg font-normal">
                        At Nexus Aesthetic Clinic, they only do treatments that are right for you and will make you look better. Our dedicated team of experienced doctors in Kuala Lumpur uses the most up-to-date technology to make sure that your treatments for skin rejuvenation, body contouring, and more advanced facials are all completely unique and tailored to your needs. That is why we are committed to creating a safe, effective transformational experience.
                    </h2>
                </div>
                <div>
                    <h1 className="text-2xl font-bold  text-black ">
                        Leading Aesthetic Clinic in Malaysia
                    </h1>
                    <h2 className="text-gray-600 mb-4 text-lg font-normal">
                        Operating out of our clinic, which is well known for the several non-invasive, medical-grade skincare treatments we offer, we are a top aesthetic clinic in Malaysia. Every treatment is tailor-made to suit our client’s individual needs for the best outcomes with minimum downtime.
                    </h2>
                </div>
                <div>
                    <h1 className="text-2xl font-bold  text-black ">
                        Excellence in Care and Results
                    </h1>
                    <h2 className="text-gray-600 mb-4 text-lg font-normal">
                        Emphasizing customer pleasure, Nexus Aesthetic Clinic works to establish a friendly atmosphere where professionalism and comfort take the front stage. The commitment of our staff to quality ensures that your aesthetic objectives are precisely and with care fulfilled. <br />
                        <br />
                        Trust Nexus Aesthetic Clinic for your beauty journey, where your confidence is our priority. Experience the difference with us today.
                    </h2>
                </div>
            </div>
        </>
    )
}

