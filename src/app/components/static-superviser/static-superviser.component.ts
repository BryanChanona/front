import { Component } from '@angular/core';
import { DateFilterService } from '../../services/date-filter.service';  // Importar el servicio
import Swal from 'sweetalert2';  // Importar SweetAlert2

@Component({
  selector: 'app-static-superviser',
  templateUrl: './static-superviser.component.html',
  styleUrls: ['./static-superviser.component.css']
})
export class StaticSuperviserComponent {
  selectedDate: string = '';  // Propiedad para almacenar la fecha seleccionada

  constructor(private dateFilterService: DateFilterService) {}

  // Este método se llamará cuando el usuario haga clic en "Aplicar"
  applyDateFilter(): void {
    if (this.selectedDate) {
      this.dateFilterService.setSelectedDate(this.selectedDate);

      Swal.fire({
        title: 'Éxito!',
        text: `Se han filtrado los datos para la fecha: ${this.selectedDate}`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    } else {
      Swal.fire({
        title: 'Advertencia!',
        text: 'No se seleccionó ninguna fecha. Se mostrarán todos los registros.',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
    }
  }
}
