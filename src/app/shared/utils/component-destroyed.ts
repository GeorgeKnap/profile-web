import { Subject } from 'rxjs';

interface OnDestroyLike {
    ngOnDestroy(): void;
}

export function componentDestroyed(component: OnDestroyLike): Subject<any> {
    const oldNgOnDestroy = component.ngOnDestroy;
    const stop$ = new Subject();
    component.ngOnDestroy = () => {
        if (oldNgOnDestroy) {
            oldNgOnDestroy.apply(component);
        }

        stop$.next(undefined);
        stop$.complete();
    };
    return stop$;
}
