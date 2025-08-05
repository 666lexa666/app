import React from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, ArrowLeft } from 'lucide-react';

export const ConsentPage: React.FC = () => {
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
          <FileCheck className="w-6 h-6 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            Согласие на обработку персональных данных
          </h1>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="prose prose-gray max-w-none">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <p className="text-green-800 font-medium">
              Я, заполняя формы на сайте https://it-pila.ru, даю согласие ИП Стратий Дмитрий 
              Максимович, ИНН 615427256704, на обработку моих персональных данных: ФИО, email, 
              описание запроса, IP-адрес.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Цель обработки данных:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Получение услуг по разработке программного обеспечения</li>
                <li>Обратная связь и консультирование</li>
                <li>Выдача квитанций и подтверждений оплаты</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Условия обработки:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Данные не передаются третьим лицам без моего согласия</li>
                <li>Обработка осуществляется в соответствии с ФЗ-152 "О персональных данных"</li>
                <li>Согласие действует до момента его отзыва</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Срок хранения:
              </h3>
              <p className="text-gray-700">
                Данные хранятся до момента отзыва согласия или в течение срока, 
                необходимого для выполнения обязательств по оказанию услуг.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Контактная информация:
              </h3>
              <p className="text-gray-700">
                Для отзыва согласия или получения дополнительной информации: 
                <a href="mailto:dmitriq414stratij@gmail.com" className="text-blue-600 hover:text-blue-800 ml-1">
                  dmitriq414stratij@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">
              Важно:
            </h4>
            <p className="text-yellow-700 text-sm">
              Заполнение форм на сайте означает ваше согласие с условиями обработки 
              персональных данных. Вы можете отозвать согласие в любое время, 
              обратившись по указанному email.
            </p>
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
              to="/privacy"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};