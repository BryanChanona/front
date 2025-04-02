import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  vitals = {
    temperatura: 36.5,
    pulso: 75,
    oxigenacion: 98,
  };

  chartOptions = {
    series: [
      {
        name: "Pulsaciones",
        data: [72, 74, 76, 78, 79, 80, 82],
      },
    ],
    chart: {
      type: "line",
      height: 350,
    },
    xaxis: {
      categories: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
    },
    title: {
      text: "Frecuencia Cardíaca",
    },
  };
}
