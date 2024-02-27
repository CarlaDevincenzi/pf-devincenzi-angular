import {  inject } from '@angular/core';
import {  Router, CanActivateFn } from '@angular/router';

import { AuthService } from '../../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);
  const authService = inject(AuthService);
  
  if(authService.getUsuarioLogueadoId === null) {
    return router.createUrlTree(['auth', 'login']);
  }
  
    //Obtiene el tipo de usuario
    const tipoUsuario: string | null = authService.getTipoUsuarioLogueado();

    // Obtiene los roles permitidos para la ruta actual
    const rolesPermitidos = route.data && route.data['roles'] ? route.data['roles'] : [];

    if (!(tipoUsuario && rolesPermitidos.includes(tipoUsuario))) {
      alert("No tiene permisos para ingresar a esta ruta");
      return false;
    }       
    return true;
  }
