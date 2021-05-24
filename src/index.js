import Tooltip from './ui/tooltip';



const tooltips = document.querySelectorAll('.tooltip');

tooltips.forEach(element => {
    const tooltip = new Tooltip(element);
    tooltip.init();
    
});


