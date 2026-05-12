document.addEventListener("DOMContentLoaded", () => {
    // Charts
    const budgetCtx = document.getElementById('budgetChart').getContext('2d');
    const spendingCtx = document.getElementById('spendingChart').getContext('2d');
    const savingsCtx = document.getElementById('savingsChart').getContext('2d');
    const expenseCtx = document.getElementById('expenseChart').getContext('2d');

    new Chart(budgetCtx, {
        type: 'doughnut',
        data: {
            labels: ['Income', 'Expenses', 'Savings'],
            datasets: [{
                data: [5000, 3000, 2000],
                backgroundColor: ['#D4A017', '#FBEFBE', '#2A2518'],
            }]
        },
        options: {
            responsive: true,
        }
    });

    new Chart(spendingCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Spending',
                data: [1000, 1200, 800, 1500, 1100],
                borderColor: '#D4A017',
                backgroundColor: 'rgba(212, 160, 23, 0.1)',
            }]
        },
        options: {
            responsive: true,
        }
    });

    new Chart(savingsCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Savings',
                data: [500, 600, 700, 800, 900],
                backgroundColor: '#FBEFBE',
                borderColor: '#D4A017',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
        }
    });

    new Chart(expenseCtx, {
        type: 'pie',
        data: {
            labels: ['Food', 'Transport', 'Entertainment', 'Bills'],
            datasets: [{
                data: [800, 500, 300, 400],
                backgroundColor: ['#D4A017', '#FBEFBE', '#2A2518', '#6B624A'],
            }]
        },
        options: {
            responsive: true,
        }
    });
});
