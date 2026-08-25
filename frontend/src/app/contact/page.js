import Footer from "@/components/Footer";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Contact Us | Sivam Research Foundation",
  description: "Get in touch with Sivam Research Foundation. Reach out via phone, email, or WhatsApp for confidential consultations, inquiries, or admissions.",
};

const Contact = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pb-20">
        {/* 1. HERO SECTION */}
        <section className="relative w-full h-[55vh] md:h-[60vh] min-h-87.5 bg-gray-100">
          <Image
            src="/images/contact/contact_hero.png"
            alt="Need help? We are one message away."
            fill
            className="hidden md:block object-cover object-center"
            priority
          />
          <Image
            src="/images/contact/contact_hero_mob.png"
            alt="Need help? We are one message away."
            fill
            className="block md:hidden object-cover object-center"
            priority
          />
        </section>

        {/* 2. OVERLAPPING CONTACT INFO CARDS */}
        <section className="relative w-full max-w-5xl mx-auto px-4 -mt-16 md:-mt-32 z-20">
          <div className="bg-[#f7f7f7] rounded-4xl p-6 md:p-10 shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column: Contact Info & Location */}
              <div className="flex flex-col gap-6">
                {/* Contact Info Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Contact Info
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="tel:+919952941614"
                        className="flex items-center gap-3 text-gray-700 hover:text-[#0F6E57] text-sm md:text-base font-medium transition-colors"
                      >
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0F6E57] flex items-center justify-center shrink-0">
                          <PhoneIcon className="w-5 h-5 stroke-[2]" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Call / Helpline</p>
                          <p>(+91) 9952 9416 14</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:sivamresearchfoundation@gmail.com"
                        className="flex items-center gap-3 text-gray-700 hover:text-[#0F6E57] text-sm md:text-base font-medium transition-colors"
                      >
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0F6E57] flex items-center justify-center shrink-0">
                          <EnvelopeIcon className="w-5 h-5 stroke-[2]" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Email Address</p>
                          <p className="break-all">sivamresearchfoundation@gmail.com</p>
                        </div>
                      </a>
                    </li>
                  </ul>

                  {/* Direct WhatsApp Action Button */}
                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <a
                      href="https://wa.me/919952941614"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold py-3 px-4 rounded-xl text-sm shadow-sm transition-all"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                      </svg>
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Location Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Location
                  </h3>
                  <div className="flex items-start gap-3 text-gray-700 text-sm md:text-base font-medium">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0F6E57] flex items-center justify-center shrink-0">
                      <MapPinIcon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Registered Office</p>
                      <p>Sivam Research Foundation, Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Opening Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <ClockIcon className="w-5 h-5 text-[#0F6E57]" />
                    <span>Operating Hours</span>
                  </h3>
                  <ul className="space-y-3.5 text-sm md:text-base text-gray-600">
                    <li className="flex justify-between items-center py-1 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Monday:</span>
                      <span>9:30 AM – 5:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center py-1 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Tuesday:</span>
                      <span>9:30 AM – 5:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center py-1 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Wednesday:</span>
                      <span>9:30 AM – 5:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center py-1 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Thursday:</span>
                      <span>9:30 AM – 5:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center py-1 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Friday:</span>
                      <span>9:30 AM – 5:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center py-1 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Saturday:</span>
                      <span>9:30 AM – 6:00 PM</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-emerald-50 text-xs text-emerald-900 font-medium flex items-center gap-2">
                  <CalendarDaysIcon className="w-5 h-5 text-[#0F6E57] shrink-0" />
                  <span>
                    <strong>Helpline Hours:</strong> Monday to Friday, 1:00 PM to 10:00 PM.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. LOCATE US SECTION (Map) */}
        <section className="w-full max-w-5xl mx-auto px-4 mt-16 md:mt-24 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Locate <span className="text-[#0F6E57]">Us.</span>
          </h2>

          <div className="relative w-full h-80 md:h-112.5 rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-gray-200">
            <iframe
              title="Sivam Research Foundation Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15774.472618262078!2d77.68875473975102!3d8.727760220513774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b041185017eff2d%3A0xc67484ac20e5f4f2!2sTirunelveli%20Junction!5e0!3m2!1sen!2sin!4v1769330079011!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
