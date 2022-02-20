import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configUrl: string = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) {
  }

  public getBlink() {
    return this.http.get<ResponseAPI>(this.configUrl + "/music/blink");
  }
  public getImagineDragons() {
    return this.http.get<ResponseAPI>(this.configUrl + "/music/imagine.dragons");
  }
  public getTwentyOnePilots() {
    return this.http.get<ResponseAPI>(this.configUrl + "/music/twenty");
  }
}

export interface ResponseAPI {
  message: string;
}
