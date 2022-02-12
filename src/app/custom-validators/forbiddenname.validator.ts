import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(forbiddenName:RegExp):ValidatorFn{
    return (control:AbstractControl)=>{
            const forbidden = forbiddenName.test(control.value);
            return forbidden ? {'forbiddenName':true} : null
    }
}