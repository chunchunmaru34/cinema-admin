import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../user.service';
import { User } from '../../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  // todo: pick values from api
  ROLES = ['admin', 'user'];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  updateUser(user): void {
    console.log(user);
    this.userService.updateUser(user.id, user)
      .subscribe(() => this.getUsers());
  }

  deleteUser(user): void {
    this.userService.deleteUser(user.id)
      .subscribe(() => this.getUsers());
  }
}
