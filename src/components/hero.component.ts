import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="relative pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-white">

      <!-- Mesh Gradients -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-tr from-green-50 to-zinc-50 opacity-60 rounded-[100%] blur-3xl pointer-events-none -z-10"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1.5 mb-6 sm:mb-8 rounded-md bg-green-50 border border-green-100 text-green-800 text-xs font-bold uppercase tracking-wider animate-fade-in-up">
          <span class="w-2 h-2 rounded-sm bg-green-500 animate-pulse"></span>
          Fully Accredited ISO & DOE Compliant
        </div>

        <!-- Headline -->
        <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-zinc-900 mb-6 sm:mb-8 leading-[1.15] md:leading-[1.1]">
          Waste Management.<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-900 via-green-700 to-green-900 animate-gradient">Reimagined.</span>
        </h1>
        
        <!-- Subheadline -->
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-500 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
          From cradle to grave. We handle industrial, hazardous, and recycling needs with absolute compliance and zero friction.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-20 px-4">
          <a routerLink="/services" class="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-zinc-900 text-white rounded-lg font-bold text-base sm:text-lg hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl">
            Explore Services
          </a>
          <a href="https://wa.me/27681648526" target="_blank" class="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white border border-zinc-200 text-zinc-900 rounded-lg font-bold text-base sm:text-lg hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm">
            WhatsApp Us
          </a>
        </div>

        <!-- Hero Visual / Dashboard Representation -->
        <div class="relative mx-auto max-w-5xl rounded-lg sm:rounded-xl p-1.5 sm:p-2 bg-gradient-to-b from-zinc-100 to-white border border-zinc-200 shadow-2xl">
           <div class="relative rounded-md sm:rounded-lg overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-white">
              <img
                 src="/images/sonke-logo.png"
                 alt="Sonke Environmental Logo"
                 class="object-contain w-full h-full transition-opacity duration-700"
               />
               <!-- Overlay UI Elements mimicking a dashboard or process -->
               <div class="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 bg-white/95 backdrop-blur-md p-3 sm:p-4 md:p-6 rounded-lg shadow-lg border border-white/20 max-w-[200px] sm:max-w-xs text-left">
                  <div class="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                    <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-sm"></div>
                    <span class="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase">Status</span>
                  </div>
                  <p class="font-bold text-zinc-900 text-sm sm:text-base md:text-lg">Operational & Compliant</p>
                  <p class="text-xs sm:text-sm text-zinc-500">Eden District & Surrounds</p>
               </div>
           </div>
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out forwards;
    }
  `]
})
export class HeroComponent {}