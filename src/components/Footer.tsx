import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">
              मराठी विज्ञान परिषद
            </h3>
            <p className="text-gray-400">
              मराठी भाषेतून विज्ञान प्रसाराला वाहिलेली संस्था
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">द्रुत दुवे</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#home"
                  className="hover:text-white transition-colors"
                >
                  मुख्यपृष्ठ
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  आमच्याबद्दल
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  className="hover:text-white transition-colors"
                >
                  उपक्रम
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  संपर्क
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              महत्त्वाचे दुवे
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  सदस्यत्व
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  देणगी
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  स्वयंसेवक व्हा
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  वार्षिक अहवाल
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              आमच्याशी जुळा
            </h4>
            {/* <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div> */}
            <div className="mt-4">
              <a
                href="mailto:info@vigyanprabodhan.org"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                mavipa.pune@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2026 मराठी विज्ञान परिषद. सर्व हक्क राखीव.</p>
        </div>
      </div>
    </footer>
  );
}