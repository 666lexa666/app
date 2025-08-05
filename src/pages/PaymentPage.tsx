import React from 'react';
import { QrCode } from 'lucide-react';

export const PaymentPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Оплата услуг
        </h1>
        <p className="text-gray-600">
          Внесите предоплату за услуги разработки программного обеспечения
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="flex items-center space-x-2 mb-6">
            <QrCode className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">
              Оплата через СБП
            </h2>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <p className="text-blue-800 font-medium mb-2">
              Тариф: 1 секунда работы = 10 рублей
            </p>
            <p className="text-blue-700 text-sm">
              Минимальная сумма предоплаты определяется вами исходя из объема задачи
            </p>
          </div>

          <div className="text-center">
            <div className="w-64 h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mx-auto mb-6">
              <div className="text-center">
                <QrCode className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">QR-код для оплаты</p>
                <p className="text-xs text-gray-500 mt-1">
                  Отсканируйте в приложении банка
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Отсканируйте QR-код в мобильном приложении банка для оплаты
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm font-medium">
                  После оплаты квитанция будет автоматически сформирована интернет-кассой
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Реквизиты для оплаты
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium text-gray-700">Получатель:</p>
            <p className="text-gray-600">ИП СТРАТИЙ ДМИТРИЙ МАКСИМОВИЧ</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">ИНН:</p>
            <p className="text-gray-600">615427256704</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Расчетный счет:</p>
            <p className="text-gray-600">40802810652740007637</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Банк:</p>
            <p className="text-gray-600">ЮГО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">БИК:</p>
            <p className="text-gray-600">046015602</p>
          </div>
        </div>
      </div>
    </div>
  );
};