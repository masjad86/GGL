import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatBadgeModule,
		MatDialogModule,
		MatIconModule,
		MatTooltipModule,
		MatTabsModule,
		MatButtonModule,
		MatInputModule,
		MatSelectModule,
		MatSlideToggleModule,
		MatSliderModule,
		MatProgressBarModule,
		MatRadioModule,
		MatMenuModule
	],
	exports: [
		MatBadgeModule,
		MatDialogModule,
		MatIconModule,
		MatTooltipModule,
		MatTabsModule,
		MatButtonModule,
		MatInputModule,
		MatSelectModule,
		MatSlideToggleModule,
		MatSliderModule,
		MatProgressBarModule,
		MatRadioModule,
		MatMenuModule
	]
})
export class AppMaterialModule {
}