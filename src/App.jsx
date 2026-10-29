
import { useState } from 'react'

const projects = [
  {
    title: 'React Calculator',
    category: 'Application Development',
    description:
      'A calculator application developed using React. It demonstrates the use of components, state management, and event handling.',
    tools: ['React', 'JavaScript', 'Tailwind CSS'],
  },
  {
    title: 'To-Do List Website',
    category: 'Web Development',
    description:
      'A task management website where users can add tasks, mark tasks as completed, and delete tasks.',
    tools: ['React', 'JavaScript', 'Tailwind CSS'],
  },
  {
    title: 'Student E-Portfolio',
    category: 'Web Development',
    description:
      'A personal portfolio website that presents my background, technical skills, academic projects, and contact information.',
    tools: ['React', 'Tailwind CSS', 'JavaScript'],
  },
]

const skills = [
  'HTML & CSS',
  'JavaScript',
  'ReactJS',
  'Tailwind CSS',
  'MySQL',
  'UI/UX Design',
]

function SectionTitle({ label, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
        {label}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 leading-7 text-slate-600">{description}</p>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const navigation = [
    ['Home', '#home'],
    ['About Me', '#about'],
    ['Projects', '#projects'],
    ['Resume', '#resume'],
    ['Contact', '#contact'],
  ]

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
    setError('')
    setSubmitted(false)
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please complete all fields.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }

    setSubmitted(true)
    setError('')
  }

  function downloadCV() {
    const resume = `
STUDENT RESUME

Name: Jeanzen Esquillo
Course: Bachelor of Science in Information Technology
School: Cavite State University - Tanza Campus

CAREER OBJECTIVE
An aspiring IT professional eager to develop technical skills,
gain practical experience, and create useful digital solutions.

EDUCATION
Bachelor of Science in Information Technology
Cavite State University - Tanza Campus

TECHNICAL SKILLS
${skills.join(', ')}

ACADEMIC PROJECTS
${projects
  .map(
    (project) =>
      `${project.title}\n${project.description}\nTools: ${project.tools.join(', ')}`,
  )
  .join('\n\n')}

Please update this sample resume with accurate personal information.
`
    const file = new Blob([resume], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(file)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Jeanzen-Esquillo-Resume.txt'
    document.body.appendChild(link)
    link.click()
    link.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-700 font-bold text-white">
              JE
            </span>
            <span>
              <span className="block font-bold text-slate-900">
                Jeanzen Esquillo
              </span>
              <span className="text-xs text-slate-500">
                Information Technology Student
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navigation.map(([label, link]) => (
              <a
                key={label}
                href={link}
                className="text-sm font-medium text-slate-600 transition hover:text-blue-700"
              >
                {label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </nav>

        {menuOpen && (
          <div className="flex flex-col border-t border-slate-200 bg-white px-5 py-3 md:hidden">
            {navigation.map(([label, link]) => (
              <a
                key={label}
                href={link}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm hover:bg-blue-50"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="home" className="scroll-mt-24 overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                Welcome to my e-portfolio
              </p>

              <p className="mb-3 text-lg text-slate-600">Hello, I'm</p>

              <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-6xl">
                Jeanzen Esquillo
                <span className="block text-blue-700">IT Student.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                I am an Information Technology student passionate about
                learning web development, exploring technology, and creating
                practical digital solutions. This portfolio presents my
                background, skills, and academic projects.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
                >
                  View My Projects →
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-700"
                >
                  Contact Me
                </a>
              </div>

              <p className="mt-8 text-sm text-slate-500">
                Bachelor of Science in Information Technology
              </p>
            </div>

            <div className="mx-auto w-full max-w-md">
              <div className="rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 p-8 text-white shadow-2xl shadow-blue-900/20 sm:p-10">
                <div className="mb-12 flex items-center justify-between">
                  <span className="rounded-2xl bg-white/15 p-4 text-3xl">
                    {'</>'}
                  </span>
                  <span className="rounded-full border border-white/30 px-3 py-2 text-xs">
                    MY JOURNEY
                  </span>
                </div>
                <p className="text-sm text-blue-100">My goal is to</p>
                <h2 className="mt-3 text-4xl font-bold leading-tight">
                  Learn.
                  <br />
                  Create.
                  <br />
                  Improve.
                </h2>
                <p className="mt-6 leading-7 text-blue-100">
                  Building my knowledge one project at a time.
                </p>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {['Creativity', 'Learning', 'Growth'].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 bg-white p-4 text-center text-xs font-semibold text-slate-600 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-24 border-y border-slate-200 bg-white py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionTitle
              label="Get to know me"
              title="About Me"
              description="A little about my educational background, interests, and the skills I am developing as an IT student."
            />

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                <h3 className="text-xl font-bold text-slate-900">
                  My Background
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  I am studying Bachelor of Science in Information Technology
                  at Cavite State University - Tanza Campus. My studies
                  introduce me to programming, database management, application
                  development, and human-computer interaction.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                <h3 className="text-xl font-bold text-slate-900">
                  My Interests
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  I enjoy learning new technologies, designing website
                  interfaces, solving programming problems, and creating
                  projects that are organized, useful, and easy to navigate.
                </p>
              </div>
            </div>

            <h3 className="mb-5 mt-12 text-xl font-bold text-slate-900">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-xl border border-slate-200 bg-white p-4 font-medium transition hover:border-blue-300 hover:bg-blue-50"
                >
                  <span className="mr-2 text-blue-700">✦</span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionTitle
              label="My work"
              title="Projects & Work Samples"
              description="These academic projects represent my learning and practice in web development and interface design. Open each project to see more details."
            />

            <div className="grid gap-5 lg:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-40 items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
                    <span className="text-5xl font-black text-blue-700">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                      {project.category}
                    </p>
                    <h3 className="mt-3 text-xl font-bold text-slate-900">
                      {project.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() =>
                        setActiveProject(
                          activeProject === project.title
                            ? null
                            : project.title,
                        )
                      }
                      className="mt-6 font-semibold text-blue-700 hover:text-blue-900"
                    >
                      {activeProject === project.title
                        ? 'Hide details ↑'
                        : 'View details →'}
                    </button>

                    {activeProject === project.title && (
                      <div className="mt-4 rounded-xl bg-blue-50 p-4 text-sm leading-6 text-blue-900">
                        <strong>What I learned:</strong> I practiced
                        organizing code, designing interfaces, and improving
                        the user experience through this project.
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="resume"
          className="scroll-mt-24 border-y border-slate-200 bg-white py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionTitle
              label="My qualifications"
              title="Resume / CV"
              description="An overview of my education, technical skills, and current learning experience."
            />

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-7">
                <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                  Education
                </p>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  Bachelor of Science in Information Technology
                </h3>
                <p className="mt-2 text-slate-600">
                  Cavite State University - Tanza Campus
                </p>
                <p className="mt-2 text-sm text-slate-500">Current student</p>

                <div className="my-7 border-t border-slate-200" />

                <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                  Academic Experience
                </p>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Academic Projects
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Practice through coursework involving React applications,
                  database exercises, website development, and user interface
                  design.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                  Core Competencies
                </p>
                <div className="mt-5 space-y-4">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-blue-100 text-sm text-blue-700">
                        ✓
                      </span>
                      {skill}
                    </div>
                  ))}
                </div>

                <button
                  onClick={downloadCV}
                  className="mt-8 w-full rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
                >
                  Download Sample CV ↓
                </button>
                <p className="mt-3 text-xs leading-5 text-slate-500">
                  This downloads a sample text resume. Update it with your
                  accurate details before using it professionally.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
            <div>
              <SectionTitle
                label="Get in touch"
                title="Contact Me"
                description="Have a question or want to connect? Fill out the form. The form checks your inputs in the browser."
              />
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <p className="font-semibold text-slate-900">Let's connect</p>
                <p className="mt-2 leading-7 text-slate-600">
                  Add your real email address and social media links here when
                  you are ready.
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {error && (
                <p role="alert" className="mb-4 text-sm font-medium text-red-600">
                  {error}
                </p>
              )}

              {submitted && (
                <p
                  role="status"
                  className="mb-4 rounded-xl bg-green-50 p-3 text-sm text-green-800"
                >
                  Form validated successfully! This demo does not send email
                  messages yet.
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                Validate Contact Form →
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 text-sm text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Jeanzen Esquillo. Student E-Portfolio.</p>
          <a
            href="#home"
            className="font-semibold text-blue-700 hover:text-blue-900"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  )
}