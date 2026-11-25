import {
  FiFileText,
  FiShield,
  FiCalendar,
  FiCreditCard,
  FiUser,
  FiUsers,
  FiHeart,
  FiAlertCircle,
  FiCheckCircle,
  FiXCircle,
  FiLock,
  FiClock,
  FiMail,
  FiChevronRight,
  FiActivity,
} from "react-icons/fi";

const TermsOfService = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-700">
      {/* Hero Section */}
      <section className="relative border-b border-green-100 bg-linear-to-br from-green-50 via-white to-cyan-50">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-green-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-cyan-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/90 px-4 py-2 text-sm font-semibold text-green-700 shadow-sm">
              <FiFileText className="text-lg" />
              Legal Information
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Terms of
              <span className="mt-2 block bg-linear-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Service
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Clear guidelines for using our doctor appointment platform.
              Please review these terms to understand the conditions,
              responsibilities, and policies that apply when you use our
              services.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-xl border border-green-200 bg-white px-4 py-3 text-slate-600 shadow-sm">
                <FiShield className="text-lg text-green-600" />
                Transparent Service Terms
              </span>

              <span className="inline-flex items-center gap-2 rounded-xl border border-green-200 bg-white px-4 py-3 text-slate-600 shadow-sm">
                <FiClock className="text-lg text-cyan-600" />
                Last updated: October 26, 2026
              </span>
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:mt-16">
            <div className="rounded-2xl border border-green-100 bg-white/95 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                <FiCalendar className="text-2xl" />
              </div>
              <h2 className="mt-4 font-semibold text-slate-900">
                Appointment Guidelines
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Understand booking and cancellation conditions.
              </p>
            </div>

            <div className="rounded-2xl border border-green-100 bg-white/95 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <FiShield className="text-2xl" />
              </div>
              <h2 className="mt-4 font-semibold text-slate-900">
                Clear Responsibilities
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Know your rights and responsibilities.
              </p>
            </div>

            <div className="rounded-2xl border border-green-100 bg-white/95 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                <FiHeart className="text-2xl" />
              </div>
              <h2 className="mt-4 font-semibold text-slate-900">
                Healthcare Focus
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Understand the limits of our booking service.
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
                  <h2 className="font-bold text-slate-900">Terms Guide</h2>
                  <p className="text-xs text-slate-500">On this page</p>
                </div>
              </div>

              <nav className="mt-5 space-y-1">
                <a href="#acceptance" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiCheckCircle className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">1. Acceptance of Terms</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="#services" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiActivity className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">2. Our Services</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="#accounts" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiUsers className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">3. User Accounts</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="#appointments" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiCalendar className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">4. Appointments</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="#payments" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiCreditCard className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">5. Payments & Fees</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="#cancellations" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiXCircle className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">6. Cancellations & Refunds</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="#responsibilities" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiUser className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">7. User Responsibilities</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="#medical" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiHeart className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">8. Medical Disclaimer</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="#privacy" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiLock className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">9. Privacy & Security</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="#liability" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiShield className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">10. Limitation of Liability</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="#changes" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiClock className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">11. Changes to Terms</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="#contact" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-green-100 hover:text-green-800">
                  <FiMail className="shrink-0 text-base text-green-600" />
                  <span className="flex-1">12. Contact Us</span>
                  <FiChevronRight className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>
              </nav>

              <div className="mt-6 rounded-xl border border-green-200 bg-white p-4">
                <FiShield className="text-xl text-green-600" />
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Use Our Platform Responsibly
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Review the terms before creating an account or booking an
                  appointment.
                </p>
              </div>
            </div>
          </aside>

          {/* Terms Sections */}
          <div className="min-w-0 space-y-6">

            {/* 1. Acceptance */}
            <section id="acceptance" className="scroll-mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <FiCheckCircle className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    1. Acceptance of Terms
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                    <p>
                      These Terms of Service govern your access to and use of
                      [Your Doctor Appointment Website Name], including its
                      website, account features, appointment booking
                      functionality, and related services.
                    </p>
                    <p>
                      By accessing the platform, creating an account, or
                      booking an appointment, you agree to these terms and
                      our Privacy Policy. If you do not agree, please
                      discontinue using the platform.
                    </p>
                    <p>
                      You must have the legal capacity to accept these terms.
                      Where a parent, guardian, or authorized representative
                      is required by law, the applicable requirements must
                      be followed.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Services */}
            <section id="services" className="scroll-mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <FiActivity className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    2. Our Services
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                    <p>
                      Our platform allows patients to explore available
                      doctors, review relevant profile information, and
                      request or book appointments based on the features
                      available on the website.
                    </p>
                    <p>
                      Doctors may use the platform to view and manage their
                      profiles and appointments, subject to their assigned
                      permissions. Authorized administrators may manage
                      platform users, doctor accounts, and appointment
                      operations.
                    </p>
                    <p>
                      Unless explicitly stated otherwise, the platform
                      facilitates appointment scheduling. It does not itself
                      provide medical diagnosis, treatment, or emergency
                      healthcare services.
                    </p>
                    <p>
                      Features, availability, and service functionality may
                      change over time. We may maintain, update, suspend, or
                      discontinue features where reasonably necessary and
                      subject to applicable law.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Accounts */}
            <section id="accounts" className="scroll-mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <FiUsers className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    3. User Accounts
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                    <p>
                      You must provide accurate, current, and complete
                      information when creating or using an account. You are
                      responsible for keeping your account information up to
                      date.
                    </p>
                    <p>
                      Keep your login credentials confidential and do not
                      permit unauthorized individuals to access your account.
                      Notify us promptly if you suspect unauthorized access
                      or account misuse.
                    </p>
                    <p>
                      Doctor accounts may be created or authorized by the
                      platform administrator, depending on the platform's
                      registration process. Doctors must provide accurate
                      professional information and any credentials required
                      for verification.
                    </p>
                    <p>
                      We may restrict or suspend an account when reasonably
                      necessary to investigate suspected fraud, security
                      issues, policy violations, or unlawful activity, subject
                      to applicable law.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Appointments */}
            <section id="appointments" className="scroll-mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <FiCalendar className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    4. Appointments & Booking Conditions
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                    <p>
                      Patients must select the correct doctor, appointment
                      date, available time slot, and any other required
                      booking details. Review the information carefully
                      before submitting a reservation.
                    </p>
                    <p>
                      An appointment is subject to the booking status shown
                      by the platform. A submitted request should not be
                      treated as confirmed unless the platform provides the
                      applicable confirmation.
                    </p>
                    <p>
                      Appointment availability may change. If an appointment
                      needs to be rescheduled or cannot be honored, the
                      relevant parties should use the available booking
                      options or contact support.
                    </p>
                    <p>
                      Patients are responsible for arriving on time and
                      following any reasonable instructions provided by the
                      doctor or clinic. The doctor or clinic may have
                      additional policies concerning late arrivals,
                      rescheduling, or missed appointments.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Payments */}
            <section id="payments" className="scroll-mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                  <FiCreditCard className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    5. Payments & Fees
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                    <p>
                      If appointment booking or related services involve
                      payment, applicable consultation fees, platform charges,
                      taxes, and other costs should be displayed during the
                      booking process where required.
                    </p>
                    <p>
                      You authorize the applicable payment to be processed
                      when you submit a transaction requiring payment.
                      Payments may be handled by a third-party payment
                      provider, where supported.
                    </p>
                    <p>
                      You are responsible for providing valid payment
                      information and ensuring that you are authorized to
                      use the selected payment method.
                    </p>
                    <p>
                      Payment processing, failed transactions, additional
                      charges, and payment disputes may also be subject to
                      the terms of the relevant payment provider.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Cancellations */}
            <section id="cancellations" className="scroll-mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <FiXCircle className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    6. Cancellations, Rescheduling & Refunds
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                    <p>
                      Patients should cancel or reschedule appointments
                      through the available platform features or by
                      contacting the appropriate support channel.
                    </p>
                    <p>
                      Cancellation deadlines, missed-appointment charges,
                      and refund eligibility may depend on the applicable
                      doctor or clinic policy and any payment terms disclosed
                      at booking.
                    </p>
                    <p>
                      If a doctor cancels or is unable to attend an
                      appointment, the platform or relevant provider should
                      communicate the available options where practicable.
                    </p>
                    <p>
                      Approved refunds may take additional time to appear,
                      depending on the payment provider, bank, and original
                      payment method. Any applicable consumer rights remain
                      unaffected by this section.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Responsibilities */}
            <section id="responsibilities" className="scroll-mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <FiUser className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    7. User Responsibilities
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    When using the platform, you agree not to:
                  </p>

                  <ul className="mt-4 space-y-3">
                    <li className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base">
                      <FiCheckCircle className="mt-1 shrink-0 text-green-600" />
                      <span>Provide false, misleading, or unauthorized information.</span>
                    </li>
                    <li className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base">
                      <FiCheckCircle className="mt-1 shrink-0 text-green-600" />
                      <span>Use the platform for fraud, unlawful activity, or impersonation.</span>
                    </li>
                    <li className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base">
                      <FiCheckCircle className="mt-1 shrink-0 text-green-600" />
                      <span>Attempt to access another user's account or restricted data without authorization.</span>
                    </li>
                    <li className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base">
                      <FiCheckCircle className="mt-1 shrink-0 text-green-600" />
                      <span>Interfere with the platform's security, availability, or normal operation.</span>
                    </li>
                    <li className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base">
                      <FiCheckCircle className="mt-1 shrink-0 text-green-600" />
                      <span>Upload malicious code or attempt to exploit platform vulnerabilities.</span>
                    </li>
                    <li className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base">
                      <FiCheckCircle className="mt-1 shrink-0 text-green-600" />
                      <span>Misuse personal, appointment, or professional information obtained through the platform.</span>
                    </li>
                    <li className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base">
                      <FiCheckCircle className="mt-1 shrink-0 text-green-600" />
                      <span>Use the platform in a way that violates applicable law or the rights of others.</span>
                    </li>
                  </ul>

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    Users are responsible for the accuracy of the information
                    they submit and for complying with applicable platform
                    policies.
                  </p>
                </div>
              </div>
            </section>

            {/* 8. Medical Disclaimer */}
            <section id="medical" className="scroll-mt-8 rounded-2xl border border-green-200 bg-linear-to-br from-green-50 via-white to-cyan-50 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-600 shadow-sm ring-1 ring-green-200">
                  <FiHeart className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    8. Medical Disclaimer
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                    <p>
                      The platform is intended to facilitate appointment
                      scheduling and related administrative interactions.
                      Unless a specific clinical service is expressly
                      provided, the platform does not replace professional
                      medical advice, diagnosis, or treatment.
                    </p>
                    <p>
                      Information displayed in doctor profiles or elsewhere
                      on the platform is not a substitute for an individual
                      consultation with a qualified healthcare professional.
                    </p>
                    <p>
                      We do not guarantee a particular medical outcome or
                      the suitability of a treatment. Clinical decisions
                      remain the responsibility of the qualified healthcare
                      professional providing care.
                    </p>
                  </div>

                  <div className="mt-5 flex gap-3 rounded-xl border border-cyan-100 bg-white p-4">
                    <FiAlertCircle className="mt-0.5 shrink-0 text-xl text-cyan-600" />
                    <p className="text-sm leading-6 text-slate-700">
                      <strong>Medical emergency:</strong> Do not rely on this
                      appointment platform for emergency care. Contact your
                      local emergency services or go to the nearest
                      emergency department.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 9. Privacy */}
            <section id="privacy" className="scroll-mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <FiLock className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    9. Privacy & Security
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                    <p>
                      Our collection and use of personal information are
                      described in our Privacy Policy. By using the platform,
                      you should review that policy to understand how
                      information may be processed.
                    </p>
                    <p>
                      We use reasonable safeguards intended to protect
                      information handled through our services. However,
                      no online system can guarantee absolute security.
                    </p>
                    <p>
                      Users must protect their account credentials and
                      promptly notify us of suspected account compromise
                      or unauthorized access.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 10. Liability */}
            <section id="liability" className="scroll-mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <FiShield className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    10. Limitation of Liability
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                    <p>
                      To the extent permitted by applicable law, we are not
                      responsible for indirect or consequential losses
                      arising from the use of, or inability to use, the
                      platform.
                    </p>
                    <p>
                      We do not guarantee uninterrupted access, error-free
                      operation, or continuous availability of every doctor
                      or appointment slot.
                    </p>
                    <p>
                      We are not responsible for independent clinical
                      decisions made by healthcare professionals. This
                      provision does not remove any responsibility that
                      applicable law places on us.
                    </p>
                    <p>
                      Nothing in these terms excludes or limits liability
                      where such exclusion or limitation is prohibited by
                      applicable law, including mandatory consumer rights.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 11. Changes */}
            <section id="changes" className="scroll-mt-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <FiClock className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    11. Changes to These Terms
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                    <p>
                      We may update these terms to reflect changes in our
                      services, operational practices, or legal obligations.
                      The revised version will be published on this page
                      with an updated date.
                    </p>
                    <p>
                      Where required by law, we will provide notice of
                      material changes or obtain any necessary consent.
                      Continued use of the platform after changes take
                      effect will be subject to the updated terms to the
                      extent permitted by law.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 12. Contact */}
            <section id="contact" className="scroll-mt-8 rounded-2xl border border-green-200 bg-linear-to-br from-green-50 via-white to-cyan-50 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-green-700 shadow-sm ring-1 ring-green-200">
                  <FiMail className="text-2xl" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-bold text-slate-900">
                    12. Contact Us
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    If you have questions about these Terms of Service,
                    account requirements, or appointment bookings, please
                    contact our support team.
                  </p>

                  <div className="mt-6 rounded-xl border border-green-200 bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">
                      Customer Support
                    </p>
                    <p className="mt-2 break-all font-semibold text-purple-600">
                      support@example.com
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

            {/* Closing Section */}
            <div className="rounded-2xl border border-green-200 bg-green-100/70 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-green-700 shadow-sm">
                  <FiShield className="text-xl" />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900">
                    Thank You for Using Our Platform
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    We appreciate your trust in our doctor appointment
                    platform. By following these terms, you help us maintain
                    a reliable and respectful environment for patients,
                    doctors, and administrators.
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

export default TermsOfService;