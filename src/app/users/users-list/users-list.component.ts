import {Component, OnInit} from '@angular/core';
import {User} from "../shared/user.model";
import {UserService} from "../shared/user.service";

@Component({
    selector: 'users-list',
    templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {

    public users: Array<User>;

    constructor (private userService: UserService) {}

    ngOnInit(): void {
        this.users = this.userService.listUsers();
    }

    addUser(user: User): void {
        this.users.push(user);
    }

    removeUser(index: number): void {
        if (typeof this.users[index] === 'undefined') {
            return;
        }

        this.users.splice(index, 1);
    }

    updateUser(index: number, user: User) {
        this.users[index] = user;
    }
}
