export class PropertyType {

  public id: number;

  public name: string;

  constructor(rawData?: Partial<PropertyType>) {
    Object.assign(this, rawData);
  }
}
