import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas VI) Mata Pelajaran Pendidikan Pancasila
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 35 butir soal Pendidikan Pancasila Kurikulum Merdeka
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis hubungan antarsila Pancasila dalam praktik kehidupan sehari-hari di sekolah.',
    indikatorSoal:
      'Disajikan gambar kegiatan berdoa bersama di kelas, peserta didik dapat menentukan keterkaitan pengamalan sila pertama dengan sila kedua Pancasila.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat memahami Pancasila sebagai satu kesatuan nilai yang utuh dan saling menjiwai.',
    indikatorSoal:
      'Disajikan ilustrasi kepedulian warga membantu korban bencana tanpa diskriminasi, peserta didik dapat mengidentifikasi keterkaitan nilai sila kedua, ketiga, dan kelima.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat membiasakan perilaku gotong royong sebagai wujud pengamalan nilai Pancasila di lingkungan masyarakat.',
    indikatorSoal:
      'Disajikan gambar kegiatan gotong royong membersihkan taman desa, peserta didik dapat menentukan sila Pancasila yang diamalkan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan nilai kemanusiaan dan empati dalam pergaulan di sekolah.',
    indikatorSoal:
      'Disajikan narasi peristiwa teman yang terjatuh di halaman sekolah, peserta didik dapat memilih tindakan terbaik sesuai pengamalan sila kedua Pancasila.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi sikap yang sesuai dan tidak sesuai dengan nilai kerakyatan dalam musyawarah.',
    indikatorSoal:
      'Disajikan kasus siswa yang memaksakan kehendak dalam pemilihan lokasi kunjungan belajar, peserta didik dapat menentukan sila Pancasila yang dilanggar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat mengenali jenis-jenis norma yang berlaku dalam kehidupan bermasyarakat beserta contoh nyatanya.',
    indikatorSoal:
      'Disajikan gambar kepatuhan lalu lintas di zona selamat sekolah, peserta didik dapat menentukan jenis norma yang berlaku pada situasi tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan sumber dan sanksi dari empat macam norma (agama, kesusilaan, kesopanan, hukum).',
    indikatorSoal:
      'Disajikan beberapa pasangan jenis norma dan sanksinya, peserta didik dapat menentukan pasangan norma dan sanksi yang paling tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan norma kesopanan dalam interaksi sehari-hari dengan orang yang lebih tua.',
    indikatorSoal:
      'Disajikan narasi siswa yang bersikap santun saat melewati orang tua, peserta didik dapat mengidentifikasi norma yang dipatuhi.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat memahami prinsip keseimbangan pelaksanaan hak dan kewajiban di lingkungan keluarga.',
    indikatorSoal:
      'Disajikan pernyataan tentang peran anak di rumah, peserta didik dapat menentukan prinsip pelaksanaan hak dan kewajiban yang seimbang.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat menghubungkan pelaksanaan kewajiban siswa di sekolah dengan hak yang diperolehnya.',
    indikatorSoal:
      'Disajikan beberapa pasangan kewajiban dan hak siswa di sekolah, peserta didik dapat memilih pasangan sebab-akibat yang tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Negara Kesatuan Republik Indonesia',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan kewajiban warga masyarakat dalam merawat fasilitas umum secara bertanggung jawab.',
    indikatorSoal:
      'Disajikan konteks pemanfaatan taman desa sebagai fasilitas umum, peserta didik dapat menentukan kewajiban warga untuk menjaga kelestariannya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi manfaat musyawarah dalam menyelesaikan persoalan bersama di masyarakat.',
    indikatorSoal:
      'Disajikan ilustrasi rapat warga membahas jadwal ronda dan penerangan jalan, peserta didik dapat menentukan manfaat utama musyawarah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis dan mengurutkan langkah-langkah bermusyawarah yang tertib dan demokratis.',
    indikatorSoal:
      'Disajikan empat tahapan musyawarah yang disusun secara acak, peserta didik dapat mengurutkan langkah-langkah bermusyawarah secara runtut.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Bhinneka Tunggal Ika',
    tujuanPembelajaran:
      'Peserta didik dapat menunjukkan sikap berjiwa besar dan menghargai hasil keputusan bersama dalam bermusyawarah.',
    indikatorSoal:
      'Disajikan kasus siswa yang usulannya belum terpilih saat musyawarah pentas seni, peserta didik dapat menentukan sikap terbaik yang harus dilakukan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat memahami cara pengambilan keputusan alternatif melalui pemungutan suara apabila mufakat belum tercapai.',
    indikatorSoal:
      'Disajikan situasi musyawarah pemilihan ketua kelas yang belum mencapai mufakat, peserta didik dapat menentukan langkah penyelesaian yang adil dan demokratis.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi berbagai wujud pengamalan nilai-nilai Pancasila di lingkungan sekolah.',
    indikatorSoal:
      'Disajikan tiga pernyataan perilaku pelajar di sekolah, peserta didik dapat memilih semua pernyataan yang mencerminkan pengamalan Pancasila.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan etika dan tata cara berdiskusi yang baik saat bermusyawarah di kelas.',
    indikatorSoal:
      'Disajikan gambar musyawarah siswa kelas VI beserta tiga pernyataan sikap, peserta didik dapat memilih semua pernyataan yang benar tentang etika bermusyawarah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi kebenaran konsep norma dan prinsip persamaan kedudukan warga dalam hukum serta kewajiban sosial.',
    indikatorSoal:
      'Disajikan tiga pernyataan terkait norma agama, norma hukum, dan kewajiban sosial, peserta didik dapat menentukan semua pernyataan yang bernilai benar.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi keterkaitan antarsila Pancasila dalam praktik kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang hubungan antarsila Pancasila dalam toleransi, musyawarah, dan sikap adil, peserta didik dapat menilai Benar atau Salah pada masing-masing pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menilai kesesuaian contoh perilaku sehari-hari dengan sila-sila Pancasila.',
    indikatorSoal:
      'Disajikan tiga pernyataan perilaku cinta produk lokal, hidup hemat, dan sikap pilih kasih, peserta didik dapat menilai Benar atau Salah pengamalannya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis fungsi dan jenis norma yang berlaku pada berbagai peristiwa sehari-hari.',
    indikatorSoal:
      'Disajikan tiga pernyataan terkait norma kesusilaan, antre di kantin, dan fungsi ketertiban norma, peserta didik dapat menentukan nilai kebenaran (Benar/Salah).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan hak dan kewajiban siswa dalam menjaga kebersihan ruang kelas.',
    indikatorSoal:
      'Disajikan gambar siswa melaksanakan piket kelas, peserta didik dapat menentukan Benar atau Salah dari tiga pernyataan terkait kewajiban dan hak di kelas.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi manfaat musyawarah mufakat di lingkungan sekolah dan masyarakat.',
    indikatorSoal:
      'Disajikan tiga pernyataan mengenai manfaat musyawarah mufakat, peserta didik dapat menilai kebenaran masing-masing pernyataan (Benar/Salah).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menilai ketepatan prosedur dan langkah-langkah pelaksanaan musyawarah.',
    indikatorSoal:
      'Disajikan tiga pernyataan mengenai tahap awal, penyampaian pendapat, dan pelaksanaan hasil musyawarah, peserta didik dapat menilai Benar atau Salah.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Bhinneka Tunggal Ika',
    tujuanPembelajaran:
      'Peserta didik dapat menunjukkan sikap demokratis, kesetaraan hak, dan tanggung jawab saat belajar bermusyawarah.',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang penyusunan aturan kesepakatan kelas, peserta didik dapat menentukan nilai kebenaran (Benar/Salah) pada tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi sila Pancasila yang menjadi landasan moral dan menjiwai sila-sila lainnya.',
    indikatorSoal:
      'Disajikan deskripsi keterkaitan antarsila Pancasila, peserta didik dapat menuliskan nomor sila yang menjiwai keempat sila lainnya secara tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Bhinneka Tunggal Ika',
    tujuanPembelajaran:
      'Peserta didik dapat mengenal semboyan persatuan bangsa Indonesia dalam keberagaman.',
    indikatorSoal:
      'Disajikan deskripsi semboyan pada pita Garuda Pancasila, peserta didik dapat menuliskan bunyi semboyan tersebut dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat mendefinisikan norma yang bersumber dari hati nurani manusia.',
    indikatorSoal:
      'Disajikan ciri sumber dan sanksi batin suatu norma, peserta didik dapat menyebutkan nama jenis norma tersebut secara singkat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi norma yang dibuat negara dengan sanksi memaksa.',
    indikatorSoal:
      'Disajikan ciri peraturan tertulis berwenang beserta sanksi denda atau pidana, peserta didik dapat menyebutkan nama norma tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat memahami pengertian kewajiban sebagai tanggung jawab moral dan sosial.',
    indikatorSoal:
      'Disajikan definisi sesuatu yang wajib dilaksanakan sebelum menuntut hak, peserta didik dapat menuliskan istilah yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  31: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi contoh hak siswa di lingkungan sekolah.',
    indikatorSoal:
      'Disajikan contoh memperoleh pengajaran dan memakai fasilitas sekolah, peserta didik dapat menentukan bahwa hal tersebut termasuk hak.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  32: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mengenal istilah kesepakatan bersama sebagai tujuan utama musyawarah.',
    indikatorSoal:
      'Disajikan deskripsi hasil persetujuan bersama dalam musyawarah, peserta didik dapat menuliskan istilah yang dimaksud dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  33: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat memahami peran pemimpin dalam mengatur jalannya musyawarah.',
    indikatorSoal:
      'Disajikan deskripsi tugas pengatur jalannya diskusi agar tertib dan adil, peserta didik dapat menuliskan peran tersebut secara singkat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  34: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi mekanisme pemungutan suara saat mufakat tidak tercapai.',
    indikatorSoal:
      'Disajikan situasi alternatif pengambilan keputusan berdasarkan suara terbanyak, peserta didik dapat menuliskan istilahnya secara tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  35: {
    elemen: 'Negara Kesatuan Republik Indonesia',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan sikap santun dan menghargai saat teman berpendapat dalam musyawarah.',
    indikatorSoal:
      'Disajikan konteks teman yang sedang mengemukakan pendapat, peserta didik dapat menuliskan kata sifat sikap mendengarkan yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    case 'isian_singkat':
      return 'Isian Singkat';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg' || q.type === 'isian_singkat') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : '-';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami dan menerapkan konsep ${q.topic} dalam kehidupan sehari-hari sesuai nilai Pendidikan Pancasila.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('norma') || t.includes('hak') || t.includes('kewajiban')) {
    return 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945';
  }
  if (t.includes('bhinneka') || t.includes('keberagaman')) {
    return 'Bhinneka Tunggal Ika';
  }
  if (t.includes('nkri') || t.includes('masyarakat') || t.includes('gotong')) {
    return 'Negara Kesatuan Republik Indonesia';
  }
  return 'Pancasila';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = {
    pg: 0,
    pgk: 0,
    pgk_kategori: 0,
    isian_singkat: 0,
  };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
    {
      type: 'isian_singkat',
      label: 'Isian Singkat',
      count: typeCountMap.isian_singkat,
      percentage: total > 0 ? Math.round((typeCountMap.isian_singkat / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
