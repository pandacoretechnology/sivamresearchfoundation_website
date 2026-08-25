import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col bg-white">
      {/* Top Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1: Brand & Mission */}
          <div className="md:col-span-2 flex flex-col items-start">
            <Link href="/" className="relative w-44 h-14 mb-4 block">
              <Image
                src="/images/nav/logo_prim.png"
                alt="Sivam Research Foundation"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md mb-6">
              Sivam Research Foundation (SRF) is a non-profit organization committed to promoting mental health, psychological well-being, research excellence, education, and community empowerment through evidence-based services.
            </p>
            <a
              href="https://wa.me/919952941614"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#15bf5f] hover:bg-[#12a953] text-gray-950 font-semibold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-[#0F6E57] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#0F6E57] transition-colors">
                  About Organization
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#0F6E57] transition-colors">
                  All Services Hub
                </Link>
              </li>
              <li>
                <Link href="/services/rehabilitation-services" className="hover:text-[#0F6E57] transition-colors">
                  Rehabilitation Services
                </Link>
              </li>
              <li>
                <Link href="/services/counselling-services" className="hover:text-[#0F6E57] transition-colors">
                  Counselling Services
                </Link>
              </li>
              <li>
                <Link href="/services/internship-and-training" className="hover:text-[#0F6E57] transition-colors">
                  Internship & Training
                </Link>
              </li>
              <li>
                <Link href="/services/research-and-publication" className="hover:text-[#0F6E57] transition-colors">
                  Research & Publication
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a
                  href="tel:+919952941614"
                  className="flex items-center gap-2 hover:text-[#0F6E57] transition-colors"
                >
                  <PhoneIcon className="w-4 h-4 text-[#0F6E57] shrink-0" />
                  <span>(+91) 9952 9416 14</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sivamresearchfoundation@gmail.com"
                  className="flex items-center gap-2 hover:text-[#0F6E57] transition-colors break-all"
                >
                  <EnvelopeIcon className="w-4 h-4 text-[#0F6E57] shrink-0" />
                  <span>sivamresearchfoundation@gmail.com</span>
                </a>
              </li>
              <li className="pt-2 text-xs text-gray-500">
                <p><strong>Office:</strong> Mon–Fri 9:30 AM – 5:00 PM</p>
                <p><strong>Helpline:</strong> Mon–Fri 1:00 PM – 10:00 PM</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#114532] text-white px-4 sm:px-6 lg:px-8 py-5 border-t border-[#1d6b4f]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-emerald-100">
          <p>© 2026 Sivam Research Foundation. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
            <span>•</span>
            <Link
              href="/admin"
              className="text-emerald-300 hover:text-white font-semibold transition-colors"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
