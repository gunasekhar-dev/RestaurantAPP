import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private route:ActivatedRoute,private orderService:OrderDetailsService) { }

  getId:any;
  menuData:any;

  ngOnInit(): void {
    this.getId= this.route.snapshot.paramMap.get('id');
    console.log(this.getId,'getMenu');
    if(this.getId)
    {
    this.menuData= this.orderService.foodItems.filter((value)=>
    {
      return value.id==this.getId;

    });
    }
    console.log(this.menuData);
  }

}
