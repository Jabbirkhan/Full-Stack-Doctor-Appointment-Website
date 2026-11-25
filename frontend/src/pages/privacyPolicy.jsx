import {
  FiShield,
  FiLock,
  FiUser,
  FiCalendar,
  FiDatabase,
  FiEye,
  FiShare2,
  FiClock,
  FiMail,
  FiCheckCircle,
  FiFileText,
  FiChevronRight,
  FiHeart,
  FiActivity,
  FiAlertCircle,
  FiGlobe,
} from "react-icons/fi";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-700">
      {/* Hero Section */}
      <section className="relative border-b border-green-100 bg-linear-to-br from-green-50 via-white to-cyan-50">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-green-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-cyan-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-2 text-sm font-semibold text-green-700 shadow-sm">
              <FiShield className="text-lg" />
              Privacy & Data Protection
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Your Health.
              <br />
              Your Privacy.
              <span className="mt-2 block bg-linear-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Our Responsibility.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Your trust matters to us. Learn how our doctor appointment
              platform collects, uses, protects, and manages your personal
              information when you book appointments and use our services.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-xl border border-green-200 bg-white px-4 py-3 text-slate-600 shadow-sm">
                <FiLock className="text-lg text-green-600" />
                Privacy-focused practices
              </span>

              <span className="inline-flex items-center gap-2 rounded-xl border border-green-200 bg-white px-4 py-3 text-slate-600 shadow-sm">
                <FiClock className="text-lg text-cyan-600" />
                Last updated: October 26, 2026
              </span>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:mt-16">
            <div className="rounded-2xl border border-green-100 bg-white/90 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <FiShield className="text-2xl" />
              </div>
              <h2 className="mt-4 font-semibold text-slate-900">
                Protected Information
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Safeguards for the information we handle.
              </p>
            </div>

            <div className="rounded-2xl border border-green-100 bg-white/90 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <FiUser className="text-2xl" />
              </div>
              <h2 className="mt-4 font-semibold text-slate-900">
                Your Control
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Understand your choices and privacy rights.
              </p>
            </div>

            <div className="rounded-2xl border border-green-100 bg-white/90 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                <FiHeart className="text-2xl" />
              </div>
              <h2 className="mt-4 font-semibold text-slate-900">
                Healthcare Privacy
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Careful handling of appointment information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">

          {/* Table of Contents */}
          <aside className="lg:sticky lg:top-8">
            <div className="rounded-2xl border border-green-200 bg-linear-to-br from-green-50 to-white p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <FiFileText className="text-xl" />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900">Privacy Guide</h2>
                  <p className="text-xs text-slate-500">On this page</p>
                </div>
              </div>

              <nav className="mt-5 space-y-1">
                <a href="#introduction" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiFileText className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">1. Introduction</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="#information" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiDatabase className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">2. Information We Collect</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="#medical-information" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiHeart className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">3. Medical Information</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="#usage" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiActivity className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">4. How We Use Information</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="#appointments" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiCalendar className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">5. Appointment Management</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="#sharing" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiShare2 className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">6. Information Sharing</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="#security" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiLock className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">7. Data Security</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="#rights" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiUser className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">8. Your Privacy Rights</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="#retention" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiClock className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">9. Data Retention</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="#cookies" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiEye className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">10. Cookies & Technologies</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="#third-party" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiGlobe className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">11. Third-Party Services</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="#changes" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiAlertCircle className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">12. Policy Updates</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="#contact" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiMail className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">13. Contact Us</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>
              </nav>

              <div className="mt-6 rounded-xl border border-green-200 bg-white p-4">
                <FiShield className="text-xl text-green-600" />
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Your privacy matters
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Please review this policy to understand how your information
                  is handled.
                </p>
              </div>
            </div>
          </aside>

          {/* Policy Sections */}
          <div className="min-w-0 space-y-6">

            {/* 1. Introduction */}
            <section id="introduction" className="scroll-mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <FiFileText className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    1. Introduction
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                    <p>
                      This Privacy Policy explains how [Your Doctor Appointment
                      Website Name] collects, uses, stores, and shares
                      information when you visit our website, create an
                      account, book a medical appointment, or use our services.
                    </p>
                    <p>
                      In this policy, "we," "our," and "us" refer to
                      [Your Doctor Appointment Website Name]. "You" and
                      "your" refer to patients, doctors, and other individuals
                      who use our platform.
                    </p>
                    <p>
                      By using our platform, you acknowledge that you have
                      reviewed this policy. Where consent is legally required,
                      we will seek it as appropriate. This policy should be
                      read alongside our Terms of Service.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Information We Collect */}
            <section id="information" className="scroll-mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <FiDatabase className="text-xl" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-bold text-slate-900">
                    2. Information We Collect
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    Depending on how you use our platform, we may collect the
                    following categories of information:
                  </p>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-green-200 bg-green-50/70 p-5">
                      <FiUser className="text-xl text-green-700" />
                      <h3 className="mt-3 font-semibold text-slate-900">
                        Personal Information
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Name, email address, phone number, account details,
                        and other information you provide.
                      </p>
                    </div>

                    <div className="rounded-xl border border-green-200 bg-green-50/70 p-5">
                      <FiCalendar className="text-xl text-green-700" />
                      <h3 className="mt-3 font-semibold text-slate-900">
                        Appointment Information
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Selected doctor, appointment date, time, booking
                        status, and related communications.
                      </p>
                    </div>

                    <div className="rounded-xl border border-purple-100 bg-purple-50/60 p-5">
                      <FiActivity className="text-xl text-purple-600" />
                      <h3 className="mt-3 font-semibold text-slate-900">
                        Technical Information
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        IP address, browser type, device information, and
                        technical logs where collected.
                      </p>
                    </div>

                    <div className="rounded-xl border border-cyan-100 bg-cyan-50/60 p-5">
                      <FiMail className="text-xl text-cyan-600" />
                      <h3 className="mt-3 font-semibold text-slate-900">
                        Communication Information
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Messages, support requests, and feedback you send
                        through available communication channels.
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    We collect information that is relevant to operating our
                    platform and providing the features you choose to use.
                    The exact information collected depends on the features
                    enabled on your deployment.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Medical Information */}
            <section id="medical-information" className="scroll-mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <FiHeart className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    3. Medical Information
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                    <p>
                      If the platform allows you to submit symptoms, medical
                      history, health concerns, or other clinical details,
                      that information may constitute sensitive personal or
                      health data under applicable law.
                    </p>
                    <p>
                      Such information should be collected only when the
                      relevant feature requires it and handled according to
                      applicable privacy and healthcare requirements.
                      Doctors should access patient information only as
                      authorized and as necessary for their responsibilities.
                    </p>
                    <p>
                      Please avoid submitting unnecessary sensitive medical
                      details through general contact forms or other channels
                      that are not intended for medical information.
                    </p>
                  </div>

                  <div className="mt-5 flex gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
                    <FiShield className="mt-0.5 shrink-0 text-xl text-green-700" />
                    <p className="text-sm leading-6 text-green-900">
                      <strong>Important:</strong> Do not claim that the
                      platform is compliant with a particular healthcare
                      privacy law or certification unless its actual
                      technical and operational practices have been assessed.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. How We Use Your Information */}
            <section id="usage" className="scroll-mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <FiActivity className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    4. How We Use Your Information
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    We may use relevant information for the following
                    purposes, where applicable:
                  </p>

                  <ul className="mt-4 space-y-3">
                    <li className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base">
                      <FiCheckCircle className="mt-1 shrink-0 text-green-600" />
                      <span>Create and manage patient and doctor accounts.</span>
                    </li>
                    <li className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base">
                      <FiCheckCircle className="mt-1 shrink-0 text-green-600" />
                      <span>Schedule, confirm, update, and manage appointments.</span>
                    </li>
                    <li className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base">
                      <FiCheckCircle className="mt-1 shrink-0 text-green-600" />
                      <span>Send appointment confirmations, reminders, and service-related messages.</span>
                    </li>
                    <li className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base">
                      <FiCheckCircle className="mt-1 shrink-0 text-green-600" />
                      <span>Provide customer support and respond to requests.</span>
                    </li>
                    <li className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base">
                      <FiCheckCircle className="mt-1 shrink-0 text-green-600" />
                      <span>Maintain platform security and detect fraud or unauthorized activity.</span>
                    </li>
                    <li className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base">
                      <FiCheckCircle className="mt-1 shrink-0 text-green-600" />
                      <span>Improve reliability, performance, and user experience.</span>
                    </li>
                    <li className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base">
                      <FiCheckCircle className="mt-1 shrink-0 text-green-600" />
                      <span>Meet applicable legal obligations and resolve disputes.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. Appointment Management */}
            <section id="appointments" className="scroll-mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <FiCalendar className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    5. Appointment Management
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                    <p>
                      When a patient books an appointment, the platform may
                      process relevant booking details to make the reservation
                      available to the assigned doctor and authorized
                      administrative personnel.
                    </p>
                    <p>
                      Doctors may access information necessary to review and
                      manage their appointments. Authorized administrators
                      may access information necessary to operate the
                      platform and provide support.
                    </p>
                    <p>
                      Appointment notifications may be sent using the contact
                      details you provide. You are responsible for keeping
                      those details accurate and informing us if they change.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Information Sharing */}
            <section id="sharing" className="scroll-mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <FiShare2 className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    6. Information Sharing
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    We may share information in limited circumstances,
                    depending on the services and features in use:
                  </p>

                  <div className="mt-5 space-y-4">
                    <div className="rounded-xl border border-green-100 bg-green-50/50 p-4">
                      <h3 className="font-semibold text-slate-900">
                        Doctors and Authorized Administrators
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Appointment and relevant patient information may be
                        available to the doctor assigned to an appointment
                        and authorized personnel who need it to perform
                        their duties.
                      </p>
                    </div>

                    <div className="rounded-xl border border-green-100 bg-green-50/50 p-4">
                      <h3 className="font-semibold text-slate-900">
                        Service Providers
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Hosting, email delivery, file storage, monitoring,
                        and other providers may process information when
                        required to deliver configured platform services.
                      </p>
                    </div>

                    <div className="rounded-xl border border-green-100 bg-green-50/50 p-4">
                      <h3 className="font-semibold text-slate-900">
                        Legal and Safety Requirements
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Information may be disclosed where required by law
                        or when reasonably necessary to address security
                        incidents, fraud, or the protection of legal rights.
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    We do not state that information is never shared. Any
                    sharing must be consistent with the services provided,
                    applicable law, and the privacy commitments that apply
                    to your deployment.
                  </p>
                </div>
              </div>
            </section>

            {/* 7. Data Security */}
            <section id="security" className="scroll-mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <FiLock className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    7. Data Security
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                    <p>
                      We use appropriate technical and organizational
                      safeguards designed to protect information against
                      unauthorized access, loss, alteration, and disclosure.
                    </p>
                    <p>
                      Depending on the implementation, safeguards may include
                      authentication, access controls, secure password
                      storage, protected configuration secrets, and secure
                      communication protocols.
                    </p>
                    <p>
                      No internet-based system or storage method can be
                      guaranteed completely secure. Users should protect
                      their login credentials and promptly report suspected
                      unauthorized access.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 8. Your Privacy Rights */}
            <section id="rights" className="scroll-mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <FiUser className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    8. Your Privacy Rights
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    Depending on your location and applicable law, you may
                    have rights to:
                  </p>

                  <ul className="mt-4 space-y-3">
                    <li className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base">
                      <FiCheckCircle className="mt-1 shrink-0 text-purple-600" />
                      <span>Request access to personal information we hold about you.</span>
                    </li>
                    <li className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base">
                      <FiCheckCircle className="mt-1 shrink-0 text-purple-600" />
                      <span>Request correction of inaccurate or incomplete information.</span>
                    </li>
                    <li className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base">
                      <FiCheckCircle className="mt-1 shrink-0 text-purple-600" />
                      <span>Request deletion of information where legally applicable.</span>
                    </li>
                    <li className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base">
                      <FiCheckCircle className="mt-1 shrink-0 text-purple-600" />
                      <span>Object to or restrict certain types of processing.</span>
                    </li>
                    <li className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base">
                      <FiCheckCircle className="mt-1 shrink-0 text-purple-600" />
                      <span>Withdraw consent where processing is based on consent.</span>
                    </li>
                    <li className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base">
                      <FiCheckCircle className="mt-1 shrink-0 text-purple-600" />
                      <span>Request a copy of eligible information in a portable format.</span>
                    </li>
                  </ul>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    To submit a privacy request, contact us using the details
                    below. We may need to verify your identity before acting
                    on a request. Some information may need to be retained
                    where required by law or for legitimate operational
                    purposes.
                  </p>
                </div>
              </div>
            </section>

            {/* 9. Data Retention */}
            <section id="retention" className="scroll-mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <FiClock className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    9. Data Retention
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                    <p>
                      We retain personal information for as long as reasonably
                      necessary to provide our services, maintain booking
                      records, resolve disputes, enforce agreements, and
                      comply with applicable legal obligations.
                    </p>
                    <p>
                      Retention periods may vary depending on the type of
                      information, its purpose, applicable legal requirements,
                      and whether a record is needed for an ongoing matter.
                    </p>
                    <p>
                      When information is no longer required, we will take
                      appropriate steps to delete it, anonymize it, or
                      otherwise handle it according to applicable requirements.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 10. Cookies & Similar Technologies */}
            <section id="cookies" className="scroll-mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                  <FiEye className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    10. Cookies & Similar Technologies
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                    <p>
                      Our website may use cookies or similar technologies
                      to support essential functionality, maintain sessions,
                      improve performance, and understand usage where
                      analytics tools are enabled.
                    </p>
                    <p>
                      Essential technologies may be needed for account
                      authentication and security. Non-essential analytics
                      or advertising technologies, if used, should be
                      configured in accordance with applicable consent
                      requirements.
                    </p>
                    <p>
                      You can manage cookies through your browser settings.
                      Blocking certain cookies may affect some platform
                      features.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 11. Third-Party Services */}
            <section id="third-party" className="scroll-mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                  <FiGlobe className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    11. Third-Party Services
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                    <p>
                      Our platform may rely on third-party services for
                      hosting, authentication, email delivery, file storage,
                      analytics, or other functionality.
                    </p>
                    <p>
                      When enabled, these providers may process relevant
                      information under their own terms and privacy policies
                      and according to our applicable arrangements with them.
                    </p>
                    <p>
                      We encourage you to review the privacy policies of
                      third-party services when their features are used.
                      We are not responsible for independent websites or
                      services outside our control, subject to applicable law.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 12. Policy Updates */}
            <section id="changes" className="scroll-mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <FiAlertCircle className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    12. Policy Updates
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                    <p>
                      We may update this Privacy Policy to reflect changes
                      in our services, information-handling practices, or
                      applicable legal requirements.
                    </p>
                    <p>
                      Updated terms will be published on this page with a
                      revised "Last updated" date. Where required by law,
                      we will provide additional notice or obtain consent
                      before implementing relevant changes.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 13. Contact Us */}
            <section id="contact" className="scroll-mt-8 overflow-hidden rounded-2xl border border-green-200 bg-linear-to-br from-green-50 via-white to-cyan-50 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-green-700 shadow-sm ring-1 ring-green-200">
                  <FiMail className="text-2xl" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-bold text-slate-900">
                    13. Contact Us
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    If you have questions about this Privacy Policy or want
                    to submit a privacy-related request, contact our team
                    using the information below.
                  </p>

                  <div className="mt-6 rounded-xl border border-green-200 bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">
                      Privacy Support
                    </p>
                    <p className="mt-2 break-all font-semibold text-purple-600">
                      privacy@example.com
                    </p>
                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      [Your Doctor Appointment Website Name]
                      <br />
                      [Your Business Address]
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Closing Note */}
            <div className="rounded-2xl border border-green-200 bg-green-100/70 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-green-700 shadow-sm">
                  <FiShield className="text-xl" />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900">
                    Thank You for Trusting Us
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    We understand that privacy is especially important when
                    arranging healthcare. We aim to handle your information
                    responsibly and communicate our practices clearly.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;