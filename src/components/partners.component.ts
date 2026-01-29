import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  template: `
    <section class="border-b border-zinc-100 bg-white py-16 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-center text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-12">Accredited & Trusted By</p>
        
        <div class="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
          <div class="text-xl font-extrabold text-zinc-300 hover:text-green-900 transition-colors cursor-default select-none">
            Garden Route
          </div>
          <div class="text-xl font-extrabold text-zinc-300 hover:text-green-900 transition-colors cursor-default select-none">
            DOE Compliant
          </div>
          <div class="text-xl font-extrabold text-zinc-300 hover:text-green-900 transition-colors cursor-default select-none">
            Institute of Solid Waste
          </div>
          <div class="text-xl font-extrabold text-zinc-300 hover:text-green-900 transition-colors cursor-default select-none">
            SAIOSH Accredited
          </div>
          <div class="text-xl font-extrabold text-zinc-300 hover:text-green-900 transition-colors cursor-default select-none">
            IPW Accredited
          </div>
          <div class="text-xl font-extrabold text-zinc-300 hover:text-green-900 transition-colors cursor-default select-none">
            INTRA Accredited
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartnersComponent {}