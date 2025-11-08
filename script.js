// Emoji Trends Data
const emojiData = {
    2010: {
        emojis: [
            { icon: '😊', usage: 2.1, label: 'Smiling Face' },
            { icon: '❤️', usage: 1.8, label: 'Red Heart' },
            { icon: '😂', usage: 0.5, label: 'Face with Tears' },
            { icon: '👍', usage: 1.2, label: 'Thumbs Up' },
            { icon: '😢', usage: 0.8, label: 'Crying Face' },
            { icon: '🎉', usage: 0.6, label: 'Party Popper' }
        ],
        totalUsage: 8.5,
        mostPopular: '😊',
        growthRate: '+15%',
        context: '2010: The early days of emoji on smartphones. Unicode 6.0 was released, standardizing emoji across platforms. Usage was modest but growing as smartphones became mainstream.'
    },
    2011: {
        emojis: [
            { icon: '😊', usage: 3.2, label: 'Smiling Face' },
            { icon: '❤️', usage: 2.5, label: 'Red Heart' },
            { icon: '😂', usage: 1.1, label: 'Face with Tears' },
            { icon: '👍', usage: 1.8, label: 'Thumbs Up' },
            { icon: '😢', usage: 1.2, label: 'Crying Face' },
            { icon: '🎉', usage: 0.9, label: 'Party Popper' }
        ],
        totalUsage: 12.3,
        mostPopular: '😊',
        growthRate: '+45%',
        context: '2011: Apple iOS 5 brought emoji to international markets. The smartphone revolution accelerated emoji adoption. Social media platforms began supporting emoji natively.'
    },
    2012: {
        emojis: [
            { icon: '😊', usage: 4.5, label: 'Smiling Face' },
            { icon: '❤️', usage: 3.8, label: 'Red Heart' },
            { icon: '😂', usage: 2.3, label: 'Face with Tears' },
            { icon: '👍', usage: 2.6, label: 'Thumbs Up' },
            { icon: '😍', usage: 2.1, label: 'Heart Eyes' },
            { icon: '🎉', usage: 1.4, label: 'Party Popper' }
        ],
        totalUsage: 18.7,
        mostPopular: '😊',
        growthRate: '+52%',
        context: '2012: Emoji usage exploded as messaging apps like WhatsApp gained massive popularity. Emoji became a universal language transcending text barriers.'
    },
    2013: {
        emojis: [
            { icon: '😂', usage: 5.2, label: 'Face with Tears' },
            { icon: '😊', usage: 5.0, label: 'Smiling Face' },
            { icon: '❤️', usage: 4.9, label: 'Red Heart' },
            { icon: '😍', usage: 3.8, label: 'Heart Eyes' },
            { icon: '👍', usage: 3.2, label: 'Thumbs Up' },
            { icon: '😘', usage: 2.8, label: 'Kissing Face' }
        ],
        totalUsage: 28.4,
        mostPopular: '😂',
        growthRate: '+52%',
        context: '2013: 😂 overtook 😊 as the most popular emoji. Instagram and other visual social platforms drove massive adoption. "Emoji" became Oxford Dictionary word of the year candidate.'
    },
    2014: {
        emojis: [
            { icon: '😂', usage: 7.8, label: 'Face with Tears' },
            { icon: '❤️', usage: 6.2, label: 'Red Heart' },
            { icon: '😍', usage: 5.6, label: 'Heart Eyes' },
            { icon: '😊', usage: 5.1, label: 'Smiling Face' },
            { icon: '😘', usage: 4.2, label: 'Kissing Face' },
            { icon: '👍', usage: 3.9, label: 'Thumbs Up' }
        ],
        totalUsage: 38.9,
        mostPopular: '😂',
        growthRate: '+37%',
        context: '2014: Emoji diversity expanded significantly. Facebook added emoji reactions. Brands began using emoji in marketing campaigns extensively.'
    },
    2015: {
        emojis: [
            { icon: '😂', usage: 11.2, label: 'Face with Tears' },
            { icon: '❤️', usage: 8.4, label: 'Red Heart' },
            { icon: '😍', usage: 7.8, label: 'Heart Eyes' },
            { icon: '😊', usage: 6.3, label: 'Smiling Face' },
            { icon: '😘', usage: 5.7, label: 'Kissing Face' },
            { icon: '🔥', usage: 4.2, label: 'Fire' }
        ],
        totalUsage: 52.1,
        mostPopular: '😂',
        growthRate: '+34%',
        context: '2015: "😂" was declared Oxford Dictionary Word of the Year. Emoji became essential to digital communication. Skin tone modifiers were introduced for diversity.'
    },
    2016: {
        emojis: [
            { icon: '😂', usage: 15.3, label: 'Face with Tears' },
            { icon: '❤️', usage: 10.8, label: 'Red Heart' },
            { icon: '😍', usage: 9.9, label: 'Heart Eyes' },
            { icon: '🔥', usage: 7.2, label: 'Fire' },
            { icon: '😊', usage: 7.0, label: 'Smiling Face' },
            { icon: '😘', usage: 6.5, label: 'Kissing Face' }
        ],
        totalUsage: 68.4,
        mostPopular: '😂',
        growthRate: '+31%',
        context: '2016: Professional emoji usage grew. Slack and workplace tools integrated emoji. The emoji movie was announced, showing mainstream cultural impact.'
    },
    2017: {
        emojis: [
            { icon: '😂', usage: 19.8, label: 'Face with Tears' },
            { icon: '❤️', usage: 13.6, label: 'Red Heart' },
            { icon: '🔥', usage: 10.5, label: 'Fire' },
            { icon: '😍', usage: 10.2, label: 'Heart Eyes' },
            { icon: '😊', usage: 8.1, label: 'Smiling Face' },
            { icon: '💯', usage: 7.4, label: 'Hundred Points' }
        ],
        totalUsage: 85.7,
        mostPopular: '😂',
        growthRate: '+25%',
        context: '2017: Over 5 billion emojis sent daily on Facebook Messenger alone. New emojis included gender-neutral options. Emoji penetrated professional communication.'
    },
    2018: {
        emojis: [
            { icon: '😂', usage: 24.1, label: 'Face with Tears' },
            { icon: '❤️', usage: 16.2, label: 'Red Heart' },
            { icon: '🔥', usage: 13.8, label: 'Fire' },
            { icon: '😍', usage: 12.4, label: 'Heart Eyes' },
            { icon: '💯', usage: 9.8, label: 'Hundred Points' },
            { icon: '😊', usage: 9.2, label: 'Smiling Face' }
        ],
        totalUsage: 103.2,
        mostPopular: '😂',
        growthRate: '+20%',
        context: '2018: World Emoji Day became widely celebrated. Over 200 new emojis added including red-haired people, bald people, and more diverse options.'
    },
    2019: {
        emojis: [
            { icon: '😂', usage: 28.9, label: 'Face with Tears' },
            { icon: '❤️', usage: 19.1, label: 'Red Heart' },
            { icon: '🔥', usage: 16.5, label: 'Fire' },
            { icon: '😍', usage: 14.2, label: 'Heart Eyes' },
            { icon: '💯', usage: 12.3, label: 'Hundred Points' },
            { icon: '✨', usage: 10.5, label: 'Sparkles' }
        ],
        totalUsage: 122.8,
        mostPopular: '😂',
        growthRate: '+19%',
        context: '2019: Emoji became universal. Gen Z pioneered new emoji combinations creating entirely new meanings. TikTok drove viral emoji trends.'
    },
    2020: {
        emojis: [
            { icon: '😂', usage: 35.2, label: 'Face with Tears' },
            { icon: '❤️', usage: 23.8, label: 'Red Heart' },
            { icon: '🔥', usage: 19.7, label: 'Fire' },
            { icon: '😷', usage: 17.2, label: 'Face with Mask' },
            { icon: '💯', usage: 15.1, label: 'Hundred Points' },
            { icon: '😍', usage: 14.9, label: 'Heart Eyes' }
        ],
        totalUsage: 148.3,
        mostPopular: '😂',
        growthRate: '+21%',
        context: '2020: Pandemic year saw 😷 surge in popularity. Remote communication relied heavily on emoji to convey tone. Virtual reactions became standard in video calls.'
    },
    2021: {
        emojis: [
            { icon: '😂', usage: 41.8, label: 'Face with Tears' },
            { icon: '❤️', usage: 28.3, label: 'Red Heart' },
            { icon: '🔥', usage: 23.2, label: 'Fire' },
            { icon: '💯', usage: 18.9, label: 'Hundred Points' },
            { icon: '✨', usage: 17.5, label: 'Sparkles' },
            { icon: '😍', usage: 16.2, label: 'Heart Eyes' }
        ],
        totalUsage: 172.4,
        mostPopular: '😂',
        growthRate: '+16%',
        context: '2021: NFT and crypto culture popularized specific emoji combinations. Discord and gaming communities created unique emoji dialects. Hybrid work normalized professional emoji use.'
    },
    2022: {
        emojis: [
            { icon: '😂', usage: 47.5, label: 'Face with Tears' },
            { icon: '❤️', usage: 32.1, label: 'Red Heart' },
            { icon: '🔥', usage: 26.8, label: 'Fire' },
            { icon: '💯', usage: 22.4, label: 'Hundred Points' },
            { icon: '✨', usage: 20.7, label: 'Sparkles' },
            { icon: '💀', usage: 19.3, label: 'Skull' }
        ],
        totalUsage: 195.7,
        mostPopular: '😂',
        growthRate: '+14%',
        context: '2022: Gen Z irony popularized 💀 as "I\'m dead (laughing)". TikTok trends drove rapid evolution of emoji meanings. Emoji sequences became more sophisticated.'
    },
    2023: {
        emojis: [
            { icon: '😂', usage: 52.3, label: 'Face with Tears' },
            { icon: '❤️', usage: 35.8, label: 'Red Heart' },
            { icon: '🔥', usage: 29.6, label: 'Fire' },
            { icon: '💯', usage: 25.1, label: 'Hundred Points' },
            { icon: '💀', usage: 23.8, label: 'Skull' },
            { icon: '✨', usage: 22.4, label: 'Sparkles' }
        ],
        totalUsage: 215.3,
        mostPopular: '😂',
        growthRate: '+10%',
        context: '2023: AI chatbots began using emoji. Emoji marketing became sophisticated with data-driven strategies. Cross-platform consistency improved significantly.'
    },
    2024: {
        emojis: [
            { icon: '😂', usage: 56.8, label: 'Face with Tears' },
            { icon: '❤️', usage: 38.9, label: 'Red Heart' },
            { icon: '🔥', usage: 32.1, label: 'Fire' },
            { icon: '💀', usage: 27.6, label: 'Skull' },
            { icon: '💯', usage: 27.3, label: 'Hundred Points' },
            { icon: '✨', usage: 24.2, label: 'Sparkles' }
        ],
        totalUsage: 234.8,
        mostPopular: '😂',
        growthRate: '+9%',
        context: '2024: Emoji usage matured with more nuanced communication. AR/VR platforms introduced 3D emoji. Multi-generational emoji literacy reached all-time high.'
    },
    2025: {
        emojis: [
            { icon: '😂', usage: 60.2, label: 'Face with Tears' },
            { icon: '❤️', usage: 41.3, label: 'Red Heart' },
            { icon: '🔥', usage: 34.5, label: 'Fire' },
            { icon: '💀', usage: 30.1, label: 'Skull' },
            { icon: '💯', usage: 29.2, label: 'Hundred Points' },
            { icon: '✨', usage: 25.8, label: 'Sparkles' }
        ],
        totalUsage: 251.7,
        mostPopular: '😂',
        growthRate: '+7%',
        context: '2025: Emoji communication is ubiquitous across all digital platforms. AI-powered emoji suggestions have become standard. Emoji continues evolving as a universal digital language.'
    }
};

