<template>
  <div class="page-wrap">
    <v-snackbar :timeout="4000" :color="snackbar.color" bottom right v-model="snackbar.run" class="notification">
      <div class="action">
        {{ $t(snackbar.text) }}
      </div>
      <v-btn v-if="$i18n.locale != 'ar'" text icon @click="snackbar.run = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <v-container class="inner-wrap max-md">
      <div class="full-form-wrap">
        <div class="text-center">
          <h3 class="use-text-title use-text-primary pb-3 text-center">
            {{ $t('common.contact_title2') }}
          </h3>
          <p class="desc use-text-subtitle2 text-center">
            {{ $t('common.contact_subtitle') }}
          </p>
        </div>
        <div class="form">
          <v-form ref="form" v-model="valid">
            <v-row class="spacing6">
              <v-col cols="12" sm="6" class="px-6 py-0">
                <v-text-field v-model="name" :rules="nameRules" :label="$t('common.form_name')" class="input-field"
                  color="secondary" filled required />
              </v-col>
              <v-col cols="12" sm="6" class="px-6 py-0">
                <v-text-field v-model="email" :rules="emailRules" :label="$t('common.form_email')" class="input-field"
                  color="secondary" filled required />
              </v-col>
              <v-col cols="12" sm="6" class="px-6 py-0">
                <v-text-field v-model="phone" :label="$t('common.form_phone')" class="input-field" color="secondary"
                  filled />
              </v-col>
              <v-col cols="12" sm="6" class="px-6 py-0">
                <v-text-field v-model="company" :label="$t('common.form_company')" class="input-field" color="secondary"
                  filled />
              </v-col>
              <v-col cols="12" class="px-6 py-0">
                <v-textarea auto-grow :counter="100" v-model="message" :rules="messageRule"
                  :label="$t('common.form_message')" rows="6" class="input-field" color="secondary" filled />
              </v-col>
            </v-row>
            <div class="btn-area">
              <!-- <div class="form-control-label">
                <v-checkbox
                  v-model="checkbox"
                  color="primary"
                  :rules="[v => !!v || 'You must agree to continue!']"
                  :label="$t('common.form_terms')"
                  required
                />
                <span>
                  <a href="#" class="link">
                    {{ $t('common.form_privacy') }}
                  </a>
                </span>
              </div> -->
              <v-btn :loading="loading" :block="isMobile" color="primary" @click="validate" large>
                {{ $t('common.form_send') }}
              </v-btn>
            </div>
          </v-form>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './form-style.scss';
</style>

<script>
import logo from '~/static/images/gpslvnLogo.png'
import brand from '~/static/text/brand'
import link from '~/static/text/link'
import filterNull from '~/helper/filterNull'
export default {
  data() {
    return {
      valid: true,
      snackbar: {
        run: true,
        color: '',
        text: ''
      },
      name: '',
      nameRules: [v => !!v || 'Name is required'],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      messageRule: [
        v => !!v || 'Message is required',
        v => (v || '').length <= 100 || 'your message must be less then 100'
      ],
      phone: '',
      company: '',
      message: '',
      checkbox: false,
      logo: logo,
      brand: brand,
      routeLink: link,
      loading: false
    }
  },
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        this.loading = true
        const resulet = await this.$axios.post(
          '/send_message',
          filterNull({
            name_sender: this.name,
            email_sender: this.email,
            message: this.message,
            subject: 'Site message',
            company_name: this.company,
            phone: this.phone
          })
        ) // /result

        if (resulet?.data?.success) {
          this.snackbar = {
            run: true,
            color: 'success',
            text: 'Message sent'
          }
          this.$refs.form.reset()
          this.$refs.form.resetValidation()
        } else {
          this.snackbar = {
            run: true,
            color: 'error',
            text: 'Same things wrong'
          }
        } // /if

        this.loading = false
      } // /if
    }
  }, // /validate
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
