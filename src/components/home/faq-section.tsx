
'use client'


const faqs = [
    {
        question: "What are the benefits of combining Platelet Rich Plasma (PRP) therapy with Hair Transplantation?",
        answer: "PRP therapy enhances the results of hair transplantation by stimulating hair follicles and improving blood circulation in the scalp. This combination not only accelerates healing but also encourages stronger and healthier hair growth, ensuring more natural and lasting results."
    },
    {
        question: "How does Coolsculpting help in weight-loss, and is it better than other treatments?",
        answer: "Coolsculpting is a non-invasive fat reduction procedure that targets and eliminates stubborn fat through controlled cooling. While it is not a weight-loss treatment, it effectively reduces fat pockets resistant to diet and exercise. For a comprehensive solution, combining Coolsculpting with nutritional therapy or a personalized weight-loss plan can offer more sustainable results."
    },
    {
        question: "Can Laser Hair Removal and Botox treatments be done together safely?",
        answer: "Yes, Laser Hair Removal and Botox treatments can be done together as they target different areas and concerns. Laser Hair Removal focuses on removing unwanted hair, while Botox relaxes facial muscles to reduce wrinkles. Scheduling them appropriately ensures you can achieve smooth, youthful skin without any complications."
    },
    {
        question: " What is Vaginal Rejuvenation, and how does it differ from other laser treatments?",
        answer: "Vaginal Rejuvenation involves laser or radiofrequency treatments to improve vaginal tone, elasticity, and overall health. Unlike other laser treatments for skin or hair, this procedure targets the intimate area to address concerns like laxity, dryness, and urinary incontinence, providing improved comfort and confidence."
    },
    {
        question: "How effective is Stem Cell Therapy for Erectile Dysfunction and other health concerns?",
        answer: "Stem Cell Therapy is an innovative treatment that uses regenerative cells to improve blood flow and tissue repair. For Erectile Dysfunction, it helps restore natural function without invasive surgery. Additionally, stem cells are used for other health issues, including anti-aging and enhancing overall wellness."
    },
    {
        question: " Is there any downtime for procedures like Botox, P-Shot, or Coolsculpting?",
        answer: "One of the major benefits of treatments like Botox, P-Shot, and Coolsculpting is minimal to no downtime. Botox and P-Shot are quick procedures that allow you to resume daily activities almost immediately, while Coolsculpting may require mild post-treatment care but does not interrupt your routine."
    }
    ,
    {
        question: " Can Platelet Rich Plasma (PRP) be used for facial rejuvenation and hair loss treatment?",
        answer: "Absolutely! PRP therapy is versatile and natural, using your blood’s growth factors to stimulate healing and regeneration. It is highly effective for facial rejuvenation, improving skin texture and elasticity, as well as treating hair loss by nourishing the scalp and activating dormant hair follicles."
    }
    ,
    {
        question: "What makes Tattoo Removal with advanced laser treatment so effective?",
        answer: "Laser Tattoo Removal targets the ink pigments in your skin, breaking them down safely without damaging surrounding tissue. Modern lasers can remove tattoos of various colors and depths efficiently, making the process faster, safer, and less painful than older methods."
    },
    {
        question: " How does HCG therapy support weight-loss compared to other treatments?",
        answer: "HCG therapy helps in targeted fat loss while preserving muscle mass. It works best when paired with a low-calorie diet, allowing the body to burn stored fat for energy. Unlike procedures like Coolsculpting, which address stubborn fat pockets, HCG focuses on systemic weight-loss."
    }
    ,
    {
        question: "What is Plinest, and how does it complement treatments like Botox or Breast Enhancement?",
        answer: "Plinest is a bio-restructuring injectable that promotes collagen production and improves skin quality. It pairs well with Botox for reducing fine lines and wrinkles, as it enhances skin texture. Additionally, Plinest can be used alongside Breast Enhancement procedures to rejuvenate surrounding skin, giving a more youthful appearance."
    }

]

export default function FaqSection() {
    return (
        <div className="container space-y-12 mx-auto px-12 py-8 p-4 bg-[#faf7f2]">
            <h2 className=" text-2xl font-medium mb-8">
                FAQS content suggestions
            </h2>

            <div className="space-y-8">
                {faqs.map((faq, index) => (
                    <div key={index} className="space-y-4">
                        <h3 className=" text-lg text-gray-800 font-bold">
                            {index + 1}. {faq.question}
                        </h3>
                        <div className="space-y-2">
                            <div className=" mt-2 font-bold text-gray-800">Ans.</div>
                            <p className=" mt-4 leading-relaxed text-gray-600">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

