import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'

interface Testimonial {
    name: string
    content: string
}

const testimonials: Testimonial[] = [
    {
        name: "Sean Ng",
        content: "Words cannot express how grateful I am to Nexus Clinic for the incredible transformation they helped me achieve. The staff's attention to detail and expertise in aesthetic treatments are unmatched. They took the time to understand my goals and provided personalized recommendations that delivered outstanding results. Nexus is definitely my go-to clinic for all my aesthetic needs."
    },
    {
        name: "Jackie",
        content: "I've visited several aesthetic clinics in the past, but Nexus Clinic truly stands out. The state-of-the-art facility and modern equipment reflect their commitment to excellence. The team of experienced professionals went above and beyond to make me feel comfortable and ensured I understood every step of the process. I am thrilled with the results and would highly recommend Nexus Clinic to anyone seeking top-quality aesthetic services."
    },
    {
        name: "Emily Yan",
        content: "Choosing Nexus Clinic was one of the best decisions I've made for my skin. The knowledgeable staff guided me through the treatment options and created a customized plan to address my specific needs. The results exceeded my expectations, and my confidence has soared. Thank you Nexus Clinic, for your expertise and outstanding care."
    }
]

export default function TestimonialsSection() {
    return (
        <div className=" container mx-auto py-12 px-4 ">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-4">Look At What They Said</h2>
                <p className="text-lg text-muted-foreground mb-8">
                    These compelling testimonials are a collection of genuine feedback and experiences shared by real users:
                </p>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} >
                            <CardContent className="p-6 space-y-4 border-2 border-gray-200">
                                <div className="space-y-4">
                                    <h3 className="font-medium text-lg text-end">{testimonial.name}</h3>
                                    <hr />
                                    <p className="text-muted-foreground">{testimonial.content}</p>
                                </div>
                                <div className="flex gap-0.5">
                                    {Array(5).fill(null).map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 fill-primary text-primary"
                                        />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

