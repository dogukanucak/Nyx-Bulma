import { Input } from "@angular/core";

/**
 * All element type components are inherited from BaseElement
 *  
 */

export abstract class BaseElement {   
    protected elementType: string; 
   
    /** Bulma Class allows to use any bulma modifier at once
     *  Other style inputs will be ineffective if ```bulmaClass``` is given
    */
    @Input() bulmaClass: string;   
    @Input() disabled: boolean;
    /** 
    * Use only ```getClass()``` method to class attribute .
    * It concanacates ```elementType``` with ```bulmaClass```.
    * Override that method in the extended component.
    * Always call ```super.getClass()``` if bulmaClass is given
    * @example
    *  ```
    * getClass(): string {
    *    if(this.bulmaClass) {
    *      return super.getClass();
    *    } else {
    *      return `${this.titleType}${this.size}${this.spaced}`;      
    *    }
    *  }
    *  ``` 
    * 
    */
    getClass(): string {
        return `${this.elementType} ${this.bulmaClass}}`
    }
}