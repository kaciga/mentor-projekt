export class Event {
  start: Date
  end:Date
  title: string
  id: number

  constructor(param){
    if(param) Object.assign(this,param)
  }
}
