import {APP_ID, Inject, NgModule, PLATFORM_ID} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app.routing';
import {isPlatformBrowser} from "@angular/common";

@NgModule({
    imports: [
        BrowserModule.withServerTransition({appId: 'happeero'}),
        BrowserAnimationsModule,
        CoreModule,
        AppRoutingModule
    ],
	declarations: [
		AppComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
    constructor(@Inject(PLATFORM_ID) private platformId: Object, @Inject(APP_ID) private appId: string) {
        const platform = isPlatformBrowser(this.platformId) ? 'on the server' : 'in the browser';
        console.log(`Running ${platform} with appId=${this.appId}`);
    }
}
