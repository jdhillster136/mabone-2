import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Google Maps Preview Section -->
    <!-- Mobile: Stacked (Map then Card). Desktop: Relative container with Overlay. -->
    <section class="w-full bg-zinc-100 border-t border-zinc-200 flex flex-col md:block md:relative md:h-[450px] group">
      
      <!-- Map Container -->
      <div class="w-full h-72 md:h-full md:absolute md:inset-0 z-0">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          style="border:0"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.8!2d22.4468!3d-33.9628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ddc67e7a2c8be8d%3A0x5e8b9e3f3b9c8e3e!2sBelden%20Industrial%20Park%2C%20Fichat%20St%2C%20George%20Industria%2C%20George%2C%206539!5e0!3m2!1sen!2sza!4v1706443200000!5m2!1sen!2sza"
          class="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
          title="Ma'bone Location"
          loading="lazy"
          allowfullscreen
        ></iframe>
      </div>
      
      <!-- Address Card -->
      <!-- Mobile: Static block below map. Desktop: Absolute overlay. -->
      <div class="relative z-10 bg-white p-8 md:absolute md:top-8 md:left-8 md:rounded-xl md:shadow-2xl md:border md:border-zinc-100 md:max-w-sm md:bg-white/95 md:backdrop-blur-md">
         <div class="flex items-center gap-3 mb-5">
           <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-800 flex-shrink-0">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" /></svg>
           </div>
           <div>
             <h3 class="font-bold text-zinc-900 leading-tight">Visit our Depot</h3>
             <span class="text-xs text-green-700 font-bold uppercase tracking-wider">Mon - Fri: 08:00 - 17:00</span>
           </div>
         </div>
         
         <p class="text-zinc-600 leading-relaxed mb-6 text-sm">
           Unit D9, Belden Industrial Park<br>
           Fichat St, George Industria<br>
           George, 6539
         </p>
         
         <div class="flex gap-3">
           <a href="https://maps.google.com/maps?q=Belden%20Ind%20Park%2C%20Unit%20D9%20Fichat%20St%2C%20George%20Industria%2C%20George%2C%206539" target="_blank" class="flex-1 text-center px-4 py-3 bg-zinc-900 text-white text-sm font-bold rounded-lg hover:bg-zinc-800 transition-colors">
             Get Directions
           </a>
           <a href="tel:0448744774" class="flex-1 text-center px-4 py-3 bg-white border border-zinc-200 text-zinc-900 text-sm font-bold rounded-lg hover:bg-zinc-50 transition-colors">
             Call Us
           </a>
         </div>
      </div>
    </section>

    <footer class="bg-green-950 border-t border-green-900 pt-20 pb-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          <!-- Brand -->
          <div class="col-span-1 md:col-span-2 pr-8">
            <div class="flex items-center gap-2 mb-6">
              <div class="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center text-white font-bold">M</div>
              <span class="text-xl font-bold text-white">Ma'bone</span>
            </div>
            <p class="text-zinc-400 mb-8 leading-relaxed">
              Integrated waste management service provider offering a broad spectrum cradle to grave waste management services.
            </p>
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-md text-green-100 text-xs font-bold border border-white/10">
              Part of Belrex Group
            </div>
          </div>

          <!-- Services -->
          <div>
            <h4 class="font-bold text-white mb-6">Services</h4>
            <ul class="space-y-4 text-zinc-400 text-sm font-medium">
              <li><a routerLink="/services" class="hover:text-white transition-colors">On-Site Management</a></li>
              <li><a routerLink="/services" class="hover:text-white transition-colors">Hazardous Waste</a></li>
              <li><a routerLink="/how-it-works" class="hover:text-white transition-colors">How it Works</a></li>
              <li><a routerLink="/services" class="hover:text-white transition-colors">Recycling</a></li>
              <li><a routerLink="/services" class="hover:text-white transition-colors">HIRA & AIA Assessments</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="font-bold text-white mb-6">Contact</h4>
            <ul class="space-y-4 text-zinc-400 text-sm font-medium">
              <li class="flex items-center gap-2 group cursor-pointer">
                <span class="w-20 text-xs font-bold uppercase tracking-wider text-zinc-500">Office</span>
                <a href="tel:0448744774" class="text-zinc-300 group-hover:text-white transition-colors">044 8744 774</a>
              </li>
              <li class="flex items-center gap-2 group cursor-pointer">
                <span class="w-20 text-xs font-bold uppercase tracking-wider text-zinc-500">WhatsApp</span>
                <a href="https://wa.me/27681648526" target="_blank" class="text-zinc-300 group-hover:text-white transition-colors">068 164 8526</a>
              </li>
              <li class="flex items-center gap-2 group cursor-pointer">
                <span class="w-20 text-xs font-bold uppercase tracking-wider text-zinc-500">Email</span>
                <a href="mailto:info@mabone.co.za" class="text-zinc-300 group-hover:text-white transition-colors">info@mabone.co.za</a>
              </li>
            </ul>
          </div>

        </div>

        <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-zinc-500">
          <p>&copy; 2024 Ma'bone Waste Management. All rights reserved.</p>
          <div class="flex gap-8">
            <a href="#" class="hover:text-zinc-300">Privacy Policy</a>
            <a href="#" class="hover:text-zinc-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {}