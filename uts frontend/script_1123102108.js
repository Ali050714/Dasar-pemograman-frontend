$(document).ready(function () {
    $('#shippingForm').submit(function (event) {
        event.preventDefault(); // Mencegah form untuk submit secara default

        // Ambil data dari form
        var origin = $('#origin').val();
        var destination = $('#destination').val();
        var weight = $('#weight').val();

        if (!origin || !destination || !weight) {
            alert('Semua kolom harus diisi!');
            return;
        }

        // Kirim data ke fungsi hitungEstimasiBiaya
        hitungEstimasiBiaya(origin, destination, weight);
    });
});

function hitungEstimasiBiaya(origin, destination, weight) {
    // Menghitung biaya pengiriman berdasarkan kota dan berat
    var biaya = 0;

    if (origin === destination) {
        $('#costEstimate').html('Kota asal dan kota tujuan tidak boleh sama.');
        return;
    }

    // Asumsi biaya pengiriman (harga per kg berdasarkan kota)
    var biayaPerKg = {
        "Jakarta": {
            "Bandung": 50000,
            "Surabaya": 150000,
            "Banyuwangi": 200000,
            "Malang": 250000
        },
        "Bandung": {
            "Jakarta": 50000,
            "Surabaya": 20000,
            "Banyuwangi": 25000,
            "Malang": 30000
        },
        "Surabaya": {
            "Jakarta": 15000,
            "Bandung": 50000,
            "Banyuwangi": 20000,
            "Malang": 30000
        },
        "Banyuwangi": {
            "Jakarta": 20000,
            "Bandung": 25000,
            "Surabaya": 20000,
            "Malang": 25000,
        },
        "Malang": {
            "Jakarta": 25000,
            "Bandung": 30000,
            "Surabaya": 30000,
            "Banyuwangi": 25000,
        }
    };

    // Menghitung biaya
    if (biayaPerKg[origin] && biayaPerKg[origin][destination]) {
        biaya = biayaPerKg[origin][destination] * weight;
        $('#costEstimate').html('Estimasi Biaya Pengiriman: Rp ' + biaya);
    } else {
        $('#costEstimate').html('Biaya pengiriman tidak tersedia untuk kombinasi ini.');
    }
}
