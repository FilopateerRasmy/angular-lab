import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  source="../../assets/image-1.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
