import { user } from './../environments/environment';
import { BehaviorSubject } from "rxjs";

export class LoginData {

  login:BehaviorSubject<boolean>= new BehaviorSubject(user.login)
}
