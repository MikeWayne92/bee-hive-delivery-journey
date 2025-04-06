
import React, { useEffect, useRef } from "react";
import BeeCharacter from "./BeeCharacter";
import { Package, Truck, MapPin, Bell } from "lucide-react";

const JourneySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    }, observerOptions);

    stepsRef.current.forEach(step => {
      if (step) observer.observe(step);
    });

    return () => {
      stepsRef.current.forEach(step => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  const steps = [
    {
      id: 1,
      title: "Package Pickup",
      description: "Our worker bees collect your package from your specified location, carefully checking all details.",
      icon: <Package size={32} className="text-bee-honey" />,
      delay: 0,
    },
    {
      id: 2,
      title: "Route Planning",
      description: "Our scout bees find the most efficient route for your delivery, ensuring quick transport times.",
      icon: <MapPin size={32} className="text-bee-honey" />,
      delay: 0.1,
    },
    {
      id: 3,
      title: "Secure Transport",
      description: "Your package is securely transported in our dedicated vehicles, tracked in real-time throughout the journey.",
      icon: <Truck size={32} className="text-bee-honey" />,
      delay: 0.2,
    },
    {
      id: 4,
      title: "Delivery Notification",
      description: "Our messenger bees keep you updated at every step and notify you when your package is delivered.",
      icon: <Bell size={32} className="text-bee-honey" />,
      delay: 0.3,
    },
  ];

  return (
    <section id="how-it-works" className="section-container bg-bee-black text-white relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-honeycomb-pattern opacity-5" style={{ backgroundSize: '100px 100px' }} />
      
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <BeeCharacter
            role="worker"
            name="Worker Bee"
            description="Our worker bees handle your deliveries with utmost care"
            className="mb-4"
          />
          <h2 className="section-title text-white">The DeliverBee Journey</h2>
          <p className="text-center text-lg max-w-2xl mb-10 text-gray-300">
            From pickup to delivery, we've streamlined our process to ensure your packages are handled efficiently every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              ref={el => stepsRef.current[index] = el}
              className="bg-bee-black bg-opacity-50 p-6 rounded-lg border border-bee-honey opacity-0 transform translate-y-10"
              style={{ 
                backdropFilter: 'blur(5px)',
                boxShadow: '0 4px 20px rgba(242, 183, 7, 0.15)'
              }}
            >
              <div className="hex w-16 h-18 flex items-center justify-center mb-4 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-center text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-center text-gray-300">{step.description}</p>
              <div className="mt-4 flex justify-center">
                <div className="bg-bee-honey text-bee-black text-2xl font-bold w-10 h-10 rounded-full flex items-center justify-center">
                  {step.id}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-16 py-8 px-6 bg-gradient-to-r from-bee-honey to-bee-orange rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-2xl font-bold mb-2">Ready to get started?</h3>
              <p className="text-white">Experience the DeliverBee difference today!</p>
            </div>
            <button className="bg-white text-bee-orange px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-bee-black hover:text-white hover:shadow-lg">
              Schedule a Pickup
            </button>
          </div>
          
          <div className="absolute -top-12 -right-8 opacity-90 hidden md:block">
            <BeeCharacter
              role="messenger"
              name="Messenger Bee"
              description="Keeping you updated every step of the way"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
