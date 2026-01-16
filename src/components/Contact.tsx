import { Mail, Phone, MapPin, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            आमच्याशी संपर्क साधा
          </h2>
          <p className="text-xl text-gray-600">
            आम्हाला तुमच्या प्रश्नांची उत्तरे देण्यास आनंद होईल
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>संपर्क माहिती</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      पत्ता
                    </h4>
                    <p className="text-gray-600">
                      टिळक स्मारक मंदिर, टिळक रोड,
                      <br />
                      सदाशिव पेठ, पुणे, महाराष्ट्र - ४११०३०
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      दूरध्वनी
                    </h4>
                    <p className="text-gray-600">
                      +91 70575 45769
                      <br />
                      +91 94220 48962
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Mail className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">ईमेल</h4>
                    <p className="text-gray-600">
                      mavipa.pune@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      कार्यालयीन वेळ
                    </h4>
                    <p className="text-gray-600">
                      सोमवार - शनिवार: संध्याकाळी 4:00 - 6:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>संदेश पाठवा</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    नाव
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="तुमचे पूर्ण नाव"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    ईमेल
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    दूरध्वनी
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    संदेश
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="तुमचा संदेश येथे लिहा..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  संदेश पाठवा
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}