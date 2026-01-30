import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-bento',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="bg-white">
      
      <!-- Header -->
      <section class="relative py-24 overflow-hidden">
         <div class="absolute inset-0">
            <img src="/images/girlworld-environment.jpg" alt="" class="w-full h-full object-cover object-[center_30%]" />
            <div class="absolute inset-0 bg-white/40"></div>
         </div>
         <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl md:text-6xl font-bold text-zinc-900 mb-6 tracking-tight drop-shadow-sm">Our Services</h1>
            <p class="text-xl text-zinc-700 max-w-2xl mx-auto font-medium drop-shadow-sm">
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
                <!-- Icon: Layers / System -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-zinc-900 mb-4">Integrated Waste Management (IWM)</h3>
                <p class="text-zinc-600 mb-8 leading-relaxed text-lg">
                  Our flagship service offers a complete "cradle to grave" solution. We oversee your site's entire waste function, implementing sorting systems, and ensuring 100% legislative compliance.
                </p>
                <ul class="grid sm:grid-cols-2 gap-4 text-sm font-medium text-zinc-700">
                  <li class="flex items-center gap-3"><div class="w-2 h-2 bg-green-500 rounded-sm"></div> Waste sorting & separation</li>
                  <li class="flex items-center gap-3"><div class="w-2 h-2 bg-green-500 rounded-sm"></div> Trained Staffing & Supervision</li>
                  <li class="flex items-center gap-3"><div class="w-2 h-2 bg-green-500 rounded-sm"></div> Reduction of landfill volumes</li>
                  <li class="flex items-center gap-3"><div class="w-2 h-2 bg-green-500 rounded-sm"></div> Detailed Environmental Reporting</li>
                </ul>
              </div>
            </div>

            <!-- Service 2: Hazardous Waste -->
            <div class="p-8 bg-white rounded-xl border border-zinc-200 hover:border-green-200 hover:shadow-xl transition-all duration-300 group">
               <div class="w-14 h-14 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-8 group-hover:scale-105 transition-transform">
                 <!-- Icon: Alert Triangle -->
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                   <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                   <path d="M12 9v4" />
                   <path d="M12 17h.01" />
                 </svg>
               </div>
               <h3 class="text-xl font-bold text-zinc-900 mb-3">Hazardous Chemicals</h3>
               <p class="text-zinc-500 mb-6 text-sm leading-relaxed">Safe collection and disposal of dangerous industrial chemicals.</p>
               <ul class="space-y-3 text-sm text-zinc-600 font-medium">
                 <li>• Chemical Sludge & Solvents</li>
                 <li>• Contaminated Rags/Drums</li>
                 <li>• Fluorescent Tubes</li>
                 <li>• Credited Services Certificate</li>
               </ul>
            </div>

            <!-- Service 3: Industrial Cleaning -->
            <div class="p-8 bg-white rounded-xl border border-zinc-200 hover:border-green-200 hover:shadow-xl transition-all duration-300 group">
               <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-8 group-hover:scale-105 transition-transform">
                 <!-- Icon: Sparkles/Clean -->
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                   <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                 </svg>
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
                 <!-- Icon: Activity/Heartbeat -->
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                 </svg>
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
                 <!-- Icon: Recycle -->
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                   <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
                   <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
                   <path d="m14 16-3 3 3 3" />
                   <path d="M8.293 13.596 7.196 9.5 3.1 9.598" />
                   <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
                   <path d="m13.378 5 3 3-3 3" />
                 </svg>
               </div>
               <h3 class="text-xl font-bold text-zinc-900 mb-3">Recycling & Recovery</h3>
               <p class="text-zinc-500 mb-6 text-sm leading-relaxed">Maximizing resource recovery to support Zero-to-Landfill initiatives.</p>
               <ul class="space-y-3 text-sm text-zinc-600 font-medium">
                 <li>• Cardboard, Paper, Plastic</li>
                 <li>• Scrap Metal Recovery</li>
                 <li>• Rebate Management</li>
               </ul>
            </div>

            <!-- Service 6: Compliance -->
            <div class="p-8 bg-white rounded-xl border border-zinc-200 hover:border-green-200 hover:shadow-xl transition-all duration-300 group">
               <div class="w-14 h-14 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-8 group-hover:scale-105 transition-transform">
                 <!-- Icon: Shield Check -->
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                   <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                   <path d="m9 12 2 2 4-4" />
                 </svg>
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
                 <!-- Icon: Droplets / Waves -->
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                   <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
                 </svg>
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
                 <!-- Icon: Siren / Alarm -->
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                   <path d="M6 18h12" />
                   <path d="M6 8v10" />
                   <path d="M18 8v10" />
                   <path d="M12 2v6" />
                   <path d="m18.36 4.64-1.41 1.41" />
                   <path d="m5.64 4.64 1.41 1.41" />
                   <path d="M12 12v6" />
                 </svg>
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
                 <!-- Icon: Construction / Barrier -->
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                   <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                   <line x1="3" y1="9" x2="21" y2="9" />
                   <line x1="3" y1="15" x2="21" y2="15" />
                   <line x1="9" y1="3" x2="9" y2="21" />
                   <line x1="15" y1="3" x2="15" y2="21" />
                 </svg>
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
                 <!-- Icon: Graduation Cap / Education -->
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                   <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
                   <path d="M6 12v5c3 3 9 3 12 0v-5" />
                 </svg>
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
                 <!-- Icon: File Shred / Lock -->
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                   <polyline points="3 6 5 6 21 6" />
                   <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                   <line x1="10" y1="11" x2="10" y2="17" />
                   <line x1="14" y1="11" x2="14" y2="17" />
                 </svg>
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