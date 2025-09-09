// Interactive Multiplication Table JavaScript

// Configuration
const TABLE_SIZE = 12;
const MAX_HISTORY_ITEMS = 50;

// Theme definitions
const themes = {
    rainbow: {
        name: "🌈 Rainbow",
        getCellColor: (row, col) => {
            const value = row * col;
            const maxValue = TABLE_SIZE * TABLE_SIZE;
            const ratio = value / maxValue;
            const hue = (ratio * 300) % 360;
            const saturation = 70 + (ratio * 30);
            const lightness = 60 + (ratio * 20);
            return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        }
    },
    balerina: {
        name: "🩰 Balerina",
        getCellColor: (row, col) => {
            const value = row * col;
            const maxValue = TABLE_SIZE * TABLE_SIZE;
            const ratio = value / maxValue;
            const colors = ['#ffb6c1', '#ffc0cb', '#ffd1dc', '#ffe4e1', '#f0e6ff', '#e6e6fa', '#f8f8ff', '#fff0f5', '#ffe4e6', '#ffb3ba'];
            return colors[Math.floor(ratio * colors.length)];
        }
    },
    capucina: {
        name: "🌸 Capucina",
        getCellColor: (row, col) => {
            const value = row * col;
            const maxValue = TABLE_SIZE * TABLE_SIZE;
            const ratio = value / maxValue;
            const colors = ['#ff9a9e', '#fecfef', '#fecfef', '#ffecd2', '#fcb69f', '#ff8a80', '#ffab91', '#ffccbc', '#f8bbd9', '#e1bee7'];
            return colors[Math.floor(ratio * colors.length)];
        }
    },
    princess: {
        name: "👑 Princess",
        getCellColor: (row, col) => {
            const value = row * col;
            const maxValue = TABLE_SIZE * TABLE_SIZE;
            const ratio = value / maxValue;
            const colors = ['#ffd700', '#ffb347', '#ffa500', '#ff8c00', '#ff7f50', '#ff6347', '#ff69b4', '#ff1493', '#da70d6', '#ba55d3'];
            return colors[Math.floor(ratio * colors.length)];
        }
    },
    unicorn: {
        name: "🦄 Unicorn",
        getCellColor: (row, col) => {
            const value = row * col;
            const maxValue = TABLE_SIZE * TABLE_SIZE;
            const ratio = value / maxValue;
            const colors = ['#e6e6fa', '#d8bfd8', '#dda0dd', '#ee82ee', '#da70d6', '#ba55d3', '#9370db', '#8a2be2', '#7b68ee', '#6a5acd'];
            return colors[Math.floor(ratio * colors.length)];
        }
    },
    butterfly: {
        name: "🦋 Butterfly",
        getCellColor: (row, col) => {
            const value = row * col;
            const maxValue = TABLE_SIZE * TABLE_SIZE;
            const ratio = value / maxValue;
            const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43'];
            return colors[Math.floor(ratio * colors.length)];
        }
    },
    ocean: {
        name: "🌊 Ocean",
        getCellColor: (row, col) => {
            const value = row * col;
            const maxValue = TABLE_SIZE * TABLE_SIZE;
            const ratio = value / maxValue;
            const colors = ['#74b9ff', '#0984e3', '#00b894', '#00cec9', '#6c5ce7', '#a29bfe', '#fd79a8', '#e84393', '#fdcb6e', '#e17055'];
            return colors[Math.floor(ratio * colors.length)];
        }
    },
    forest: {
        name: "🌲 Forest",
        getCellColor: (row, col) => {
            const value = row * col;
            const maxValue = TABLE_SIZE * TABLE_SIZE;
            const ratio = value / maxValue;
            const colors = ['#a8e6cf', '#88d8a3', '#68c4a6', '#4a9b8e', '#2d7d77', '#1a5f5a', '#4a6741', '#6b8e23', '#8fbc8f', '#98fb98'];
            return colors[Math.floor(ratio * colors.length)];
        }
    },
    space: {
        name: "🚀 Space",
        getCellColor: (row, col) => {
            const value = row * col;
            const maxValue = TABLE_SIZE * TABLE_SIZE;
            const ratio = value / maxValue;
            const colors = ['#1e3c72', '#2a5298', '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#c084fc', '#d946ef', '#ec4899', '#f43f5e'];
            return colors[Math.floor(ratio * colors.length)];
        }
    },
    candy: {
        name: "🍭 Candy",
        getCellColor: (row, col) => {
            const value = row * col;
            const maxValue = TABLE_SIZE * TABLE_SIZE;
            const ratio = value / maxValue;
            const colors = ['#ff6b9d', '#c44569', '#f8b500', '#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43', '#ff6348', '#ff3838'];
            return colors[Math.floor(ratio * colors.length)];
        }
    }
};

