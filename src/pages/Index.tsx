import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">МебельПро</h1>
            <div className="hidden md:flex gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'catalog', label: 'Каталог' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'promo', label: 'Акции' },
                { id: 'contacts', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button size="sm" className="hidden md:block">
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Корпусная мебель на заказ
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Создаём уникальную мебель по вашим размерам с гарантией качества и сроков
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg px-8">
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Портфолио
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/9561043e-b942-4c38-82ca-c6b4c8cc3103/files/def6639f-5ca1-4500-b060-50bbd48d5026.jpg"
                alt="Кухонная мебель"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'Ruler', title: '15 лет', desc: 'на рынке' },
              { icon: 'CheckCircle', title: '2000+', desc: 'проектов' },
              { icon: 'Clock', title: '14 дней', desc: 'средний срок' },
              { icon: 'Award', title: '5 лет', desc: 'гарантия' }
            ].map((item, index) => (
              <Card key={index} className="text-center border-none shadow-none bg-transparent">
                <CardContent className="pt-6">
                  <Icon name={item.icon} size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-3xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Каталог продукции</h2>
          <p className="text-center text-muted-foreground mb-12">
            Изготавливаем любую корпусную мебель под ваши требования
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Кухни',
                desc: 'Современные кухни любой сложности с продуманной эргономикой',
                image: 'https://cdn.poehali.dev/projects/9561043e-b942-4c38-82ca-c6b4c8cc3103/files/def6639f-5ca1-4500-b060-50bbd48d5026.jpg',
                price: 'от 45 000 ₽/м.п.'
              },
              {
                title: 'Шкафы-купе',
                desc: 'Вместительные гардеробные с удобными системами хранения',
                image: 'https://cdn.poehali.dev/projects/9561043e-b942-4c38-82ca-c6b4c8cc3103/files/6678c8f2-4603-41f8-b074-0acb6d493913.jpg',
                price: 'от 25 000 ₽'
              },
              {
                title: 'Гостиные',
                desc: 'Стильные стенки и системы хранения для вашей гостиной',
                image: 'https://cdn.poehali.dev/projects/9561043e-b942-4c38-82ca-c6b4c8cc3103/files/16217dcf-732a-4143-957d-a3ec45809ec6.jpg',
                price: 'от 35 000 ₽'
              }
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.desc}</p>
                  <p className="text-xl font-semibold text-primary mb-4">{item.price}</p>
                  <Button variant="outline" className="w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-muted/30 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши работы</h2>
          <p className="text-center text-muted-foreground mb-12">
            Каждый проект — уникален и создан с любовью к деталям
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                image: 'https://cdn.poehali.dev/projects/9561043e-b942-4c38-82ca-c6b4c8cc3103/files/def6639f-5ca1-4500-b060-50bbd48d5026.jpg',
                title: 'Кухня в современном стиле',
                location: 'ЖК Новый Горизонт'
              },
              {
                image: 'https://cdn.poehali.dev/projects/9561043e-b942-4c38-82ca-c6b4c8cc3103/files/6678c8f2-4603-41f8-b074-0acb6d493913.jpg',
                title: 'Гардеробная комната',
                location: 'Коттедж, Подмосковье'
              },
              {
                image: 'https://cdn.poehali.dev/projects/9561043e-b942-4c38-82ca-c6b4c8cc3103/files/16217dcf-732a-4143-957d-a3ec45809ec6.jpg',
                title: 'Стенка в гостиную',
                location: 'ЖК Премиум Класс'
              }
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Icon name="ZoomIn" size={48} className="text-white" />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="promo" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Актуальные акции</h2>
          <p className="text-center text-muted-foreground mb-12">
            Специальные предложения для наших клиентов
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary to-secondary text-white">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">-20%</h3>
                    <p className="text-lg opacity-90">на кухни под ключ</p>
                  </div>
                  <Icon name="Percent" size={40} className="opacity-80" />
                </div>
                <p className="opacity-90 mb-6">
                  При заказе кухни до конца месяца — скидка 20% на материалы и монтаж
                </p>
                <Button variant="secondary" className="w-full">
                  Воспользоваться
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary to-accent text-white">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Подарок</h3>
                    <p className="text-lg opacity-90">при заказе от 100 000 ₽</p>
                  </div>
                  <Icon name="Gift" size={40} className="opacity-80" />
                </div>
                <p className="opacity-90 mb-6">
                  Получите бесплатный 3D-дизайн проект и выезд замерщика
                </p>
                <Button variant="secondary" className="w-full">
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-muted-foreground mb-8">
                Оставьте заявку, и мы перезвоним в течение 15 минут
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@mebelpro.ru</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Производственная, д. 12</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 19:00</p>
                    <p className="text-muted-foreground">Сб-Вс: 10:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Форма обратной связи</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input placeholder="Иван Петров" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea placeholder="Расскажите о вашем проекте..." rows={4} />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">МебельПро</h3>
              <p className="opacity-80">
                Производство корпусной мебели на заказ с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 opacity-80">
                <li>Кухни</li>
                <li>Шкафы-купе</li>
                <li>Гостиные</li>
                <li>Прихожие</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 opacity-80">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@mebelpro.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center opacity-60">
            <p>© 2024 МебельПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
