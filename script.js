// Panel management
const numberPanel = document.getElementById('numberPanel');
const profilePanel = document.getElementById('profilePanel');
const loadingPanel = document.getElementById('loadingPanel');

function showPanel(panel) {
    // Hide all panels
    numberPanel.classList.remove('active');
    profilePanel.classList.remove('active');
    loadingPanel.classList.remove('active');
    
    // Show selected panel
    panel.classList.add('active');
}

function showLoading() {
    showPanel(loadingPanel);
}

function loadProfile() {
    const countryCode = document.getElementById('countryCode').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    
    // Validation
    if (!phoneNumber || phoneNumber.length < 9) {
        alert('Please enter a valid phone number');
        return;
    }
    
    // Show loading
    showLoading();
    
    // Simulate API call delay
    setTimeout(() => {
        // Update profile information
        document.getElementById('profileNumber').textContent = countryCode + ' ' + phoneNumber;
        document.getElementById('profileName').textContent = 'User ' + phoneNumber;
        
        // For demo purposes, using a placeholder image
        // In real implementation, you would fetch the actual WhatsApp DP
        document.getElementById('profileImage').src = 'https://via.placeholder.com/150/25D366/FFFFFF?text=WA';
        
        // Show profile panel
        showPanel(profilePanel);
    }, 2000);
}

function backToNumber() {
    showPanel(numberPanel);
}

function downloadDP() {
    const profileImage = document.getElementById('profileImage').src;
    
    // Create temporary link for download
    const link = document.createElement('a');
    link.href = profileImage;
    link.download = 'whatsapp-dp.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success message
    alert('Profile picture download started!');
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    showPanel(numberPanel);
    
    // Add input validation
    document.getElementById('phoneNumber').addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });
});

// Keyboard navigation
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && numberPanel.classList.contains('active')) {
        loadProfile();
    }
});
