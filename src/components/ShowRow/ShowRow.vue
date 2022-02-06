<template src="./showrow.template.html"></template>
<script>
import ShowBlock from "../ShowBlock/ShowBlock.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/**
 * Row of shows with same Genre
 *
 * @class ShowRow
 */
export default {
    components: {
        ShowBlock,
        FontAwesomeIcon
    },
    props: {
        showListData: {
          type: Object,
          default: null
        }
    },
    data() {
      return {
        innerStyles: {},
        transitioning: false,
        step: '',
        disableNavBtns: false,
        showList: {}
      }
    },
    mounted(){
      this.showList = {...this.showListData};
      this.setStep();
      this.resetTranslate();
    },
    methods: {
      setStep (){
        const innerWidth = this.$refs.sliderRow.scrollWidth;
        this.step = `${innerWidth / 20 }px`;
        if(this.showList.showList.length < 10){
          this.disableNavBtns = true;
        }
      },
      scrollRight () {
        if (this.transitioning) return
        this.transitioning = true
        this.moveLeft()
        this.afterTransition(() => {
          const card = this.showList.showList.shift()
          this.showList.showList.push(card)
          this.resetTranslate()
          this.transitioning = false
        })
      },
      scrollLeft () {
        if (this.transitioning) return
        this.transitioning = true
        this.moveRight()
        this.afterTransition(() => {
          const card = this.showList.showList.pop();
          this.showList.showList.unshift(card)
          this.resetTranslate()
          this.transitioning = false
        })
      },
      moveLeft () {
        this.innerStyles = {
          transform: `translateX(-${this.step})
                      translateX(-${this.step})`
        }
      },
      moveRight () {
        this.innerStyles = {
          transform: `translateX(${this.step})
                      translateX(-${this.step})`
        }
      },
      afterTransition (callback) {
        const listener = () => {
          callback()
          this.$refs.sliderRow.removeEventListener('transitionend', listener)
        }
        this.$refs.sliderRow.addEventListener('transitionend', listener)
      },
      resetTranslate () {
        if(!this.disableNavBtns){
          this.innerStyles = {
            transition: 'none',
            transform: `translateX(-${this.step})`
          }
        }
        
      }
    }
}
</script>
<style src="./showrow.style.css" scoped></style>