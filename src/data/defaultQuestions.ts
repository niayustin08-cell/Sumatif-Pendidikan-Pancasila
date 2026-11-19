import { Question } from '../types';
import imgBerdoaBersama from '../assets/images/berdoa_bersama_kelas_1795060892045.jpg';
import imgGotongRoyong from '../assets/images/gotong_royong_bersih_1795060891954.jpg';
import imgTertibLaluLintas from '../assets/images/tertib_lalu_lintas_1795060891389.jpg';
import imgMusyawarahKelas from '../assets/images/musyawarah_kelas_1795060891682.jpg';
import imgPiketKelas from '../assets/images/siswa_piket_kelas_1795060892123.jpg';

/**
 * Bank Soal Standar Pendidikan Pancasila Kelas VI SD (Kurikulum Merdeka)
 * Total: 35 Butir Soal
 * - 15 Soal Pilihan Ganda (PG)
 * - 3 Soal Pilihan Ganda Kompleks (PGK - 3 opsi, jawaban benar bisa >1)
 * - 7 Soal Pilihan Ganda Kompleks Kategori (PGK Kategori - 3 pernyataan Benar/Salah)
 * - 10 Soal Isian Singkat
 */
export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // I. PILIHAN GANDA (15 SOAL: No. 1 - 15)
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Hubungan Nilai-Nilai Pancasila dalam Praktik Hidup Sehari-hari',
    elemen: 'Pancasila',
    difficulty: 'Mudah',
    imageUrl: imgBerdoaBersama,
    imageCaption: 'Siswa kelas VI berdoa bersama sesuai keyakinan masing-masing sebelum memulai pelajaran.',
    text: 'Perhatikan gambar kegiatan siswa kelas VI sebelum memulai pembelajaran di kelas! Mereka berdoa bersama dengan khusyuk dan saling menghormati teman yang berbeda agama. Perilaku tersebut mencerminkan hubungan erat antara sila pertama Pancasila dengan sila...',
    options: [
      { id: 'A', text: 'Kedua, karena memperlakukan sesama manusia dengan adil dan penuh kasih sayang tanpa membedakan agama' },
      { id: 'B', text: 'Keempat, karena semua siswa wajib mengikuti keputusan ketua kelas tentang cara berdoa' },
      { id: 'C', text: 'Kelima, karena siswa berlomba-lomba mendapatkan nilai tertinggi di kelas' },
      { id: 'D', text: 'Ketiga, karena semua siswa harus memiliki agama yang sama agar tetap bersatu' },
    ],
    correctAnswer: 'A',
    explanation:
      'Berdoa dengan khusyuk mencerminkan sila pertama (Ketuhanan Yang Maha Esa), sedangkan sikap saling menghormati dan memperlakukan teman berbeda agama dengan adil mencerminkan keterkaitan langsung dengan sila kedua (Kemanusiaan yang Adil dan Beradab).',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Hubungan Nilai-Nilai Pancasila dalam Praktik Hidup Sehari-hari',
    elemen: 'Pancasila',
    difficulty: 'Sedang',
    text: 'Kelima sila dalam Pancasila merupakan satu kesatuan yang bulat dan utuh serta saling menjiwai. Saat terjadi bencana banjir di wilayah tetangga, warga mengumpulkan bantuan makanan dan pakaian secara sukarela tanpa membeda-bedakan suku maupun agama para korban. Tindakan tersebut menunjukkan keterkaitan antara...',
    options: [
      { id: 'A', text: 'Sila pertama saja karena bantuan diberikan sebagai ibadah pribadi' },
      { id: 'B', text: 'Sila kedua, sila ketiga, dan sila kelima yang saling menguatkan dalam kepedulian sosial' },
      { id: 'C', text: 'Sila keempat saja karena bantuan harus melalui pemungutan suara' },
      { id: 'D', text: 'Sila ketiga saja karena hanya membantu warga yang berasal dari satu daerah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Menolong korban bencana mencerminkan rasa kemanusiaan (Sila ke-2), memperkuat persatuan bangsa tanpa membedakan suku/agama (Sila ke-3), dan mewujudkan kepedulian serta keadilan sosial bagi sesama (Sila ke-5).',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Belajar Mengamalkan Pancasila',
    elemen: 'Pancasila',
    difficulty: 'Mudah',
    imageUrl: imgGotongRoyong,
    imageCaption: 'Siswa SD bersama warga masyarakat bergotong royong merawat kebersihan taman desa.',
    text: 'Amati gambar kegiatan gotong royong yang dilakukan para siswa bersama warga masyarakat di taman desa! Kegiatan bekerja sama membersihkan lingkungan dan menanam pohon tanpa memandang perbedaan latar belakang merupakan wujud nyata pengamalan Pancasila terutama sila...',
    options: [
      { id: 'A', text: 'Ketuhanan Yang Maha Esa' },
      { id: 'B', text: 'Kemanusiaan yang Adil dan Beradab' },
      { id: 'C', text: 'Persatuan Indonesia' },
      { id: 'D', text: 'Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan' },
    ],
    correctAnswer: 'C',
    explanation:
      'Gotong royong membersihkan lingkungan bersama warga menumbuhkan rasa kebersamaan, kekompakan, dan cinta tanah air yang merupakan wujud nyata pengamalan Sila ke-3: Persatuan Indonesia.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Belajar Mengamalkan Pancasila',
    elemen: 'Pancasila',
    difficulty: 'Mudah',
    text: 'Made melihat teman sekelasnya, Siti, terjatuh saat bermain di halaman sekolah sehingga lututnya terluka. Sikap Made yang paling tepat sebagai bentuk pengamalan sila kedua Pancasila adalah...',
    options: [
      { id: 'A', text: 'Segera menolong Siti dan mengantarnya ke ruang UKS untuk diobati' },
      { id: 'B', text: 'Membiarkannya saja karena Siti bukan anggota kelompok belajarnya' },
      { id: 'C', text: 'Menertawakan Siti terlebih dahulu lalu baru melaporkan ke guru' },
      { id: 'D', text: 'Menunggu bel masuk berbunyi agar tidak terlambat mengikuti pelajaran' },
    ],
    correctAnswer: 'A',
    explanation:
      'Sila kedua Pancasila (Kemanusiaan yang Adil dan Beradab) mengajarkan kita untuk memiliki empati, tenggang rasa, dan sigap menolong sesama manusia yang mengalami kesulitan tanpa membeda-bedakan.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Belajar Mengamalkan Pancasila',
    elemen: 'Pancasila',
    difficulty: 'Sedang',
    text: 'Dalam pemilihan lokasi kegiatan kunjungan belajar kelas VI, sebagian besar siswa sepakat memilih museum sejarah, namun Adi tetap memaksakan keinginannya agar pergi ke taman hiburan dan menolak ikut jika keinginannya tidak dituruti. Sikap Adi tersebut bertentangan dengan pengamalan Pancasila sila ke-...',
    options: [
      { id: 'A', text: 'Sila Pertama' },
      { id: 'B', text: 'Sila Kedua' },
      { id: 'C', text: 'Sila Ketiga' },
      { id: 'D', text: 'Sila Keempat' },
    ],
    correctAnswer: 'D',
    explanation:
      'Tidak memaksakan kehendak kepada orang lain dan menghormati hasil keputusan musyawarah bersama merupakan pengamalan nilai-nilai Sila keempat Pancasila.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Mengenal Norma',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    difficulty: 'Mudah',
    imageUrl: imgTertibLaluLintas,
    imageCaption: 'Seorang siswi menyeberang jalan di zebra cross Zona Selamat Sekolah saat lampu lalu lintas merah.',
    text: 'Perhatikan gambar di depan gerbang sekolah tersebut! Para pengendara berhenti rapi di belakang garis putih ketika lampu merah menyala agar siswi dapat menyeberang dengan aman di zebra cross. Aturan lalu lintas yang dipatuhi oleh pengendara dan penyeberang jalan pada gambar termasuk jenis norma...',
    options: [
      { id: 'A', text: 'Norma Agama' },
      { id: 'B', text: 'Norma Kesusilaan' },
      { id: 'C', text: 'Norma Kesopanan' },
      { id: 'D', text: 'Norma Hukum' },
    ],
    correctAnswer: 'D',
    explanation:
      'Peraturan lalu lintas (berhenti saat lampu merah, memakai helm, menyeberang di zebra cross) dibuat oleh pemerintah/negara, bersifat mengikat semua warga, dan memiliki sanksi tegas (tilang/denda). Hal ini termasuk Norma Hukum.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Mengenal Norma',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    difficulty: 'Sedang',
    text: 'Di Indonesia terdapat empat macam norma yang berlaku di masyarakat. Manakah pasangan jenis norma dan sanksi bagi pelanggarnya yang paling tepat?',
    options: [
      { id: 'A', text: 'Norma Kesopanan — sanksinya berupa hukuman penjara atau denda uang dari pengadilan' },
      { id: 'B', text: 'Norma Kesusilaan — sanksinya berupa rasa bersalah, malu, dan penyesalan dalam hati nurani' },
      { id: 'C', text: 'Norma Hukum — sanksinya hanya berupa teguran halus dari tetangga sekitar' },
      { id: 'D', text: 'Norma Agama — sanksinya berupa dicemooh dan dikucilkan oleh teman bermain saja' },
    ],
    correctAnswer: 'B',
    explanation:
      'Norma kesusilaan bersumber dari hati nurani manusia, sehingga pelanggarnya merasakan sanksi batin berupa penyesalan, rasa bersalah, dan gelisah. Norma hukum sanksinya pidana/denda, norma kesopanan sanksinya celaan/pengucilan masyarakat, dan norma agama sanksinya dosa dari Tuhan Yang Maha Esa.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Mengenal Norma',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    difficulty: 'Mudah',
    text: 'Ketika berjalan melewati sekelompok orang tua yang sedang duduk di depan rumah, Dayu menundukkan badan sedikit sambil tersenyum dan mengucapkan "permisi". Perilaku Dayu tersebut merupakan wujud kepatuhan terhadap norma...',
    options: [
      { id: 'A', text: 'Norma Kesopanan' },
      { id: 'B', text: 'Norma Hukum' },
      { id: 'C', text: 'Norma Ekonomi' },
      { id: 'D', text: 'Norma Adat Tertulis' },
    ],
    correctAnswer: 'A',
    explanation:
      'Mengucapkan permisi, bersikap santun, dan menghormati orang yang lebih tua dalam pergaulan sehari-hari adalah penerapan Norma Kesopanan yang bersumber dari kebiasaan baik masyarakat.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Hak dan Kewajiban',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    difficulty: 'Mudah',
    text: 'Setiap anak memiliki hak dan kewajiban di lingkungan keluarga. Agar kehidupan di rumah berjalan harmonis dan penuh tanggung jawab, pelaksanaan hak dan kewajiban seharusnya...',
    options: [
      { id: 'A', text: 'Menuntut hak terlebih dahulu tanpa perlu memikirkan kewajiban' },
      { id: 'B', text: 'Dilaksanakan secara seimbang, yakni mendahulukan kewajiban sebelum menuntut hak' },
      { id: 'C', text: 'Kewajiban hanya menjadi tugas orang tua, sedangkan anak hanya menerima hak' },
      { id: 'D', text: 'Dilakukan hanya ketika diberi hadiah oleh orang tua' },
    ],
    correctAnswer: 'B',
    explanation:
      'Hak dan kewajiban harus dijalankan secara seimbang. Sebagai anak yang bertanggung jawab, kita hendaknya melaksanakan kewajiban terlebih dahulu (seperti membantu orang tua dan belajar) sebelum menuntut hak.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Hak dan Kewajiban',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    difficulty: 'Sedang',
    text: 'Berikut ini yang merupakan pasangan yang TEPAT antara kewajiban siswa di sekolah dengan hak yang diperoleh setelah melaksanakannya adalah...',
    options: [
      { id: 'A', text: 'Mengerjakan tugas dan belajar dengan tekun — berhak mendapatkan nilai serta bimbingan dari guru' },
      { id: 'B', text: 'Membuang sampah sembarangan di kelas — berhak belajar di ruang kelas yang bersih dan harum' },
      { id: 'C', text: 'Datang terlambat ke sekolah — berhak mendapatkan penghargaan sebagai siswa teladan' },
      { id: 'D', text: 'Mencoret-coret buku perpustakaan — berhak meminjam buku baru setiap minggu' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kewajiban belajar dan mengerjakan tugas dengan tekun berhubungan langsung dengan hak siswa untuk memperoleh bimbingan pembelajaran serta hasil penilaian yang adil dari guru.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Hak dan Kewajiban',
    elemen: 'Negara Kesatuan Republik Indonesia',
    difficulty: 'Sedang',
    text: 'Sebagai warga masyarakat yang baik, kita berhak menikmati taman desa yang bersih, rapi, dan sejuk. Untuk menjaga hak tersebut tetap lestari bagi semua warga, kewajiban yang harus kita lakukan adalah...',
    options: [
      { id: 'A', text: 'Memetik bunga di taman desa untuk dibawa pulang ke rumah' },
      { id: 'B', text: 'Menjaga kebersihan, tidak merusak fasilitas umum, dan ikut kerja bakti lingkungan' },
      { id: 'C', text: 'Melarang warga dari dusun lain berkunjung ke taman desa' },
      { id: 'D', text: 'Menyerahkan seluruh pemeliharaan taman hanya kepada kepala desa' },
    ],
    correctAnswer: 'B',
    explanation:
      'Hak menikmati fasilitas umum yang bersih dan nyaman harus diimbangi dengan kewajiban menjaga kebersihan, merawat fasilitas, dan berpartisipasi dalam kerja bakti lingkungan.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Manfaat Musyawarah',
    elemen: 'Pancasila',
    difficulty: 'Mudah',
    text: 'Warga Banjar/Dusun mengadakan pertemuan untuk menentukan jadwal ronda malam dan lokasi pemasangan lampu penerangan jalan. Manfaat utama dilakukannya musyawarah dalam menyelesaikan persoalan bersama tersebut adalah...',
    options: [
      { id: 'A', text: 'Mempercepat perdebatan agar kelompok tertentu bisa langsung menang' },
      { id: 'B', text: 'Menghasilkan keputusan adil yang diterima bersama, mempererat persaudaraan, dan mencegah perselisihan' },
      { id: 'C', text: 'Mengurangi tanggung jawab warga dalam menjaga keamanan lingkungan' },
      { id: 'D', text: 'Memberikan keuntungan pribadi bagi pemimpin rapat saja' },
    ],
    correctAnswer: 'B',
    explanation:
      'Musyawarah bermanfaat untuk mencari solusi terbaik yang adil dan disepakati bersama (mufakat), memperkuat persatuan dan kekeluargaan, serta menghindari pertikaian antarwarga.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Langkah-Langkah Bermusyawarah',
    elemen: 'Pancasila',
    difficulty: 'Sukar',
    text: 'Perhatikan tahapan kegiatan bermusyawarah di kelas berikut:\n1) Mengajukan usulan atau pendapat secara bergantian dan sopan\n2) Menyepakati hasil keputusan bersama dan melaksanakannya dengan tanggung jawab\n3) Menentukan pimpinan musyawarah dan menyampaikan masalah atau tujuan yang akan dibahas\n4) Mendiskusikan serta mempertimbangkan baik-buruk setiap usulan yang masuk\n\nUrutan langkah-langkah bermusyawarah yang tepat dan runtut adalah...',
    options: [
      { id: 'A', text: '3 - 1 - 4 - 2' },
      { id: 'B', text: '1 - 3 - 2 - 4' },
      { id: 'C', text: '3 - 4 - 1 - 2' },
      { id: 'D', text: '4 - 3 - 1 - 2' },
    ],
    correctAnswer: 'A',
    explanation:
      'Urutan langkah bermusyawarah yang runtut: (3) Menentukan pimpinan dan menyampaikan tujuan/masalah -> (1) Penyampaian usul/pendapat peserta -> (4) Membahas dan menimbang setiap usulan -> (2) Menyepakati keputusan bersama dan melaksanakannya.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Belajar Bermusyawarah',
    elemen: 'Bhinneka Tunggal Ika',
    difficulty: 'Sedang',
    text: 'Saat kelas VI bermusyawarah menentukan tema pentas seni perpisahan, usulan tari tradisional daerah yang diajukan oleh Putri tidak terpilih karena mayoritas teman menyepakati drama bertema kepahlawanan. Sikap terbaik yang seharusnya ditunjukkan oleh Putri adalah...',
    options: [
      { id: 'A', text: 'Keluar dari kelas karena merasa usulannya tidak dihargai teman-teman' },
      { id: 'B', text: 'Menerima hasil keputusan dengan lapang dada dan ikut mendukung latihan drama kelas' },
      { id: 'C', text: 'Mengajak sahabat dekatnya untuk tidak ikut berlatih pentas seni' },
      { id: 'D', text: 'Meminta guru membatalkan hasil musyawarah kelas agar idenya dipakai' },
    ],
    correctAnswer: 'B',
    explanation:
      'Prinsip utama belajar bermusyawarah adalah berjiwa besar menerima hasil keputusan bersama meskipun berbeda dengan usulan pribadi, lalu melaksanakannya dengan penuh tanggung jawab.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Belajar Bermusyawarah',
    elemen: 'Pancasila',
    difficulty: 'Sedang',
    text: 'Dalam suatu musyawarah pemilihan ketua kelas VI, diskusi sudah berlangsung lama namun para siswa belum juga mencapai kata mufakat karena ada dua calon yang sama-sama kuat. Langkah demokratis berikutnya yang dapat ditempuh agar keputusan segera diperoleh secara adil adalah...',
    options: [
      { id: 'A', text: 'Menunjuk langsung siswa yang paling kaya sebagai ketua kelas' },
      { id: 'B', text: 'Melakukan pemungutan suara terbanyak (voting) secara jujur dan rahasia' },
      { id: 'C', text: 'Membubarkan kelas dan tidak perlu memilih ketua kelas selamanya' },
      { id: 'D', text: 'Membiarkan kedua calon bertengkar sampai salah satunya menyerah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Dalam tradisi musyawarah Pancasila, cara utama adalah mufakat. Namun apabila mufakat benar-benar tidak tercapai setelah diskusi maksimal, keputusan dapat diambil melalui pemungutan suara terbanyak (voting) secara jujur dan adil.',
  },

  // =========================================================================
  // II. PILIHAN GANDA KOMPLEKS (3 SOAL: No. 16 - 18)
  // Ketentuan: Kemungkinan >1 jawaban benar, setiap soal memiliki 3 pilihan jawaban
  // =========================================================================
  {
    id: 16,
    type: 'pgk',
    topic: 'Hubungan Nilai Pancasila & Belajar Mengamalkan Pancasila',
    elemen: 'Pancasila',
    difficulty: 'Sedang',
    text: 'Pilihlah SEMUA pernyataan yang menunjukkan perilaku pengamalan nilai-nilai Pancasila dalam kehidupan sehari-hari di sekolah! (Jawaban benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Berteman dengan semua siswa tanpa membedakan suku, agama, atau latar belakang ekonomi' },
      { id: 'B', text: 'Membantu teman yang kesulitan memahami pelajaran tanpa mengharapkan imbalan' },
      { id: 'C', text: 'Menyontek pekerjaan teman saat ulangan berlangsung agar cepat selesai bersama' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Berteman tanpa diskriminasi (A — Sila ke-2 dan ke-3) serta tulus membantu teman belajar (B — Sila ke-2 dan ke-5) merupakan pengamalan Pancasila. Menyontek saat ulangan (C) melanggar nilai kejujuran dan keadilan.',
  },
  {
    id: 17,
    type: 'pgk',
    topic: 'Belajar Bermusyawarah & Langkah Bermusyawarah',
    elemen: 'Pancasila',
    difficulty: 'Sedang',
    imageUrl: imgMusyawarahKelas,
    imageCaption: 'Siswa kelas VI berdiskusi secara tertib mengangkat tangan untuk menyampaikan pendapat.',
    text: 'Perhatikan gambar kegiatan musyawarah siswa kelas VI tersebut! Pilihlah SEMUA pernyataan yang BENAR mengenai tata cara dan sikap baik saat bermusyawarah! (Jawaban benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Mengangkat tangan terlebih dahulu dan berbicara dengan sopan setelah dipersilakan oleh pemimpin musyawarah' },
      { id: 'B', text: 'Mencatat usulan-usulan penting di papan tulis atau buku notulen agar mudah dibahas bersama' },
      { id: 'C', text: 'Memotong pembicaraan teman yang pendapatnya berbeda agar musyawarah cepat selesai' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Dalam musyawarah yang tertib, peserta mengangkat tangan sebelum berbicara (A) dan notulis/pimpinan mencatat pokok usulan agar dikaji bersama (B). Memotong pembicaraan orang lain (C) melanggar etika bermusyawarah.',
  },
  {
    id: 18,
    type: 'pgk',
    topic: 'Mengenal Norma & Hak dan Kewajiban',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    difficulty: 'Sukar',
    text: 'Manakah dari pernyataan-pernyataan berikut yang BENAR mengenai norma serta keseimbangan hak dan kewajiban dalam kehidupan bermasyarakat? (Jawaban benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Norma agama mengatur hubungan manusia dengan Tuhan Yang Maha Esa serta sesama makhluk hidup' },
      { id: 'B', text: 'Setiap warga negara memiliki kedudukan yang sama di hadapan norma hukum yang berlaku' },
      { id: 'C', text: 'Seseorang boleh mengabaikan kewajiban sosialnya selama ia rajin membayar iuran warga' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Norma agama memang bersumber dari wahyu Tuhan dan mengatur ibadah serta akhlak (A benar), dan seluruh warga negara berkedudukan sama di mata hukum (B benar). Kewajiban sosial tidak dapat digugurkan hanya dengan membayar uang (C salah).',
  },

  // =========================================================================
  // III. PILIHAN GANDA KOMPLEKS KATEGORI (7 SOAL: No. 19 - 25)
  // Ketentuan: Setiap soal memiliki 3 pernyataan Benar / Salah
  // =========================================================================
  {
    id: 19,
    type: 'pgk_kategori',
    topic: 'Hubungan Nilai-Nilai Pancasila dalam Praktik Hidup Sehari-hari',
    elemen: 'Pancasila',
    difficulty: 'Sedang',
    text: 'Pancasila merupakan satu kesatuan nilai yang saling terhubung dalam kehidupan sehari-hari. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Menghormati kebebasan beribadah teman yang berbeda agama merupakan perpaduan nilai sila pertama dan sila ketiga.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Melaksanakan hasil keputusan musyawarah dengan adil bagi seluruh anggota kelompok hanya berkaitan dengan sila pertama saja.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Sikap adil kepada sesama teman tanpa pilih kasih menunjukkan hubungan antara nilai sila kedua dan sila kelima.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Toleransi beragama memadukan ketakwaan (Sila 1) dan persatuan bangsa (Sila 3) -> BENAR.\n2. Melaksanakan keputusan musyawarah secara adil justru mencerminkan Sila 4 dan Sila 5, bukan sila 1 saja -> SALAH.\n3. Adil dan memanusiakan teman tanpa pilih kasih memadukan Sila 2 dan Sila 5 -> BENAR.',
  },
  {
    id: 20,
    type: 'pgk_kategori',
    topic: 'Belajar Mengamalkan Pancasila',
    elemen: 'Pancasila',
    difficulty: 'Mudah',
    text: 'Berikut adalah beberapa contoh perilaku pelajar di lingkungan rumah, sekolah, dan masyarakat. Tentukan kebenaran masing-masing pernyataan mengenai pengamalan Pancasila berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Menghargai produk kerajinan asli buatan pengrajin lokal Indonesia merupakan salah satu contoh pengamalan sila ketiga Pancasila.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Membiasakan hidup sederhana, tidak boros, dan gemar menabung merupakan pengamalan nilai sila kelima Pancasila.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Membeda-bedakan teman bermain berdasarkan tingkat kekayaan keluarganya termasuk sikap yang sesuai dengan sila kedua Pancasila.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Cinta produk dalam negeri menumbuhkan rasa nasionalisme sesuai Sila ke-3 -> BENAR.\n2. Hidup hemat dan tidak bergaya hidup mewah mencerminkan keadilan sosial (Sila ke-5) -> BENAR.\n3. Membeda-bedakan status sosial bertentangan dengan nilai kemanusiaan Sila ke-2 -> SALAH.',
  },
  {
    id: 21,
    type: 'pgk_kategori',
    topic: 'Mengenal Norma',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    difficulty: 'Sedang',
    text: 'Norma berperan penting menciptakan ketertiban dan kedamaian dalam kehidupan bersama. Tentukan kebenaran dari masing-masing pernyataan tentang norma berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Mengakui kesalahan dan meminta maaf dengan tulus setelah berbuat salah karena merasa tidak enak hati merupakan dorongan norma kesusilaan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Membuang sampah pada tempatnya dan antre dengan tertib di kantin sekolah hanya berlaku sebagai norma hukum pidana.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Apabila norma tidak dipatuhi oleh warga masyarakat, maka kehidupan bersama akan menjadi kacau, tidak aman, dan rawan konflik.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Kejujuran dan dorongan hati nurani untuk meminta maaf berasal dari norma kesusilaan -> BENAR.\n2. Antre di kantin dan menjaga kebersihan merupakan tata tertib dan norma kesopanan, bukan hukum pidana -> SALAH.\n3. Norma menjaga ketertiban; tanpanya masyarakat rawan konflik -> BENAR.',
  },
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Hak dan Kewajiban',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    difficulty: 'Mudah',
    imageUrl: imgPiketKelas,
    imageCaption: 'Siswa kelas VI bekerja sama menjalankan tugas piket membersihkan ruang kelas.',
    text: 'Perhatikan gambar siswa kelas VI yang sedang melaksanakan piket kebersihan kelas! Tentukan kebenaran dari masing-masing pernyataan mengenai hak dan kewajiban siswa berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Membersihkan ruang kelas bersama regu piket sesuai jadwal yang disepakati merupakan salah satu kewajiban siswa di sekolah.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Setelah melaksanakan piket kelas dengan baik, seluruh siswa berhak menikmati ruang belajar yang bersih, sehat, dan nyaman.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Siswa yang sudah mendapat giliran piket boleh membuang sampah sembarangan ke lantai kelas pada hari berikutnya.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Melaksanakan piket kelas sesuai jadwal adalah kewajiban menjaga kebersihan sekolah -> BENAR.\n2. Ruang kelas yang bersih dan nyaman adalah hak siswa -> BENAR.\n3. Menjaga kebersihan adalah kewajiban setiap hari, bukan hanya saat jadwal piket -> SALAH.',
  },
  {
    id: 23,
    type: 'pgk_kategori',
    topic: 'Manfaat Musyawarah',
    elemen: 'Pancasila',
    difficulty: 'Sedang',
    text: 'Kegiatan musyawarah menjadi budaya luhur bangsa Indonesia yang dilakukan di keluarga, sekolah, dan masyarakat. Tentukan kebenaran pernyataan mengenai manfaat musyawarah berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Musyawarah membantu menampung berbagai sudut pandang yang berbeda sehingga keputusan menjadi lebih bijaksana dan matang.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Keputusan yang dihasilkan melalui musyawarah mufakat akan membuat peserta merasa ikut memiliki dan bertanggung jawab melaksanakannya.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Manfaat utama musyawarah adalah memastikan pendapat ketua kelas selalu menjadi satu-satunya pilihan yang harus disetujui.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Musyawarah menghimpun gagasan banyak pihak sehingga keputusan lebih matang -> BENAR.\n2. Keterlibatan bersama menimbulkan rasa tanggung jawab bersama -> BENAR.\n3. Musyawarah mengutamakan kepentingan bersama dan kesetaraan pendapat, bukan kehendak ketua semata -> SALAH.',
  },
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Langkah-Langkah Bermusyawarah',
    elemen: 'Pancasila',
    difficulty: 'Sukar',
    text: 'Agar kegiatan musyawarah berjalan lancar dan menghasilkan keputusan tepat, diperlukan langkah-langkah yang teratur. Tentukan kebenaran pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Langkah awal sebelum diskusi dimulai adalah menentukan pemimpin musyawarah dan menjelaskan pokok masalah atau tujuan musyawarah.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Dalam tahap penyampaian pendapat, peserta diperbolehkan memaksakan ide pribadinya meskipun tidak masuk akal dan merugikan teman lain.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Tahap akhir setelah keputusan disepakati adalah mencatat hasil musyawarah dan melaksanakannya bersama dengan penuh tanggung jawab.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Penentuan pimpinan serta penjelasan masalah/tujuan adalah langkah pembuka musyawarah -> BENAR.\n2. Peserta dilarang memaksakan kehendak dan harus berorientasi pada kepentingan bersama -> SALAH.\n3. Mencatat dan melaksanakan keputusan dengan tanggung jawab adalah langkah akhir yang wajib -> BENAR.',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Belajar Bermusyawarah',
    elemen: 'Bhinneka Tunggal Ika',
    difficulty: 'Sedang',
    text: 'Kelas VI SD Negeri 6 Dauhwaru belajar bermusyawarah untuk menyusun aturan kesepakatan kelas di awal semester. Tentukan kebenaran sikap-sikap dalam bermusyawarah berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Setiap siswa memiliki hak yang sama untuk menyampaikan pendapatnya dengan bahasa yang santun.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Jika terdapat perbedaan pendapat saat berdiskusi, kita sebaiknya mencari titik temu yang paling baik bagi seluruh kelas.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Siswa yang pendiam tidak berhak ikut menyepakati maupun mematuhi aturan kelas hasil musyawarah.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Kesetaraan hak berpendapat secara santun adalah inti musyawarah -> BENAR.\n2. Mencari titik temu untuk kepentingan bersama adalah semangat mufakat -> BENAR.\n3. Seluruh anggota kelas memiliki hak suara dan wajib mematuhi hasil kesepakatan bersama -> SALAH.',
  },

  // =========================================================================
  // IV. ISIAN SINGKAT (10 SOAL: No. 26 - 35)
  // =========================================================================
  {
    id: 26,
    type: 'isian_singkat',
    topic: 'Hubungan Nilai-Nilai Pancasila dalam Praktik Hidup Sehari-hari',
    elemen: 'Pancasila',
    difficulty: 'Mudah',
    text: 'Kelima sila Pancasila saling berkaitan dan menjiwai satu sama lain. Sila yang menjadi landasan moral ketuhanan dan menjiwai keempat sila lainnya adalah sila ke-... (tuliskan angka 1 sampai 5).',
    correctAnswer: '1',
    acceptedAnswers: ['1', 'satu', 'pertama', 'kesatu', 'sila 1', 'sila ke-1', 'sila kesatu', 'sila pertama'],
    explanation:
      'Sila ke-1 (Ketuhanan Yang Maha Esa) merupakan dasar spiritual dan moral yang menjiwai serta mendasari pelaksanaan sila ke-2, ke-3, ke-4, dan ke-5 dalam kehidupan sehari-hari.',
  },
  {
    id: 27,
    type: 'isian_singkat',
    topic: 'Belajar Mengamalkan Pancasila',
    elemen: 'Bhinneka Tunggal Ika',
    difficulty: 'Mudah',
    text: 'Semboyan bangsa Indonesia yang tertulis pada pita burung Garuda Pancasila dan mengajarkan kita tetap bersatu dalam keberagaman suku, agama, serta budaya adalah ...',
    correctAnswer: 'Bhinneka Tunggal Ika',
    acceptedAnswers: ['bhinneka tunggal ika', 'bineka tunggal ika', 'bhineka tunggal ika'],
    explanation:
      'Semboyan Bhinneka Tunggal Ika berarti "Berbeda-beda tetapi tetap satu jua", yang sejalan erat dengan pengamalan Sila ketiga Pancasila (Persatuan Indonesia).',
  },
  {
    id: 28,
    type: 'isian_singkat',
    topic: 'Mengenal Norma',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    difficulty: 'Sedang',
    text: 'Aturan hidup yang bersumber dari suara hati nurani manusia sehingga pelanggarnya akan merasakan penyesalan, rasa malu, dan gelisah dalam batinnya disebut norma ...',
    correctAnswer: 'Kesusilaan',
    acceptedAnswers: ['kesusilaan', 'norma kesusilaan', 'susila'],
    explanation:
      'Norma Kesusilaan berasal dari bisikan hati nurani manusia untuk berbuat jujur, adil, dan berakhlak baik. Sanksinya bersifat batin (menyesal/bersalah).',
  },
  {
    id: 29,
    type: 'isian_singkat',
    topic: 'Mengenal Norma',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    difficulty: 'Mudah',
    text: 'Peraturan hidup yang dibuat oleh lembaga negara berwenang, bersifat memaksa, tertulis, dan memiliki sanksi tegas berupa denda atau hukuman penjara disebut norma ...',
    correctAnswer: 'Hukum',
    acceptedAnswers: ['hukum', 'norma hukum'],
    explanation:
      'Norma Hukum dibuat secara resmi oleh negara (misalnya undang-undang lalu lintas dan KUHP) sehingga memiliki sanksi tegas yang memaksa bagi pelanggarnya.',
  },
  {
    id: 30,
    type: 'isian_singkat',
    topic: 'Hak dan Kewajiban',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    difficulty: 'Mudah',
    text: 'Segala sesuatu yang harus kita kerjakan atau laksanakan dengan penuh rasa tanggung jawab sebelum kita menuntut hak disebut ...',
    correctAnswer: 'Kewajiban',
    acceptedAnswers: ['kewajiban'],
    explanation:
      'Kewajiban adalah sesuatu yang wajib dilakukan dengan penuh tanggung jawab, misalnya belajar dengan tekun, menaati tata tertib sekolah, dan menghormati orang tua.',
  },
  {
    id: 31,
    type: 'isian_singkat',
    topic: 'Hak dan Kewajiban',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    difficulty: 'Mudah',
    text: 'Memperoleh ilmu pengetahuan dari guru, menggunakan fasilitas perpustakaan, serta mendapatkan lingkungan belajar yang aman termasuk contoh ... siswa di sekolah.',
    correctAnswer: 'Hak',
    acceptedAnswers: ['hak', 'hak siswa', 'hak anak'],
    explanation:
      'Hak adalah segala sesuatu yang pantas dan layak diterima oleh peserta didik setelah melaksanakan kewajibannya di sekolah.',
  },
  {
    id: 32,
    type: 'isian_singkat',
    topic: 'Manfaat Musyawarah',
    elemen: 'Pancasila',
    difficulty: 'Mudah',
    text: 'Kata sepakat atau persetujuan bersama yang dicapai sebagai hasil akhir dari kegiatan musyawarah disebut ...',
    correctAnswer: 'Mufakat',
    acceptedAnswers: ['mufakat', 'kata mufakat', 'musyawarah mufakat', 'kesepakatan'],
    explanation:
      'Tujuan utama bermusyawarah sesuai Sila keempat Pancasila adalah mencapai kata mufakat, yaitu kesepakatan bersama yang dilandasi hikmat kebijaksanaan.',
  },
  {
    id: 33,
    type: 'isian_singkat',
    topic: 'Langkah-Langkah Bermusyawarah',
    elemen: 'Pancasila',
    difficulty: 'Sedang',
    text: 'Dalam pelaksanaan musyawarah di kelas, orang yang bertugas mengatur jalannya diskusi agar berlangsung tertib, adil, dan memberi kesempatan berbicara kepada peserta disebut ... musyawarah.',
    correctAnswer: 'Pemimpin',
    acceptedAnswers: ['pemimpin', 'pimpinan', 'ketua', 'moderator'],
    explanation:
      'Pemimpin (atau pimpinan/ketua) musyawarah bertugas memandu jalannya pembahasan masalah secara netral dan tertib hingga tercapai keputusan.',
  },
  {
    id: 34,
    type: 'isian_singkat',
    topic: 'Langkah-Langkah Bermusyawarah',
    elemen: 'Pancasila',
    difficulty: 'Sedang',
    text: 'Apabila setelah berdiskusi dengan sungguh-sungguh kata mufakat belum dapat dicapai, cara pengambilan keputusan berdasarkan suara terbanyak disebut ...',
    correctAnswer: 'Voting',
    acceptedAnswers: ['voting', 'pemungutan suara', 'suara terbanyak'],
    explanation:
      'Voting (pemungutan suara terbanyak) merupakan cara demokratis terakhir dalam musyawarah apabila jalan mufakat belum berhasil dicapai.',
  },
  {
    id: 35,
    type: 'isian_singkat',
    topic: 'Belajar Bermusyawarah',
    elemen: 'Negara Kesatuan Republik Indonesia',
    difficulty: 'Mudah',
    text: 'Ketika ada teman yang sedang menyampaikan pendapat dalam musyawarah kelas, sikap yang harus kita tunjukkan adalah mendengarkan dengan ... dan tidak memotong pembicaraannya.',
    correctAnswer: 'Sopan',
    acceptedAnswers: ['sopan', 'santun', 'baik', 'tertib', 'tenang', 'saksama', 'menghargai', 'hormat'],
    explanation:
      'Mendengarkan pendapat teman dengan sopan, tertib, dan penuh perhatian mencerminkan sikap saling menghargai dalam belajar bermusyawarah.',
  },
];
