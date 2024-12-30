import HeroBanner from "@/components/home1/hero-banner";
import Banner from "@/components/home1/banner";
import TreatmentInfo from "@/components/home1/price-section";
import TestimonialsSection from "@/components/home/Testimonial";
import LocationSection from "@/components/home/location-section";
import DoctorsSection from "@/components/home/doctor-section";
import LaserTreatments from "@/components/home1/treatments";

export default function Home() {
    return (
        <main className="font-poppins">
            <HeroBanner />
            <Banner />
            <TreatmentInfo />
            <LaserTreatments />
            <TestimonialsSection />
            <LocationSection />
            <DoctorsSection />
        </main>
    );
}