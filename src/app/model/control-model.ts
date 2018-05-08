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
    classStyles?: string,
    showCondition?: string,
    max? : number,
    isEmail? : true,
    
}

export interface ControlModelResponse {
    name: string,
    controls?: ControlModel[],
    layout?: string
}