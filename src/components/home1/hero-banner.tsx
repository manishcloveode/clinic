import { Button } from "@/components/ui/button"
import Image from "next/image"


export default function HeroBanner() {
    return (
        <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40">
                <Image
                    src="/placeholder.svg?height=1080&width=1920"
                    alt="Background"
                    width={1920}
                    height={1080}
                    className="h-full w-full object-cover"
                    priority
                />
            </div>


            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                <h1 className="max-w-5xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                    Expert Treatments in Your City
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200 sm:text-xl">
                    Professional treatment services that help you look and feel your best. Advanced technology combined with expert care.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
                    <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700">
                        Book an Appointment
                    </Button>
                    <Button size="lg" variant="outline" className="border-white bg-white/10 text-white backdrop-blur hover:bg-white/20">
                        Get in Touch
                    </Button>
                </div>
            </div>



        </section>
    )
}

