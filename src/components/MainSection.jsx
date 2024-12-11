
import { englishCamp } from '../assets'
import Iframe from 'react-iframe'

const MainSection = () => {
  return (
    <div>
        <main className="flex flex-col lg:flex-row gap-8 px-4 md:px-16 lg:px-32 py-12">
            <article className="flex-2 space-y-12 basis-9/12">
                <section className="bg-white border border-gray-300 rounded-2xl p-6 md:p-9">
                    <h3 className="text-[24px] md:text-[32px] lg:text-[36px] font-semibold mb-4">English Camp</h3>
                    <img src={englishCamp} alt="English Camp" className="w-full rounded-lg mb-4"/>
                    <p className="text-[16px] md:text-[20px] lg:text-[24px]">Kurikulum intensif selama dua bulan di Pare Kampung Inggris fokus pada peningkatan pemahaman dan kemampuan berbicara Bahasa Inggris, siapkan siswa untuk kompetisi global.</p>
                </section>
                <section className="bg-white border border-gray-300 rounded-2xl p-6 md:p-9">
                    <h3 className="text-[24px] md:text-[32px] lg:text-[36px] font-semibold mb-4">Quran Camp</h3>
                    <p className="text-[16px] md:text-[20px] lg:text-[24px]">Setelah English Camp, siswa akan mengikuti program Tahsin Qur`an intensif selama satu bulan di Pare untuk meningkatkan kemampuan bacaan Al-Qur`an dan nilai spiritual.</p>

                    <div className="mt-6 space-y-10">
                        <div>
                            <h4 className="text-[20px] md:text-[28px] lg:text-[32px] font-semibold mb-2">Tahfidz Quran</h4>
                            <img src={englishCamp} alt="Tahfidz Quran" className="w-full rounded-lg mb-2"/>
                            <p className="text-[16px] md:text-[20px] lg:text-[24px]">Melalui program Tahfidz Qur’an, siswa dapat menghafal Al-Qur’an secara mendalam, sambil mempelajari nilai-nilai yang terkandung untuk diterapkan dalam kehidupan sehari-hari.</p>
                        </div>
                        <div>
                            <h4 className="text-[20px] md:text-[28px] lg:text-[32px] font-semibold mb-2">Kajian Islam</h4>
                            <img src={englishCamp} alt="Kajian Islam" className="w-full rounded-lg mb-2"/>
                            <p className="text-[16px] md:text-[20px] lg:text-[24px]">Program Kajian Islam membantu siswa memperdalam pemahaman agama melalui pembahasan tema-tema islami yang relevan, memperkuat iman dan karakter islami.</p>
                        </div>
                    </div>
                </section>
            </article>
            <section className="bg-white border border-gray-300 rounded-2xl basis-1/4 p-6 md:p-9 h-fit">
                <Iframe className="w-full h-[300px] md:h-[400px] lg:h-[600px] rounded-md"       url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0848420917196!2d107.0130167760394!3d-6.383050462437267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699753f452a75d%3A0x25e019e428a06c70!2sSekolah%20Developer%20Indonesia!5e0!3m2!1sid!2sid!4v1732711936674!5m2!1sid!2sid" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                <h4 className="text-[24px] md:text-[32px] font-semibold mt-4">Sekolah Developer Indonesia</h4>
                <div className="mt-2">
                    <h5 className="text-[18px] md:text-[28px] font-semibold">Informasi Lainnya</h5>
                    <p className="text-[16px] md:text-[20px] lg:text-[24px]">Alamat: Harvest City, Jl. Orchid Raya A, Ragemanunggal, Setu, Bekasi Regency, West Java 17320</p>
                    <a href="tel:+6287761424322" className="text-[16px] md:text-[20px] lg:text-[24px] text-blue-500">Telepon: +62 8776 1424 322</a>
                </div>
            </section>
        </main>
    </div>
  )
}

export default MainSection
