import { companyLinks, productLinks, supportLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 bg-white py-10 border-t border-gray-300">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Company</h3>
          <ul className="space-y-2">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gray-600 hover:text-emerald-500 transition-colors duration-300"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Products</h3>
          <ul className="space-y-2">
            {productLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gray-600 hover:text-emerald-500 transition-colors duration-300"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Support</h3>
          <ul className="space-y-2">
            {supportLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gray-600 hover:text-emerald-500 transition-colors duration-300"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-gray-100 py-4 text-center mt-8 text-gray-700 border-t border-gray-200">
        © 2024 Your Company Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
