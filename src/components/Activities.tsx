import {
  Microscope,
  Rocket,
  BookOpen,
  Users,
  FlaskConical,
  Radio,
  Calendar,
  Award,
  Lightbulb,
  Globe,
  GraduationCap,
  MapPin,
  Beaker,
  School,
  ImageIcon,
  UserCheck,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const activities = [
  {
    id: 1,
    title: "व्याख्याने",
    description:
      "विज्ञानाच्या विविध शाखा, विषयांमधील तज्ज्ञ व्यक्ती तसेच संशोधक, अभ्यासक यांनी घेतलेल्या संशोधनाचा आढावा व्याख्यानांमधून करून देतात. दैनंदिन जीवनाशी संबंधित – विज्ञानघर, आरोग्य आणि विषय यावर आधारित व्याख्याने आयोजित केली जातात. डॉ. ग. प. परांजपे, डॉ. वसंत देवधर, प्रा. सरसाम विनायक, डॉ. मळहर विनायक तसेच प्रा. गजानन विनायक या आपले संस्थापक तसेच अ. भा. जोशी यांच्या स्मृतिदिनानिमित्त विशेष विषयांवर, संशोधनावर व्याख्याने होतात. प्रश्नावलीमध्ये दैनंदिन जीवनातील विज्ञान, निरीक्षण, प्रयोग, तर्क यांचा समावेश असतो. ही स्पर्धा नवीन विचार, जिज्ञासा आणि वैज्ञानिक दृष्टिकोन वाढवण्यावर लक्ष केंद्रित करते.",
    icon: Microscope,
    month: "दर महिन्याला",
  },
  {
    id: 2,
    title: "वार्षिक सहल, वैज्ञानिक सहल, स्थळ भेटी",
    description:
      "पावसाळ्यात दोन–तीन दिवसांची सहल आयोजित केली जाते. ती जोजव जाणून पाहणे आणि तिथली माहिती करून घेणे, तसेच स्थानिक लोकांनी परंपरेने राखलेल्या देवस्थळे पाहण्याचा आनंद सहलांतून मिळतो. नैसर्गिक निसर्गरम्य ठिकाणी जसे – लावणी सागर, सिंधुदुर्ग, तसेच मानवाने आपल्या कर्तृत्वाने निर्माण केलेली कारखाने, प्रयोगशाळा, कारखाने, उत्पादन केंद्रे, संशोधन केंद्रे अशा ठिकाणांना भेटीच्या सहली आयोजित केल्या जातात.",
    icon: FlaskConical,
    month: "वार्षिक",
  },
  {
    id: 3,
    title: "पारंपरिक विज्ञान संकलन",
    description:
      "विविधतेने नटलेल्या या देशात नैसर्गिक साधनसंपत्ती विपुल आहे. तिचा वापर करून जीवन सुखी व समृद्ध, ते निसर्गस्नेही पद्धतीने जगण्याची अनेक तंत्रे आणि शास्त्रे परंपरेने विकसित झाली आहेत. या परंपरेचा शोध घेण्याचा तसेच त्याचे रीतसर संकलन करण्याचा प्रयत्न मराठी विज्ञान परिषद, पुणे विभाग करतो.",
    icon: Users,
    month: "वार्षिक",
  },
  {
    id: 4,
    title: "पुस्तक प्रकाशन",
    description:
      "नवीन संशोधन करणाऱ्यांची व्याख्याने आयोजित करणे, तसेच संशोधनावर आधारित पुस्तके प्रकाशित करणे हे काम परिषद करते. माध्यमिक शालेय स्तरापर्यंत पोहोचलेल्या व्यक्तींनाही समजेल अशा सोप्या भाषेत आणि अल्प किमतीत उपलब्ध होणारी पुस्तके प्रकाशित करण्याचे कामही संस्था करते. संस्थेने आयोजित केलेल्या कार्यक्रमांमधून ही पुस्तके विक्रीस उपलब्ध केली जातात.",
    icon: Award,
    month: "वार्षिक",
  },
  {
    id: 5,
    title: "विज्ञान रंजन स्पर्धा",
    description:
      "आपल्या सभोवार सगळीकडे विज्ञान पसरलेले आहे. त्याकडे डोळे उघडे ठेवून बघितले की त्याची जाण पाहणाऱ्याला येते. अशी दृष्टी लागावी म्हणून विज्ञान रंजन स्पर्धेचे आयोजन करण्यात येते. यासाठी वयाची, शिक्षणाची अट नाही. स्पर्धेची प्रश्नपत्रिका दरवर्षी जानेवारीच्या शेवटच्या आठवड्यात प्रकाशित केली जाते. उत्तरे शोधून, मिळवून, कोणालाही विचारून, स्वतः प्रयोग करून तीन आठवड्यांच्या मुदतीत लिहून पाठवायची असतात. नंतर निवडक मुलांना प्रयोग फेरीसाठी बोलावले जाते आणि त्यावरून विजेते ठरतात.",
    icon: Rocket,
    month: "जानेवारी-फेब्रुवारी",
  },
  {
    id: 6,
    title: "मराठी विज्ञान संमेलन",
    description:
      "परिषदेतर्फे विभागीय तसेच अ. भा. मराठी विज्ञान संमेलने भारावली जातात. या संमेलनांतून विज्ञान विषयक नवी माहिती मिळते. मान्यवर वैज्ञानिकांचे विचार समजून घेता येतात. मराठी भाषिकांमध्ये विज्ञान प्रसाराचे काम करणाऱ्या समविचारी मंडळींशी  वैचारिक आदान-प्रदान होते. बौद्धिक, मानसिक, सामूहिक उभारी येते.",
    icon: BookOpen,
    month: "वार्षिक",
  }
];

const schoolActivities = [
  {
    id: 1,
    title: "माझ्या शहरातील विज्ञान",
    description:
      "हे एक आठ-दहा दिवसांचे फिरते शिबिरच असते. रोज साधारणपणे तीन संस्थांना भेटी दिल्या जातात. त्यामध्ये विज्ञानाच्या, तंत्रज्ञानाच्या संस्था तसेच संग्रहालये बघितली जातात. तेथे कार्य करणारे तंत्रज्ञ, संशोधक, वैज्ञानिक, संचालक यांची भेट घेतली जाते. या प्रकल्पातून विद्यार्थ्यांना संशोधनवृत्ती निर्माण होते.",
    icon: MapPin,
  },
  {
    id: 2,
    title: "प्रयोग कृतीसत्र",
    description:
      "घरात सहज उपलब्ध असणाऱ्या वस्तू, साधनसामग्री यांचा वापर करून वैज्ञानिक खेळणी, विज्ञानाचे प्रयोग कसे करता येतील, याचा अनुभव या प्रयोग–कृतीसत्रात दिला जातो.",
    icon: Beaker,
  },
  {
    id: 3,
    title: "शाळा / महाविद्यालयीन विज्ञान मंडळ",
    description:
      "अनेक शिक्षणसंस्थाना विज्ञान मंडळाचे उपक्रम चालविण्यासाठी मार्गदर्शन, व्याख्याते, विषय, माहिती, प्रयोग–प्रकल्प, पूरक उपक्रम करण्यासाठी मराठी विज्ञान परिषद, पुणे विभाग सहकार्य देण्यास सदैव तत्पर आहे.",
    icon: School,
  },
  {
    id: 4,
    title: "पोस्टर प्रदर्शन स्पर्धा",
    description:
      "लोकजागृती करण्याचे पोस्टर प्रदर्शन हे एक प्रभावी माध्यम आहे. ध्वनिप्रदूषण, पर्यावरण, पवनऊर्जा, मिश्र जीवाणू इ. विषयांवर आंतरशालेय पोस्टर प्रदर्शन स्पर्धा घेतल्या जातात. सामाजिक बांधिलकी निर्माण करणारे विषय यात घेतले जातात. सर्व स्पर्धकांना पोस्टर बनविण्याचे तंत्र, प्रदर्शनाचे व्यवस्थापन आणि मांडणी याचे मार्गदर्शन केले जाते. अहवाल लेखन याबाबत माहिती दिली जाते. प्रत्येक स्पर्धक किमान पाच ठिकाणी हे प्रदर्शन लावून लोकप्रबोधन तो विषय पोहोचवायचे काम करतो. अशाप्रकारे ज्ञानाची गंगा शाळेकडून समाजाकडे वाहते.",
    icon: ImageIcon,
  },
];

const otherSchoolActivities = [
  {
    id: 1,
    title: "प्रकल्प प्रकटन शिबीर",
    description:
      "विद्यार्थीसंख्या भरपूर, त्या मानाने शिक्षकसंख्या कमी अशी स्थिती आहे. अनेक विद्यार्थ्यांना विज्ञान विषयाचा तसेच अन्य भाषा, समाजविज्ञान विषयातील प्रकल्प करायचे असतात. विविध प्रदर्शनात, स्पर्धांत भाग घ्यायचा असतो. त्यासाठी नवीन अनोखे प्रकल्प उपक्रम कसे शोधावेत यासाठी शिक्षकांची शिबिरे आयोजित केली जातात.",
    icon: MapPin,
  },
  {
    id: 2,
    title: "वैज्ञानिक उपक्रमांना मार्गदर्शन",
    description:
      "शाळेय शिक्षकांनी उत्स्फूर्तपणे चालविलेल्या विज्ञान मंडळ, विज्ञान गंमत जत्रा, विज्ञान प्रदर्शने, विज्ञान संशोधन, वैज्ञानिक सहली इ. उपक्रमांसाठी आवश्यक तेवढे सहकार्य, मार्गदर्शन आणि सहभागासाठी परिषद तत्पर असते.",
    icon: Beaker,
  },
];

export function Activities() {
  return (
    <section
      id="activities"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            आमचे वार्षिक उपक्रम
          </h2>
          <p className="text-xl text-gray-600">
            विज्ञान प्रबोधनासाठी वर्षभर चालणारे विविध कार्यक्रम
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {activities.map((activity) => {
            const IconComponent = activity.icon;
            return (
              <Card
                key={activity.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {activity.month}
                    </span>
                  </div>
                  <CardTitle className="mt-4">
                    {activity.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {activity.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* School Students Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl">
                    शालेय विद्यार्थ्यांसाठी उपक्रम
                  </CardTitle>
                  <p className="text-gray-600 mt-2">
                    वरील सर्व उपक्रम शालेय विद्यार्थ्यांस खुले
                    असतात. त्या खेरीज पुढील उपक्रम घेतले जातात –
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Accordion
                type="single"
                collapsible
                className="space-y-4"
              >
                {schoolActivities.map((activity, index) => {
                  const IconComponent = activity.icon;
                  return (
                    <AccordionItem
                      key={activity.id}
                      value={`item-${activity.id}`}
                      className="bg-white rounded-lg border border-gray-200"
                    >
                      <AccordionTrigger className="px-6 hover:no-underline">
                        <div className="flex items-center gap-4">
                          <div className="bg-indigo-100 p-2 rounded-lg">
                            <IconComponent className="w-5 h-5 text-indigo-600" />
                          </div>
                          <span className="font-semibold text-left">
                            {index + 1}) {activity.title}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-gray-600 text-base">
                        {activity.description}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Other School Activities Section - For Teachers */}
        <div className="mt-8">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-600 p-3 rounded-lg">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl">
                    शालेय शिक्षकांसाठी उपक्रम
                  </CardTitle>
                  <p className="text-gray-600 mt-2">
                    शिक्षकांना मार्गदर्शन आणि सहकार्य देण्यासाठी विशेष उपक्रम
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Accordion
                type="single"
                collapsible
                className="space-y-4"
              >
                {otherSchoolActivities.map((activity, index) => {
                  const IconComponent = activity.icon;
                  return (
                    <AccordionItem
                      key={activity.id}
                      value={`other-item-${activity.id}`}
                      className="bg-white rounded-lg border border-gray-200"
                    >
                      <AccordionTrigger className="px-6 hover:no-underline">
                        <div className="flex items-center gap-4">
                          <div className="bg-green-100 p-2 rounded-lg">
                            <IconComponent className="w-5 h-5 text-green-600" />
                          </div>
                          <span className="font-semibold text-left">
                            {index + 1}) {activity.title}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-gray-600 text-base">
                        {activity.description}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}