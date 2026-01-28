import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid lg:grid-cols-5 gap-12 lg:gap-24">
          
          <!-- Contact Info -->
          <div class="lg:col-span-2 space-y-12">
            <div>
              <h2 class="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">Let's talk trash.</h2>
              <p class="text-xl text-zinc-500">
                Ready to optimize your waste management? We're here to help with quotes, compliance, and custom solutions.
              </p>
            </div>

            <div class="space-y-8">
              <!-- Office Number -->
              <a href="tel:0448744774" class="flex items-center gap-4 group p-4 -mx-4 rounded-lg hover:bg-zinc-50 transition-colors">
                <div class="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-800 group-hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <div>
                  <div class="text-sm font-bold text-zinc-400 uppercase tracking-wider">Office</div>
                  <div class="text-xl font-semibold text-zinc-900">044 8744 774</div>
                </div>
              </a>

              <!-- WhatsApp Only -->
              <a href="https://wa.me/27681648526" target="_blank" class="flex items-center gap-4 group p-4 -mx-4 rounded-lg hover:bg-zinc-50 transition-colors">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-800 group-hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                </div>
                <div>
                  <div class="text-sm font-bold text-zinc-400 uppercase tracking-wider">WhatsApp Only</div>
                  <div class="text-xl font-semibold text-zinc-900">068 164 8526</div>
                </div>
              </a>

              <a href="mailto:info@mabone.co.za" class="flex items-center gap-4 group p-4 -mx-4 rounded-lg hover:bg-zinc-50 transition-colors">
                <div class="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-800 group-hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                   <div class="text-sm font-bold text-zinc-400 uppercase tracking-wider">Email Us</div>
                   <div class="text-xl font-semibold text-zinc-900">info@mabone.co.za</div>
                </div>
              </a>

              <div class="flex items-center gap-4 p-4 -mx-4">
                <div class="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-800">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                   <div class="text-sm font-bold text-zinc-400 uppercase tracking-wider">Service Area</div>
                   <div class="text-xl font-semibold text-zinc-900">George & Eden District</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-3">
            <div class="bg-zinc-50 rounded-xl p-8 md:p-12 border border-zinc-100 shadow-sm">
              <form class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-zinc-700 ml-1">Name</label>
                    <input type="text" class="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-green-900 focus:border-green-900 outline-none transition-all" placeholder="John Doe">
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-zinc-700 ml-1">Company</label>
                    <input type="text" class="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-green-900 focus:border-green-900 outline-none transition-all" placeholder="Business Ltd">
                  </div>
                </div>
                
                <div class="space-y-2">
                  <label class="text-sm font-bold text-zinc-700 ml-1">Email</label>
                  <input type="email" class="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-green-900 focus:border-green-900 outline-none transition-all" placeholder="john@company.com">
                </div>
                
                <div class="space-y-2">
                  <label class="text-sm font-bold text-zinc-700 ml-1">Message</label>
                  <textarea rows="4" class="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-green-900 focus:border-green-900 outline-none transition-all resize-none" placeholder="Tell us about your waste management needs..."></textarea>
                </div>
                
                <div class="pt-4 flex flex-col sm:flex-row gap-4 items-center">
                   <button type="button" class="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white font-bold rounded-lg hover:bg-zinc-800 transition-all hover:shadow-lg">
                     Send Request
                   </button>
                   <span class="text-sm text-zinc-400">or</span>
                   <a href="https://wa.me/27681648526" target="_blank" class="w-full sm:w-auto px-8 py-4 bg-green-100 text-green-900 border border-green-200 font-bold rounded-lg hover:bg-green-200 transition-all text-center">
                     WhatsApp Us
                   </a>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {}