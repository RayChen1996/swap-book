export default function AppFooter() {
  return (
    <footer className="bg-blue-200 text-gray-700 pt-10 pb-4 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 pb-10 border-b border-blue-100">
          {/* Logo & About */}
          <div className="flex-1 min-w-[200px] flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="  p-2">
                <img src="/Icon.png" alt="logo" className="w-6 h-6" />
              </div>
              <span className="font-bold text-lg">E-Comm</span>
            </div>
            <p className="text-sm text-gray-600 max-w-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer.
            </p>
          </div>

          {/* Follow Us */}
          <div className="flex-1 min-w-[180px] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <p className="text-sm text-gray-600 mb-2">
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" aria-label="Facebook" className="hover:text-blue-600">
                <i className="fab fa-facebook-f"></i>FB
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-400">
                <i className="fab fa-twitter"></i>TW
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex-1 min-w-[180px] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <address className="not-italic text-sm text-gray-600">
              E-Comm, 4578
              <br />
              Marmora Road,
              <br />
              Glasgow D04 89GR
            </address>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Information</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Service</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">My Account</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Our Offers</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:justify-between items-center border-t border-blue-100 pt-4 text-xs text-gray-400">
          <span>© 2018 Ecommerce Theme by www.bisenbaev.com</span>
          <div className="flex gap-2 mt-2 md:mt-0">
            <img src="/Western-union.png" alt="Visa" className="h-5" />
            <img src="/card.png" alt="Mastercard" className="h-5" />
            <img src="/Paypal.png" alt="Paypal" className="h-5" />
            <img src="/visa.png" alt="Amex" className="h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
