<template>
  <div>
    <section class="section-hero section-shaped my-0">
      <div class="shape"></div>
      <div class="container shape-container d-flex align-items-center">
        <div class="col px-0">
          <div class="row justify-content-center align-items-center">
            <div class="text-center">
              <h1 class="emulator">
                $ mutablesecurity --solution <br class="d-xl-none" />
                <vue-typer
                  :text="[
                    'WAZUH --operation GET_LOGS',
                    'SURICATA --operation INSTALL',
                    'WAZUH --operation UPDATE',
                    'LETS_ENCRYPT --operation TEST',
                    'TELER --operation GET_STATS',
                    'OPENCTI --operation UNINSTALL',
                  ]"
                  :repeat="Infinity"
                  :shuffle="true"
                  initial-action="typing"
                  :pre-type-delay="70"
                  :type-delay="70"
                  :pre-erase-delay="1000"
                  :erase-delay="100"
                  erase-style="select-back"
                  :erase-on-complete="true"
                  caret-animation="smooth"
                />
              </h1>
              <h3 class="text-white mt-4 mb-5">
                Seamless deployment and management of cybersecurity solutions
              </h3>
              <div class="btn-wrapper">
                <base-button
                  tag="a"
                  href="#demo-section"
                  class="mb-3 mb-sm-0"
                  type="white"
                  icon="fa fa-camera"
                  size="lg"
                >
                  See The Demo
                </base-button>
                <base-button
                  tag="a"
                  href="#solutions-section"
                  class="mb-3 mb-sm-0"
                  type="white"
                  icon="fa fa-shield"
                  size="lg"
                >
                  See Our Solutions
                </base-button>
                <base-button
                  tag="a"
                  href="#contact-section"
                  class="mb-3 mb-sm-0"
                  type="white"
                  icon="ni ni-send"
                  size="lg"
                >
                  Contact Us
                </base-button>
              </div>
            </div>
          </div>
          <div
            class="
              row
              align-items-center
              justify-content-around
              stars-and-coded
            "
          >
            <div class="col-sm-4">
              <span class="text-white alpha-7 ml-3">More details on</span>
              <a
                href="https://github.com/MutableSecurity/mutablesecurity"
                target="_blank"
                title="MutableSecurity's GitHub Repository"
              >
                <img
                  src="images/github.png"
                  style="height: 22px; margin-top: -3px"
                />
              </a>
            </div>
            <div class="col-sm-4 mt-4 mt-sm-0 text-right">
              <span class="text-white alpha-7">Download from</span>
              <a
                href="https://pypi.org/project/mutablesecurity/"
                target="_blank"
                title="MutableSecurity's Package from PyPi"
              >
                <img src="images/pypi.png" style="height: 75px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-lg">
      <div class="container">
        <div class="row row-grid justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="display-3" id="demo-section">
              Watch MutableSecurity in Action
            </h2>
            <div class="video-container">
              <iframe
                width="560" height="315"
                src="https://www.youtube.com/embed/QViyKbzySWA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-lg">
      <div class="container">
        <div class="row row-grid justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="display-3" id="solutions-section">
              The Solutions We Support
            </h2>
            <p class="lead">
              Below is a list of the cybersecurity solutions that we currently
              support. We're constantly working to improve them and add support
              for new ones.
            </p>
            <div class="container">
              <div class="text-center">
                <h4 class="display-4 mb-5 mt-5">Stable</h4>
                <div class="row justify-content-center">
                  <div class="col-lg-4 col-12">
                    <a
                      href="https://github.com/kitabisa/teler"
                      target="_blank"
                    >
                      <img
                        v-lazy="'images/teler.png'"
                        class="img-fluid vendor-logo"
                      />
                    </a>
                  </div>
                  <div class="col-lg-4 col-12">
                    <a
                      href="https://letsencrypt.org/"
                      target="_blank"
                    >
                      <img
                        v-lazy="'images/letsencrypt.png'"
                        class="img-fluid vendor-logo"
                      />
                    </a>
                  </div>
                  <div class="col-lg-4 col-12">
                    <a
                      href="https://suricata.io/"
                      target="_blank"
                      >
                      <img
                        v-lazy="'images/suricata.png'"
                        class="img-fluid vendor-logo"
                      />
                    </a>
                  </div>
                  <div class="col-lg-4 col-12">
                    <a
                      href="https://www.fail2ban.org/"
                      target="_blank"
                      >
                      <img
                        v-lazy="'images/fail2ban.png'"
                        class="img-fluid vendor-logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <h4 class="display-4 mb-5 mt-5">Under Development</h4>
                <div class="row justify-content-center">
                  <div class="col-lg-4 col-12">
                    <a
                      href="https://wazuh.com/"
                      target="_blank"
                      data-toggle="tooltip"
                      data-original-title="Wazuh | The Open Source Security Platform"
                    >
                      <img
                        v-lazy="'images/wazuh.png'"
                        class="img-fluid vendor-logo"
                      />
                    </a>
                  </div>
                  <div class="col-lg-4 col-12">
                    <a
                      href="https://www.clamav.net/"
                      target="_blank"
                    >
                      <img
                        v-lazy="'images/clamav.png'"
                        class="img-fluid vendor-logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <h4 class="display-4 mb-5 mt-5">And more coming soon...</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg">
      <div class="container">
        <div class="row row-grid justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="display-3" id="contact-section">
              We'd Love To Hear From You
            </h2>
            <p class="lead">
              Would you like support for the solutions you use everyday? Or do
              you simply want to provide feedback? Drop us a line using the form
              below or send us an email at
              <code>hello@mutablesecurity.io</code>!
            </p>
          </div>
        </div>
        <form class="form-group">
          <input
            type="email"
            class="form-control form-control-alternative"
            id="email"
            placeholder="Your Email Address"
            v-model="email.content"
            v-bind:class="{
              'is-invalid': email.isValid == 'invalid',
              'is-valid': email.isValid == 'valid',
            }"
          /><br />
          <textarea
            class="form-control"
            id="message"
            rows="10"
            placeholder="Your Message"
            v-model="message.content"
            v-bind:class="{
              'is-invalid': message.isValid == 'invalid',
              'is-valid': message.isValid == 'valid',
            }"
          ></textarea
          ><br />
          <button
            type="button"
            class="btn"
            :disabled="form_sent"
            @click="sendEmail"
            v-bind:class="{
              'btn-default': !form_sent,
              'btn-success': form_sent,
            }"
          >
            <span v-if="!form_sent">Send Message</span>
            <span v-else>Thanks!</span>
          </button>
        </form>
      </div>
    </section>
    <footer class="footer">
      <div class="container container-lg">
        <div class="row align-items-center justify-content-md-between">
          <div class="copyright">&copy; 2022 MutableSecurity</div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { VueTyper } from "vue-typer";

