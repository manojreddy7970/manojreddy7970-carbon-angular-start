import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { ButtonModule, InputModule } from "carbon-components-angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// carbon-components-angular default imports
import {
  IconModule,
  IconService,
  UIShellModule
} from "carbon-components-angular";
import Notification20 from "@carbon/icons/es/notification/20";
import UserAvatar20 from "@carbon/icons/es/user--avatar/20";
import AppSwitcher20 from "@carbon/icons/es/app-switcher/20";
import { HeaderComponent } from "./header/header.component";

// import { RepositoriesComponent } from './repositories/repositories.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    InputModule,
    AppRoutingModule,
    UIShellModule,
    IconModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent
    // RepositoriesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll([Notification20, UserAvatar20, AppSwitcher20]);
  }
}
