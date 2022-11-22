import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public route:ActivatedRoute,) { }

  ngOnInit(): void {
    const variable = this.route.snapshot.paramMap.get('id');
    console.log("sidenav "+ variable)
  }

}
