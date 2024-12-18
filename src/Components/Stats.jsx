import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Statsstyling.css';

function StatsInfo({ statsdetail }) {
    const canvasRef = useRef(null);
    const chartRef = useRef(null);  // Ref to store the chart instance

    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            
            // If there's an existing chart, destroy it before creating a new one
            if (chartRef.current) {
                chartRef.current.destroy();
            }

            const activeUserPercentage = (statsdetail.activeuser / statsdetail.totaluser) * 100;
            const inactiveUserPercentage = 100 - activeUserPercentage;

            // Create a new chart and store the instance
            chartRef.current = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['Active Users', 'Inactive Users'],
                    datasets: [{
                        data: [activeUserPercentage, inactiveUserPercentage],
                        backgroundColor: ['#FF6347', '#B0E0E6'],
                        borderColor: ['#FF6347', '#B0E0E6'],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        tooltip: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    return tooltipItem.label + ': ' + tooltipItem.raw.toFixed(2) + '%';
                                }
                            }
                        }
                    }
                }
            });
        }

        // Cleanup: destroy the chart when the component unmounts or statsdetail changes
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [statsdetail]);

    return (
        <div className='statsdetails'>
            <div className="stats-text">
                <p><span className="material-icons">group</span> Total User : {statsdetail.totaluser}</p>
                <p><span className="material-icons">verified_user</span> Active User : {statsdetail.activeuser}</p>
                <p><span className="material-icons">person_add</span> New Signups : {statsdetail.newsignup}</p>
                <p><span className="material-icons">trending_up</span> Active User Percentage : {statsdetail.activeperc} % </p>
            </div>
            <div className="stats-chart">
                <canvas ref={canvasRef} width="250" height="250"></canvas>
            </div>
        </div>
    );
}

export default StatsInfo;

