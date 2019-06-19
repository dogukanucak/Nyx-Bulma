import { BehaviorSubject } from "rxjs";

export function Bulma(defaultValue: string = "") {
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
                this[accessor].next((typeof value === 'boolean' || value === 'true' || value === 'false') ? convertToBulma(key) : convertToBulma(value));
            },
            enumerable: true,
            configurable: true
        });
    }
}

const convertToBulma = (value: string): string => {    
    return value ? ` is-${value}` : "";
}