// DOM Elements
const timelineSlider = document.getElementById('timeline-slider');
const currentYearDisplay = document.getElementById('current-year');
const emojiGrid = document.getElementById('emoji-grid');
const totalUsageDisplay = document.getElementById('total-usage');
const mostPopularDisplay = document.getElementById('most-popular');
const growthRateDisplay = document.getElementById('growth-rate');
const contextBox = document.getElementById('context-box');
const trendChart = document.getElementById('trend-chart');

// Initialize
let currentYear = 2025;

// Update display based on selected year
function updateDisplay(year) {
    currentYear = year;
    const data = emojiData[year];
    
    // Update year display
    currentYearDisplay.textContent = year;
    currentYearDisplay.style.animation = 'none';
    setTimeout(() => {
        currentYearDisplay.style.animation = 'fadeIn 0.5s ease-in';
    }, 10);
    
    // Update emoji grid
    emojiGrid.innerHTML = '';
    data.emojis.forEach((emoji, index) => {
        const emojiItem = document.createElement('div');
        emojiItem.className = 'emoji-item';
        emojiItem.style.animationDelay = `${index * 0.1}s`;
        emojiItem.innerHTML = `
            <div class="emoji-icon">${emoji.icon}</div>
            <div class="emoji-usage">${emoji.usage}B</div>
            <div class="emoji-label">${emoji.label}</div>
        `;
        emojiGrid.appendChild(emojiItem);
    });
    
    // Update stats
    totalUsageDisplay.textContent = data.totalUsage.toFixed(1);
    mostPopularDisplay.textContent = data.mostPopular;
    growthRateDisplay.textContent = data.growthRate;
    
    // Update context
    contextBox.innerHTML = `<p>${data.context}</p>`;
    
    // Update chart
    drawChart();
}

