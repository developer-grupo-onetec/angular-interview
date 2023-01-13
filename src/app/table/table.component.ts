import {Component, OnInit} from '@angular/core';
import {UserService} from "../@core/user.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  public usersList : any[] | undefined;
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(result => {
      // @ts-ignore
      this.usersList = result['results'];
    });
  }

}
