import "./about.css";
import AboutLogo from "../assets/about.png";

function About() {
  return (
    <div className="about">
      <div className="about-title">
        <img src={AboutLogo} alt="tent-logo"></img>
        <h2>About YuruCamp</h2>
      </div>
      <p>
        Yuru Camp, juga dikenal sebagai Laid-Back Camp, adalah serial manga dan
        anime Jepang yang ditulis oleh Afro, yang mengisahkan petualangan
        berkemah sekelompok gadis SMA. Cerita berfokus pada Nadeshiko Kagamihara
        yang pindah ke Yamanashi dan tertarik dengan kegiatan berkemah setelah
        bertemu dengan Rin Shima. Rin, yang awalnya lebih suka berkemah
        sendirian, akhirnya bergabung dengan Nadeshiko dan teman-temannya,
        Chiaki Oogaki, Aoi Inuyama, dan Ena Saito, dalam Klub Aktivitas Luar
        Ruangan sekolah mereka. Bersama-sama, mereka menjelajahi berbagai tempat
        indah di Jepang, belajar tentang berkemah, dan menikmati kebersamaan di
        alam bebas. Serial ini menonjolkan tema kebersamaan, keindahan alam, dan
        kedamaian yang ditemukan dalam kegiatan sederhana seperti berkemah.
        Dengan pemandangan alam yang memukau dan nuansa cerita yang santai, Yuru
        Camp mengajak penonton untuk menghargai keindahan alam dan persahabatan.
      </p>
    </div>
  );
}

export default About;
