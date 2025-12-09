const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Serve halaman user
app.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname, 'user.html'));
});

// Serve halaman admin
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// Endpoint untuk simpan data (opsional)
app.post('/save-data', (req, res) => {
    console.log('Data diterima:', req.body);
    // Di sini Anda bisa simpan ke database jika diperlukan
    res.json({ success: true, message: 'Data berhasil disimpan' });
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
    console.log(`Halaman User: http://localhost:${port}/user`);
    console.log(`Halaman Admin: http://localhost:${port}/admin`);
});