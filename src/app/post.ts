export class Post {
  userId:number
  body: string
  id?: number
  title?: string



  constructor(param){
    if(param != null) {
      Object.assign(this, param)
    }
  }
}
