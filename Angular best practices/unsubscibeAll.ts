private _unsubscribeAll: Subject<any> = new Subject<any>();


// Use RxJS takeUntil operator
// This operator emits values emitted by the source Observable until a notifier Observable emits a value.

this.someService
    .someServicefunctionReturningObservable('data')
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((state) => {        
    }
);


ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
}
