import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export default function TreatmentsGrid() {
    const treatments = [
        { name: "Hair Transplantation", image: "/home1.webp?height=300&width=300" },
        { name: "Botox", image: "/home2.webp?height=300&width=300" },
        { name: "Coolsculpting", image: "/home3.webp?height=300&width=300" },
        { name: "Derma Fillers", image: "/home4.webp?height=300&width=300" },
        { name: "Laser Treatment", image: "/home5.webp?height=300&width=300" },
        { name: "HCG", image: "/home6.webp?height=300&width=300" },
        { name: "P – Shot", image: "/home7.webp?height=300&width=300" },
        { name: "Laser Hair Removal", image: "/home8.webp?height=300&width=300" },
        { name: "Platelet Rich Plasma", image: "/home9.webp?height=300&width=300" },
        { name: "Facelift", image: "/home10.webp?height=300&width=300" },
        { name: "Tattoo Removal", image: "/home11.webp?height=300&width=300" },
        { name: "Vaginal Rejuvenation", image: "/home12.webp?height=300&width=300" },
        { name: "Sculptra", image: "/home13.webp?height=300&width=300" },
        { name: "Plinest", image: "/home14.png?height=300&width=300" },
        { name: "Breast Enhancement", image: "/home15.png?height=300&width=300" },
        { name: "Weight-Loss", image: "/home16.png?height=300&width=300" },
        { name: "Stem Cell", image: "/home17.png?height=300&width=300" },
        { name: "Erectile Dysfunction", image: "/home18.png?height=300&width=300" },
    ]

    return (
        <div className="container mx-auto px-12 py-8 p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {treatments.map((treatment, index) => (
                    <Card key={index} className="border-none shadow-none">
                        <CardContent className="p-0">
                            <div className="relative aspect-square overflow-hidden">
                                <Image
                                    src={treatment.image}
                                    alt={treatment.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="mt-2 text-center text-gray-700 text-sm">
                                {treatment.name}
                            </h3>
                        </CardContent>
                    </Card>
                ))}
            </div>

        </div>
    )
}

