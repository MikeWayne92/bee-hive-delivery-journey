
import React from "react";
import BeeCharacter from "./BeeCharacter";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-container honeycomb-bg">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <BeeCharacter
            role="queen"
            name="Queen Bee"
            description="Overseeing all operations to ensure quality service"
            className="mb-4"
          />
          <h2 className="section-title">Get a Quote</h2>
          <p className="text-center text-lg max-w-2xl mb-10">
            Ready to experience the DeliverBee difference? Fill out the form below for a quick quote, or contact us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-bee-black">Request a Quote</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bee-honey"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bee-honey"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bee-honey"
                  placeholder="Your email address"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bee-honey"
                  placeholder="Your phone number"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Needed
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bee-honey"
                >
                  <option value="">Select a service</option>
                  <option value="express">Express Delivery</option>
                  <option value="standard">Standard Delivery</option>
                  <option value="international">International Shipping</option>
                  <option value="business">Business Solutions</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bee-honey"
                  placeholder="Tell us more about your delivery needs"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bee-button"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-bee-honey text-white p-8 rounded-lg shadow-lg mb-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Main Office</h4>
                    <p>123 Honeycomb Lane, Beeville, BZ 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p>(555) BEE-HIVE</p>
                    <p>(555) 234-4483</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p>info@deliverbee.com</p>
                    <p>support@deliverbee.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Hours of Operation</h4>
                    <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-bee-black">Why Choose DeliverBee?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-bee-honey w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span>Fast, reliable delivery guaranteed</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-bee-honey w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span>Real-time tracking of all packages</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-bee-honey w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span>Excellent customer support</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-bee-honey w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span>Eco-friendly delivery options</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-bee-honey w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span>Competitive pricing with no hidden fees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
