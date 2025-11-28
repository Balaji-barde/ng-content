import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from './shared/component/models/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-content';

  postArr: Array<Ipost> = [];
  POST_URL = 'https://jsonplaceholder.typicode.com/posts';
post: any;
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get<Array<Ipost>>(this.POST_URL).subscribe((res) => {
      console.log(res);
      this.postArr=res
    });
  }
  onEdit(id:number){
    console.log(id);
    
  }
}
