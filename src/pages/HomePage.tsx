import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Globe, Smartphone, CheckCircle, Clock, DollarSign } from 'lucide-react';

export const HomePage: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Системное ПО',
      description: 'Разработка системного программного обеспечения под ваши задачи'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Веб-сайты',
      description: 'Создание современных веб-сайтов и веб-приложений'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Базы данных',
      description: 'Проектирование и разработка баз данных любой сложности'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Мобильные приложения',
      description: 'Разработка мобильных приложений для Android и iOS'
    }
  ];

  const advantages = [
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: 'Профессиональная разработка'
    },
    {
      icon: <Clock className="w-5 h-5 text-blue-500" />,
      text: 'Гибкие сроки выполнения'
    },
    {
      icon: <DollarSign className="w-5 h-5 text-yellow-500" />,
      text: 'Прозрачное ценообразование'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Разработка программного
              <span className="block text-blue-600">обеспечения</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              ИП Стратий Дмитрий Максимович предоставляет услуги по разработке системного ПО, 
              веб-сайтов, баз данных и мобильных приложений для физических лиц – резидентов РФ.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                to="/order"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2 shadow-lg"
              >
                <span>Оформить заявку</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/payment"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-blue-600 flex items-center space-x-2"
              >
                <span>Оплатить через СБП</span>
              </Link>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 inline-block shadow-lg">
              <div className="text-2xl font-bold text-gray-900 mb-2">
                1 секунда работы = 10 рублей
              </div>
              <div className="text-sm text-gray-600">
                Минимальная сумма предоплаты определяется клиентом
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Услуги
            </h2>
            <p className="text-xl text-gray-600">
              Полный цикл разработки программного обеспечения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Преимущества работы с нами
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-6 bg-gray-50 rounded-lg"
              >
                {advantage.icon}
                <span className="text-gray-800 font-medium">
                  {advantage.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Готовы начать проект?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Свяжитесь с нами для обсуждения вашего проекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/order"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Оформить заявку</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/payment"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-blue-400"
            >
              Внести предоплату
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};