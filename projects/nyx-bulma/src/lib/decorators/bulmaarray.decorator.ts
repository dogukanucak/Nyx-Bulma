import { BehaviorSubject } from 'rxjs';
import { isArray } from 'util';
import { convertToBulma } from 'projects/nyx-bulma/src/lib/decorators/bulma.decorator';

const convertToBulmaFromArray = (
  valueArray: string[],
  modifierType: string,
  postFix?: string
): string => {
  if (valueArray) {
    for (let i = 0, len = valueArray.length; i < len; i++) {
      valueArray[i] = ` ${modifierType}-${valueArray[i]}${
        postFix ? '-' + postFix : ''
      }`;
    }
    return valueArray.join();
  }
  return '';
};

/**
 * Converts given input to Bulma class syntax. Use with Input() decorator.
 * @example
 * ``` Input() BulmaArray() colors: string | string[] ```
 *  When it is used in html as ```color='primary' , color=['primary','secondary']```,
 *  it will be converted to bulma class syntax ```is-primary or is-primary is-secondary```
 *  @remark
 *  If the value is a __boolean__ type, decorator will use property key rather than its value as __default__!\
 *  __BUT__ if you'll pass __useValue__ param as string, it will use that value !
 */

export function BulmaArray(
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
          isArray(value)
            ? convertToBulmaFromArray(value, modifierType, postFix)
            : (typeof value === 'boolean' && value)
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
