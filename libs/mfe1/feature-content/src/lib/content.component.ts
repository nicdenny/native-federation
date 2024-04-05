import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FooFacade } from '@native-federation/mfe1/domain';

@Component({
  standalone: true,
  selector: 'mfe1-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  readonly fooFacade: FooFacade = inject(FooFacade);
}
