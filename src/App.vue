<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import fullStack from './photos/full-stakc.jpg'
import udt from './photos/udt.jpg'

const { t, locale } = useI18n()

function changeLanguage(language) {
    locale.value = language
    localStorage.setItem('portfolio-locale', language)
}
const isLanguageMenuOpen = ref(false)

function selectLanguage(language) {
    changeLanguage(language)
    isLanguageMenuOpen.value = false
}
const certificates = [
    {
        title: 'certificates.fullStack',
        image: fullStack
    },
    {
        title: 'certificates.udt',
        image: udt
    }
]

const activeIndex = ref(0)

let autoplayTimer

function nextCertificate() {
    activeIndex.value =
        (activeIndex.value + 1) % certificates.length
}

function previousCertificate() {
    activeIndex.value =
        (activeIndex.value - 1 + certificates.length)
        % certificates.length
}

onMounted(() => {
    autoplayTimer = setInterval(nextCertificate, 3000)
})

onUnmounted(() => {
    clearInterval(autoplayTimer)
})
</script>


<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-md-6 d-flex justify-content-center mt-4">
                <img src="./photos/me1.png" class="img-fluid photo " alt="Profile photo">
            </div>
            <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center text-center">
                <h1 class="text-white hero-title">Xudayberganov Jamshidbek</h1>
                <p class="text-info fs-3">{{ t('hero.role') }}</p>
                <p class="text-white fs-4 hero-technologies">HTML&CSS • Vue.js • Symfony • PHP • Bootstrap • MySQL</p>
                <div class="d-flex justify-content-center align-items-center gap-2 hero-buttons">
                    <a href="#projects" class="btn btn-info px-3 py-2">
                        {{ t('projects.title') }}
                    </a>

                    <a href="#certificates" class="btn btn-outline-light icon-btn" aria-label="Certificates">
                        <i class="bi bi-person-lines-fill"></i>
                    </a>

                    <a href="#work-education" class="btn btn-outline-light icon-btn" aria-label="Work and Education">
                        <i class="bi bi-pencil"></i>
                    </a>

                    <a href="#skills" class="btn btn-outline-light icon-btn" aria-label="Skills">
                        <i class="bi bi-database-fill"></i>
                    </a>
                    <div class="language-dropdown" @click.stop>
                        <button
                            type="button"
                            class="btn btn-outline-light icon-btn"
                            aria-label="Change language"
                            :aria-expanded="isLanguageMenuOpen"
                            @click="isLanguageMenuOpen = !isLanguageMenuOpen"
                        >
                            <i class="bi bi-translate"></i>
                        </button>

                        <div v-if="isLanguageMenuOpen" class="language-options">
                            <button
                                class="language-option"
                                :class="{ active: locale === 'en' }"
                                @click="selectLanguage('en')"
                            >
                                English <span>EN</span>
                            </button>

                            <button
                                class="language-option"
                                :class="{ active: locale === 'uz' }"
                                @click="selectLanguage('uz')"
                            >
                                O‘zbekcha <span>UZ</span>
                            </button>

                            <button
                                class="language-option"
                                :class="{ active: locale === 'ru' }"
                                @click="selectLanguage('ru')"
                            >
                                Русский <span>RU</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row about-section">
            <div class="col-12 col-lg-10 mx-auto text-center mt-5">
                <h2 class="fs-2 text-white me">{{ t('about.title') }}</h2>
                <p class="text-white ">
                    {{ t('about.description') }}
                </p>
            </div>
        </div>
    </div>


    <section id="work-education" class="work-education-section py-5 mt-5">
        <div class="container">
            <div class="row">

                <div class="col-12 text-center mb-4">
                    <h2 class="text-white">
                        {{ t('workEducation.title') }}
                    </h2>
                </div>

                <div class="col-12 col-lg-6">
                    <h5 class="text-white mb-3">
                        {{ t('workEducation.experienceTitle') }}
                    </h5>

                    <div class="list-group">
                        <div class="list-group-item bg-transparent text-white border-info">
                            <strong>
                                {{ t('workEducation.currentStatus') }}
                            </strong>
                            |
                            {{ t('workEducation.comingSoon') }}

                            <div>
                                {{ t('workEducation.workPeriod') }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <h5 class="text-white mb-3">
                        {{ t('workEducation.educationTitle') }}
                    </h5>

                    <div class="list-group">

                        <div class="list-group-item bg-transparent text-white border-info">
                            <strong>
                                {{ t('workEducation.courseTitle') }}
                            </strong>
                            |
                            {{ t('workEducation.courseType') }}

                            <div>
                                {{ t('workEducation.coursePeriod') }}
                            </div>
                        </div>

                        <div class="list-group-item bg-transparent text-white border-info">
                            <strong>
                                {{ t('workEducation.university') }}
                            </strong>
                            |
                            {{ t('workEducation.universityType') }}

                            <div>
                                {{ t('workEducation.universityPeriod') }}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>

    <section id="skills" class="skills-section py-5">
        <div class="container">
            <h2 class="text-white text-center mb-5">
                {{ t('skills.title') }}
            </h2>

            <div class="row g-4 mb-4">
                <div class="col-12 col-md-4">
                    <div class="skill-card">
                        <h5 class="text-white">
                            <i class="bi bi-code-slash"></i>
                            {{ t('skills.frontend') }}
                            <ul class="mt-2 fs-6">
                                <li>HTML5&CSS3</li>
                                <li>JavaScript</li>
                                <li>Vue.js</li>
                                <li>Bootstrap</li>
                            </ul>
                        </h5>
                    </div>
                </div>

                <div class="col-12 col-md-4">
                    <div class="skill-card">
                        <h5 class="text-white">
                            <i class="bi bi-server"></i>
                            {{ t('skills.backend') }}
                            <ul class="mt-2 fs-6">
                                <li>PHP/Symfony</li>
                                <li>JWT/AUTH</li>
                            </ul>
                        </h5>
                    </div>
                </div>

                <div class="col-12 col-md-4">
                    <div class="skill-card">
                        <h5 class="text-white">
                            <i class="bi bi-database"></i>
                            {{ t('skills.databases') }}
                            <ul class="mt-2 fs-6">
                                <li>MySQL</li>
                                <li>MariaDB</li>
                                <li>phpMyAdmin</li>
                            </ul>
                        </h5>
                    </div>
                </div>
            </div>

            <div class="row g-4">
                <div class="col-12 col-md-6">
                    <div class="skill-card">
                        <h5 class="text-white">
                            <i class="bi bi-box"></i>
                            {{ t('skills.devops') }}
                            <ul class="mt-2 fs-6">
                                <li>Linux Expirience</li>
                                <li>Terminal skills</li>
                                <li>OS Installation</li>
                            </ul>
                        </h5>
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <div class="skill-card">
                        <h5 class="text-white">
                            <i class="bi bi-tools"></i> {{ t('skills.other') }}
                            <ul class="mt-2 fs-6">
                                <li>Git/GitHub/Gitlab</li>
                                <li>Swagger/Api Docs</li>
                            </ul>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="projects" class="projects-section py-5">
        <div class="container">
            <div class="row g-4">

                <div class="col-12 text-center mb-3">
                    <h2 class="text-white">
                        {{ t('projects.title') }}
                    </h2>
                </div>

                <div class="col-12 col-md-6">
                    <div class="project-card h-100">
                        <h5 class="text-white">📚 CRM App</h5>
                        <p class="text-white">Vue.js + Pinia + API</p>
                        <p class="text-white mb-3">
                            {{ t('projects.crmDescription') }}
                        </p>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="project-card h-100">
                        <h5 class="text-white">🔐 Auth System</h5>
                        <p class="text-white">Symfony + JWT</p>
                        <p class="text-white mb-3">
                            {{ t('projects.authDescription') }}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <section id="certificates" class="certificates-section py-5">
        <div class="container">
            <h2 class="text-white text-center mb-4">
                {{ t('certificates.title') }}
            </h2>

            <div class="certificate-carousel">
                <button
                    type="button"
                    class="certificate-arrow"
                    @click="previousCertificate"
                    aria-label="Previous certificate"
                >
                    &#10094;
                </button>

                <Transition name="certificate-fade" mode="out-in">
                    <div :key="activeIndex" class="certificate-slide">
                        <img
                            :src="certificates[activeIndex].image"
                            :alt="t(certificates[activeIndex].title)"
                            class="certificate-image"
                        >

                        <p class="text-white mt-2">
                            {{ t(certificates[activeIndex].title) }}
                        </p>
                    </div>
                </Transition>

                <button
                    type="button"
                    class="certificate-arrow"
                    @click="nextCertificate"
                    aria-label="Next certificate"
                >
                    &#10095;
                </button>
            </div>
        </div>
    </section>

    <section id="contacts" class="contacts-section py-5">
        <div class="container text-center">

            <h2 class="text-white mb-3">
                {{ t('contacts.title') }}
            </h2>

            <p class="text-white mb-4">
                <strong>{{ t('contacts.emailLabel') }}</strong>
                <a href="mailto:xudayberganov050@gmail.com" class="contact-email">
                    xudayberganov050@gmail.com
                </a>
            </p>
            <p class="text-white mb-4">
                <strong>{{ t('contacts.phoneLabel') }}</strong>
                <a href="tel:+998950717627" class="contact-email">
                    +998950717627
                </a>
            </p>

            <div class="d-flex justify-content-center align-items-center gap-4">

                <a href="https://t.me/mrjamakh"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="contact-icon"
                   aria-label="Telegram">
                    <i class="bi bi-telegram"></i>
                </a>

                <a href="https://github.com/jamshidbekxudayberganov"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="contact-icon"
                   aria-label="GitHub">
                    <i class="bi bi-github"></i>
                </a>

            </div>
        </div>
    </section>



</template>

<style >
html {
    scroll-behavior: smooth;
}

body::before{
    content: "";
    position: fixed;
    inset: 0;
    z-index: -1;
    background:
        linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
        url(photos/walpaper.jpg) no-repeat center;
    background-size: cover;
}
.icon-btn {
    width: 54px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    border-radius: 10px;
}
.photo {
    width: 450px;
    max-width: 100%;
    height: auto;
    transition: transform 0.3s ease;
}
.photo:hover {
    transform: scale(1.05);
}
.work-education-section {
    background-color: rgba(0, 0, 0, 0.65);
}
.me{
    padding: 50px;
}

.skill-card {
    border: 1px solid rgba(0, 210, 255, 0.6);
    border-radius: 5px;
    padding: 18px;
    min-height: 150px;
    background-color: rgba(0, 0, 0, 0.15);
}

.projects-section {
    background-color: rgba(0, 0, 0, 0.65);
}

.project-card {
    border: 1px solid rgba(0, 210, 255, 0.6);
    border-radius: 5px;
    padding: 16px;
    background-color: rgba(255, 255, 255, 0.05);
    transition: transform 0.3s ease, background-color 0.3s ease;
}

.project-card:hover {
    transform: translateY(-4px);
    background-color: rgba(0, 210, 255, 0.08);
}

.certificates-section {
    background-color: rgba(0, 0, 0, 0.25);
}

.certificate-carousel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    max-width: 900px;
    min-height: 260px;
    margin: 0 auto;
}