export default {
  name: "landing-page",
  components: {
    VueTyper,
  },
  methods: {
    sendEmail() {
      // Get the form details
      const email = this.email.content;
      const message = this.message.content;

      // Validate the email
      var sanitized_email = String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      var failed_check = false;
      if (sanitized_email) {
        this.email.isValid = "valid";
      } else {
        this.email.isValid = "invalid";

        failed_check = true;
      }

      // Validate the message
      if (message.length != 0) {
        this.message.isValid = "valid";
      } else {
        this.message.isValid = "invalid";

        failed_check = true;
      }

      // Return if a check failed
      if (failed_check) return;

      // If the email is valid, add it into the database
      const body = { email: email, message: message };
      fetch(
        "https://europe-central2-mutablesecurity.cloudfunctions.net/add_to_waiting_list",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(body),
          redirect: "follow",
        }
      )
        .then((response) => (this.form_sent = true))
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
    },
  },
  data() {
    return {
      email: {
        content: "",
        isValid: "",
      },
      message: {
        content: "",
        isValid: "",
      },
      form_sent: false,
    };
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap");

.shape {
  background-color: #3f37c9;
}

.emulator {
  font-size: 3vh;
  font-weight: 900;
  font-family: "Space Mono", monospace;
  color: #010400;
  white-space: nowrap;
}

.vue-typer .custom.caret {
  width: 10px;
}

.vue-typer .custom.char.selected {
  background-color: #fff;
}

.vendor-logo {
  width: 150px;
}

.is-invalid,
.is-valid {
  border-style: solid !important;
  border-width: 1px !important;
}

.video-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    margin-top: 20px;
}
.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 720px) {
  .emulator {
    font-size: 2vh;
  }
}
</style>
