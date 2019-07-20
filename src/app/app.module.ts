import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { ActionsComponent } from './actions/actions.component';
import { PointComponent } from './point/point.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActionsService } from './services/actions.service';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ActionsComponent,
    PointComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ActionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
