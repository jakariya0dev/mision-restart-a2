import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1.5">
            <h2 className="text-xl font-bold mb-6">CS — Ticket System</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Products & Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Download Apps
                </a>
              </li>
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Information</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Social Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <FaTwitter size={18} className="text-white" />
                <a href="#" className="hover:text-white transition">
                  @CS — Ticket System
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaLinkedin size={18} className="text-white" />
                <a href="#" className="hover:text-white transition">
                  @CS — Ticket System
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaFacebook size={18} className="text-white" />
                <a href="#" className="hover:text-white transition">
                  @CS — Ticket System
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-white" />
                <a
                  href="mailto:support@cst.com"
                  className="hover:text-white transition"
                >
                  support@cst.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
