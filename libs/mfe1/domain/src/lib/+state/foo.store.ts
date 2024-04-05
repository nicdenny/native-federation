import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

interface State {
  flag: boolean;
  counter: number;
}

const initialState: State = {
  flag: true,
  counter: 0,
};

export const FooStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    updateCounter(): void {
      patchState(store, { counter: store.counter() + 1 });
    },
  })),
  withComputed(({ counter }) => ({
    message: computed(() => 'Counter is: ' + counter()),
  }))
);
