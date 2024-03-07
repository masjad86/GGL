import { NgModule } from "@angular/core";
import { ClientModule } from "./client/client.module";
import { AdminModule } from "./admin/admin.module";
import { AppMaterialModule } from "../shared/modules/material.module";

@NgModule({
    declarations: [],
    imports: [
        ClientModule,
        AdminModule,
        AppMaterialModule
    ],
    exports: []
  })
  export class AppModule { }