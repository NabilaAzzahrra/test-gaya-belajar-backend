# Menggunakan image Node.js versi terbaru sebagai base image
FROM node:18-alpine

# Buat direktori aplikasi di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json ke direktori kerja
COPY package*.json ./

# Install dependensi aplikasi
RUN npm install

# Salin kode aplikasi ke direktori kerja
COPY . .

# Expose port 4001 untuk aplikasi
EXPOSE 8004

# Menjalankan aplikasi saat container dijalankan
CMD ["npm", "start"]