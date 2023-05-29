import { Component, OnInit } from '@angular/core';
import { MenuList } from '../core/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  public queryCondition: string = '';
  public menuList: MenuList[] = [
    { title: '主页', router: 'home', icon: 'home' },
    { title: '收藏', router: 'collection', icon: 'star' },
    { title: '私信', router: 'letter', icon: 'mail' },
    { title: '我的', router: 'user', icon: 'person' },
    { title: '数值计算器', router: 'calculator', icon: 'calculate'}
  ];
  public currentRouter: string = this.router.url.slice(6);
  

  ngOnInit(): void { }

  switch(router: string) {
    this.currentRouter = router;
    this.router.navigate([`/main/${router}`]);
  };

}
