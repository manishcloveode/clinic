import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"


export default function LaserTreatments() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-12">Types Of Laser Treatments</h1>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-xl font-semibold mb-3">Deka Laser Treatment:</h2>
                            <p className="text-gray-700 leading-relaxed">
                                This treatment creates microscopic channels that go into the second layer of skin through the epidermis to boost collagen production and reduce age spots, wrinkles, acne scarring, and loose skin texture.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-xl font-semibold mb-3">Fraxel Laser:</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Fractional laser treatment also improves the quality of skin texture and tone. This advanced treatment works deeply into the skin to make it look younger and better from the outside. The process effectively treats acne scars, brown spots, sun damage, fine lines, and other skin issues.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="relative">
                    <Card className="overflow-hidden">
                        <CardContent className="p-0">
                            <div className="relative aspect-[4/3]">
                                <Image
                                    src="/treatment.jpg"
                                    alt="Laser treatment procedure being performed with DEKA equipment"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </CardContent>
                    </Card>


                </div>
            </div>
        </div>
    )
}

