
import React from "react";
import HoneycombGrid from "./HoneycombGrid";
import BeeCharacter from "./BeeCharacter";
import { Package, Clock, Globe, ShieldCheck } from "lucide-react";

const ServiceSection = () => {
  const services = [
    {
      id: "service-1",
      title: "Express Delivery",
      content: (
        <div className="flex flex-col items-center">
          <Clock className="mb-1" size={20} />
          <span>Same-day & next-day options</span>
        </div>
      ),
      color: "#F2B707",
    },
    {
      id: "service-2",
      title: "Package Tracking",
      content: (
        <div className="flex flex-col items-center">
          <Package className="mb-1" size={20} />
          <span>Real-time updates</span>
        </div>
      ),
      color: "#E67E22",
    },
    {
      id: "service-3",
      title: "Global Shipping",
      content: (
        <div className="flex flex-col items-center">
          <Globe className="mb-1" size={20} />
          <span>Worldwide network</span>
        </div>
      ),
      color: "#8B4513",
    },
    {
      id: "service-4",
      title: "Secure Handling",
      content: (
        <div className="flex flex-col items-center">
          <ShieldCheck className="mb-1" size={20} />
          <span>Safe & insured</span>
        </div>
      ),
      color: "#F2B707",
    },
    {
      id: "service-5",
      title: "Business Solutions",
      content: (
        <div className="flex flex-col items-center">
          <Package className="mb-1" size={20} />
          <span>Custom shipping plans</span>
        </div>
      ),
      color: "#E67E22",
    },
    {
      id: "service-6",
      title: "Eco-Friendly",
      content: (
        <div className="flex flex-col items-center">
          <Globe className="mb-1" size={20} />
          <span>Sustainable options</span>
        </div>
      ),
      color: "#8B4513",
    },
  ];

  return (
    <section id="services" className="section-container honeycomb-bg relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <BeeCharacter
            role="scout"
            name="Scout Bee"
            description="Our scout finds the fastest routes for your deliveries"
            className="mb-4"
          />
          <h2 className="section-title">Our Services</h2>
          <p className="text-center text-lg max-w-2xl mb-10">
            At DeliverBee, we offer a comprehensive range of delivery services.
            Like bees in a hive, we work together efficiently to ensure your
            packages arrive safely and on time.
          </p>
        </div>

        <HoneycombGrid items={services} />

        <div className="text-center mt-12">
          <button className="bee-button">View All Services</button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
