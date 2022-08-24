/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { from, Observable, of } from 'rxjs';
import { filter, mapTo, switchMap } from 'rxjs/operators';

export function isNonNullable<T>() {
  return (source$: Observable<null | undefined | T>) =>
    source$.pipe(
      filter((v): v is NonNullable<T> => v !== null && v !== undefined)
    );
}

export function switchTap<T>(
  func: (value: T) => Observable<any> | Promise<any>
) {
  return (source$: Observable<T>) =>
    source$.pipe(switchMap((value) => from(func(value)).pipe(mapTo(value))));
}

export function switchTapTo<T>(observable$: Observable<any>) {
  return (source$: Observable<T>) =>
    source$.pipe(switchMap((value) => observable$.pipe(mapTo(value))));
}

export const VOID$ = of(void 0);
