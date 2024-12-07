/*! hasTouchscreen 0.1.0
    Detect if current device has touchscreen
    https://github.com/faisalman/has-touchscreen
    Author: Faisal Salman <f@faisalman.com>
    MIT License */
export function hasTouchscreen() {
    var _a, _b;
    return typeof window !== 'undefined' &&
        ((window === null || window === void 0 ? void 0 : window.matchMedia('(any-pointer: coarse)').matches) ||
            'ontouchstart' in window ||
            ((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.maxTouchPoints) > 0 ||
            ((_b = window.navigator) === null || _b === void 0 ? void 0 : _b.msMaxTouchPoints) > 0);
}
;
