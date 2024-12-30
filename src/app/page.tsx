import Aspiration from "@/components/home/aspiration";
import DoctorsSection from "@/components/home/doctor-section";
import ConsultationForm from "@/components/home/enquiries-section";
import FaqSection from "@/components/home/faq-section";
import Hero from "@/components/home/hero-section";
import LocationSection from "@/components/home/location-section";
import TreatmentsGrid from "@/components/home/main-section";
import TestimonialsSection from "@/components/home/Testimonial";
export default function Home() {
  return (
    <main className="font-poppins">
      {/* <NavBar /> */}
      <Hero />
      <TreatmentsGrid />
      <Aspiration />
      <ConsultationForm />
      <TestimonialsSection />
      <DoctorsSection />
      <LocationSection />
      <FaqSection />
      <DoctorsSection />
      {/* <Footer /> */}
    </main>
  );
}