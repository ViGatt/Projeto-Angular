
export function initFooterMap() {
    const mapa = document.querySelector('.mapa-estilizado');
    
    if (mapa) {
      mapa.addEventListener('mouseenter', () => {
        const tooltip = document.createElement('div');
        tooltip.className = 'map-tooltip';
        tooltip.textContent = 'Clique para abrir no Google Maps';
        document.body.appendChild(tooltip);
        
        const updatePosition = (e) => {
          tooltip.style.left = `${e.pageX + 10}px`;
          tooltip.style.top = `${e.pageY + 10}px`;
        };
        
        mapa.addEventListener('mousemove', updatePosition);
        
        mapa.addEventListener('mouseleave', () => {
          tooltip.remove();
          mapa.removeEventListener('mousemove', updatePosition);
        });
      });
      
      mapa.addEventListener('click', (e) => {
        e.preventDefault();
        
        mapa.style.transform = 'scale(0.95)';
        setTimeout(() => {
          window.open('https://maps.google.com?q=Edsom+Da+Silva+Lima,Marília+SP', '_blank');
          mapa.style.transform = '';
        }, 200);
      });
      
      mapa.addEventListener('load', () => {
        mapa.style.opacity = '1';
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', initFooterMap);