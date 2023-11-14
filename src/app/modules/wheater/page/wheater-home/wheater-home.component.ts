import { Component, OnDestroy, OnInit } from '@angular/core';
import { WheaterService } from '../../service/wheater.service';
import { WheaterDatas } from 'src/app/models/weather/wheater';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wheater-home',
  templateUrl: './wheater-home.component.html',
  styleUrls: ['./wheater-home.component.scss']
})
export class WheaterHomeComponent implements OnInit, OnDestroy{

  initialCityName = 'Luanda';
  wheaterDatas!:WheaterDatas;
  private readonly destroy$: Subject<void> = new Subject();

  searchIcon = faMagnifyingGlass;

  constructor(private wheatherService: WheaterService){}



  ngOnDestroy(): void {
   this.destroy$.next();
   this.destroy$.complete();
  }



  ngOnInit(): void {

    this.getWheaterDatas(this.initialCityName);

  }

  getWheaterDatas(cityName: string): void{
    this.wheatherService.getWheaterData(cityName)
     .pipe(takeUntil(this.destroy$))
    .subscribe({
      next:(response) =>{
        response && (this.wheaterDatas = response);
        console.log(this.wheaterDatas);
      },
      error: (error)=> console.log(error),
    });
  }


   onSubmit(): void{
       this.getWheaterDatas(this.initialCityName);
       this.initialCityName = '';
   }

}
