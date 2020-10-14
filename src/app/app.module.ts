import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridRowComponent } from './grid-row/grid-row.component';
import { DrAvailableComponent } from './dr-available/dr-available.component';
import { CardRowComponent } from './card-row/card-row.component';
import { MedicationComponent } from './medication/medication.component';
import { MessagesComponent } from './messages/messages.component';
import { VitalsComponent } from './vitals/vitals.component';
import { ReminderComponent } from './reminder/reminder.component';
import { BillComponent } from './bill/bill.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { HealthRecordsComponent } from './health-records/health-records.component';
import { UploadRecordsComponent } from './upload-records/upload-records.component';
import { FollowUpComponent } from './follow-up/follow-up.component';

@NgModule({
  declarations: [
    AppComponent,
    GridRowComponent,
    DrAvailableComponent,
    CardRowComponent,
    MedicationComponent,
    MessagesComponent,
    VitalsComponent,
    ReminderComponent,
    BillComponent,
    DiagnosisComponent,
    HealthRecordsComponent,
    UploadRecordsComponent,
    FollowUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
