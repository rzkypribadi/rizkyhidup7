const startDate = new Date('2011-07-07T00:00:00');

function updateStopwatch() {
    const now = new Date();
    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const weeks = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('stopwatch').innerText = 
        `${String(years).padStart(2, '0')} Tahun ${String(months).padStart(2, '0')} Bulan ${String(weeks).padStart(2, '0')} Minggu ${String(days).padStart(2, '0')} Hari ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Memutar lagu otomatis saat halaman dibuka
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bgMusic');
    audio.play();
});

setInterval(updateStopwatch, 1000);
updateStopwatch();