import { growthLeaks } from '../data/leakData';
import { Pillar } from '../data/types';

class GrowthLeaksLibrary extends HTMLElement {
  private shadow: ShadowRoot;
  private customerStage: Pillar | null = null;
  private showLeaks: boolean = true;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['customer-stage', 'show-leaks'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'customer-stage' && oldValue !== newValue) {
      this.customerStage = newValue as Pillar;
      this.render();
    }
    if (name === 'show-leaks' && oldValue !== newValue) {
      this.showLeaks = newValue !== 'false';
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  private render() {
    // Filter leaks based on customer stage
    const filteredLeaks = this.customerStage 
      ? growthLeaks.filter(leak => leak.pillar === this.customerStage)
      : growthLeaks;

    // Inject required styles
    const styles = `
      @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
      :host {
        display: block;
        width: 100%;
      }
    `;

    this.shadow.innerHTML = `
      <style>${styles}</style>
      <div class="growth-leaks-library">
        <div class="container mx-auto px-4 py-8">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-2">
              ${this.customerStage || 'All'} Growth Leaks
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 ml-2">
                ${filteredLeaks.length} leaks
              </span>
            </h2>
          </div>
          
          <div class="grid gap-6">
            ${this.showLeaks ? filteredLeaks.map(leak => `
              <div class="bg-white rounded-lg shadow-md p-6">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center">
                    <span class="text-2xl mr-3">${leak.emoji}</span>
                    <h3 class="text-xl font-semibold text-gray-900">${leak.name}</h3>
                  </div>
                  <div class="flex items-center">
                    <div class="px-3 py-1 rounded-full text-sm ${
                      leak.impactScore >= 8 ? 'bg-red-100 text-red-800' :
                      leak.impactScore >= 5 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }">
                      Impact: ${leak.impactScore}/10
                    </div>
                  </div>
                </div>
                
                <p class="text-gray-600 mb-4">${leak.description}</p>
                
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    ${leak.responsibleRole}
                  </span>
                  <span class="px-2 py-1 rounded-full text-xs font-medium ${
                    leak.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    leak.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }">
                    ${leak.difficulty}
                  </span>
                  <span class="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    ${leak.timeframe}
                  </span>
                </div>
                
                <div class="bg-gray-50 p-4 rounded-lg">
                  <h4 class="font-medium text-gray-900 mb-2">Fix Strategy:</h4>
                  <p class="text-gray-700">${leak.solution}</p>
                </div>
              </div>
            `).join('') : ''}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('growth-leaks-library', GrowthLeaksLibrary);