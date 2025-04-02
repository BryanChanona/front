import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto'; // Asegúrate de que está importado correctamente

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  public chart: Chart | undefined; // Inicializamos con undefined

  ngOnInit(): void {

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    // Asegúrate de que el ID del canvas sea correcto
    const canvas = document.getElementById('chart') as HTMLCanvasElement;

    // Verifica que el canvas esté presente antes de crear la gráfica
    if (canvas) {
      this.chart = new Chart(canvas, { // Usamos el canvas directamente
        type: 'line',  // Tipo de gráfica
        data: data     // Datos para la gráfica
      });
    }
  }
}
