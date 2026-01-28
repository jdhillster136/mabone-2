import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-floating-whatsapp',
  standalone: true,
  template: `
    <a
      href="https://wa.me/27681648526"
      target="_blank"
      class="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 hover:shadow-green-900/20 transition-all duration-300 group animate-bounce-in"
      aria-label="Chat on WhatsApp"
    >
      <!-- Pulse Effect -->
      <span class="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping -z-10"></span>
      
      <!-- Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
      </svg>
      
      <!-- Tooltip text on hover (desktop) -->
      <span class="absolute right-full mr-4 px-3 py-1 bg-zinc-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block shadow-lg">
        Chat with us
      </span>
    </a>
  `,
  styles: [`
    @keyframes bounce-in {
      0% { transform: scale(0); opacity: 0; }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); opacity: 1; }
    }
    .animate-bounce-in {
      animation: bounce-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      animation-delay: 1s; /* Delay appearance slightly so it pops in after load */
      opacity: 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FloatingWhatsappComponent {}