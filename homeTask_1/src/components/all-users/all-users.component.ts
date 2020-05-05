import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../app/services/users.service";

@Component({
    selector: ' app-all-users',
    templateUrl: './all-users.component.html',
    styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent implements OnInit {

    users;


    constructor(private userService: UsersService) {
        this.userService.getAllUsers().subscribe(value => this.users = value);
    }

    ngOnInit() {
    }

}
