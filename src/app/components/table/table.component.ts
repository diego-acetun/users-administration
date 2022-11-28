import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/interfaces/user.interface';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() users!: user[];
  constructor(private router: Router) {}

  redirect(id: string) {
    this.router.navigate([`users/${id}`]);
  }
}
