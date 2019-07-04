import { BehaviorSubject } from 'rxjs';

export const convertToBulma = (
  value: any,
  modifierType: string,
  postFix?: string
): string => {
  return ` ${modifierType}${value ? '-' + value : ''}${postFix ? '-' + postFix : ''}`;
};

/**
 * Converts given input to Bulma class syntax. Use with Input() decorator.
 * @example
 * ``` Input() Bulma() color: string ```
 *  When it is used in html as ```color='primary'```, it will be converted to bulma class syntax ```is-primary```
 *  @remark
 *  If the value is a __boolean__ type, decorator will use property key rather than its value as __default__!\
 *  __BUT__ if you'll pass __useValue__ param as string, it will use that value !
 *
 */

export function Bulma(
  modifierType: string = 'is',
  useValue?: string,
  postFix?: string
) {
  return (target: Object, key: string) => {
    const accessor = `${key}$`;
    const secret = `_${key}$`;

    Object.defineProperty(target, accessor, {
      get: function() {
        if (this[secret]) {
          return this[secret];
        }
        this[secret] = new BehaviorSubject('');
        return this[secret];
      },
      set: function() {
        throw new Error(
          'You cannot set this property in the Component if you use @ObservableProperty'
        );
      }
    });
    Object.defineProperty(target, key, {
      get: function() {
        return this[accessor].getValue();
      },
      set: function(value: any) {
        this[accessor].next(
          (typeof value === 'boolean' && value)
            ? convertToBulma(typeof useValue === 'string' ? useValue : key, modifierType, postFix)
            : (typeof value !== 'boolean')
              ? convertToBulma(value, modifierType, postFix)
              : ''
        );
      },
      enumerable: true,
      configurable: true
    });
  };
}

