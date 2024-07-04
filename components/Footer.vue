
<template>
  <footer>
    <div class="footer-content">
      <address>
        <span>315 West 53<sup>rd</sup> Street, New York, NY 10019</span>
        <span>3 West Main Street, Irvington, NY 10533</span>
        <span><a href="tel:212 216 9268">212 216 9268</a> | <a href="tel:914 478 9359">914 478 9359</a></span>
        <span><a href="mailto:info@aca.nyc">info@aca.nyc</a></span>
      </address>
      <span>&copy; {{currentYear}} Arthur Chabon Architects</span>
    </div>
  </footer>
</template>

<script setup>
  import { computed } from 'vue'
  const currentYear = computed(() => new Date().getFullYear())
</script>

<style lang="scss" scoped>
  footer {
    padding: 16px;

    .footer-content {
      padding-top: 9px;
      margin: auto;
      border-top: 1px solid $black;
    }

    * { 
      text-decoration: none;
      font-style: normal;
      color: $black;
    }

    span {
      display: block;
      margin-top: 4px;
    }

    sup {
      font-size: 60%;
      vertical-align: top;
    }

    @include bp(sm) { 
      padding: 32px;
      
      .footer-content {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }

      small {
        text-align: right;
      } 
    }
  }
</style>
