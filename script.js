document.addEventListener('DOMContentLoaded', function () {
// Category Wise Doughnut Chart
   const categoryCtx = document.getElementById('categoryChart').getContext('2d');
categoryCtx.canvas.width = 650;
categoryCtx.canvas.height = 450;

new Chart(categoryCtx, {
    type: 'doughnut',
    data: {
        labels: ['General Beneficiary', 'SC Beneficiary', 'ST Beneficiary', 'OBC Beneficiary'],
        datasets: [{
            data: [15230, 27894, 19870, 31240],
            backgroundColor: [
                '#ef4444', // General
                '#16df37', // SC
                '#f97316', // ST
                '#3b82f6'  // OBC
            ],
            borderWidth: 3,
            borderColor: '#fff',
            hoverBorderWidth: 5,
            hoverOffset: 10
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 15,
                bottom: 5 // Added bottom padding for the legend
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 50,
                    font: {
                        weight: 'bold',
                        size: 9
                    },
                    usePointStyle: true, // Makes legend markers round like the chart
                    pointStyle: 'circle' // Ensures circle shape
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.label + ': ' + context.parsed.toLocaleString();
                    }
                }
            },
            datalabels: {
                color: '#000',
                anchor: 'end',
                align: 'end',
                offset: 10, // Increased offset from the chart
                formatter: function(value, context) {
                    const label = context.chart.data.labels[context.dataIndex];
                    return `${label} \n${value.toLocaleString()}`;
                },
                font: {
                    weight: 'bold',
                    size: 10
                }
            }
        },
        // Adjust these to create space between chart and labels
        cutout: '50%', // Makes the doughnut thinner (higher percentage = thinner ring)
        radius: '87%'  // Makes the overall chart smaller relative to its container
    },
    plugins: [ChartDataLabels]
});


        // Add interactive animations
        document.addEventListener('DOMContentLoaded', function() {
            // Animate statistics on load
            const statCards = document.querySelectorAll('.stat-card');
            statCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    card.style.transition = 'all 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 200);
            });

            // Add hover effects to mini stats
       
        });
    });