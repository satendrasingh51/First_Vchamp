import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/about/about.component';
import { ServiceComponent } from './component/service/service.component';
import { SliderComponent } from './component/slider/slider.component';
import { TeamComponent } from './component/team/team.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContactComponent } from './component/contact/contact.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { RegComponent } from './component/reg/reg.component';
import { NewsComponent } from './component/news/news.component';
import { AlltestingComponent } from './component/alltesting/alltesting.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { BuilderFormComponent } from './component/builder/builder-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/header', pathMatch: 'full' },
  { path: 'reg', component: RegComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'about', component: AboutComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'slider', component: SliderComponent},
  { path: 'team', component: TeamComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'news', component: NewsComponent},
  { path: 'alltesting', component: AlltestingComponent },
  { path: 'reactive', component: ReactiveFormComponent},
  { path: 'builder', component: BuilderFormComponent},
  { path: '**', component: PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing = [HeaderComponent, AboutComponent, NewsComponent, ReactiveFormComponent, BuilderFormComponent, AlltestingComponent, ServiceComponent, SliderComponent, TeamComponent, FooterComponent, PagenotfoundComponent, NewsComponent]

