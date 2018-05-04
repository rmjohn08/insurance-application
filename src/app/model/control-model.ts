export interface ControlModel 
{   
    inputType?: string;
    label?: string;
    regex?: string,
    required?: boolean,
    name: string,
    Key?: string,
    text?: string,
    placeHolder?: string,
    classStyles?: string
    
}

export interface ControlModelResponse {
    name: string,
    controls?: ControlModel[],
    layout?: string
}