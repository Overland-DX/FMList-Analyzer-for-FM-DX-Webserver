/*!
 * My Logs Frontend Client
 * Adds an icon to the plugin panel to easily access the My Logs dashboard.
 */
(() => {
    const originalText = 'My Logs';

    function initMyLogsBtn() {
        const check = setInterval(() => {
            if (typeof addIconToPluginPanel === 'function') {
                clearInterval(check);
                
                const btnId = 'btn-mylogs-link';
                // Legger til standardikon som en fallback, byttes ut med custom SVG under
                addIconToPluginPanel(btnId, originalText, 'solid', 'chart-bar', 'Open My Logs in a new tab');
                
                setTimeout(() => {
                    const btn = document.getElementById(btnId);
                    if (btn) {
                        
                        // --- INJECT CUSTOM BAR-CHART ICON ---
                        const iconEl = btn.querySelector('i');
                        if (iconEl) {
                            iconEl.outerHTML = `
                            <svg viewBox="0 0 24 24" style="width: 1.3em; height: 1.3em; vertical-align: middle; margin-right: 6px;" fill="none" stroke="currentColor">
                                <path d="M18 20V10M12 20V4M6 20v-6" 
                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>`;
                        }

                        // Åpner endepunktet vårt i en ny fane
                        btn.addEventListener('click', () => {
                            window.open('/MyLogs', '_blank');
                        });

                        // Litt stil for å la knappen gli pent inn (hover-effekt etc.)
                        const style = document.createElement('style');
                        style.innerHTML = `
                            #${btnId}:hover {
                                border-color: #4dabf7 !important;
                                color: #4dabf7 !important;
                            }
                            #${btnId}:hover svg {
                                stroke: #4dabf7 !important;
                            }
                        `;
                        document.head.appendChild(style);
                    }
                }, 500); 
            }
        }, 500);
    }

    // Start når dokumentet er klart
    document.addEventListener('DOMContentLoaded', initMyLogsBtn);
})();
