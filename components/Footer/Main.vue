<template>
  <fragment>
    <basic v-if="type === 'basic'" :bg="bg" />
    <blog v-if="type === 'blog'" :bg="bg" />
    <contact-footer v-if="type === 'contact'" :bg="bg" />
    <site-map v-if="type === 'sitemap'" :bg="bg" />
  </fragment>
</template>

<script>
import Basic from './Basic'
import Blog from './Blog'
import Contact from './Contact'
import SiteMap from './SiteMap'

export default {
  components: {
    Basic,
    Blog,
    'contact-footer': Contact,
    SiteMap
  },
  computed: {
    type() {
      return this.$store.state.ui.footer
    }
  },
  props: {
    bg: {
      type: Boolean,
      required: false
    }
  }
}
</script>
