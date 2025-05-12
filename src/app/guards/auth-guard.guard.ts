import { CanActivateFn ,Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { inject, Inject } from '@angular/core';
import { session } from '../utils/session';
export const authGuardGuard: CanActivateFn = (
  route:ActivatedRouteSnapshot, 
  state:RouterStateSnapshot
) => {
  const router:Router = inject(Router);
  const protectedRoutes: string[] = ['/notes']
  return protectedRoutes.includes(state.url) && !session
  ?router.navigate(['/about'])
  : true;
};
