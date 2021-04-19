import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StarterHomeComponent } from "./starter-home/starter-home.component";
import {
  BreadcrumbModule,
  ButtonModule,
  GridModule,
  ListModule,
  TabsModule,
  TilesModule
} from "carbon-components-angular";
import { StarterHomeRoutingModule } from "./starter-home-routing.module";

@NgModule({
  imports: [
    CommonModule,
    StarterHomeRoutingModule,
    BreadcrumbModule,
    ButtonModule,
    GridModule,
    ListModule,
    TabsModule,
    TilesModule
  ],
  declarations: [StarterHomeComponent]
})
export class StarterHomeModule {}
