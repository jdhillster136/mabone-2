import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar.component';
import { FooterComponent } from './components/footer.component';
import { FloatingWhatsappComponent } from './components/floating-whatsapp.component';
import { FloatingFacebookComponent } from './components/floating-facebook.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    RouterOutlet,
    FloatingWhatsappComponent,
    FloatingFacebookComponent
  ],
  template: `
    <div class="min-h-screen flex flex-col bg-white">
      <app-navbar />
      <!-- Increased padding-top (pt-28) to offset the larger fixed navbar -->
      <main class="flex-grow pt-28">
        <router-outlet />
      </main>
      <app-footer />
      <app-floating-facebook />
      <app-floating-whatsapp />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}