import { Component, Input, OnInit, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { DateFilterService } from '../../app/services/date-filter.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-grafic-datot',
  templateUrl: './grafic-datot.component.html',
  styleUrls: ['./grafic-datot.component.css']
})
export class GraficDatotComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() selectedDate: string = '';  // Recibimos la fecha seleccionada
  data: any = [];  // Datos que se van a mostrar en el gráfico

  chart: any;  // Instancia de Chart.js

  constructor(private dateFilterService: DateFilterService) {
    Chart.register(...registerables);  // Registramos los elementos de Chart.js
  }

  ngOnInit(): void {
    this.getData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedDate'] && this.selectedDate) {
      this.getData();
    }
  }

  ngAfterViewInit(): void {
    if (this.selectedDate) {
      this.getData();
    }
  }

  // Método para obtener datos del usuario supervisado
  getData(): void {
    if (this.selectedDate) {
      this.dateFilterService.getMonitorDataByDate(this.selectedDate).subscribe(
        (data) => {
          this.data = data;
          this.updateChart();
        },
        (error) => {
          console.error('Error al obtener los datos:', error);
        }
      );
    }
  }

  // Método para actualizar el gráfico
  updateChart(): void {
    if (this.chart) {
      this.chart.destroy();
    }

    const labels = this.data.map((item: any) => item.time);  // Extraemos los tiempos
    const dataSet = this.data.map((item: any) => item.registeredMeasure);  // Extraemos las medidas

    this.chart = new Chart('datos', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Signos Vitales',
          data: dataSet,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: { title: { display: true, text: 'Hora' } },
          y: { title: { display: true, text: 'Medición' } }
        }
      }
    });
  }
}
