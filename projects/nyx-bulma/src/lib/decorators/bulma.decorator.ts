import { BehaviorSubject } from "rxjs";

/**
 * Converts given input to Bulma class syntax. Use with Input() decorator.
 * @example 
 * ``` Input() Bulma() color: string ```
 *  When it is used in html as ```color="primary"```, it will be converted to bulma class syntax ```is-primary```
 *  @remark 
 *  If the value is a boolean type, decorator will use property key rather than its value!
 */

export function Bulma(defaultValue: string = "", modifierType: string = "is") {
    return (target: Object, key: string) => {
        const accessor = `${key}$`;
        const secret = `_${key}$`;

        Object.defineProperty(target, accessor, {
            get: function () {
                if (this[secret]) {
                    return this[secret];
                }
                this[secret] = new BehaviorSubject(defaultValue);
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
                this[accessor].next((typeof value === 'boolean' || value === 'true' || value === 'false') ? convertToBulma(key,modifierType) : convertToBulma(value,modifierType));
            },
            enumerable: true,
            configurable: true
        });
    }
}

const convertToBulma = (value: string, modifierType: string): string => {    
    return value ? ` ${modifierType}-${value}` : "";
}