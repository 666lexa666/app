import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';

export const OfferPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
        >
          <ArrowLeft size={16} className="mr-2" />
          Назад на главную
        </Link>
        <div className="flex items-center space-x-2 mb-4">
          <FileText className="w-6 h-6 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            Публичная оферта
          </h1>
        </div>
        <p className="text-gray-600">
          на оказание услуг по разработке программного обеспечения
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 mb-6">
            Индивидуальный предприниматель Стратий Дмитрий Максимович, ИНН 615427256704, 
            ОГРНИП 324619600218940, действующий на основании государственной регистрации 
            и патентной системы налогообложения, публикует настоящую оферту для физических 
            лиц-резидентов РФ.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            1. Предмет договора
          </h2>
          <p className="text-gray-700 mb-4">
            Исполнитель оказывает услуги по:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>разработке системного и прикладного программного обеспечения;</li>
            <li>созданию, адаптации и модификации веб-сайтов, баз данных и других 
                компонентов ИТ-инфраструктуры.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            2. Порядок заключения договора
          </h2>
          <p className="text-gray-700 mb-6">
            Оферта считается акцептованной в момент оплаты услуги через QR-код или 
            другими доступными способами на сайте.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            3. Стоимость услуг
          </h2>
          <p className="text-gray-700 mb-4">
            Услуги тарифицируются по времени:
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-blue-800 font-semibold text-lg">
              1 секунда работы = 10 рублей
            </p>
          </div>
          <p className="text-gray-700 mb-6">
            Минимальная сумма предоплаты определяется клиентом исходя из объема задачи.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            4. Оплата и возврат
          </h2>
          <p className="text-gray-700 mb-6">
            Оплата осуществляется по QR-коду на сайте. Возврат возможен при невозможности 
            оказания услуги.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            5. Ответственность сторон
          </h2>
          <p className="text-gray-700 mb-6">
            Исполнитель обязуется выполнить работу в разумные сроки. Заказчик обязуется 
            предоставить всю необходимую информацию.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            6. Реквизиты исполнителя
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-700 mb-2">Исполнитель:</p>
                <p className="text-gray-600">ИП СТРАТИЙ ДМИТРИЙ МАКСИМОВИЧ</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">ИНН:</p>
                <p className="text-gray-600">615427256704</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">ОГРНИП:</p>
                <p className="text-gray-600">324619600218940</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">Email:</p>
                <p className="text-gray-600">dmitriq414stratij@gmail.com</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">Телефон:</p>
                <p className="text-gray-600">+7 (900) 123-21-46</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">Адрес:</p>
                <p className="text-gray-600">г. Таганрог, ул. Сергея Лозо, 5-3, кв. 78</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">Банк:</p>
                <p className="text-gray-600">ЮГО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">Р/с:</p>
                <p className="text-gray-600">40802810652740007637</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">БИК:</p>
                <p className="text-gray-600">046015602</p>
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-sm mt-6">
            Дата публикации оферты: 14.07.2025
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/privacy"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Политика конфиденциальности
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