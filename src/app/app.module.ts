import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { TrimWhiteSpaceDirective } from './trim-white-space.directive';
import { TooltipDirective } from './tooltip.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HighlightDirective, TrimWhiteSpaceDirective, TooltipDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
