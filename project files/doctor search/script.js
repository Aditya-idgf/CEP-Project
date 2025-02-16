function filterDoctors() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const doctorGrid = document.getElementById('doctorGrid');
    const doctorCards = doctorGrid.getElementsByClassName('doctor-card');

    for (let i = 0; i < doctorCards.length; i++) {
        const doctorName = doctorCards[i].getAttribute('data-name').toLowerCase();
        if (doctorName.includes(filter)) {
            doctorCards[i].style.display = "";
        } else {
            doctorCards[i].style.display = "none";
        }
    }
}

function viewProfile(name, title, imageUrl) {
    document.getElementById('profileName').innerText = name;
    document.getElementById('profileTitle').innerText = title;
    document.getElementById('profileImage').src = imageUrl;
    document.getElementById('profileModal').style.display = 'flex';
}

function closeProfile() {
    document.getElementById('profileModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.view-profile-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const title = this.getAttribute('data-title');
            const image = this.getAttribute('data-image');
            viewProfile(name, title, image);
        });
    });
});