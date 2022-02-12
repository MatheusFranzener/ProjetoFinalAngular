import { Injectable } from "@angular/core";
import { element } from "@angular/core/src/render3/instructions";
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router";

import { routerNgProbeToken } from "@angular/router/src/router_module";
import { Observable } from "rxjs";

@Injectable()

class CheckLogged implements CanActivate {
    constructor(private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        //* teste do checkLogged 

        return true
    }
}

export default CheckLogged;