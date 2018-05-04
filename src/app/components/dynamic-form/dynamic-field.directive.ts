import { Directive, Input, OnInit, ComponentFactoryResolver, ViewContainerRef } from "@angular/core";
import { FormButtonComponent } from "../dynamic-form/controls/form-button/form-button.component";
import { FormInputComponent } from "../dynamic-form/controls/form-input/form-input.component";
import { FormSelectComponent } from "../dynamic-form/controls/form-select/form-select.component";
import { FormGroup } from "@angular/forms";

const components = {
    button : FormButtonComponent,
    inputType : FormInputComponent,
    select : FormSelectComponent
}

@Directive({
    selector: '[dynamicField]',
})
export class DynamicFieldDirective implements OnInit {
    @Input("controlConfig") controlConfig;
    @Input("formGroup") formGroup: FormGroup;

    component;

    constructor(private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef) {
        
    }

    ngOnInit(): void {
        const component = components[this.controlConfig.type];
        const factory = this.resolver.resolveComponentFactory<any>(component);
        this.component = this.container.createComponent(factory);
        this.component.instance.controlConfig = this.controlConfig;
        this.component.instance.formGroup = this.formGroup; 
    }

}