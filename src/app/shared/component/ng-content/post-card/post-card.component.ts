import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from '../../models/posts';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
post: any;



  constructor() { }

  ngOnInit(): void {
  }

}
