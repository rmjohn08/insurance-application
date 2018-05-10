export interface ControlModel 
{   
    inputType?: string;
    label?: string;
    regex?: string,
    required?: boolean,
    name: string,
    Key?: string,
    text?: string,
    options?: string[],
    placeHolder?: string,
    classStyles?: string,
    showCondition?: string,
    max? : number,
    isEmail? : true,
    maxlength? : string,
    hint? : string,
    validList? : string[]
    
}

export interface ControlModelResponse {
    name: string,
    controls?: ControlModel[],
    layout?: string
}