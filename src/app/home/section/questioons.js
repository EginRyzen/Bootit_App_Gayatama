import React, { useState, useRef } from 'react';

function Questions() {
    const [activeIndex, setActiveIndex] = useState(null);
    const contentRefs = useRef([]);

    // Fungsi untuk toggle accordion
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Mengukur tinggi dari setiap konten accordion saat pertama kali render
    const heights = contentRefs.current.map(ref => (ref ? ref.scrollHeight : 0));

    // Komponen Accordion
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-3xl mb-5 ml-2 font-normal text-[#3a3f47] text-center capitalize">
                Frequently Asked Questions
            </div>
            <div className="flex flex-col bg-[#f8f9fa] rounded-lg">
                {[
                    { question: 'What services do you offer?', answer: 'We offer a variety of services including web development, mobile app development, and digital marketing.' },
                    { question: 'How do I create an account?', answer: 'To create an account, click on the "Sign Up" button on the top right of the homepage and fill in the required information.' },
                    { question: 'Is there a free trial available?', answer: 'Yes, we offer a 14-day free trial for new users. You can sign up and start exploring our features without any cost.' },
                    { question: 'What payment methods do you accept?', answer: 'We accept a variety of payment methods including credit cards, debit cards, PayPal, and more.' },
                    { question: 'How do I cancel my subscription?', answer: 'To cancel your subscription, go to your account settings, click on "Subscription", and follow the cancellation instructions.' },
                    { question: 'How can I reset my password?', answer: 'If you’ve forgotten your password, click on "Forgot Password" at the login page and follow the instructions to reset it.' },
                    { question: 'Can I upgrade or downgrade my plan?', answer: 'Yes, you can easily upgrade or downgrade your subscription plan from your account settings.' },
                    { question: 'Is my data secure?', answer: 'We take data security very seriously and use industry-standard encryption to protect your information.' },
                    { question: 'How do I contact customer support?', answer: 'You can reach our customer support team through the "Contact Us" page or email us directly at support@example.com.' },
                    { question: 'Where can I find the privacy policy?', answer: 'Our privacy policy can be found at the bottom of the website under the "Privacy Policy" link.' },
                    { question: 'Do you offer refunds?', answer: 'We offer refunds under certain conditions. Please refer to our refund policy for more details.' },
                    { question: 'How often do you update your services?', answer: 'We regularly update our services with new features and improvements based on user feedback.' },
                    { question: 'What is the difference between the Basic and Premium plans?', answer: 'The Basic plan includes basic features, while the Premium plan offers additional features such as priority support and advanced analytics.' },
                    { question: 'Can I integrate this service with other tools?', answer: 'Yes, we support integration with popular tools such as Zapier, Google Analytics, and more.' },
                    { question: 'How do I report a problem with the service?', answer: 'If you encounter any issues, you can report them through our "Help Center" or contact our support team directly.' }
                ].map((item, index) => (
                    <div key={index} className="relative">
                        <h2>
                            <button
                                type="button"
                                onClick={() => toggleAccordion(index + 1)}
                                className="flex items-center justify-between w-full p-5 text-md font-medium text-[#3a3f47] bg-transparent gap-3"
                                aria-expanded={activeIndex === index + 1}
                                aria-controls={`accordion-flush-body-${index + 1}`}
                            >
                                <span className="flex items-center text-sm md:text-md">
                                    <svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2z" clipRule="evenodd" />
                                    </svg>
                                    {item.question}
                                </span>
                                <svg
                                    className={`w-3 h-3 shrink-0 ${activeIndex === index + 1 ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 10 6"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id={`accordion-flush-body-${index + 1}`}
                            ref={(el) => (contentRefs.current[index] = el)}
                            style={{
                                maxHeight: activeIndex === index + 1 ? `${heights[index]}px` : '0px',
                                transition: 'max-height 0.5s ease',
                            }}
                            className="overflow-hidden"
                            aria-labelledby={`accordion-flush-heading-${index + 1}`}
                        >
                            <div className="p-5 pt-0 ms-6">
                                <p className="mb-2 text-xs md:text-sm text-gray-500">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Questions;
