/////////////////////////////////////////////////
/*! hasTouchscreen 0.1.0
    Detect if current device has touchscreen
    https://github.com/faisalman/has-touchscreen
    Author: Faisal Salman <f@faisalman.com>
    MIT License */
/////////////////////////////////////////////////

export function hasTouchscreen(): boolean {
    return typeof window !== 'undefined' &&            
            (
                window?.matchMedia('(any-pointer: coarse)').matches ||            
                'ontouchstart' in window ||
                window.navigator?.maxTouchPoints > 0 ||
                //@ts-ignore
                window.navigator?.msMaxTouchPoints > 0
            );
};