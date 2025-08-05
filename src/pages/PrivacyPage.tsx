import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <Link
          to="/offer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
        >
          <ArrowLeft size={16} className="mr-2" />
          Назад к документам
        </Link>
        <div className="flex items-center space-x-2 mb-4">
          <Shield className="w-6 h-6 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            Политика конфиденциальности
          </h1>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="prose prose-gray max-w-none">
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 font-medium">
                Все данные, передаваемые через сайт it-pila.ru (ФИО, email, описание заказа), 
                обрабатываются ИП Стратий Дмитрий Максимович в соответствии с ФЗ-152 
                «О персональных данных».
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Обработка персональных данных
                  </h3>
                  <p className="text-gray-700">
                    Все данные, передаваемые через сайт it-pila.ru (ФИО, email, описание заказа), 
                    обрабатываются ИП Стратий Дмитрий Максимович в соответствии с ФЗ-152 
                    «О персональных данных».
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Защита данных
                  </h3>
                  <p className="text-gray-700">
                    Данные не передаются третьим лицам без согласия клиента.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Цели обработки
                  </h3>
                  <p className="text-gray-700">
                    Используются только для связи с клиентом, оказания и подтверждения услуги, 
                    отправки квитанции.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Хранение данных
                  </h3>
                  <p className="text-gray-700">
                    Хранение — на защищённых серверах, срок — не более 3 лет.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Контактная информация
                  </h3>
                  <p className="text-gray-700">
                    По вопросам конфиденциальности: 
                    <a href="mailto:dmitriq414stratij@gmail.com" className="text-blue-600 hover:text-blue-800 ml-1">
                      dmitriq414stratij@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/offer"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Публичная оферта
            </Link>
            <Link
              to="/consent"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Согласие на обработку персональных данных
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};