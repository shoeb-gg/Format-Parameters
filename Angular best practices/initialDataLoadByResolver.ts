// ng cli generate resolver 
ng g r nameAndPath

export class resolverClassName implements Resolve<any> {
  constructor() {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return forkJoin({
      variableName1: this.someService
        .someFunctionReturningObservable()
        .pipe(catchError(() => EMPTY)),

      variableName2: this.someService
        .someFunctionReturningObservable()
        .pipe(catchError(() => EMPTY)),
    });
  }
}

//Inside Route module:
[
  {
    path: "",
    component: someComponent,
    resolve: {
      variableName: resolverClassName,
    },
  },
];

// Access the Data in component file
constructor(private activatedRoute: ActivatedRoute) {}

// Either
this.data = this.activatedRoute.snapshot.data.variableName;
//Or
this.activatedRoute.data.subscribe((data: any) => {})
