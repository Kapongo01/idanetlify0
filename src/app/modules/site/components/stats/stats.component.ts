import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface StatsData {
  title: string;
  subtitle: string;
  stats: {
    hectares: number;
    farmers: number;
    projects: number;
    investment: number;
    communities: number;
    cultures: number;
    jobs: number;
    training: number;
  };
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {

  // Dados de exemplo para o componente
statsData: StatsData = {
  title: 'Transformando a Agricultura Angolana',
  subtitle: 'Dados que refletem nosso compromisso com o desenvolvimento agrícola sustentável',
  stats: {
    hectares: 12500,
    farmers: 8500,
    projects: 156,
    investment: 245,
    communities: 42,
    cultures: 18,
    jobs: 1250,
    training: 15600
  }
};
 
}




