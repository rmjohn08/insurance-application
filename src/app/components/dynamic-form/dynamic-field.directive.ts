/**
 * this is the directive that takes the input parameters 
 * that configure the form element component. 
 * 
 */
import { Directive, Input, OnInit, ComponentFactoryResolver, ViewContainerRef } from "@angular/core";
import { FormButtonComponent } from "../dynamic-form/controls/form-button/form-button.component";
import { FormInputComponent } from "../dynamic-form/controls/form-input/form-input.component";
import { FormSelectComponent } from "../dynamic-form/controls/form-select/form-select.component";
import { FormGroup } from "@angular/forms";
import { ControlModel } from "../../model/control-model";
import { FormAlertComponent } from "./controls/form-alert/form-alert.component";

// map representing different form elements, more to come.....
const components = {
    button : FormButtonComponent,
    text : FormInputComponent,
    select : FormSelectComponent,
    alertbox : FormAlertComponent
}

@Directive({
    selector: '[dynamicField]',
})
export class DynamicFieldDirective implements OnInit {
    @Input("controlConfig") controlConfig: ControlModel;
    @Input("formGroup") formGroup: FormGroup;
    @Input("formPage") formPage;

    component;

    constructor(private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef) {
        
    }

    // builds the component dynamically. 
    ngOnInit(): void {
        const component = components[this.controlConfig.inputType];
        if (!component) {
            console.log('Undefined component ' + this.controlConfig.inputType);
            return;
        }
        console.log('control config:'+JSON.stringify(this.controlConfig))
        const factory = this.resolver.resolveComponentFactory<any>(component);
        this.component = this.container.createComponent(factory);
        this.component.instance.controlConfig = this.controlConfig;
        this.component.instance.formGroup = this.formGroup; 
        this.component.instance.formPage = this.formPage;        
    }

}