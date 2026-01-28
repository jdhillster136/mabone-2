import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './src/app.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, Routes, withInMemoryScrolling } from '@angular/router';
import { HomeComponent } from './src/components/home.component';
import { ServicesBentoComponent } from './src/components/services-bento.component';
import { EmergencyComponent } from './src/components/emergency.component';
import { AiAdvisorComponent } from './src/components/ai-advisor.component';
import { AboutComponent } from './src/components/about.component';
import { ContactComponent } from './src/components/contact.component';
import { HowItWorksComponent } from './src/components/how-it-works.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesBentoComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'emergency', component: EmergencyComponent },
  { path: 'advisor', component: AiAdvisorComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(
      routes, 
      withHashLocation(),
      withInMemoryScrolling({ scrollPositionRestoration: 'top' })
    )
  ]
}).catch(err => console.error(err));

// AI Studio always uses an `index.tsx` file for all project types.
