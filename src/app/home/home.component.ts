import { Component, OnInit } from '@angular/core';
import { DisplayCard } from '../core/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public displayCardList: DisplayCard[] = [
    { title: 'Title', subtitle: 'subtitle', description: 'a display card description.' },
    { title: 'Title', subtitle: 'subtitle', description: 'a display card description.' },
    { title: 'Title', subtitle: 'subtitle', description: 'a display card description.' },
    { title: 'Title', subtitle: 'subtitle', description: 'a display card description.' },
    { title: 'Title', subtitle: 'subtitle', description: 'a display card description.' },
    { title: 'Title', subtitle: 'subtitle', description: 'a display card description.' },
    { title: 'Title', subtitle: 'subtitle', description: 'a display card description.' },
    { title: 'Title', subtitle: 'subtitle', description: 'a display card description.' },
    { title: 'Title', subtitle: 'subtitle', description: 'a display card description.' },
    { title: 'Title', subtitle: 'subtitle', description: 'a display card description.' },
    { title: 'Title', subtitle: 'subtitle', description: 'a display card description.' },
    { title: 'Title', subtitle: 'subtitle', description: 'a display card description.' },
    { title: 'Title', subtitle: 'subtitle', description: 'a display card description.' },
    { title: 'Title', subtitle: 'subtitle', description: 'a display card description.' },
    { title: 'Title', subtitle: 'subtitle', description: 'a display card description.' },
    { title: 'Title', subtitle: 'subtitle', description: 'a display card description.' },
  ];

  ngOnInit(): void {
  }

}
