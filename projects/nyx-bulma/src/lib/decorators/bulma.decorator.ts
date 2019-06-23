import { BehaviorSubject } from "rxjs";

/**
 * Converts given input to Bulma class syntax. Use with Input() decorator.
 * @example 
 * ``` Input() Bulma() color: string ```
 *  When it is used in html as ```color="primary"```, it will be converted to bulma class syntax ```is-primary```
 *  @remark 
 *  If the value is a boolean type, decorator will use property key rather than its value!
 */

export function Bulma(modifierType: string = "is", useValue?: string, postFix?: string) {
    return (target: Object, key: string) => {
        const accessor = `${key}$`;
        const secret = `_${key}$`;

        Object.defineProperty(target, accessor, {
            get: function () {
                if (this[secret]) {
                    return this[secret];
                }
                this[secret] = new BehaviorSubject("");
                return this[secret];
            },
            set: function () {
                throw new Error('You cannot set this property in the Component if you use @ObservableProperty');
            }
        });
        Object.defineProperty(target, key, {
            get: function () {
                return this[accessor].getValue();
            },
            set: function (value: any) {
                this[accessor].next(((typeof value === 'boolean' && value) || value === 'true') ? convertToBulma(useValue ? useValue : key, modifierType, postFix) : convertToBulma(value, modifierType, postFix));
            },
            enumerable: true,
            configurable: true
        });
    }
}

const convertToBulma = (value: string, modifierType: string, postFix?: string): string => {
    return (typeof value === 'boolean' && !value) || value != 'false' ? ` ${modifierType}-${value}${postFix ? '-' + postFix : ''}` : '';
}