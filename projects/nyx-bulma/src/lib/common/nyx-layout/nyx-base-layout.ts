import { Input } from "@angular/core";

export class BaseLayout {
    protected baseClass: string;

    // Inputs
    @Input("nyx-class") externalClass = "";

    getClass(): string {
        this.externalClass = this.externalClass ? ' ' + this.externalClass : '';
        return `${this.baseClass}${this.externalClass}`;
    }


}