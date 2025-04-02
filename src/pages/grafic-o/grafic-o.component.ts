import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-grafic-o',
  templateUrl: './grafic-o.component.html',
  styleUrl: './grafic-o.component.css'
})
export class GraficOComponent {
  private chart: Chart | undefined; // Usamos "private" y la inicializamos con undefined
  
    ngAfterViewInit(): void {
      const canvas = document.getElementById('chartss') as HTMLCanvasElement;
  
      if (canvas) {
        this.chart = new Chart(canvas, {
          type: 'line',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              label: 'My First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          }
        });
      } else {
        console.error('No se encontró el canvas con id "chart"');
      }
    }
  
    ngOnDestroy(): void {
      if (this.chart) {
        this.chart.destroy(); // Destruimos la gráfica para evitar errores de memoria
      }
    }
}
