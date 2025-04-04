import { Component, OnInit } from "@angular/core";
import { BpmService } from "../../services/bpm.service"; 
import { AddSupervisorService } from "../../services/addsupervisor.service";
import Swal from "sweetalert2";
import { AuthService,User } from '../../services/auth.service'; 
import { UserService } from "../../services/user.service";
import { TableOxigenacionService } from "../../services/table-oxigenacion.service";

@Component({
  selector: "app-body-settings",
  templateUrl: "./body-settings.component.html",
  styleUrls: ["./body-settings.component.css"]
})
export class BodySettingsComponent implements OnInit {
  seccionActiva: string = "perfil";
  maxBPM: number = 120;
  minBPM: number = 60;
  nombre: string = "";
  email: string = "";
  contrasena: string = "";
  contrasenaConfirmar: string = ""; 
  esPremium: boolean = false;

  User: User | null = null;

  constructor(
    private bpmService: BpmService,
    private addSupervisorService: AddSupervisorService,
    private authService: AuthService,
    private tableOxigenacionService: TableOxigenacionService,
  ) {}

  ngOnInit(): void {
    this.authService.getUser().subscribe((user) => {
      this.User = user;
      this.nombre = user?.name || 'Usuario desconocido';
      this.email = user?.email || 'Correo no disponible';
      this.esPremium = user?.premium ?? false;
    });
  }
  

  cambiarSeccion(seccion: string) {
    this.seccionActiva = seccion;
  }

  // Método para guardar BPM
  guardarBPM() {
    this.bpmService.guardarBPM(this.maxBPM, this.minBPM).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'BPM guardado',
          text: 'Los valores de BPM han sido guardados correctamente.',
          confirmButtonText: 'OK'
        });
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al guardar el BPM: ' + (error.message || error.statusText),
          confirmButtonText: 'OK'
        });
      }
    });
  }

  // Método para agregar supervisor
  agregarSupervisor() {
    if (this.contrasena !== this.contrasenaConfirmar) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden.',
        confirmButtonText: 'OK'
      });
      return;
    }

    const token = this.authService.getToken();
    if (!token) {
      Swal.fire({
        icon: 'error',
        title: 'No autenticado',
        text: 'Por favor, inicia sesión para agregar un supervisor.',
        confirmButtonText: 'OK'
      });
      return;
    }

    const userId = this.authService.getUserId(); 
    if (!userId) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se encontró el ID de usuario. Inicia sesión primero.',
        confirmButtonText: 'OK'
      });
      return;
    }

    this.addSupervisorService.agregarSupervisor(this.nombre, this.email, this.contrasena).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'Supervisor agregado correctamente.',
          confirmButtonText: 'OK'
        });
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `Hubo un problema al agregar al supervisor: ${error.message}`,
          confirmButtonText: 'OK'
        });
      }
    });
  }

  // Confirmar salida
  confirmarSalida() {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Quieres salir de la aplicación?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, salir",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/"; 
      }
    });
  }

  // Modal de pago de suscripción
  modal() {
    Swal.fire({
      title: "¿Seguro que quieres pagar la suscripción Premium?",
      text: "Al hacer clic en 'Sí', serás redirigido al enlace de pago.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, pagar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.updateUserPremiumStatus(true);
        this.esPremium = true;
        window.location.href = "https://buy.stripe.com/test_14k8wxafb6ep6NG7st"; 
      }
    });
  }
  
}
