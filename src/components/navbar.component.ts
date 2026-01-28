import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav 
      class="fixed top-6 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4"
    >
      <!-- Main Navbar Pill -->
      <div 
        class="w-full max-w-5xl backdrop-blur-xl border rounded-full px-6 py-3 flex items-center justify-between shadow-sm transition-all duration-500 relative z-50"
        [class]="scrolled() ? 'bg-green-950/90 border-green-900 shadow-lg text-white' : 'bg-white/60 border-transparent text-zinc-900'"
      >
        <!-- Logo -->
        <a routerLink="/" (click)="closeMenu()" class="flex items-center gap-2 group">
          <img
            src="/images/screenshot_2026-01-28_161342.png"
            alt="Ma'bone Logo"
            class="h-10 w-auto group-hover:scale-105 transition-transform"
          />
        </a>

        <!-- Desktop Links -->
        <div 
          class="hidden md:flex items-center gap-1 p-1 rounded-full border transition-all duration-500"
          [class]="scrolled() ? 'bg-green-900/50 border-green-800' : 'bg-zinc-100/50 border-zinc-200/50'"
        >
          @for (link of links; track link.path) {
            <a 
              [routerLink]="link.path" 
              [routerLinkActive]="scrolled() ? 'bg-white text-green-950 shadow-md' : 'bg-white text-zinc-900 shadow-sm'"
              [routerLinkActiveOptions]="{exact: link.exact}" 
              class="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
              [class]="scrolled() ? 'text-green-100 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'"
            >
              {{ link.label }}
            </a>
          }
        </div>

        <!-- Action & Mobile Toggle -->
        <div class="flex items-center gap-2">
          <!-- WhatsApp Desktop -->
          <a 
            href="https://wa.me/27681648526"
            target="_blank"
            class="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-colors shadow-md"
            [class]="scrolled() ? 'bg-white text-green-950 hover:bg-green-50' : 'bg-green-900 text-white hover:bg-green-800 shadow-green-900/10'"
          >
            <span>WhatsApp</span>
          </a>

          <!-- Mobile Menu Toggle -->
          <button 
            (click)="toggleMobileMenu()"
            class="md:hidden p-2 rounded-full transition-colors focus:outline-none"
            [class]="scrolled() ? 'hover:bg-white/10 text-white' : 'hover:bg-zinc-100 text-zinc-900'"
            aria-label="Toggle menu"
          >
            @if (mobileMenuOpen()) {
               <!-- Close Icon -->
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
               </svg>
            } @else {
               <!-- Hamburger Icon -->
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
               </svg>
            }
          </button>
        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      <div 
        class="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 md:hidden flex flex-col pt-32 px-6 transition-all duration-300 ease-in-out"
        [class]="mobileMenuOpen() ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-none'"
      >
         <div class="flex flex-col gap-2">
            @for (link of links; track link.path) {
              <a 
                [routerLink]="link.path"
                [routerLinkActive]="'text-green-900 bg-green-50 border-green-200'"
                [routerLinkActiveOptions]="{exact: link.exact}"
                (click)="closeMenu()"
                class="text-2xl font-bold py-4 px-4 border-b border-zinc-100 text-zinc-600 hover:text-green-900 hover:pl-6 transition-all rounded-lg"
              >
                {{ link.label }}
              </a>
            }
         </div>
         
         <div class="mt-8 grid grid-cols-2 gap-4">
             <a 
               href="https://wa.me/27681648526"
               class="flex items-center justify-center gap-2 py-4 bg-green-900 text-white font-bold rounded-xl shadow-lg active:scale-95 transition-transform"
             >
                WhatsApp
             </a>
             <a 
               href="tel:0448744774"
               class="flex items-center justify-center gap-2 py-4 bg-white border border-zinc-200 text-zinc-900 font-bold rounded-xl shadow-sm active:scale-95 transition-transform"
             >
                Call Office
             </a>
         </div>
      </div>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onScroll()'
  }
})
export class NavbarComponent {
  scrolled = signal(false);
  mobileMenuOpen = signal(false);

  links = [
    { path: '/', label: 'Home', exact: true },
    { path: '/services', label: 'Services', exact: false },
    { path: '/how-it-works', label: 'How it Works', exact: false },
    { path: '/about', label: 'About', exact: false },
    { path: '/contact', label: 'Contact', exact: false },
  ];

  onScroll() {
    this.scrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.mobileMenuOpen.set(false);
  }
}