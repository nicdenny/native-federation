import { Injectable, Signal, inject } from '@angular/core';
import { FooStore } from '../+state/foo.store';

@Injectable({ providedIn: 'root' })
export class FooFacade {
  private readonly fooStore: InstanceType<typeof FooStore> = inject(FooStore);

  readonly messsage: Signal<string> = this.fooStore.message;

  updateCounter(): void {
    this.fooStore.updateCounter();
  }
}
