export class Address {
  public street1: string;
  public street2?: string;
  public city: string;
  public zipCode: string;
  public country: string;

  constructor(rawData?: Partial<Address>) {
    Object.assign(this, rawData);
  }
}
