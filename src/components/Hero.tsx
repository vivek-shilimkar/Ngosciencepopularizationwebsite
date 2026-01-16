import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              विज्ञान सर्वांसाठी
            </h2>
            <p className="text-xl text-gray-700">
              मराठी भाषेतून विज्ञान प्रबोधन करणारी एक समर्पित संस्था
            </p>
            <p className="text-gray-600">
              आम्ही वर्षभर विविध उपक्रमांद्वारे विज्ञानाची माहिती सामान्य माणसापर्यंत पोहोचवण्याचे काम करतो. 
              विज्ञानाची आवड निर्माण करणे आणि वैज्ञानिक दृष्टिकोन विकसित करणे हे आमचे ध्येय आहे.
            </p>
            <div className="flex gap-4">
              <a
                href="#activities"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                आमचे उपक्रम पहा
              </a>
              <a
                href="#contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                संपर्क साधा
              </a>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758685734153-132c8620c1bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZWR1Y2F0aW9uJTIwY2hpbGRyZW58ZW58MXx8fHwxNzY4NDgzMDI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Science Education"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
