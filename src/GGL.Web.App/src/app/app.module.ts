import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { AdminModule } from './admin';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInterceptor } from './app.interceptor';
import { ClientModule } from './client';
import { AppMaterialModule, AppBootstrapModule } from './external';
import { GlobalFilterService, GlobalHeaderService, NotificationService } from './shared';
import { CanActivateGuard } from './shared/guards';
import { SharedModule } from './shared/shared.module';
import { MatIconRegistry } from '@angular/material/icon';
import { SVG_ICONS } from './app.svg';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		FormsModule,
		HttpClientModule,
		ToastrModule.forRoot(),
		SharedModule,
		AppBootstrapModule,
		AppMaterialModule,
		AdminModule,
		ClientModule,
		RouterModule.forRoot([]),
		AppRoutingModule
	],
	providers: [{ provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
		NotificationService,
		GlobalHeaderService,
		GlobalFilterService,

		CanActivateGuard
	],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
	constructor(private matIconRegistry: MatIconRegistry,
		private sanitizer: DomSanitizer) {
		this.registerSvgIcons();
	}

	private registerSvgIcons() {
		SVG_ICONS.forEach(svg => {
			this.matIconRegistry.addSvgIcon(svg.name,
				this.sanitizer.bypassSecurityTrustResourceUrl(svg.url));
		});
	}
}

