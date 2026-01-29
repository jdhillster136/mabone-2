import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="bg-white">
      <!-- Header -->
      <section class="relative py-24 bg-zinc-50 overflow-hidden border-b border-zinc-200">
        <div class="absolute inset-0">
          <img src="/images/screenshot_2026-01-29_115540.png" alt="" class="w-full h-full object-cover object-[center_65%]" />
          <div class="absolute inset-0 bg-gradient-to-b from-white/40 via-white/35 to-white/50"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 class="text-4xl md:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tight drop-shadow-lg">
            Streamlined. <span class="text-green-700">Transparent.</span>
          </h1>
          <p class="text-xl text-zinc-900 max-w-2xl mx-auto leading-relaxed font-bold drop-shadow-lg">
            We've simplified industrial waste management into a predictable, compliant, and efficient process. Here is how we partner with you.
          </p>
        </div>
      </section>

      <!-- Steps Process -->
      <section class="py-24">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="space-y-12">
            
            @for (step of steps; track step.number; let isLast = $last) {
              <div class="group relative flex gap-6 md:gap-10">
                <!-- Line connector -->
                @if (!isLast) {
                  <div class="absolute left-[27px] md:left-[35px] top-16 bottom-[-48px] w-px bg-zinc-200 group-hover:bg-green-200 transition-colors"></div>
                }
                
                <!-- Number/Icon -->
                <div class="flex-shrink-0">
                  <div class="w-14 h-14 md:w-18 md:h-18 flex items-center justify-center rounded-xl bg-white border border-zinc-200 text-zinc-900 font-bold text-xl md:text-2xl shadow-sm group-hover:border-green-500 group-hover:text-green-700 group-hover:shadow-green-900/10 transition-all duration-300 relative z-10">
                    {{ step.number }}
                  </div>
                </div>

                <!-- Content -->
                <div class="pt-2 pb-8">
                  <h3 class="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-green-900 transition-colors">
                    {{ step.title }}
                  </h3>
                  <p class="text-zinc-600 leading-relaxed text-lg mb-4">
                    {{ step.description }}
                  </p>
                  
                  <div class="bg-zinc-50 rounded-lg p-4 border border-zinc-100 text-sm text-zinc-500 grid sm:grid-cols-2 gap-2">
                    @for (item of step.details; track item) {
                      <div class="flex items-center gap-2">
                        <div class="w-1.5 h-1.5 bg-green-500 rounded-sm"></div>
                        {{ item }}
                      </div>
                    }
                  </div>
                </div>
              </div>
            }

          </div>
        </div>
      </section>

      <!-- FAQ / Common Scenarios -->
      <section class="py-24 bg-zinc-900 text-white">
         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div class="grid md:grid-cols-2 gap-16">
             <div>
               <h2 class="text-3xl font-bold mb-6">Common Questions</h2>
               <p class="text-zinc-400 text-lg mb-8">
                 Waste management regulations can be complex. We simplify the legalities so you can focus on your business.
               </p>
               <a routerLink="/contact" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 font-bold rounded-lg hover:bg-zinc-100 transition-colors">
                 Talk to an Expert
               </a>
             </div>

             <div class="space-y-6">
                <div class="p-6 rounded-xl border border-zinc-700 bg-zinc-800/50">
                  <h4 class="font-bold text-lg mb-2">Do you provide Safe Disposal Certificates?</h4>
                  <p class="text-zinc-400">Yes. For every load of hazardous waste removed, we provide a manifest and a Safe Disposal Certificate compliant with NEM:WA regulations.</p>
                </div>
                <div class="p-6 rounded-xl border border-zinc-700 bg-zinc-800/50">
                  <h4 class="font-bold text-lg mb-2">What areas do you service?</h4>
                  <p class="text-zinc-400">We primarily serve the Eden District (George, Mossel Bay, Knysna) and surrounding areas in the Western Cape.</p>
                </div>
                <div class="p-6 rounded-xl border border-zinc-700 bg-zinc-800/50">
                  <h4 class="font-bold text-lg mb-2">Can you handle medical waste?</h4>
                  <p class="text-zinc-400">Absolutely. We are fully accredited to transport and manage Health Care Risk Waste (HCRW) and other hazardous materials.</p>
                </div>
             </div>
           </div>
         </div>
      </section>

      <!-- CTA -->
      <section class="py-20 bg-green-50 border-t border-green-100">
        <div class="max-w-4xl mx-auto px-4 text-center">
           <h2 class="text-3xl font-bold text-zinc-900 mb-6">Ready to get started?</h2>
           <p class="text-xl text-zinc-600 mb-8">
             Book a free site assessment today. We'll identify savings and compliance gaps in your current process.
           </p>
           <a href="https://wa.me/27681648526" target="_blank" class="px-8 py-4 bg-green-900 text-white font-bold rounded-lg hover:bg-green-800 transition-shadow shadow-lg inline-block">
             Request Site Audit
           </a>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HowItWorksComponent {
  steps = [
    {
      number: '01',
      title: 'Consultation & Audit',
      description: 'We visit your facility to understand your waste streams, volumes, and current pain points. We conduct a basic compliance check during this phase.',
      details: ['Waste Stream Identification', 'Volume Estimation', 'Risk Assessment', 'Cost Analysis']
    },
    {
      number: '02',
      title: 'Proposal & Strategy',
      description: 'Based on the audit, we design a custom waste management plan. This includes bin placement, collection schedules, and recycling targets.',
      details: ['Custom Quote', 'Service Level Agreement', 'Recycling Goals', 'Compliance Roadmap']
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We deploy the necessary equipment (skips, wheelie bins, cages) and, if required, place trained staff on your site to manage sorting.',
      details: ['Equipment Delivery', 'Staff Placement', 'H&S Induction', 'Site Setup']
    },
    {
      number: '04',
      title: 'Operations & Management',
      description: 'We handle the daily grind. Regular collections, on-site separation of recyclables, and safe handling of hazardous materials.',
      details: ['Scheduled Collections', 'On-site Sorting', 'Hazardous Removal', 'Manifest Generation']
    },
    {
      number: '05',
      title: 'Compliance Certificate',
      description: 'Once the project is complete, an official Compliance Certificate is issued to verify that all waste has been safely disposed of according to regulations.',
      details: ['Compliance Certificate', 'Legal Documentation', 'Safe Disposal Proof', 'Audit Verification']
    }
  ];
}