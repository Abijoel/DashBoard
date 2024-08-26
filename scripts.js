// Initialize Chart.js charts
const salesTrendChart = new Chart(document.getElementById('salesTrendChart').getContext('2d'), {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Sales',
            data: [300, 450, 200, 500, 350, 400, 700],
            borderColor: '#007bff',
            fill: false,
        }]
    }
});

const marketShareChart = new Chart(document.getElementById('marketShareChart').getContext('2d'), {
    type: 'pie',
    data: {
        labels: ['Pdt 1', 'Pdt 2', 'Pdt 3', 'Pdt 4'],
        datasets: [{
            data: [52, 22, 17, 9],
            backgroundColor: ['#007bff', '#ffc107', '#28a745', '#dc3545']
        }]
    }
});

const topProductsChart = new Chart(document.getElementById('topProductsChart').getContext('2d'), {
    type: 'bar',
    data: {
        labels: ['Pdt 1', 'Pdt 2', 'Pdt 3', 'Pdt 4', 'Pdt 5'],
        datasets: [{
            label: 'Sales (N Nigerian Naira)',
            data: [8, 20, 10, 12, 15],
            backgroundColor: ['#007bff', '#ffc107', '#28a745', '#dc3545', '#17a2b8']
        }]
    }
});

// Tab functionality for product details
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Here you would update the content based on the selected product
        // For now, I'm just logging the product that was clicked
        console.log(button.dataset.product);
    });
});
