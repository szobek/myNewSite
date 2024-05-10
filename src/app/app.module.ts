import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { LangDescriptionComponent } from './lang-description/lang-description.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { ProgramListComponent } from './program-list/program-list.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    LangDescriptionComponent,
    AboutComponent,
    MainComponent,
    ContactComponent,
    ProgramListComponent,
    FooterComponentComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
