import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-bento',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="bg-white">
      
      <!-- Header -->
      <section class="relative py-24 bg-zinc-900 overflow-hidden">
         <div class="absolute inset-0 opacity-20">
            <div class="absolute inset-0 bg-[linear-gradient(45deg,#052e16_1px,transparent_1px),linear-gradient(-45deg,#052e16_1px,transparent_1px)] bg-[size:20px_20px]"></div>
         </div>
         <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Our Services</h1>
            <p class="text-xl text-zinc-400 max-w-2xl mx-auto">
              From general recycling to high-risk hazardous disposal, Ma'bone provides end-to-end waste management solutions tailored to your industry.
            </p>
         </div>
      </section>

      <!-- Main Services Grid -->
      <section class="py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <!-- Service 1: Integrated Management (Large Card) -->
            <div class="col-span-1 md:col-span-2 lg:col-span-2 p-10 bg-zinc-50 rounded-xl border border-zinc-100 flex flex-col md:flex-row gap-10 items-start hover:border-green-200 hover:shadow-lg transition-all duration-300">
              <div class="w-20 h-20 bg-green-900 text-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-xl shadow-green-900/20">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-zinc-900 mb-4">Integrated Waste Management (IWM)</h3>
                <p class="text-zinc-600 mb-8 leading-relaxed text-lg">
                  Our flagship service offers a complete "cradle to grave" solution. We take over your site's entire waste function, implementing sorting systems, managing staff, and ensuring 100% legislative compliance.
                </p>
                <ul class="grid sm:grid-cols-2 gap-4 text-sm font-medium text-zinc-700">
                  <li class="flex items-center gap-3"><div class="w-2 h-2 bg-green-500 rounded-sm"></div> On-site waste sorting & separation</li>
                  <li class="flex items-center gap-3"><div class="w-2 h-2 bg-green-500 rounded-sm"></div> Specialized Staffing & Supervision</li>
                  <li class="flex items-center gap-3"><div class="w-2 h-2 bg-green-500 rounded-sm"></div> Reduction of landfill volumes</li>
                  <li class="flex items-center gap-3"><div class="w-2 h-2 bg-green-500 rounded-sm"></div> Detailed Environmental Reporting</li>
                </ul>
              </div>
            </div>

            <!-- Service 2: Hazardous Waste -->
            <div class="p-8 bg-white rounded-xl border border-zinc-200 hover:border-green-200 hover:shadow-xl transition-all duration-300 group">
               <div class="w-14 h-14 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-8 group-hover:scale-105 transition-transform">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
               </div>
               <h3 class="text-xl font-bold text-zinc-900 mb-3">Hazardous Chemicals</h3>
               <p class="text-zinc-500 mb-6 text-sm leading-relaxed">Safe collection and disposal of dangerous industrial chemicals.</p>
               <ul class="space-y-3 text-sm text-zinc-600 font-medium">
                 <li>• Chemical Sludge & Solvents</li>
                 <li>• Contaminated Rags/Drums</li>
                 <li>• Fluorescent Tubes & E-Waste</li>
                 <li>• Safe Disposal Certificates</li>
               </ul>
            </div>

            <!-- Service 3: Industrial Cleaning -->
            <div class="p-8 bg-white rounded-xl border border-zinc-200 hover:border-green-200 hover:shadow-xl transition-all duration-300 group">
               <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-8 group-hover:scale-105 transition-transform">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <h3 class="text-xl font-bold text-zinc-900 mb-3">Industrial Cleaning</h3>
               <p class="text-zinc-500 mb-6 text-sm leading-relaxed">Deep cleaning solutions for industrial and commercial facilities.</p>
               <ul class="space-y-3 text-sm text-zinc-600 font-medium">
                 <li>• High Pressure Cleaning</li>
                 <li>• Fat Trap & Separator Cleaning</li>
                 <li>• Factory Deep Cleans</li>
                 <li>• Tank Cleaning & Decontamination</li>
               </ul>
            </div>

            <!-- Service 4: Medical & Clinical -->
            <div class="p-8 bg-white rounded-xl border border-zinc-200 hover:border-green-200 hover:shadow-xl transition-all duration-300 group">
               <div class="w-14 h-14 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-8 group-hover:scale-105 transition-transform">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
               </div>
               <h3 class="text-xl font-bold text-zinc-900 mb-3">Medical & Clinical</h3>
               <p class="text-zinc-500 mb-6 text-sm leading-relaxed">Specialized handling of Health Care Risk Waste (HCRW).</p>
               <ul class="space-y-3 text-sm text-zinc-600 font-medium">
                 <li>• Infectious Waste & Sharps</li>
                 <li>• Pharmaceutical Waste</li>
                 <li>• Anatomical Waste</li>
                 <li>• Expired Medicines</li>
               </ul>
            </div>

             <!-- Service 5: Recycling -->
             <div class="p-8 bg-white rounded-xl border border-zinc-200 hover:border-green-200 hover:shadow-xl transition-all duration-300 group">
               <div class="w-14 h-14 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-8 group-hover:scale-105 transition-transform">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
               </div>
               <h3 class="text-xl font-bold text-zinc-900 mb-3">Recycling & Recovery</h3>
               <p class="text-zinc-500 mb-6 text-sm leading-relaxed">Maximizing resource recovery to support Zero-to-Landfill initiatives.</p>
               <ul class="space-y-3 text-sm text-zinc-600 font-medium">
                 <li>• Cardboard, Paper, Plastic</li>
                 <li>• Scrap Metal Recovery</li>
                 <li>• Electronic Waste (e-Waste)</li>
                 <li>• Rebate Management</li>
               </ul>
            </div>

            <!-- Service 6: Compliance -->
            <div class="p-8 bg-white rounded-xl border border-zinc-200 hover:border-green-200 hover:shadow-xl transition-all duration-300 group">
               <div class="w-14 h-14 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-8 group-hover:scale-105 transition-transform">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
               </div>
               <h3 class="text-xl font-bold text-zinc-900 mb-3">Compliance & Consulting</h3>
               <p class="text-zinc-500 mb-6 text-sm leading-relaxed">Ensuring your business meets National Environmental Management standards.</p>
               <ul class="space-y-3 text-sm text-zinc-600 font-medium">
                 <li>• Waste Management Plans (WMP)</li>
                 <li>• HIRA & AIA Assessments</li>
                 <li>• External Compliance Auditing</li>
                 <li>• Waste Impact Reports</li>
               </ul>
            </div>

            <!-- Service 7: Liquid Waste -->
            <div class="p-8 bg-white rounded-xl border border-zinc-200 hover:border-green-200 hover:shadow-xl transition-all duration-300 group">
               <div class="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-lg flex items-center justify-center mb-8 group-hover:scale-105 transition-transform">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
               </div>
               <h3 class="text-xl font-bold text-zinc-900 mb-3">Liquid Sanitation</h3>
               <p class="text-zinc-500 mb-6 text-sm leading-relaxed">Professional removal and disposal of liquid waste streams.</p>
               <ul class="space-y-3 text-sm text-zinc-600 font-medium">
                 <li>• Septic Tank Pumping</li>
                 <li>• Grease Trap Maintenance</li>
                 <li>• Effluent Disposal</li>
                 <li>• Sludge Removal</li>
               </ul>
            </div>

            <!-- Service 8: Spill Response (New) -->
            <div class="p-8 bg-white rounded-xl border border-zinc-200 hover:border-green-200 hover:shadow-xl transition-all duration-300 group">
               <div class="w-14 h-14 bg-rose-50 text-rose-600 rounded-lg flex items-center justify-center mb-8 group-hover:scale-105 transition-transform">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <h3 class="text-xl font-bold text-zinc-900 mb-3">Emergency Spill Response</h3>
               <p class="text-zinc-500 mb-6 text-sm leading-relaxed">24/7 Hazmat Reaction Unit for immediate containment and remediation.</p>
               <ul class="space-y-3 text-sm text-zinc-600 font-medium">
                 <li>• Roadside Accident Cleanup</li>
                 <li>• Industrial Spills</li>
                 <li>• Site Rehabilitation</li>
                 <li>• 24-Hour Emergency Line</li>
               </ul>
            </div>

             <!-- Service 9: Asbestos (New) -->
            <div class="p-8 bg-white rounded-xl border border-zinc-200 hover:border-green-200 hover:shadow-xl transition-all duration-300 group">
               <div class="w-14 h-14 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center mb-8 group-hover:scale-105 transition-transform">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
               </div>
               <h3 class="text-xl font-bold text-zinc-900 mb-3">Asbestos Management</h3>
               <p class="text-zinc-500 mb-6 text-sm leading-relaxed">Legally compliant removal and disposal of asbestos-containing materials.</p>
               <ul class="space-y-3 text-sm text-zinc-600 font-medium">
                 <li>• Safe Removal & Bagging</li>
                 <li>• Type 2 & 3 Disposal</li>
                 <li>• Transport Manifesting</li>
                 <li>• Site Clearance</li>
               </ul>
            </div>

            <!-- Service 10: Training & Supplies -->
             <div class="p-8 bg-white rounded-xl border border-zinc-200 hover:border-green-200 hover:shadow-xl transition-all duration-300 group">
               <div class="w-14 h-14 bg-zinc-100 text-zinc-600 rounded-lg flex items-center justify-center mb-8 group-hover:scale-105 transition-transform">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
               </div>
               <h3 class="text-xl font-bold text-zinc-900 mb-3">Training & Supplies</h3>
               <p class="text-zinc-500 mb-6 text-sm leading-relaxed">Equipping your team with the knowledge and gear they need.</p>
               <ul class="space-y-3 text-sm text-zinc-600 font-medium">
                 <li>• Accredited H&S Training</li>
                 <li>• Hazmat Spill Response Training</li>
                 <li>• Supply of PPE & Spill Kits</li>
                 <li>• Absorbent Materials</li>
               </ul>
            </div>

            <!-- Service 11: Confidential Destruction (New) -->
            <div class="p-8 bg-white rounded-xl border border-zinc-200 hover:border-green-200 hover:shadow-xl transition-all duration-300 group">
               <div class="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-8 group-hover:scale-105 transition-transform">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
               </div>
               <h3 class="text-xl font-bold text-zinc-900 mb-3">Secure Destruction</h3>
               <p class="text-zinc-500 mb-6 text-sm leading-relaxed">Confidential destruction of documents and off-spec products.</p>
               <ul class="space-y-3 text-sm text-zinc-600 font-medium">
                 <li>• Document Shredding</li>
                 <li>• Product Destruction</li>
                 <li>• Brand Protection</li>
                 <li>• Witnessed Disposal</li>
               </ul>
            </div>

          </div>

          <!-- Call to Action -->
          <div class="mt-20 p-8 md:p-16 bg-green-950 rounded-xl text-center relative overflow-hidden">
             <!-- Background Pattern -->
             <div class="absolute inset-0 opacity-10">
                <div class="absolute -right-20 -top-20 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
                <div class="absolute -left-20 -bottom-20 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
             </div>

             <div class="relative z-10">
               <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Need a Custom Solution?</h2>
               <p class="text-green-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                 Every business is unique. We provide tailored waste audits to identify cost-saving opportunities and compliance gaps.
               </p>
               <div class="flex flex-col sm:flex-row gap-4 justify-center">
                 <a href="https://wa.me/27681648526" target="_blank" class="px-8 py-4 bg-white text-green-950 font-bold rounded-lg hover:bg-green-50 transition-colors shadow-lg">
                   Chat on WhatsApp
                 </a>
                 <a routerLink="/contact" class="px-8 py-4 bg-green-900 text-white border border-green-800 font-bold rounded-lg hover:bg-green-800 transition-colors">
                   Request an Audit
                 </a>
               </div>
             </div>
          </div>

        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesBentoComponent {}