import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ServiceComponent } from "../../components/service/service.component";
import { Service } from '../../share/types';
import servicesData from '../../share/services-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatGridListModule, CommonModule, MatIconModule, ServiceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('openClose', [
      state('open', style({ height: '100px' })),
      state('close', style({ height: '0px' })),
      transition('open<=>closed', [animate('0.5s')])
    ])
  ]
})
export class HomeComponent {
  services: Array<Service> = servicesData;
  showDetails(index: number) {
    this.services[index].showDetails = !this.services[index].showDetails
  }
}
