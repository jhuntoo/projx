"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme_1 = require("../styles/theme");
function isWideScreen() {
    if (typeof window !== `undefined`) {
        const windowWidth = window.innerWidth;
        const mediaQueryL = theme_1.theme.mediaQueryTresholds.L;
        return windowWidth >= mediaQueryL;
    }
    return false;
}
exports.isWideScreen = isWideScreen;
function timeoutThrottlerHandler(timeouts, name, delay, handler) {
    if (!timeouts[name]) {
        timeouts[name] = setTimeout(() => {
            timeouts[name] = null;
            handler();
        }, delay);
    }
}
exports.timeoutThrottlerHandler = timeoutThrottlerHandler;
//# sourceMappingURL=helpers.js.map