import { Input } from "@angular/core";

export abstract class BaseElement {   
    protected elementType: string; 
    @Input() bulmaClass: string;   
    @Input() disabled: boolean;
    getClass(): string {
        return `${this.elementType} ${this.bulmaClass}}`
    }
}