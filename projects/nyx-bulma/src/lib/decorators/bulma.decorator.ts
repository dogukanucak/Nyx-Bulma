export function Bulma() {
    return (target: Object, key: string) => {
        // property value
        let _val = target[key];

        // property getter method
        const getter = () => {            
            return _val;
        };

        // property setter method
        const setter = newVal => {                      
            _val = (typeof newVal == 'boolean') ? convertToBulma(key) : convertToBulma(newVal);
        };

        // Delete property.
        if (delete target[key]) {
            // Create new property with getter and setter
            Object.defineProperty(target, key, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true
            });
        }
    }
}

const convertToBulma = (value: string): string => {
    return value ? ` is-${value}` : "";
}