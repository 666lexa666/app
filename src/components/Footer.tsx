import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Code } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code size={24} className="text-blue-400" />
              <span className="text-xl font-bold">IT-Пила</span>
            </div>
            <p className="text-gray-300 mb-4">
              Разработка программного обеспечения, веб-сайтов, баз данных и адаптация ИТ-решений под ваши потребности.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                ИП Стратий Дмитрий Максимович
              </p>
              <p className="text-sm text-gray-400">
                ИНН: 615427256704 | ОГРНИП: 324619600218940
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-gray-300 hover:text-white transition-colors">
                  Оформить заявку
                </Link>
              </li>
              <li>
                <Link to="/payment" className="text-gray-300 hover:text-white transition-colors">
                  Оплата
                </Link>
              </li>
              <li>
                <Link to="/offer" className="text-gray-300 hover:text-white transition-colors">
                  Документы
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} />
                <span className="text-sm">dmitriq414stratij@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone size={16} />
                <span className="text-sm">+7 (900) 123-21-46</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin size={16} />
                <span className="text-sm">г. Таганрог, ул. Сергея Лозо, 5-3</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 IT-Пила. Все права защищены.
            </div>
            <div className="flex space-x-4 text-sm">
              <Link to="/offer" className="text-gray-400 hover:text-white transition-colors">
                Публичная оферта
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/consent" className="text-gray-400 hover:text-white transition-colors">
                Согласие на обработку данных
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};