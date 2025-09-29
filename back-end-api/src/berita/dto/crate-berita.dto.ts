export class CreateBeritaDto {
  title: string;       // Judul berita
  content: string;     // Isi berita
  category: string;    // Kategori berita (Politik, Ekonomi, dll)
  image?: string;      // URL gambar berita (opsional)
  created_at?: Date;   // Tanggal berita dibuat
}
