import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-row',
  templateUrl: './grid-row.component.html',
  styleUrls: ['./grid-row.component.css']
})
export class GridRowComponent implements OnInit {
  navRow: any[] = [
    { name: 'appointments', img: '../../assets/image/rowIcon1.png' },
    { name: 'my rx', img: '../../assets/image/rowIcon2.png' },
    { name: 'messages', img: '../../assets/image/rowIcon3.png' },
    { name: 'bills & invoice', img: '../../assets/image/rowIcon4.png' },
    { name: 'my health', img: '../../assets/image/rowIcon5.png' },
    { name: 'my records', img: '../../assets/image/rowIcon6.png' },
    { name: 'my profile', img: '../../assets/image/rowIcon7.png' },
    { name: 'my health cart', img: '../../assets/image/rowIcon8.png' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
