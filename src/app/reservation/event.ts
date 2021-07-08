export class Res {
  title: string
  id: number
  start: Date
  end: Date

  constructor(data?: any) {
    if (data != null) {
      Object.assign(this, data);
    }
  }
}
