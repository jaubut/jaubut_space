<template>
  <div id="test">
    <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
    <div class="items">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
    </div>
    <h2 class="gradient-text">payment with stripe</h2>
    <card class='stripe-card'
      :class='{ complete }'
      stripe='pk_live_eCpRV8F65hesbbzXRGjqio9C'
      @change='complete = $event.complete'
    />
    <button class='pay-with-stripe' @click='pay' :disabled='!complete'>Pay with credit card</button>
  </div>
</template>

<script>
import { Card, createToken } from 'vue-stripe-elements-plus'

export default {
  name: 'test',
  data () {
    return {
      complete: false,
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      }
    }
  },
  components: { Card },
  methods: {
    pay () {
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      createToken().then(data => console.log(data.token))
    }
  }
}
</script>
<style lang="sass" scoped>
.stripe-section
  display: flex
  flex-flow: column wrap
  align-content: center
  button
    width: 150px
.stripe-card
  width: 300px
  height: 30px
.stripe-card.complete
  border-color: green
.items
  display: grid
  grid-template: 45% 25% 25% / 50% 50%
  margin: auto
  justify-content: center
  width: 500px
  height: auto
  grid-gap: 5px
.item
  border: 1px solid black
  min-width: 100px
  min-height: 100px
.item:nth-child(4n)
  grid-row: span 2
.spinner
  width: 40px
  height: 40px
  position: relative
  margin: 100px auto
.double-bounce1, .double-bounce2
  width: 100%
  height: 100%
  border-radius: 50%
  background-color: #333
  opacity: 0.6
  position: absolute
  top: 0
  left: 0
  animation: sk-bounce 2.0s infinite ease-in-out
.double-bounce2
  animation-delay: -1.0s
.gradient-text
  padding-left: 50px
  background: linear-gradient(left, #6758c5, #e072c3)
  background: linear-gradient(to right, #6758c5, #e072c3)
  background-clip: border-box
  background-clip: text
  text-fill-color: transparent
@keyframes sk-bounce
  0%, 100%
    transform: scale(0.0)
  50%
    transform: scale(1.0)
</style>
