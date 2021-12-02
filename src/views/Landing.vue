<template>
    <div class="landing">
        <div
            class="brand-description text-center"
            v-bind:class="{ 'demo-running': demoRunning }"
        >
            <Particles
                id="particles"
                :options="{
                    background: {
                        color: {
                            value: '#ffffff',
                        },
                    },
                    fpsLimit: 30,
                    interactivity: {
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 5,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 3,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: scssVariables['primaryColor'],
                        },
                        links: {
                            color: scssVariables['primaryColor'],
                            distance: 150,
                            enable: true,
                            opacity: 0.3,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.3,
                        },
                        shape: {
                            type: 'circle',
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }"
            />
            <div class="vertical-align">
                <div class="logo">
                    <img src="img/logo.svg" />
                    <b>MutableSecurity</b>
                </div>
                <p class="motto">Aliatul tău în securitate</p>
                <div class="description">
                    <p>
                        Dacă și pe tine te îngrijorează un posibil atac în
                        mediul online, dar ai vrea să te concentrezi pe ce e mai
                        important pentru tine și organizația ta, noi suntem aici
                        să te ajutăm.
                    </p>
                    <p>
                        Misiunea noastră este să ajutăm organizațiile mici și
                        mijlocii să își îmbunătățească postura de securitate.
                    </p>
                    <form class="form-inline">
                        <input
                            type="email"
                            class="form-control"
                            placeholder="Adresa ta de email"
                            v-model="email"
                        />
                        <button
                            type="button"
                            class="btn btn-default"
                            @click="sendEmail"
                        >
                            Află când lansăm!
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div class="demo" v-bind:class="{ 'demo-running': demoRunning != '' }">
            <div class="demo-container vertical-align">
                <base-button
                    type="default"
                    class="goto-demo"
                    v-if="demoRunning == ''"
                    @click="startDemo"
                >
                    Vezi cum va funcționa<br />
                    întregul proces
                    <i class="fa fa-arrow-right"></i>
                </base-button>
                <div
                    class="custom-slider-container"
                    v-bind:class="{
                        'demo-loading-finished': demoRunning == 'running',
                    }"
                >
                    <div class="navigation-icons">
                        <i
                            class="fa fa-chevron-up slider-controller"
                            @click="onArrowUp"
                        ></i>
                        <i
                            v-for="(item, index) in navigationButtons"
                            :key="index"
                            :class="'fa ' + item.icon + ' ' + item.class"
                            @click="slideTo(index)"
                        />
                        <i
                            class="fa fa-chevron-down slider-controller"
                            @click="onArrowDown"
                        ></i>
                    </div>
                    <div>
                        <slider ref="slider" :options="options" @slide="slide">
                            <slideritem
                                ><div class="vertical-align">
                                    <h3>
                                        Verificarea Automată a <wbr />Prezenței
                                        Online
                                    </h3>
                                    <p>
                                        Pentru a face procesul mai rapid și mai
                                        ușor, folosim
                                        <b>informații publice</b> pentru a
                                        <b>identifica automat</b> serviciile
                                        organizației tale (de exemplu: servere
                                        web și de email). Toate informațiile
                                        găsite îți vor fi afișate pentru a le
                                        putea valida, și, eventual, modifica.
                                        Tot în această etapă de configurare a
                                        platformei, îți vom cere și alte detalii
                                        pentru a îți putea oferii o
                                        <b
                                            >imagine de ansamblu asupra
                                            infrastructurii</b
                                        >
                                        organizației tale.
                                    </p>
                                </div></slideritem
                            >
                            <slideritem
                                ><div class="vertical-align">
                                    <h3>
                                        Estimarea Pierderilor în <wbr />Caz de
                                        Atac
                                    </h3>
                                    <p>
                                        Dacă te-ai întrebat vreodată ce impact
                                        ar avea un atac cibernetic asupra
                                        organizației tale, te putem ajuta cu o
                                        estimare. Folosim datele pe care deja le
                                        avem din pasul anterior, împreună cu
                                        altele specifice (numărul de membrii și
                                        veniturile anuale), pentru a genera
                                        diferite
                                        <b>scenarii posibile de atac</b>
                                        (<i>ransomware</i>, <i>phishing</i>,
                                        etc.) de pe urma cărora organizația ta
                                        ar putea avea de suferit. Înarmat cu
                                        aceste informații, poți lua decizii
                                        privind prioritățile organizației, cum
                                        ar fi unde și cât ar fi cazul să
                                        investești pentru a o proteja mai bine.
                                    </p>
                                </div></slideritem
                            >
                            <slideritem
                                ><div class="vertical-align">
                                    <h3>Recomandarea de <wbr />Soluții</h3>
                                    <p>
                                        Vom <b>modela infrastructura</b> ta
                                        digitală pe baza informațiilor colectate
                                        și furnizate: dispozitive pe care le
                                        deții (laptop-uri, routere, etc.),
                                        servicii pe care le folosești și soluții
                                        de securitate cu care te protejezi în
                                        prezent (antivirus, <i>firewall</i>,
                                        etc.). Cu ajutorul acestui model, putem
                                        să îți arătăm <b>în ce stadiu</b> se
                                        află organizația ta și
                                        <b>unde ar putea ajunge</b> cu ajutorul
                                        unor soluții de securitate.<br />Din
                                        aceste recomandări, poți să alegi în
                                        funcție de prioritățile tale și să treci
                                        la pasul următor. Vei avea acces mereu
                                        la informațiile și recomandările
                                        oferite, salvăm informațiile pentru
                                        tine.
                                    </p>
                                </div></slideritem
                            >
                            <slideritem
                                ><div class="vertical-align">
                                    <h3>
                                        Instalarea Automată de <wbr />Soluții
                                    </h3>
                                    <p>
                                        Din panoul de control, vei putea începe
                                        instalarea soluțiilor de securitate.
                                        Pentru fiecare dintre acestea, îți vom
                                        <b
                                            >detalia de ce sunt necesare și ce
                                            modificări</b
                                        >
                                        trebuiesc efectuate în infrastructura
                                        ta. Vei avea posibilitatea de a genera
                                        fie un <b>pachet</b> pe care îl poți
                                        instala chiar tu, sau ne putem ocupa noi
                                        <b>în mod automatizat</b>, dacă ne vei
                                        oferi detaliile de autentificare pentru
                                        a putea face acest lucru.
                                    </p>
                                </div></slideritem
                            >
                            <slideritem
                                ><div class="vertical-align">
                                    <h3>Configurarea <wbr />Soluțiilor</h3>
                                    <p>
                                        Odată setate și verificate, ne asigurăm
                                        că soluțiile de securitate funcționează
                                        corespunzător. Iar, pentru că vrem să ne
                                        asigurăm că soluțiile propuse sunt mereu
                                        la standarde înalte, odată ce intervin
                                        schimbări în infrastructura ta sau dacă
                                        nevoile de securitate se vor schimba,
                                        vei avea mereu
                                        <b
                                            >posibilitatea de a modifica
                                            setările</b
                                        >.
                                    </p>
                                </div></slideritem
                            >
                            <div slot="loading">loading...</div>
                        </slider>
                    </div>
                </div>
            </div>
            <div id="end"></div>
        </div>
    </div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider';
