import { Target, Eye, Heart } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            आमच्याबद्दल
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            मराठी विज्ञान परिषद (मविप), पुणे विभाग ही एक स्वयंसेवी व
            वैज्ञानिक संस्था आहे जी विज्ञानाचा प्रसार आणि प्रचार
            करण्यासाठी कार्य करते, विशेषतः मराठी भाषेतून विज्ञान
            सर्वसामान्यांपर्यंत पोहोचवण्यासाठी प्रयत्न करते.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              आमची दृष्टी
            </h3>
            <p className="text-gray-600">
              प्रत्येक नागरिकाला विज्ञानाची आणि तंत्रज्ञानाची
              मूलभूत माहिती मिळावी आणि समाजात वैज्ञानिक
              दृष्टिकोन रुजावा.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              आमचे ध्येय
            </h3>
            <p className="text-gray-600">
              मराठी माध्यमातून विज्ञान शिक्षण सुलभ करणे,
              वैज्ञानिक चिकित्सा जागृत करणे आणि संशोधनाला
              प्रोत्साहन देणे.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              आमची मूल्ये
            </h3>
            <p className="text-gray-600">
              विज्ञानाची सर्वांसाठी उपलब्धता, तर्कशुद्ध विचार,
              सततचे शिक्षण आणि समाजसेवेची भावना.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            आमचा प्रवास
          </h3>
          <div className="space-y-4 text-gray-600">
            <p>
              मराठीतून आधुनिक विज्ञानाचा प्रसार करणे या हेतूने
              १९६७ साली मराठी विज्ञान परिषद, पुणे विभाग या
              संस्थेची स्थापना झाली.
            </p>
            <p>
              विज्ञानामुळे आणि तंत्रज्ञानामुळे आपल्या रोजच्या
              जगण्यात सातत्याने बदल घडत आहेत. सवयी, उपक्रम,
              साधने बदलत आहेत आणि वाढत आहेत. त्या शास्त्रबद्ध
              उपयोगात आणण्यासाठी त्याच्या कार्यपद्धती समजून घेणे
              महत्त्वाचे आहे. त्याबरोबरच कुतूहल वाढवणे आणि
              जिज्ञासा जागी करणे हे काम परिषद करते. ज्या
              श्रद्धेच्या आधाराने आपण जगतो तिची माहिती घेणे,
              त्यातील सर्जन आणि निर्जीव घटकांमधील संबंध शोधणे,
              नियमितता शोधणे, त्यांचे विशेष ज्ञान करून घेणे
              म्हणजे विज्ञान.
            </p>
            <p>
              ज्ञान होण्यासाठी आणि झालेल्या ज्ञानाची
              क्रमाक्रमाने देवाणघेवाण करण्यासाठी भाषेची आवश्यकता
              असते. आपल्याभोवतीच्या आसपास भाषेच्या माध्यमातूनच
              ज्ञान होते आणि ज्ञान पसरते. त्या बदलत्या
              परिस्थितीत झालेले ज्ञान समजून घेण्यासाठी आपण आपली
              भाषा नवनीन शब्दांनी आणि कल्पनांनी समृद्ध करणे
              तेवढेच महत्त्वाचे आहे.
            </p>
            <p>
              मराठी भाषा समर्थ करणारी, परिपूर्ण व्हावी म्हणून
              आपल्याला भाषा कळणे गरजेचे आहे. पाहणे, ऐकणे, वाचणे,
              संभाषण करणे आणि सर्वांत महत्त्वाचे म्हणजे
              प्रत्यक्ष अनुभवातून आपल्याला मिळालेल्या माहितीचे
              चिंतन आपल्या बुद्धीने करणे. तसे करण्यासाठी मराठी
              विज्ञान परिषद, पुणे विभाग कार्यरत आहे आणि
              कार्यकर्त्यांद्वारे समाजातील विविध घटकांपर्यंत
              पोहोचण्याचा परिषद प्रयत्न करते.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}