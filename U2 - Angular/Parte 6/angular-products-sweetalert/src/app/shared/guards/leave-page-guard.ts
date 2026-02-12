import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanDeactivateComponent {
  canDeactivate: () => boolean | Promise<boolean> | Observable<boolean>;
}

export const leavePageGuard: CanDeactivateFn<CanDeactivateComponent> = (component) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};
