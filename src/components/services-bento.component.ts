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
            <p class="text-xl text-zinc-900 max-w-2xl mx-auto font-bold drop-shadow-sm">
              From general recycling to high-risk hazardous disposal, Ma'bone provides end-to-end waste management solutions tailored to your industry.
            </p>
         </div>
      </section>

      <!-- Main Services Grid -->
      <section class="py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <!-- Service 1: Integrated Management (Large Card) -->
            <div class="col-span-1 md:col-span-2 lg:col-span-2 p-10 bg-zinc-50 rounded-xl border border-zinc-100 hover:border-green-200 hover:shadow-lg transition-all duration-300">
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
               <h3 class="text-xl font-bold text-zinc-900 mb-3">Industrial Cleaning</h3>
               <p class="text-zinc-500 mb-6 text-sm leading-relaxed">Deep cleaning solutions for industrial and waste facility.</p>
               <ul class="space-y-3 text-sm text-zinc-600 font-medium">
                 <li>• High Pressure Cleaning</li>
                 <li>• Fat Trap & Separator Cleaning</li>
                 <li>• Wash Bay and Oil Trap Cleaning</li>
               </ul>
            </div>

            <!-- Service 4: Medical & Clinical -->
            <div class="p-8 bg-white rounded-xl border border-zinc-200 hover:border-green-200 hover:shadow-xl transition-all duration-300 group">
               <h3 class="text-xl font-bold text-zinc-900 mb-3">Medical & Clinical</h3>
               <p class="text-zinc-500 mb-6 text-sm leading-relaxed">Credited handling of Health Care Risk Waste (HCRW).</p>
               <ul class="space-y-3 text-sm text-zinc-600 font-medium">
                 <li>• Infectious Waste & Sharps</li>
                 <li>• Pharmaceutical Waste</li>
               </ul>
            </div>

             <!-- Service 5: Recycling -->
             <div class="p-8 bg-white rounded-xl border border-zinc-200 hover:border-green-200 hover:shadow-xl transition-all duration-300 group">
               <h3 class="text-xl font-bold text-zinc-900 mb-3">Recycling & Recovery</h3>
               <p class="text-zinc-500 mb-6 text-sm leading-relaxed">Maximizing resource recovery to support Zero-to-Landfill initiatives.</p>
               <ul class="space-y-3 text-sm text-zinc-600 font-medium">
                 <li>• Cardboard, Paper, Plastic</li>
                 <li>• Scrap Metal Recovery</li>
               </ul>
            </div>

            <!-- Service 6: Compliance -->
            <div class="p-8 bg-white rounded-xl border border-zinc-200 hover:border-green-200 hover:shadow-xl transition-all duration-300 group">
               <h3 class="text-xl font-bold text-zinc-900 mb-3">Compliance & Consulting</h3>
               <p class="text-zinc-500 mb-6 text-sm leading-relaxed">Ensuring your business meets National Environmental waste Management.</p>
               <ul class="space-y-3 text-sm text-zinc-600 font-medium">
                 <li>• Waste Management Plans (WMP)</li>
                 <li>• HIRA & AIA Assessments</li>
                 <li>• External Compliance Auditing</li>
               </ul>
            </div>

            <!-- Service 7: Liquid Waste -->
            <div class="p-8 bg-white rounded-xl border border-zinc-200 hover:border-green-200 hover:shadow-xl transition-all duration-300 group">
               <h3 class="text-xl font-bold text-zinc-900 mb-3">Liquid Sanitation</h3>
               <p class="text-zinc-500 mb-6 text-sm leading-relaxed">Professional removal and liquid waste management, bio remediations and safe disposal of liquid waste.</p>
               <ul class="space-y-3 text-sm text-zinc-600 font-medium">
                 <li>• Septic Tank Pumping</li>
                 <li>• Grease and Oil Trap Maintenance</li>
                 <li>• Effluent Disposal</li>
                 <li>• Sludge Removal</li>
               </ul>
            </div>

            <!-- Service 8: Spill Response (New) -->
            <div class="p-8 bg-white rounded-xl border border-zinc-200 hover:border-green-200 hover:shadow-xl transition-all duration-300 group">
               <h3 class="text-xl font-bold text-zinc-900 mb-3">Emergency Spill Response</h3>
               <p class="text-zinc-500 mb-6 text-sm leading-relaxed">Hazmat Reaction Unit for immediate containment and remediation.</p>
               <ul class="space-y-3 text-sm text-zinc-600 font-medium">
                 <li>• Roadside Accident Cleanup</li>
                 <li>• Industrial Spills</li>
                 <li>• Site Rehabilitation</li>
                 <li>• Emergency Line</li>
               </ul>
            </div>

             <!-- Service 9: Asbestos (New) -->
            <div class="p-8 bg-white rounded-xl border border-zinc-200 hover:border-green-200 hover:shadow-xl transition-all duration-300 group">
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
               <h3 class="text-xl font-bold text-zinc-900 mb-3">Training & Supplies</h3>
               <p class="text-zinc-500 mb-6 text-sm leading-relaxed">Equipping your team with the knowledge and ppe they required.</p>
               <ul class="space-y-3 text-sm text-zinc-600 font-medium">
                 <li>• Accredited H&S Training</li>
                 <li>• Hazmat Spill Response Training</li>
                 <li>• Supply of PPE & Spill Kits</li>
                 <li>• Absorbent Materials</li>
               </ul>
            </div>

            <!-- Service 11: Confidential Destruction (New) -->
            <div class="p-8 bg-white rounded-xl border border-zinc-200 hover:border-green-200 hover:shadow-xl transition-all duration-300 group">
               <h3 class="text-xl font-bold text-zinc-900 mb-3">Secure Destruction</h3>
               <p class="text-zinc-500 mb-6 text-sm leading-relaxed">Confidential destruction of documents.</p>
               <ul class="space-y-3 text-sm text-zinc-600 font-medium">
                 <li>• Document Shredding</li>
                 <li>• Witnessed Disposal</li>
                 <li>• Supervisory Disposal</li>
                 <li>• Confidently Disposal</li>
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