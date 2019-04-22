import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {
  @Input()
  showMe: boolean;

  constructor() { }

  ngOnInit() { }
}
