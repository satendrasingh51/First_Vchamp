import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';//1 step api
import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { TeamComponent } from './component/team/team.component';
import { SliderComponent } from './component/slider/slider.component';
import { ServiceComponent } from './component/service/service.component';
import { AboutComponent } from './component/about/about.component';
import { RegComponent } from './component/reg/reg.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { ContactComponent } from './component/contact/contact.component';
import { NewchildComponent } from './component/header/newchild/newchild.component';
import { SchildComponent } from './component/about/schild/schild.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ServiceService } from './service.service';
import { AlltestingComponent } from './component/alltesting/alltesting.component';
import { NewsComponent } from './component/news/news.component';
import { PanformComponent} from './component/panform/panform.component';
import { FormsModule, FormBuilder } from '@angular/forms'; //driven form/ any way form step 1
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { BuilderFormComponent } from './component/builder/builder-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    TeamComponent,
    SliderComponent,
    ServiceComponent,
    AboutComponent,
    RegComponent,
    PagenotfoundComponent,
    ContactComponent,
    NewchildComponent,
    SchildComponent,
    AlltestingComponent,
    NewsComponent,
    PanformComponent,
    ReactiveFormComponent,
    BuilderFormComponent
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule, // step 2 driven form
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,//2 step api
    CarouselModule.forRoot()
  ],
  providers: [ ServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