let currentTheme = 'rainbow';

// Generate dropdown options
function generateDropdownOptions() {
    const firstSelect = document.getElementById('first-number');
    const secondSelect = document.getElementById('second-number');
    
    for (let i = 1; i <= TABLE_SIZE; i++) {
        const option1 = document.createElement('option');
        option1.value = i;
        option1.textContent = i;
        firstSelect.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = i;
        option2.textContent = i;
        secondSelect.appendChild(option2);
    }
}

// Generate colors for cells based on current theme
function getCellColor(row, col) {
    return themes[currentTheme].getCellColor(row, col);
}

// Generate the multiplication table
function generateTable() {
    const table = document.getElementById('multiplication-table');
    table.innerHTML = '';

    // Create header row
    const headerRow = document.createElement('tr');
    
    // Empty cell for top-left corner
    const xCell = document.createElement('td');
    xCell.className = 'table-cell x-cell';
    xCell.textContent = '×';
    headerRow.appendChild(xCell);

    // Column headers (1-12)
    for (let i = 1; i <= TABLE_SIZE; i++) {
        const cell = document.createElement('td');
        cell.className = 'table-cell header-cell';
        cell.textContent = i;
        cell.id = `col-${i}`;
        headerRow.appendChild(cell);
    }
    table.appendChild(headerRow);

    // Create data rows
    for (let i = 1; i <= TABLE_SIZE; i++) {
        const row = document.createElement('tr');
        
        // Row header
        const rowHeader = document.createElement('td');
        rowHeader.className = 'table-cell header-cell';
        rowHeader.textContent = i;
        rowHeader.id = `row-${i}`;
        row.appendChild(rowHeader);

        // Data cells
        for (let j = 1; j <= TABLE_SIZE; j++) {
            const cell = document.createElement('td');
            cell.className = 'table-cell';
            cell.textContent = i * j;
            cell.id = `cell-${i}-${j}`;
            cell.style.background = getCellColor(i, j);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

// Clear all highlights
function clearHighlights() {
    // Clear row highlights
    for (let i = 1; i <= TABLE_SIZE; i++) {
        const rowCells = document.querySelectorAll(`[id^="cell-${i}-"]`);
        rowCells.forEach(cell => {
            cell.classList.remove('highlighted-row');
        });
    }

    // Clear column highlights
    for (let j = 1; j <= TABLE_SIZE; j++) {
        const colCells = document.querySelectorAll(`[id*="-${j}"]`);
        colCells.forEach(cell => {
            cell.classList.remove('highlighted-col');
        });
    }

    // Clear answer highlight
    const answerCells = document.querySelectorAll('.answer-cell');
    answerCells.forEach(cell => {
        cell.classList.remove('answer-cell');
    });

    // Remove arrows
    const arrows = document.querySelectorAll('.arrow');
    arrows.forEach(arrow => arrow.remove());
}

// Add visual arrows
function addArrows(firstNum, secondNum, answer) {
    // Arrow from row header to answer
    const rowHeader = document.getElementById(`row-${firstNum}`);
    const answerCell = document.getElementById(`cell-${firstNum}-${secondNum}`);
    
    if (rowHeader && answerCell) {
        const arrowRight = document.createElement('div');
        arrowRight.className = 'arrow arrow-right';
        arrowRight.textContent = '→';
        rowHeader.appendChild(arrowRight);
    }

    // Arrow from column header to answer
    const colHeader = document.getElementById(`col-${secondNum}`);
    
    if (colHeader && answerCell) {
        const arrowDown = document.createElement('div');
        arrowDown.className = 'arrow arrow-down';
        arrowDown.textContent = '↓';
        colHeader.appendChild(arrowDown);
    }
}

// Add to history
function addToHistory(firstNum, secondNum, answer) {
    const historyList = document.getElementById('history-list');
    const historyItem = document.createElement('li');
    historyItem.className = 'history-item';
    
    const calculation = document.createElement('span');
    calculation.textContent = `${firstNum} × ${secondNum} = ${answer}`;
    
    const timestamp = document.createElement('span');
    timestamp.textContent = new Date().toLocaleTimeString();
    timestamp.style.fontSize = '0.8em';
    timestamp.style.color = '#666';
    
    historyItem.appendChild(calculation);
    historyItem.appendChild(timestamp);
    
    // Add to beginning of list
    historyList.insertBefore(historyItem, historyList.firstChild);
    
    // Limit history size
    const items = historyList.querySelectorAll('.history-item');
    if (items.length > MAX_HISTORY_ITEMS) {
        historyList.removeChild(items[items.length - 1]);
    }
}

// Highlight the multiplication path
function highlightMultiplication(firstNum, secondNum) {
    clearHighlights();

    if (!firstNum || !secondNum) return;

    const answer = firstNum * secondNum;

    // Update display
    const display = document.getElementById('multiplication-display');
    display.textContent = `${firstNum} × ${secondNum} = ${answer}`;

    // Add to history
    addToHistory(firstNum, secondNum, answer);

    // Highlight the row
    for (let j = 1; j <= TABLE_SIZE; j++) {
        const cell = document.getElementById(`cell-${firstNum}-${j}`);
        if (cell) {
            cell.classList.add('highlighted-row');
        }
    }

    // Highlight the column
    for (let i = 1; i <= TABLE_SIZE; i++) {
        const cell = document.getElementById(`cell-${i}-${secondNum}`);
        if (cell) {
            cell.classList.add('highlighted-col');
        }
    }

    // Highlight the answer cell
    const answerCell = document.getElementById(`cell-${firstNum}-${secondNum}`);
    if (answerCell) {
        answerCell.classList.add('answer-cell');
    }

    // Add arrows
    addArrows(firstNum, secondNum, answer);

    // Update URL
    updateURL(firstNum, secondNum);
}

// Update URL parameters
function updateURL(firstNum, secondNum) {
    const url = new URL(window.location);
    if (firstNum && secondNum) {
        url.searchParams.set('a', firstNum);
        url.searchParams.set('b', secondNum);
    } else {
        url.searchParams.delete('a');
        url.searchParams.delete('b');
    }
    url.searchParams.set('theme', currentTheme);
    window.history.replaceState({}, '', url);
}

// Enhanced URL parameter loading
function loadURLParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const firstNum = urlParams.get('a');
    const secondNum = urlParams.get('b');
    const theme = urlParams.get('theme');
    
    // Load theme first
    if (theme && themes[theme]) {
        document.getElementById('theme-selector').value = theme;
        switchTheme(theme);
    }
    
    // Load selections
    if (firstNum && secondNum) {
        document.getElementById('first-number').value = firstNum;
        document.getElementById('second-number').value = secondNum;
        highlightMultiplication(parseInt(firstNum), parseInt(secondNum));
    }
}

// Tooltip functionality
function initTooltips() {
    const tooltip = document.getElementById('tooltip');
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            tooltip.textContent = e.target.getAttribute('data-tooltip');
            tooltip.classList.add('show');
        });
        
        element.addEventListener('mouseleave', () => {
            tooltip.classList.remove('show');
        });
        
        element.addEventListener('mousemove', (e) => {
            tooltip.style.left = e.pageX + 10 + 'px';
            tooltip.style.top = e.pageY - 10 + 'px';
        });
    });
}

