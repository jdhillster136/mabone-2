import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-floating-facebook',
  standalone: true,
  template: `
    <a
      href="https://www.facebook.com"
      target="_blank"
      class="fixed bottom-20 right-6 z-50 flex items-center justify-center w-12 h-12 bg-[#1877F2] text-white rounded-full shadow-2xl hover:scale-110 hover:shadow-blue-900/20 transition-all duration-300 group animate-bounce-in"
      aria-label="Visit us on Facebook"
    >
      <!-- Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
      </svg>
      
      <!-- Tooltip text on hover (desktop) -->
      <span class="absolute right-full mr-4 px-3 py-1 bg-zinc-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block shadow-lg">
        Follow us
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
      animation-delay: 0.8s; /* Appear slightly before or after WhatsApp */
      opacity: 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FloatingFacebookComponent {}