
export class QuoteModel {
    constructor(options?: {zipcode: string; premium: number; planName: string; planDescription: string;}) {
        if (options) {
            this.zipcode = options.zipcode;
            this.premium = options.premium;
            this.planName = options.planName;
            this.planDescription = options.planDescription;
        }

    }
    zipcode: string;
    premium: number;
    planName: string;
    planDescription: string;
    planCode?: string;
    benefits?: string
}