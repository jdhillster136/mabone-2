import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="bg-white">
      <!-- Modern Hero Section -->
      <section class="relative pt-12 pb-16 md:pt-24 md:pb-32 overflow-hidden bg-white">
        <!-- Background Elements -->
        <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-green-50/50 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-zinc-50/80 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center max-w-4xl mx-auto mb-16">
            <div class="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-green-50 border border-green-100 text-green-800 text-xs font-bold uppercase tracking-widest animate-fade-in-up">
              Est. 2010 • George, Western Cape
            </div>
            <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
              Waste management with a <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-600">conscience.</span>
            </h1>
            <p class="text-xl md:text-2xl text-zinc-500 leading-relaxed">
               We are environmental architects. Ma'bone helps businesses navigate the complex landscape of compliance, sustainability, and efficiency.
            </p>
          </div>

          <!-- Feature Image -->
          <div class="relative rounded-2xl overflow-hidden bg-white border border-zinc-200 shadow-2xl p-12 md:p-16">
            <img src="/images/screenshot_2026-01-28_122400.png" class="w-full h-auto max-w-4xl mx-auto" alt="Sonke Environmental" />
          </div>
        </div>
      </section>

      <!-- The Story / Context -->
      <section class="py-24 bg-zinc-50 border-y border-zinc-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-12 gap-12 items-start">
                <div class="md:col-span-4 sticky top-32">
                    <h2 class="text-3xl font-bold text-zinc-900 mb-4">The Belrex Connection</h2>
                    <div class="w-16 h-1.5 bg-green-600 mb-6 rounded-full"></div>
                    <p class="text-zinc-500 font-medium text-lg">
                        As a specialized division of the Belrex Group, Ma'bone leverages decades of logistics and industrial expertise.
                    </p>
                </div>
                <div class="md:col-span-8 text-lg text-zinc-600 leading-relaxed space-y-8">
                    <p>
                        Founded on the principles of reliability and strict legal compliance, Ma'bone has grown into a premier Integrated Waste Management service provider in the Eden District. We identified a critical gap in the market for a provider that didn't just "dump and run" but actively partnered with industrial clients to manage their environmental liability.
                    </p>
                    <p>
                        From humble beginnings serving local businesses in George, we now manage complex waste streams for major industrial clients, medical facilities, and retail chains across adjacent towns. Our philosophy is simple: <strong>Waste is a resource, not just a problem.</strong>
                    </p>
                    <p>
                        We operate a fully permitted waste transfer station and fleet, ensuring that your waste is handled legally from the moment it leaves your premises until its final safe disposal or recycling.
                    </p>
                </div>
            </div>
        </div>
      </section>

      <!-- Statistics Row -->
      <section class="py-16 bg-white border-b border-zinc-100">
         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-zinc-100">
                <div class="p-4">
                    <div class="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-2">15+</div>
                    <div class="text-xs font-bold text-zinc-400 uppercase tracking-widest">Years Experience</div>
                </div>
                <div class="p-4">
                    <div class="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-2">100%</div>
                    <div class="text-xs font-bold text-zinc-400 uppercase tracking-widest">NEMA Compliant</div>
                </div>
                <div class="p-4">
                    <div class="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-2">350+</div>
                    <div class="text-xs font-bold text-zinc-400 uppercase tracking-widest">Clients Served</div>
                </div>
                 <div class="p-4">
                    <div class="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-2">ZERO</div>
                    <div class="text-xs font-bold text-zinc-400 uppercase tracking-widest">Compromise on Safety</div>
                </div>
            </div>
         </div>
      </section>

      <!-- Detailed Values / Pillars -->
      <section class="py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl font-bold text-zinc-900">Our Operational Pillars</h2>
                <p class="text-zinc-500 mt-4 text-lg">We build our reputation on four non-negotiable standards.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                <!-- Pillar 1 -->
                <div class="p-10 rounded-3xl border border-zinc-200 bg-white hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300 group">
                    <div class="w-14 h-14 bg-green-50 text-green-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                        <!-- Icon: Shield Check -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-zinc-900 mb-4">Absolute Compliance</h3>
                    <p class="text-zinc-600 leading-relaxed">
                        We don't cut corners. Every load is manifested. Every disposal facility is licensed. We adhere strictly to the National Environmental Management: Waste Act (Act 59 of 2008), ensuring our clients are never exposed to legal liability.
                    </p>
                </div>

                <!-- Pillar 2 -->
                <div class="p-10 rounded-3xl border border-zinc-200 bg-white hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300 group">
                    <div class="w-14 h-14 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                        <!-- Icon: Lightbulb / Innovation -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                          <path d="M9 18h6" />
                          <path d="M10 22h4" />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-zinc-900 mb-4">Environmental Innovation</h3>
                    <p class="text-zinc-600 leading-relaxed">
                       Landfill is the last resort. We actively seek recycling and recovery alternatives for every waste stream. From composting organic waste to recovering solvents, we aim to minimize your environmental footprint.
                    </p>
                </div>

                <!-- Pillar 3 -->
                <div class="p-10 rounded-3xl border border-zinc-200 bg-white hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300 group">
                    <div class="w-14 h-14 bg-purple-50 text-purple-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                        <!-- Icon: Users / Team -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-zinc-900 mb-4">Expert Team</h3>
                    <p class="text-zinc-600 leading-relaxed">
                        Our staff are trained in Hazardous Chemical Substance handling, First Aid, and Fire Fighting. We invest in our people so they can safely manage your risks on-site.
                    </p>
                </div>

                <!-- Pillar 4 -->
                <div class="p-10 rounded-3xl border border-zinc-200 bg-white hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300 group">
                    <div class="w-14 h-14 bg-orange-50 text-orange-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                        <!-- Icon: Zap / Rapid Response -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-zinc-900 mb-4">Rapid Response</h3>
                    <p class="text-zinc-600 leading-relaxed">
                        In industrial environments, downtime is costly and spills are dangerous. Our fleet and Hazmat teams are on standby to ensure seamless operations and emergency support.
                    </p>
                </div>
            </div>
        </div>
      </section>

      <!-- Vision/Mission -->
      <section class="py-24 bg-green-950 text-white relative overflow-hidden">
        <!-- Background decorative circles -->
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-900/50 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-green-900/50 rounded-full blur-3xl"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 class="text-sm font-bold tracking-widest text-green-400 uppercase mb-4">Our Drive</h2>
                    <h3 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">Building a sustainable legacy.</h3>
                    <p class="text-zinc-300 text-lg leading-relaxed mb-8">
                        We envision a future where waste is no longer a burden on our environment but a valuable resource. By bridging the gap between industrial output and sustainable recycling technologies, Ma'bone is leading the charge towards a cleaner Western Cape.
                    </p>
                    <a routerLink="/contact" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-950 font-bold rounded-lg hover:bg-zinc-100 transition-colors shadow-lg">
                        Partner With Us
                    </a>
                </div>
                <div class="grid gap-6">
                    <div class="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                        <h4 class="font-bold text-2xl mb-3 text-white">Our Mission</h4>
                        <p class="text-zinc-300 text-lg">To provide cost-effective, compliant, and environmentally sustainable waste management solutions that protect our communities and preserve natural resources.</p>
                    </div>
                    <div class="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                        <h4 class="font-bold text-2xl mb-3 text-white">Our Vision</h4>
                        <p class="text-zinc-300 text-lg">To be the preferred partner for integrated waste management in the Eden District, recognized for our commitment to zero-landfill initiatives and safety excellence.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
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
export class AboutComponent {}