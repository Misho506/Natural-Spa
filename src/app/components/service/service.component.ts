import { Component, Input } from '@angular/core';
import { Service } from '../../share/types';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  @Input() service: Service = {
    name: '',
    price: '',
    details: {
      howWorksTitle: "¿Cómo funciona?",
      howWorksDetails: '',
      benefitsTitle: 'Beneficios del...',
      benefitsDetails: '',
      considerationsTitle: "Consideraciones",
      considerationsDetails: '',
    },
    showDetails: false
  };

}
