import { Component, Input, OnInit } from '@angular/core';
import { user } from 'src/app/interfaces/user.interface';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() user!: user;
  constructor() {}

  ngOnInit() {}
}
