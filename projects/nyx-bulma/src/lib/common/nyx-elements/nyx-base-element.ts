import { Input } from "@angular/core";

export abstract class BaseElement {   
    protected elementType: string; 
    @Input() bulmaClass: string;   
    getClass(): string {
        return `${this.elementType} ${this.bulmaClass}}`
    }
}