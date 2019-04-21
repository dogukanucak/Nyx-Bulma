import { Input } from "@angular/core";

export class BaseElement {
    protected baseClass: string;
    
    // Inputs
    @Input("nyx-class") externalClass: string;

    getClass(): string {
        return `${this.baseClass} ${this.externalClass}`;
    }


}