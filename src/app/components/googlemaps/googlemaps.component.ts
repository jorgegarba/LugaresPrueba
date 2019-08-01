import { Component, OnInit } from '@angular/core';
import { LugaresService } from 'src/app/services/lugares.service';
import { AgmMarker } from '@agm/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.css']
})
export class GooglemapsComponent implements OnInit {


  title: string = '....';
  lat: number = -16.3434;
  lng: number = -71.3434;
  miPosicion;

  constructor(private _sLugares: LugaresService) {

  }

  ngOnInit() {
    this._sLugares.getPeliculas().subscribe(r => console.log(r));
    this.posicionActual();
  }

  click(){
    console.log("Asdasdasd");
    
  }

  posicionActual(){
    // solicitar permiso de acceso a ubicacion al navegador
    if (navigator.geolocation) {
      // getCurrentPosition(posicion) => funcion que devuelve
      // información de la ubicación del equipo (coordenadas)
      navigator.geolocation.getCurrentPosition(posicion => {
        // forma 1 => xvr
        let { latitude, longitude } = posicion.coords;
        this.miPosicion = {};
        this.miPosicion.lat = latitude;
        this.miPosicion.lng = longitude;
      }, error => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: 'error',
          title: 'No se han concedido permisos para acceder a tu ubicación'
        })
      })
    } else {
      console.log("El navegador no posee geolocalización");
    }
  }


}
