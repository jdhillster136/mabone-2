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
      <div 
        class="w-full max-w-5xl backdrop-blur-xl border rounded-full px-6 py-3 flex items-center justify-between shadow-sm transition-all duration-500"
        [class]="scrolled() ? 'bg-green-950/90 border-green-900 shadow-lg text-white' : 'bg-white/60 border-transparent text-zinc-900'"
      >
        <!-- Logo -->
        <a routerLink="/" class="flex items-center gap-2 group">
          <div 
            class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform"
            [class]="scrolled() ? 'bg-white text-green-950' : 'bg-green-900 text-white'"
          >
            M
          </div>
          <span 
            class="text-xl font-bold tracking-tight transition-colors"
            [class]="scrolled() ? 'text-white' : 'text-zinc-900'"
          >Ma'bone</span>
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

        <!-- Action -->
        <a 
          href="https://wa.me/27681648526"
          target="_blank"
          class="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-colors shadow-md"
          [class]="scrolled() ? 'bg-white text-green-950 hover:bg-green-50' : 'bg-green-900 text-white hover:bg-green-800 shadow-green-900/10'"
        >
          <span>WhatsApp</span>
        </a>
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
}