.certificate-slide {
    flex: 1;
    min-width: 0;
    text-align: center;
}

.certificate-image {
    display: block;
    height: 200px;
    max-width: 100%;
    object-fit: contain;
    margin: 0 auto;
}

.certificate-arrow {
    flex-shrink: 0;
    border: none;
    background: transparent;
    color: white;
    font-size: 36px;
    padding: 10px;
    cursor: pointer;
    opacity: 0.75;
    transition: opacity 0.2s ease;
}

.certificate-arrow:hover {
    opacity: 1;
}

.certificate-fade-enter-active,
.certificate-fade-leave-active {
    transition: opacity 0.25s ease;
}

.certificate-fade-enter-from,
.certificate-fade-leave-to {
    opacity: 0;
}

.contacts-section {
    background-color: rgba(0, 0, 0, 0.75);
}

.contact-email {
    color: white;
    text-decoration: none;
}

.contact-email:hover {
    color: #0dcaf0;
}

.contact-icon {
    color: white;
    font-size: 20px;
    transition: color 0.2s ease, transform 0.2s ease;
}

.contact-icon:hover {
    color: #0dcaf0;
    transform: translateY(-3px);
}


@media (max-width: 767.98px) {
    .hero-title {
        font-size: clamp(1.5rem, 7vw, 2.5rem);
        overflow-wrap: anywhere;
    }

    .hero-technologies {
        font-size: clamp(1rem, 4vw, 1.5rem) !important;
    }

    .hero-buttons {
        flex-wrap: wrap;
    }

    .me {
        padding: 1.5rem 0.75rem;
    }

    .about-section p {
        padding: 0 0.5rem;
        overflow-wrap: anywhere;
    }

    .contact-email {
        overflow-wrap: anywhere;
    }
}

@media (max-width: 576px) {
    .certificate-carousel {
        gap: 5px;
        min-height: 220px;
    }

    .certificate-image {
        height: 180px;
    }

    .certificate-arrow {
        font-size: 24px;
        padding: 5px;
    }
}
.language-dropdown {
    position: relative;
    display: inline-flex;
}

.language-options {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    min-width: 160px;
    padding: 6px;
    background: rgba(5, 17, 30, 0.96);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    backdrop-filter: blur(12px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
    z-index: 1000;
}

.language-option {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 9px 11px;
    border: none;
    border-radius: 7px;
    color: white;
    background: transparent;
    cursor: pointer;
}

.language-option:hover,
.language-option.active {
    background: rgba(13, 202, 240, 0.18);
    color: #0dcaf0;
}

.language-option span {
    opacity: 0.65;
    font-size: 12px;
}
</style>