// History section functionality
function initHistory() {
    const historyHeader = document.getElementById('history-header');
    const historyContent = document.getElementById('history-content');
    const historyToggle = document.getElementById('history-toggle');
    const clearHistoryBtn = document.getElementById('clear-history');
    
    historyHeader.addEventListener('click', () => {
        historyContent.classList.toggle('expanded');
        historyToggle.textContent = historyContent.classList.contains('expanded') ? '▲' : '▼';
    });
    
    clearHistoryBtn.addEventListener('click', () => {
        document.getElementById('history-list').innerHTML = '';
    });
}

// Theme switching functionality
function switchTheme(themeName) {
    currentTheme = themeName;
    document.body.className = `theme-${themeName}`;
    
    // Regenerate table with new theme colors
    generateTable();
    
    // Re-highlight current selection if any
    const firstNum = parseInt(document.getElementById('first-number').value);
    const secondNum = parseInt(document.getElementById('second-number').value);
    if (firstNum && secondNum) {
        highlightMultiplication(firstNum, secondNum);
    }
}

// Teacher functionality
function initTeacherControls() {
    // Print functionality
    document.getElementById('print-btn').addEventListener('click', function() {
        window.print();
    });

    // PNG Export functionality
    document.getElementById('export-png-btn').addEventListener('click', function() {
        const table = document.getElementById('multiplication-table');
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        const rect = table.getBoundingClientRect();
        canvas.width = rect.width * 2; // Higher resolution
        canvas.height = rect.height * 2;
        
        // Scale context for higher resolution
        ctx.scale(2, 2);
        
        // Use html2canvas-like approach
        html2canvas(table, {
            canvas: canvas,
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff'
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `multiplication-table-${currentTheme}-${new Date().toISOString().split('T')[0]}.png`;
            link.href = canvas.toDataURL();
            link.click();
        }).catch(err => {
            // Fallback: simple canvas approach
            const img = new Image();
            img.onload = function() {
                ctx.drawImage(img, 0, 0);
                const link = document.createElement('a');
                link.download = `multiplication-table-${currentTheme}-${new Date().toISOString().split('T')[0]}.png`;
                link.href = canvas.toDataURL();
                link.click();
            };
            img.src = 'data:image/svg+xml;base64,' + btoa(`
                <svg xmlns="http://www.w3.org/2000/svg" width="${rect.width}" height="${rect.height}">
                    <foreignObject width="100%" height="100%">
                        <div xmlns="http://www.w3.org/1999/xhtml">${table.outerHTML}</div>
                    </foreignObject>
                </svg>
            `);
        });
    });

    // Black and White Print functionality
    document.getElementById('print-bw-btn').addEventListener('click', function() {
        document.body.classList.add('print-bw');
        setTimeout(() => {
            window.print();
            setTimeout(() => {
                document.body.classList.remove('print-bw');
            }, 1000);
        }, 100);
    });
}

// Event listeners
function initEventListeners() {
    document.getElementById('first-number').addEventListener('change', function() {
        const firstNum = parseInt(this.value);
        const secondNum = parseInt(document.getElementById('second-number').value);
        highlightMultiplication(firstNum, secondNum);
    });

    document.getElementById('second-number').addEventListener('change', function() {
        const firstNum = parseInt(document.getElementById('first-number').value);
        const secondNum = parseInt(this.value);
        highlightMultiplication(firstNum, secondNum);
    });

    document.getElementById('theme-selector').addEventListener('change', function() {
        switchTheme(this.value);
    });
}

// Initialize everything when page loads
function init() {
    generateDropdownOptions();
    generateTable();
    initTooltips();
    initHistory();
    initTeacherControls();
    initEventListeners();
    loadURLParameters();
    
    // Set default theme
    switchTheme('rainbow');
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
