// Event untuk menghitung luas segitiga //
document.addEventListener('DOMContentLoaded', () => {
    // Seleksi semua form
    const forms = document.querySelectorAll('form');

    // Mencegah reload halaman
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Ambil ID input untuk menentukan jenis perhitungan
            const inputs = form.querySelectorAll('input[type="number"]');
            let result;

            // Luas Segitiga
            if (form.contains(document.getElementById('alas-segitiga'))) {
                const alas = parseFloat(document.getElementById('alas-segitiga').value);
                const tinggi = parseFloat(document.getElementById('tinggi-segitiga').value);

                if (isNaN(alas) || isNaN(tinggi)) {
                    alert('Masukkan nilai alas dan tinggi yang valid!');
                    return;
                }

                // Validasi: Cek jika ada input 0 atau kosong
                if (alas === 0 || tinggi === 0 || isNaN(alas) || isNaN(tinggi)) {
                    alert('Nilai tidak boleh 0 atau kosong!');
                    return;
                }

                result = 0.5 * alas * tinggi;
                alert(`Luas Segitiga: ${result % 1 === 0 ? result.toFixed(0) : result.toFixed(2)} cm²`);

            // Keliling Segitiga
            } else if (form.contains(document.getElementById('sisi-a-segitiga'))) {
                const sisiA = parseFloat(document.getElementById('sisi-a-segitiga').value);
                const sisiB = parseFloat(document.getElementById('sisi-b-segitiga').value);
                const sisiC = parseFloat(document.getElementById('sisi-c-segitiga').value);

                if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
                    alert('Masukkan nilai sisi A, B, dan C yang valid!');
                    return;
                }

                // Validasi: Cek jika ada input 0 atau kosong
                if (sisiA === 0 || sisiB === 0 || sisiC === 0 || isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
                    alert('Nilai tidak boleh 0 atau kosong!');
                    return;
                }

                result = sisiA + sisiB + sisiC;
                alert(`Keliling Segitiga: ${result % 1 === 0 ? result.toFixed(0) : result.toFixed(2)} cm²`);

            // Luas Persegi Panjang
            } else if (form.contains(document.getElementById('panjang'))) {
                const panjang = parseFloat(document.getElementById('panjang').value);
                const lebar = parseFloat(document.getElementById('lebar').value);

                if (isNaN(panjang) || isNaN(lebar)) {
                    alert('Masukkan nilai panjang dan lebar yang valid!');
                    return;
                }

                // Validasi: Cek jika ada input 0 atau kosong
                if (panjang === 0 || lebar === 0 || isNaN(panjang) || isNaN(lebar)) {
                    alert('Nilai tidak boleh 0 atau kosong!');
                    return;
                }

                result = panjang * lebar;
                alert(`Luas Persegi Panjang: ${result % 1 === 0 ? result.toFixed(0) : result.toFixed(2)} cm²`);

            // Keliling Persegi Panjang
            } else if (form.contains(document.getElementById('panjang-keliling'))) {
                const panjang = parseFloat(document.getElementById('panjang-keliling').value);
                const lebar = parseFloat(document.getElementById('lebar-keliling').value);

                if (isNaN(panjang) || isNaN(lebar)) {
                    alert('Masukkan nilai panjang dan lebar yang valid!');
                    return;
                }

                // Validasi: Cek jika ada input 0 atau kosong
                if (panjang === 0 || lebar === 0 || isNaN(panjang) || isNaN(lebar)) {
                    alert('Nilai tidak boleh 0 atau kosong!');
                    return;
                }

                result = 2 * (panjang + lebar);
                alert(`Keliling Persegi Panjang: ${result % 1 === 0 ? result.toFixed(0) : result.toFixed(2)} cm²`);
            }

            // Reset form setelah perhitungan
            form.reset();
        });
    });

    // Event listener untuk tombol reset
    const resetButtons = document.querySelectorAll('button[type="reset"]');
    resetButtons.forEach(button => {
        button.addEventListener('click', () => {
            const form = button.closest('form');
            form.reset();
        });
    });
});