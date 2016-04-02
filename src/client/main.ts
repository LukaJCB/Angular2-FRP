import {SiteComponent} from './site.component';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS}  from 'angular2/router';
import {enableProdMode} from 'angular2/core';
        
enableProdMode();

bootstrap(SiteComponent, [ROUTER_PROVIDERS]);