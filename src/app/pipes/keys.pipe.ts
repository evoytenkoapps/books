import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "keys" })
export class KeysPipe implements PipeTransform {
  transform(value): any {
    console.log(value);
    const res = [];
    for (let group in value) {
      res.push({ name: group, group: value[group] });
    }
    return res;
  }
}
