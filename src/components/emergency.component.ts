import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-emergency',
  standalone: true,
  template: `
    <section class="py-20 bg-zinc-50 border-t border-zinc-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center bg-white border border-zinc-200 p-8 md:p-12 shadow-sm rounded-xl">
          
          <div>
             <span class="text-green-900 font-bold tracking-widest uppercase text-xs mb-4 block">24/7 Response</span>
             <h2 class="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">Emergency Spill Containment</h2>
             <p class="text-lg text-zinc-500 mb-8 leading-relaxed">
               Accidents happen. Ma'bone is ready. Our specialized Hazmat Reaction Unit provides rapid emergency spill containment and roadside assistance.
             </p>

             <ul class="space-y-4 mb-8">
               <li class="flex items-center gap-3 text-zinc-700">
                 <div class="w-2 h-2 rounded-sm bg-green-900"></div>
                 Hazardous chemical spill cleanup
               </li>
               <li class="flex items-center gap-3 text-zinc-700">
                 <div class="w-2 h-2 rounded-sm bg-green-900"></div>
                 Transport incident support
               </li>
               <li class="flex items-center gap-3 text-zinc-700">
                 <div class="w-2 h-2 rounded-sm bg-green-900"></div>
                 Site rehabilitation
               </li>
             </ul>

             <a href="https://wa.me/27681648526" class="inline-flex items-center gap-2 px-8 py-4 bg-green-900 text-white font-semibold hover:bg-green-800 transition-colors rounded-lg shadow-md">
               Report Emergency
             </a>
          </div>

          <div class="overflow-hidden h-96 bg-zinc-200 rounded-lg">
             <img src="https://picsum.photos/600/500?random=4" alt="Hazmat Team" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>

        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmergencyComponent {}