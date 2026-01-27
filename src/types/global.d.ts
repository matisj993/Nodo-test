export {};

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (widgetId?: number) => void;
      render: (
        container: HTMLElement | string,
        parameters: {
          sitekey: string;
          theme?: string;
          size?: string;
          badge?: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
        }
      ) => void;
      reset: (widgetId?: number) => void;
    };
    onloadCallback: () => void;
  }
}
