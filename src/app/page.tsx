'use client';

import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (tg) {
      tg.ready(); // сообщаем Telegram, что WebApp готов
      tg.expand(); // расширяем WebApp на весь экран
      tg.MainButton.setText('Перейти к оплате');
      tg.MainButton.show();
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">Добро пожаловать в магазин</h1>
      <p>Здесь скоро будут товары...</p>
    </main>
  );
}
