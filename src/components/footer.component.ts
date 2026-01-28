import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
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