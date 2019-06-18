import { Pipe, PipeTransform } from '@angular/core';

//pipe name tha will be referenced as in the html files
@Pipe({name: 'round'})

export class Round implements PipeTransform {
    transform(value: number): number {
        return Math.floor(value);
    }
}