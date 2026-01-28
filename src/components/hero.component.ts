import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  template: `
    <section class="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
      
      <!-- Mesh Gradients -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-tr from-green-50 to-zinc-50 opacity-60 rounded-[100%] blur-3xl pointer-events-none -z-10"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-md bg-green-50 border border-green-100 text-green-800 text-xs font-bold uppercase tracking-wider animate-fade-in-up">
          <span class="w-2 h-2 rounded-sm bg-green-500 animate-pulse"></span>
          Fully Accredited ISO & DOE Compliant
        </div>

        <!-- Headline -->
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-zinc-900 mb-8 leading-[1.1] md:leading-[1.1]">
          Waste Management.<br class="hidden md:block" />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-900 via-green-700 to-green-900 animate-gradient">Reimagined.</span>
        </h1>
        
        <!-- Subheadline -->
        <p class="text-xl md:text-2xl text-zinc-500 mb-10 leading-relaxed max-w-2xl mx-auto">
          From cradle to grave. We handle industrial, hazardous, and recycling needs with absolute compliance and zero friction.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a routerLink="/services" class="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white rounded-lg font-bold text-lg hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl">
            Explore Services
          </a>
          <a href="https://wa.me/27681648526" target="_blank" class="w-full sm:w-auto px-8 py-4 bg-white border border-zinc-200 text-zinc-900 rounded-lg font-bold text-lg hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm">
            WhatsApp Us
          </a>
        </div>

        <!-- Hero Visual / Dashboard Representation -->
        <div class="relative mx-auto max-w-5xl rounded-xl p-2 bg-gradient-to-b from-zinc-100 to-white border border-zinc-200 shadow-2xl">
           <div class="relative rounded-lg overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-zinc-900">
              <img
                 ngSrc="/images/hero-image.jpg"
                 width="1200"
                 height="600"
                 alt="Waste Management Operations"
                 class="object-cover w-full h-full opacity-80 hover:opacity-90 transition-opacity duration-700 hover:scale-105"
                 priority
               />
               <!-- Overlay UI Elements mimicking a dashboard or process -->
               <div class="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-lg shadow-lg border border-white/20 max-w-xs text-left">
                  <div class="flex items-center gap-3 mb-2">
                    <div class="w-3 h-3 bg-green-500 rounded-sm"></div>
                    <span class="text-xs font-bold text-zinc-500 uppercase">Status</span>
                  </div>
                  <p class="font-bold text-zinc-900 text-lg">Operational & Compliant</p>
                  <p class="text-sm text-zinc-500">Eden District & Surrounds</p>
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