import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItensComponent } from './itens/itens.component';
import { DetalheItemComponent } from './detalhe-item/detalhe-item.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MensagensComponent } from './mensagens/mensagens.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuscaItemComponent } from './busca-item/busca-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItensComponent,
    DetalheItemComponent,
    MensagensComponent,
    DashboardComponent,
    BuscaItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
