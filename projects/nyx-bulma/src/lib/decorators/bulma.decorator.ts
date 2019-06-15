var counter = 0;
export function Bulma() { 
    return (target: Object, key: string) => {       
        // property value
        let _val = target[key] || "";

        // property getter method
        const getter = () => {               
            return _val;
        };

        // property setter method
        const setter = newVal => {  
            console.log("Target => ", target);
            console.log("Value: ", target[key]);             
            _val = (typeof newVal === 'boolean' || newVal === 'true' || newVal === 'false' ) ? convertToBulma(key) : convertToBulma(newVal);
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
    console.warn("Converted value: ", value);
    return value ? ` is-${value}` : "";
}