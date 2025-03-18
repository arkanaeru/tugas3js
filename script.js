// Array daftar produk awal
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Fungsi menampilkan daftar produk dalam tabel
function tampilkanProduk() {
    let tbody = document.getElementById("produk-tbody");
    tbody.innerHTML = ""; 

    produkToko.forEach(produk => {
        let row = `
            <tr>
                <td>${produk.id}</td>
                <td>${produk.nama}</td>
                <td>Rp ${produk.harga.toLocaleString()}</td>
                <td>${produk.stok}</td>
                <td><button onclick="hapusProduk(${produk.id})">Hapus</button></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Fungsi menambahkan produk baru
function tambahProduk() {
    let nama = document.getElementById("nama").value;
    let harga = parseInt(document.getElementById("harga").value);
    let stok = parseInt(document.getElementById("stok").value);

    if (nama === "" || isNaN(harga) || isNaN(stok) || harga <= 0 || stok <= 0) {
        alert("⚠️ Masukkan data produk yang valid!");
        return;
    }

    let idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
    let produkBaru = { id: idBaru, nama: nama, harga: harga, stok: stok };

    produkToko.push(produkBaru);
    tampilkanProduk(); // Perbarui tampilan tabel

    // Alert saat produk berhasil ditambahkan
    alert(`✅ Produk "${nama}" berhasil ditambahkan!`);

    // Reset input setelah menambahkan produk
    document.getElementById("nama").value = "";
    document.getElementById("harga").value = "";
    document.getElementById("stok").value = "";
}

// Fungsi menghapus produk berdasarkan ID
function hapusProduk(id) {
    let produk = produkToko.find(produk => produk.id === id);
    if (!produk) return;

    let konfirmasi = confirm(`❌ Apakah Anda yakin ingin menghapus produk?"${produk.nama}"?`);
    if (konfirmasi) {
        produkToko = produkToko.filter(produk => produk.id !== id);
        tampilkanProduk(); // Perbarui tampilan tabel
        alert(`🗑️ Produk "${produk.nama}" telah dihapus.`);
    }
}

// Jalankan pertama kali untuk menampilkan daftar produk awal
tampilkanProduk();
