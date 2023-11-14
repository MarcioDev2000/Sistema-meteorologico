import { Component, Input, OnInit } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WheaterDatas } from 'src/app/models/weather/wheater';

@Component({
  selector: 'app-wheater-card',
  templateUrl: './wheater-card.component.html',
  styleUrls: ['./wheater-card.component.scss']
})
export class WheaterCardComponent {

// Dados da previsão do tempo recebidos pelo componente pai
  @Input() WheaterDatasInput!: WheaterDatas;

  minTemperaturaIcon = faTemperatureLow;
  maxTemperaturaIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;



}
