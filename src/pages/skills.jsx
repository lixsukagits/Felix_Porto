import PageHero from '../components/PageHero'

const skills = [
  {
    title: 'Web Developer',
    img: 'https://asset.kompas.com/crops/xaWxxmvq-zWOefkfOiNgs_SfdUI=/0x0:800x533/1200x800/data/photo/2022/10/09/634237bd17f3f.jpg',
    desc: 'HTML, CSS, JavaScript, React, Tailwind',
    tag: 'Frontend',
  },
  {
    title: 'Photography',
    img: 'https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg',
    desc: 'Komposisi, Editing, Portrait & Event Photography',
    tag: 'Kreatif',
  },
  {
    title: 'Internet of Things',
    img: 'https://thumbs.dreamstime.com/b/internet-things-iot-concept-businessman-click-symbol-connected-icons-typical-%C3%A2%E2%82%AC-intelligent-house-car-70990334.jpg',
    desc: 'Arduino, Sensor, Otomasi & Smart Devices',
    tag: 'Hardware',
  },
  {
    title: 'Design',
    img: 'https://static-cse.canva.com/blob/1522769/CC2024PR_Workplaceenterprisecentricfeatures.png',
    desc: 'Canva, Figma, Desain Grafis & UI',
    tag: 'Kreatif',
  },
  {
    title: 'Video Editor',
    img: 'https://media.istockphoto.com/id/1356585971/photo/unrecognizable-guy-editing-astronaut-video.jpg?s=612x612',
    desc: 'CapCut, Premiere, Konten & Motion',
    tag: 'Media',
  },
  {
    title: 'Microsoft Excel',
    img: 'https://img.freepik.com/free-photo/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data_53876-23014.jpg',
    desc: 'Formula, Pivot Table, Data Analysis',
    tag: 'Produktivitas',
  },
]

const tagColors = {
  Frontend: 'bg-blue-50 text-blue-600',
  Kreatif: 'bg-pink-50 text-pink-600',
  Hardware: 'bg-green-50 text-green-600',
  Media: 'bg-orange-50 text-orange-600',
  Produktivitas: 'bg-purple-50 text-purple-600',
}

export default function Skills() {
  return (
    <>
      <PageHero subtitle="Halaman Keterampilan" scrollTo="skills" scrollLabel="Lihat Keterampilan" />

      <section id="skills" className="max-w-7xl mx-auto px-6 md:px-12 pb-24 scroll-mt-20">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--primary)' }}>
            What I'm Good At
          </span>
          <h2 className="font-display text-4xl font-bold mt-2" style={{ color: 'var(--dark)' }}>
            Keterampilan
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ title, img, desc, tag }) => (
            <div
              key={title}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 card-lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display font-bold text-lg" style={{ color: 'var(--dark)' }}>
                    {title}
                  </h3>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full shrink-0 ${tagColors[tag]}`}>
                    {tag}
                  </span>
                </div>
                <p className="text-sm mt-1" style={{ color: 'var(--body-color)' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
