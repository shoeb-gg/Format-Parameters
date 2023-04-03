constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _router: Router,
    private _appService: AppService
) {
    _router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
            this._appService.setLoadingState(true);
            this._changeDetectorRef.markForCheck();
        } else if (event instanceof NavigationEnd) {
            this._appService.setLoadingState(false);
            this._changeDetectorRef.markForCheck();
        }
    });
}

changeRoute(): void {
    this._router.navigate(['./'], { relativeTo: this._route });
}
