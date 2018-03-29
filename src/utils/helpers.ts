import {theme} from "../styles/theme";

export function isWideScreen(): boolean {
  if (typeof window !== `undefined`) {
    const windowWidth = window.innerWidth;
    const mediaQueryL = theme.mediaQueryTresholds.L;

    return windowWidth >= mediaQueryL;
  }
  return false;
}

export function timeoutThrottlerHandler(timeouts: any, name: string, delay: number, handler: () => void) {
  if (!timeouts[name]) {
    timeouts[name] = setTimeout(() => {
      timeouts[name] = null;
      handler();
    }, delay);
  }
}
