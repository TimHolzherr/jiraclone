export class Ticket {
  constructor(
    public name: string,
    public description: string,
    public owner: string,
    public isCompleted: boolean
  ) {}

  public id: number = 0;
}
