import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { GoogleGenAI } from "@google/genai";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai-advisor',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="py-24 bg-white border-t border-zinc-100">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div class="w-12 h-12 bg-green-100 text-green-900 rounded-lg flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>

        <h2 class="text-3xl font-bold text-zinc-900 mb-4">Waste Classification AI</h2>
        <p class="text-zinc-500 mb-10">
          Not sure how to dispose of something? Ask our AI assistant for instant guidance.
        </p>

        <!-- Response Area -->
        @if (response()) {
          <div class="mb-8 p-6 bg-green-50 rounded-lg border border-green-100 text-left animate-fade-in shadow-sm">
            <p class="text-green-900 leading-relaxed">{{ response() }}</p>
          </div>
        }

        <!-- Input Area -->
        <div class="relative max-w-xl mx-auto">
          <input 
            type="text" 
            [(ngModel)]="userQuery" 
            (keyup.enter)="askAi()"
            placeholder="e.g. How do I dispose of paint thinner?"
            class="w-full bg-white border border-zinc-300 rounded-lg px-4 py-4 pr-32 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-green-900 focus:ring-1 focus:ring-green-900 transition-all"
            [disabled]="loading()"
          />
          <button 
            (click)="askAi()"
            [disabled]="loading() || !userQuery()" 
            class="absolute right-1 top-1 bottom-1 px-6 bg-zinc-900 text-white text-sm font-medium rounded-md hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            @if (loading()) {
              Processing...
            } @else {
              Ask AI
            }
          </button>
        </div>
        
        <p class="text-zinc-400 text-xs mt-4">
          Powered by Gemini. Always consult professionals for hazardous material handling.
        </p>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AiAdvisorComponent {
  userQuery = signal('');
  response = signal('');
  loading = signal(false);

  async askAi() {
    const query = this.userQuery();
    if (!query.trim()) return;

    this.loading.set(true);
    this.response.set('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const prompt = `
        You are an expert waste management consultant for a company called "Ma'bone".
        Services include: Integrated waste management, hazardous waste disposal, recycling, asbestos removal, bio-remediation, fat traps, etc.
        User Question: "${query}"
        
        Provide a concise, professional answer (max 3 sentences). 
        If the waste is hazardous, strictly advise them to contact Ma'bone professionals immediately.
      `;

      const result = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      this.response.set(result.text.trim());
    } catch (error) {
      console.error('AI Error', error);
      this.response.set("Connection error. Please WhatsApp us.");
    } finally {
      this.loading.set(false);
    }
  }
}