// Timeline slider event listener
timelineSlider.addEventListener('input', (e) => {
    updateDisplay(parseInt(e.target.value));
});

// Draw trend chart
function drawChart() {
    const ctx = trendChart.getContext('2d');
    const width = trendChart.width = trendChart.offsetWidth;
    const height = trendChart.height = 400;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Get data for chart
    const years = Object.keys(emojiData).map(y => parseInt(y));
    const usageData = years.map(y => emojiData[y].totalUsage);
    
    // Calculate scaling
    const maxUsage = Math.max(...usageData);
    const padding = 60;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    
    // Draw axes
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();
    
    // Draw grid lines
    ctx.strokeStyle = '#f0f0f0';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
        
        // Y-axis labels
        ctx.fillStyle = '#666';
        ctx.font = '12px Arial';
        ctx.textAlign = 'right';
        const value = (maxUsage - (maxUsage / 5) * i).toFixed(0);
        ctx.fillText(value + 'B', padding - 10, y + 4);
    }
    
    // Draw line
    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    years.forEach((year, index) => {
        const x = padding + (chartWidth / (years.length - 1)) * index;
        const y = height - padding - (usageData[index] / maxUsage) * chartHeight;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
        
        // Draw points
        ctx.fillStyle = year <= currentYear ? '#667eea' : '#ccc';
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
        
        // X-axis labels
        if (index % 2 === 0 || index === years.length - 1) {
            ctx.fillStyle = '#666';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(year, x, height - padding + 20);
        }
    });
    
    ctx.stroke();
    
    // Highlight current year
    const currentIndex = years.indexOf(currentYear);
    if (currentIndex !== -1) {
        const x = padding + (chartWidth / (years.length - 1)) * currentIndex;
        const y = height - padding - (usageData[currentIndex] / maxUsage) * chartHeight;
        
        ctx.fillStyle = '#764ba2';
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw vertical line
        ctx.strokeStyle = '#764ba2';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, height - padding);
        ctx.stroke();
        ctx.setLineDash([]);
    }
}

// Initialize on load
window.addEventListener('load', () => {
    updateDisplay(currentYear);
});

// Redraw chart on window resize
window.addEventListener('resize', () => {
    drawChart();
});
