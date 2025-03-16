/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  interface TelegramWebApp {
    initData: string;
    initDataUnsafe: any;
    version: string;
    platform: string;
    colorScheme: string;
    themeParams: any;
    isExpanded: boolean;
    isClosingConfirmationEnabled: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    MainButton: {
      text: string;
      color: string;
      textColor: string;
      isVisible: boolean;
      isActive: boolean;
      show(): void;
      hide(): void;
      enable(): void;
      disable(): void;
      setText(text: string): void;
      onClick(callback: () => void): void;
    };
    ready(): void;
    expand(): void;
    close(): void;
  }

  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }
}
