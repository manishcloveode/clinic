import { Clock, Calendar, Coffee, Smile } from 'lucide-react'
import { Button } from "@/components/ui/button"


export default function TreatmentInfo() {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

                <div className="flex flex-col items-center text-center">
                    <div className="mb-2">
                        <Smile className="w-16 h-16 stroke-1" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Treated Area:</h2>
                    <p className="text-gray-600">
                        Facial areas to treat acne scars and pigmentation.
                    </p>
                </div>


                <div className="flex flex-col items-center text-center">
                    <div className="mb-2">
                        <Clock className="w-16 h-16 stroke-1" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Duration:</h2>
                    <p className="text-gray-600">Less than an hour.</p>
                </div>


                <div className="flex flex-col items-center text-center">
                    <div className="mb-2">
                        <Calendar className="w-16 h-16 stroke-1" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Frequency:</h2>
                    <p className="text-gray-600">1 session per month.</p>
                </div>


                <div className="flex flex-col items-center text-center">
                    <div className="mb-2">
                        <Coffee className="w-16 h-16 stroke-1" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Downtime:</h2>
                    <p className="text-gray-600">Minimal</p>
                </div>
            </div>


            <div className="text-center">
                <Button
                    className="bg-[#2F4F4F] hover:bg-[#2F4F4F]/90 text-white px-8 py-6 text-lg"
                >
                    Book an Appointment
                </Button>
            </div>
        </div>
    )
}

