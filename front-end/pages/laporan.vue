<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laporan Audit - Mizan Amanah</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#0e5a97',
                        secondary: '#0e7490',
                        accent: '#059669'
                    }
                }
            }
        }
    </script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(to bottom, #f0f9ff, #e6f2ff);
            min-height: 100vh;
        }
        
        .header-bg {
            background: linear-gradient(135deg, #0e5a97 0%, #0e7490 100%);
        }
        
        .card-shadow {
            box-shadow: 0 10px 30px rgba(14, 90, 151, 0.15);
        }
        
        .footer-bg {
            background: linear-gradient(135deg, #0e5a97 0%, #0e7490 100%);
        }
        
        .report-item {
            transition: all 0.3s ease;
            border-left: 4px solid #0e5a97;
        }
        
        .report-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(14, 90, 151, 0.1);
            border-left: 4px solid #059669;
        }
        
        /* Nuxt Link Style */
        .nuxt-link {
            color: #0e5a97;
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .nuxt-link:hover {
            color: #0e7490;
            text-decoration: underline;
        }
        
        .nuxt-link-active {
            font-weight: bold;
            border-bottom: 2px solid #0e5a97;
        }
    </style>
</head>
<body class="bg-gray-50">
    <div id="app">
        <!-- Header -->
        <header class="text-white header-bg">
            <div class="container px-4 py-8 mx-auto">
                <div class="flex flex-col items-center text-center">
                    <h1 class="mb-2 text-4xl font-bold">Mizan Amanah</h1>
                    <p class="text-lg opacity-90">Lembaga Amil Zakat Nasional</p>
                </div>
            </div>
        </header>

        <!-- Navigation -->
        <nav class="bg-white shadow-md">
            <div class="container px-4 mx-auto">
                <div class="flex justify-center py-4 space-x-8">
                    <a href="/" class="font-medium text-gray-600 hover:text-primary">Beranda</a>
                    <a href="/tentang" class="font-medium text-gray-600 hover:text-primary">Tentang</a>
                    <a href="/program" class="font-medium text-gray-600 hover:text-primary">Program</a>
                    <a href="/laporan" class="font-semibold border-b-2 text-primary border-primary">Laporan</a>
                    <a href="/kontak" class="font-medium text-gray-600 hover:text-primary">Kontak</a>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <main class="container px-4 py-12 mx-auto">
            <div class="max-w-4xl mx-auto">
                <!-- Page Title -->
                <div class="mb-12 text-center">
                    <h1 class="mb-4 text-4xl font-bold text-primary">Laporan Audit</h1>
                    <div class="w-24 h-2 mx-auto mb-6 bg-secondary"></div>
                </div>

                <!-- Intro Text -->
                <div class="p-8 mb-10 bg-white rounded-lg card-shadow">
                    <h2 class="mb-4 text-2xl font-semibold text-center text-primary">Laporan Audit dan Keuangan Mizan Amanah</h2>
                    <p class="text-lg leading-relaxed text-center text-gray-700">
                        Alhamdulillah setiap tahunnya Mizan Amanah selalu diaudit oleh Kantor Akuntan Publik (KAP) 
                        dengan hasil predikat <span class="font-semibold text-accent">Wajar Tanpa Pengecualian (WTP)</span>. 
                        Anda bisa download dan membaca laporan hasil audit kami di bawah ini:
                    </p>
                </div>

                <!-- Reports List -->
                <div class="mb-12 overflow-hidden bg-white rounded-lg card-shadow">
                    <div class="px-6 py-4 text-white bg-primary">
                        <h3 class="text-xl font-semibold">Daftar Laporan Audit</h3>
                    </div>
                    
                    <div class="divide-y divide-gray-100">
                        <!-- Report Items -->
                        <div v-for="report in reports" :key="report.year" class="p-6 bg-white report-item">
                            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                <div class="mb-3 sm:mb-0">
                                    <span class="text-lg font-medium text-gray-800">Laporan Audit Tahun {{ report.year }}</span>
                                </div>
                                <div class="flex space-x-4">
                                    <a :href="report.viewUrl" class="font-medium text-secondary hover:text-primary">
                                        <i class="mr-1 far fa-eye"></i> Lihat Laporan
                                    </a>
                                    <a :href="report.downloadUrl" class="font-medium text-accent hover:text-primary">
                                        <i class="mr-1 far fa-arrow-alt-circle-down"></i> Download
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Additional Info -->
                <div class="p-8 bg-white rounded-lg card-shadow">
                    <h3 class="mb-4 text-2xl font-semibold text-center text-primary">Tentang Predikat WTP</h3>
                    <p class="mb-4 text-gray-700">
                        Predikat <span class="font-semibold">Wajar Tanpa Pengecualian (WTP)</span> merupakan opini tertinggi 
                        yang diberikan oleh Kantor Akuntan Publik (KAP) atas laporan keuangan suatu entitas. 
                        Opini WTP berarti laporan keuangan disajikan secara wajar dalam semua hal yang material.
                    </p>
                    <p class="text-gray-700">
                        Mizan Amanah berkomitmen untuk selalu menjaga transparansi dan akuntabilitas dalam 
                        pengelolaan dana zakat, infak, sedekah, dan wakaf yang dipercayakan oleh masyarakat.
                    </p>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="mt-16 text-white footer-bg">
            <div class="container px-4 py-12 mx-auto">
                <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div>
                        <h3 class="mb-4 text-xl font-semibold">Mizan Amanah</h3>
                        <p class="opacity-90">
                            Lembaga Amil Zakat Nasional yang terpercaya dalam mengelola dana sosial keagamaan
                            dengan prinsip transparansi dan akuntabilitas.
                        </p>
                    </div>
                    <div>
                        <h3 class="mb-4 text-xl font-semibold">Tautan Cepat</h3>
                        <ul class="space-y-2">
                            <li><a href="/tentang" class="opacity-90 hover:opacity-100">Tentang Kami</a></li>
                            <li><a href="/program" class="opacity-90 hover:opacity-100">Program</a></li>
                            <li><a href="/laporan" class="opacity-90 hover:opacity-100">Laporan Keuangan</a></li>
                            <li><a href="/kontak" class="opacity-90 hover:opacity-100">Kontak</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="mb-4 text-xl font-semibold">Kontak Kami</h3>
                        <address class="not-italic opacity-90">
                            <p><i class="mr-2 fas fa-map-marker-alt"></i> Jl. Contoh Alamat No. 123</p>
                            <p class="ml-6">Jakarta Selatan, Indonesia</p>
                            <p class="mt-3"><i class="mr-2 fas fa-envelope"></i> info@mizanamanah.com</p>
                            <p><i class="mr-2 fas fa-phone-alt"></i> (021) 1234-5678</p>
                        </address>
                    </div>
                </div>
                <div class="pt-8 mt-8 text-center border-t border-white border-opacity-20 opacity-90">
                    <p>© 2023 Mizan Amanah. Seluruh hak cipta dilindungi.</p>
                </div>
            </div>
        </footer>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@3.2.47/dist/vue.global.js"></script>
    <script>
        const { createApp, ref } = Vue;
        
        createApp({
            setup() {
                const reports = ref([
                    { year: 2011, viewUrl: '#', downloadUrl: '#' },
                    { year: 2012, viewUrl: '#', downloadUrl: '#' },
                    { year: 2013, viewUrl: '#', downloadUrl: '#' },
                    { year: 2014, viewUrl: '#', downloadUrl: '#' },
                    { year: 2015, viewUrl: '#', downloadUrl: '#' },
                    { year: 2016, viewUrl: '#', downloadUrl: '#' },
                    { year: 2017, viewUrl: '#', downloadUrl: '#' },
                    { year: 2018, viewUrl: '#', downloadUrl: '#' },
                    { year: 2019, viewUrl: '#', downloadUrl: '#' },
                    { year: 2020, viewUrl: '#', downloadUrl: '#' },
                    { year: 2021, viewUrl: '#', downloadUrl: '#' }
                ]);
                
                return {
                    reports
                };
            }
        }).mount('#app');
    </script>
</body>
</html>