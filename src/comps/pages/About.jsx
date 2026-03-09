import { Users, Target, Award, Heart } from 'lucide-react';

export default function About({ onNavigate }) {
  const values = [
    { icon: Users, title: 'Customer First', description: 'We prioritize your satisfaction above all else' },
    { icon: Target, title: 'Quality Food', description: 'Only the best ingredients and restaurants' },
    { icon: Award, title: 'Fast Delivery', description: 'Hot food delivered to your door quickly' },
    { icon: Heart, title: 'Community', description: 'Supporting local restaurants and communities' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6 md:py-10 px-4 md:px-8 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About FoodApp</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting you with the best restaurants in the UK, delivering happiness one meal at a time.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Founded in 2024, FoodApp started with a simple mission: to make delicious food accessible to everyone, everywhere. We believe that great food brings people together and creates memorable experiences.
            </p>
            <p>
              Today, we partner with hundreds of restaurants across the UK, from local favorites to popular chains, ensuring you have access to the widest variety of cuisines at your fingertips.
            </p>
            <p>
              Our platform is built on trust, quality, and convenience. We work tirelessly to ensure every order meets our high standards and arrives fresh and on time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-primary text-white rounded-xl shadow-md p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-lg mb-6">
            Whether you're a restaurant owner or a food lover, we'd love to have you as part of our community.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => onNavigate?.('restaurants')}
              className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Partner With Us
            </button>
            <button 
              onClick={() => onNavigate?.('contact')}
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
