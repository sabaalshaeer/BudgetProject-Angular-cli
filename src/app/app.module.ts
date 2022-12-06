import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BudgetsComponent } from './components/budgets/budgets.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { HttpClientModule } from '@angular/common/http';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { BankAccountComponent } from './components/bank-account/bank-account.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ListTransactionsComponent } from './components/list-transactions/list-transactions.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule, Sort} from '@angular/material/sort';





@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BudgetsComponent,
    TransactionsComponent,
    DashbordComponent,
    BankAccountComponent,
    ListTransactionsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