import scssVariables from '../assets/scss/mutablesecurity/abstracts/_variables.scss';

export default {
    components: {
        slider,
        slideritem,
    },
    methods: {
        startDemo() {
            this.demoRunning = 'loading';

            this.$scrollTo('#end', 1000, {
                easing: 'ease',
                cancelable: false,
            });

            setTimeout(
                function () {
                    this.demoRunning = 'running';

                    this.$refs.slider.$emit('autoplayStart', 3000);
                }.bind(this),
                1000
            );
        },
        onArrowUp(data) {
            this.$refs.slider.$emit('autoplayStop');

            this.$refs['slider'] && this.$refs['slider'].$emit('slidePre');
        },
        onArrowDown(data) {
            this.$refs.slider.$emit('autoplayStop');

            this.$refs['slider'] && this.$refs['slider'].$emit('slideNext');
        },
        slideTo(slideNumber) {
            this.$refs.slider.$emit('autoplayStop');

            this.$refs['slider'] &&
                this.$refs['slider'].$emit('slideTo', slideNumber);
        },
        slide(data) {
            for (
                let index = 0;
                index < this.navigationButtons.length;
                index++
            ) {
                this.navigationButtons[index].class =
                    index <= data.currentPage ? 'completed' : 'no';
            }
        },
        sendEmail() {
            const body = { email: this.email };

            fetch(
                'https://europe-central2-mutablesecurity.cloudfunctions.net/enter_waiting_list',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                    body: JSON.stringify(body),
                    redirect: 'follow',
                }
            )
                .then((response) => response.text())
                .then((result) => console.log(result))
                .catch((error) => console.log(error));
        },
    },
    data() {
        return {
            demoRunning: '',
            navigationButtons: [
                {
                    icon: 'fa-search',
                    class: '',
                },
                {
                    icon: 'fa-fire',
                    class: '',
                },
                {
                    icon: 'fa-th',
                    class: '',
                },
                {
                    icon: 'fa-shield',
                    class: '',
                },
                {
                    icon: 'fa-sliders',
                    class: '',
                },
            ],
            options: {
                currentPage: 0,
                direction: 'vertical',
                itemAnimation: true,
                centeredSlides: true,
                loopedSlides: 2,
                slidesToScroll: 1,
            },
            email: '',
            scssVariables: scssVariables,
        };
    },
};
</script>
