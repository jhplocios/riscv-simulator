import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule , routes} from './app.routing.module';
import { AppComponent } from './app.component'; // bootstrap component
import { PreloadAllModules, RouterModule } from '@angular/router';
import { IdeModule } from './feature/ide/ide.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    IdeModule, // feature module
    
    RouterModule.forRoot(routes,
      {
        enableTracing: false,
        preloadingStrategy: PreloadAllModules
      }), BrowserAnimationsModule,
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
