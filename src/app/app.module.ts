import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// import the GridModule for the Grid component
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GridModule
  ],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
