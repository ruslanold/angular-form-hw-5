import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  
  users: User[];
  query = '';
  userId: number;
  result: User[];
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.data.subscribe( ({allUsers}) => this.users = allUsers)
  }
  search(autocomplete): void {
    autocomplete.style.display = 'block'
    if (!this.query) autocomplete.style.display = 'none'

    this.result = this.users.reduce((acc, el, index) => {
      let n = {...el}
      let i = el.name.toLocaleLowerCase().indexOf(this.query.toLocaleLowerCase())
      if (i > -1) {
        n.name = el.name.replace(new RegExp(this.query, 'ig'), `<mark>$&</mark>`)
        n.index = index
        acc.push(n)
      }
      return acc
    }, []);
  }

}
