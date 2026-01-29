import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="relative min-h-screen pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-cover bg-center bg-fixed bg-no-repeat" style="background-image: url('/images/pexels-tomfisk-5099276.jpg');">

      <!-- Dark Overlay for readability -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col justify-center min-h-screen py-12">

        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1.5 mb-6 sm:mb-8 rounded-md bg-green-500/20 border border-green-400/30 text-green-100 text-xs font-bold uppercase tracking-wider animate-fade-in-up backdrop-blur-sm">
          <span class="w-2 h-2 rounded-sm bg-green-400 animate-pulse"></span>
          Fully Accredited ISO & DOE Compliant
        </div>

        <!-- Headline -->
        <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 sm:mb-8 leading-[1.15] md:leading-[1.1]">
          Waste Management.<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-400 animate-gradient">Reimagined.</span>
        </h1>

        <!-- Subheadline -->
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
          From cradle to grave. We handle industrial, hazardous, and recycling needs with absolute compliance and zero friction.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
          <a routerLink="/services" class="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-zinc-900 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
            Explore Services
          </a>
          <a href="https://wa.me/27681648526" target="_blank" class="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-zinc-900 transition-all shadow-sm">
            WhatsApp Us
          </a>
        </div>

        <!-- Status Badge -->
        <div class="mt-16 inline-flex items-center justify-center mx-auto">
          <div class="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-lg border border-white/20 max-w-xs text-center">
            <div class="flex items-center justify-center gap-2 mb-2">
              <div class="w-3 h-3 bg-green-400 rounded-sm animate-pulse"></div>
              <span class="text-xs font-bold text-white uppercase tracking-wider">Status</span>
            </div>
            <p class="font-bold text-white text-base sm:text-lg mb-1">Operational & Compliant</p>
            <p class="text-sm text-gray-300">Garden Route & Surrounds</p>
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