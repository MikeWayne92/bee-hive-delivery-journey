
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceSection from "../components/ServiceSection";
import JourneySection from "../components/JourneySection";
import ContactSection from "../components/ContactSection";
import { Package } from "lucide-react";
import BeeCharacter from "../components/BeeCharacter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServiceSection />
      <JourneySection />
      
      {/* Testimonials Section */}
      <section id="testimonials" className="section-container bg-bee-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <BeeCharacter
              role="messenger"
              name="Messenger Bee"
              description="Delivering good news from our clients"
              className="mb-4"
            />
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="text-center text-lg max-w-2xl mb-10">
              Don't just take our word for it. Hear what our satisfied customers have to say about their DeliverBee experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "Small Business Owner",
                quote: "DeliverBee has transformed how I ship products to my customers. The real-time tracking and reliable delivery times have significantly improved my customer satisfaction rates.",
              },
              {
                name: "Michael Chen",
                role: "E-commerce Director",
                quote: "We've tried many delivery services, but DeliverBee stands out for their attention to detail and exceptional communication. Our packages arrive on time, every time.",
              },
              {
                name: "Emily Rodriguez",
                role: "Online Shopper",
                quote: "As someone who shops online frequently, I'm always impressed by how DeliverBee handles my deliveries. Their couriers are friendly and their tracking updates are incredibly accurate.",
              },
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.125 7.5H6.875C5.83947 7.5 5 8.33947 5 9.375V15.625C5 16.6605 5.83947 17.5 6.875 17.5H10.625V21.25C10.625 22.2855 11.4645 23.125 12.5 23.125H13.125C13.6773 23.125 14.125 22.6773 14.125 22.125V15.625C14.125 14.5895 13.2855 13.75 12.5 13.75H8.75V11.25H13.125C13.6773 11.25 14.125 10.8023 14.125 10.25V8.125C14.125 7.77982 13.9933 7.44939 13.7589 7.21508C13.5245 6.98076 13.1952 6.84903 12.8451 6.84903M26.25 7.5H20C18.9645 7.5 18.125 8.33947 18.125 9.375V15.625C18.125 16.6605 18.9645 17.5 20 17.5H23.75V21.25C23.75 22.2855 24.5895 23.125 25.625 23.125H26.25C26.8023 23.125 27.25 22.6773 27.25 22.125V15.625C27.25 14.5895 26.4105 13.75 25.625 13.75H21.875V11.25H26.25C26.8023 11.25 27.25 10.8023 27.25 10.25V8.125C27.25 7.77982 27.1183 7.44939 26.8839 7.21508C26.6495 6.98076 26.3202 6.84903 25.9701 6.84903" fill="#F2B707"/>
                    </svg>
                  </div>
                  <p className="italic text-gray-600 mb-6 flex-grow">{testimonial.quote}</p>
                  <div className="flex items-center mt-auto">
                    <div className="hex w-12 h-14 flex items-center justify-center mr-4">
                      <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <button className="bee-button">Read More Reviews</button>
          </div>
        </div>
      </section>
      
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-bee-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="hex w-10 h-11 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DB</span>
                </div>
                <span className="font-bold text-xl text-white">DeliverBee</span>
              </div>
              <p className="text-gray-400 mb-4">
                Delivering packages with the efficiency and reliability of a bee colony.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-bee-honey transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-bee-honey transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-bee-honey transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-bee-honey transition-colors">Express Delivery</a></li>
                <li><a href="#" className="text-gray-400 hover:text-bee-honey transition-colors">Standard Shipping</a></li>
                <li><a href="#" className="text-gray-400 hover:text-bee-honey transition-colors">International Shipping</a></li>
                <li><a href="#" className="text-gray-400 hover:text-bee-honey transition-colors">Package Tracking</a></li>
                <li><a href="#" className="text-gray-400 hover:text-bee-honey transition-colors">Business Solutions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-bee-honey transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-bee-honey transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-bee-honey transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-bee-honey transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-bee-honey transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-l-md flex-1 focus:outline-none focus:ring-2 focus:ring-bee-honey"
                />
                <button
                  type="submit"
                  className="bg-bee-honey px-4 py-2 rounded-r-md text-white font-medium hover:bg-bee-orange transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} DeliverBee. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-bee-honey transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-bee-honey transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-bee-honey transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
