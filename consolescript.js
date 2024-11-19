(function () {
    const rows = document.querySelectorAll('tr');
    let maxTemp = -Infinity;  
    let hottestDay = '';
    
    for (let i = 1; i < rows.length; i++) {
    
        const cells = rows[i].querySelectorAll('td');
        
        const date = cells[2].innerText;
        const temp = parseFloat(cells[3].innerText);
        
        if (temp > maxTemp) {
            maxTemp = temp;
            hottestDay = date;
        }
    }
    console.log( `Найбільш спекотний день: ${hottestDay}, температура: ${maxTemp} °C`);
})();
