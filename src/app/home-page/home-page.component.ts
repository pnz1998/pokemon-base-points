import { Component, OnInit } from '@angular/core';
import { DisplayCard } from '../core/types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  public queryCondition: string = '';
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
