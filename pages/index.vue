<template>
  <div id="websiteContainer">
    <div id="effectsContainer">
      <div id="effect_shadowContainer" class="effect"></div>
    </div>
    <div id="websiteContainer_inner">
        <div id="hirokiNakataniDeliverable">
            <!--
            <div id="deliverableIconWrapper" class="">
                <svg id="deliverableIcon" data-name="layor_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 704 704">
                    <path d="M159.47,242.67a160.9,160.9,0,0,1,23.75-18.14,173.29,173.29,0,0,1,21.61-11.65h0c29.7-14.87,41.29-12.4,50.82-22.77.5-.54.92-1,.92-1,1.8-2.36,3.09-6.2.87-17.8-.61-3.14-1.26-5.63-2.54-10.49-1.37-5.18-2.56-9.29-3.17-11.35-.17-.57-.29-1-.32-1.07-3-10.13-9.18-30.85-5.27-33.53,7.82-5.35,65.53,55,72.61,51.58a2.53,2.53,0,0,0,.26-.14c.85-.62,1.4-3.2.52-18.24-2-33.55-5.76-37.77-5.07-54.84.14-3.51-5.45-82.13,7.1-90.9,19.68-13.74,79.79,37.87,96.32,54.17,6.47,6.39,67.47,64,77.69,75.12,0,0,31.36,32,38.14,38.65,15.2,15,53.71,70.33,59.19,80.45a462.6,462.6,0,0,1,31,70.65c1.61,4.73,10.18,37.86,11.41,52.3,1.42,16.57,3.12,36.56-.25,62.65a251.23,251.23,0,0,1-19.28,69c-1.68,3.91-22,43-24.84,47.57-13.65,21.76-31.07,39-41,48.69a368.5,368.5,0,0,1-66.32,51.6s-29.26,17.65-62.2,29.8c-1.7.63-2.95,1.07-3.92,1.42-21.22,7.59-43.88,15.68-70.57,18.39-16.66,1.68-29.41,2.47-41.46-2.7-10.26-4.4-17.29-11.09-22.4-15.94-7-6.62-5.89-7.38-22.28-29.56-9.33-12.61-20.92-27.61-27.79-41.15-14.66-28.85-16.68-26-18-27.48-8.14-9.19-13.48-11.4-41.26-27.61-38-22.13-48.65-30-59.08-39.95-.21-.19-8.8-8.6-10.57-10.6-6.14-6.94-24.7-27.74-27.8-33.14a66.53,66.53,0,0,1-8.77-25.69,59.92,59.92,0,0,1,1.23-21.6c2.65-10.22,18.12-31,36.74-43.42.3-.2,1-.64,1.87-1.31A45.45,45.45,0,0,0,118,371.29a30,30,0,0,0,4-13.08c3.88-36.09,1.36-45,8.41-69.18C137.81,263.72,154.66,247.26,159.47,242.67Z"/>
                </svg>
            </div>
            <div id="deliverableStrWrapper">
                <p id="deliverableStr">A HIROKI NAKATANI<br>DELIVERABLE</p>
            </div>
            -->

            <div id="deliverableLogoWrapper">
              <img src="@/assets/img/topLogo_light.svg" id="deliverableLogo" />
            </div>
        </div>
        <div id="topLogoContainer">
            <h1 id="topLogoHeadingWrapper"> >> <span id="topLogoHeading" ref="topLogoHeading">{{topLogoStr}}</span></h1>
            <!--
            <h2 id="topLogoSubHeadingWrapper">
              <transition name="fade">
              <span id="topLogoSubHeading" v-if="showSubHeading">
                帰還報告
              </span>
              </transition>
            </h2>
            -->
        </div>

        <div id="linksContainer">
          <ul id="linksUnorderedList">
            <li class="linkList">
              <nuxt-link to="/dazaifu" class="linkListAnchor"></nuxt-link>
              <div class="linkListIconWrapper">
                
              </div>
              <div class="linkListTitleWrapper">
                <span class="linkListTitle">太宰府 <span class="alphabetWrapper">Dazaifu</span></span>
              </div>
            </li>
          </ul>
        </div>
    </div>
</div>
</template>

<script>
import {init} from 'ityped'
export default {
  components: {
  },
  data() {
    return {
      topLogoStr: '',
      showSubHeading: false,
    }
  },
  mounted() {
    this.typing('DEBRIEFING_', 540)
  },
  methods: {
    typing(str='', duration=100) {
      var strArr = [...str]
      var allocation = Math.floor(duration/strArr.length)
      strArr.forEach((char, index) => {
        setTimeout(() => {
          this.topLogoStr += char
        }, allocation*(index++))
      })
      /*
      setTimeout(() => {
        this.showSubHeading = true
      },duration+1)
      */
    }
  }
}
</script>

<style lang="scss" scoped>
#websiteContainer {
    display: grid;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    grid-template-rows: minmax(100%, auto);
    grid-template-columns: 1fr minmax(auto, $width_max_smartPhone) 1fr;

    background-color: #2b2b2b;

    position: relative;
    #effectsContainer {
      position: fixed;
      width: 100vw;
      height: 100vh;

      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      .effect {
        width: 100%;
        height: 100%;
      }
      #effect_shadowContainer {
        box-shadow: inset 0 0 200px rgba(0, 0, 0, 0.6),
		                inset 0 0 300px rgba(0, 0, 0, 0.4);
      }
    }
    #websiteContainer_inner {
        grid-row: 1/2;
        grid-column: 2/3;

        padding: 0 8px;
    }
}
#hirokiNakataniDeliverable {
    /*
    $height: 60px;
    display: grid;
    grid-template-rows: minmax($height, auto);
    grid-template-columns: auto 1fr;
    column-gap: 8px;
    $color: #2b2b2b;
    */
    display: block;
    width: 100%;

    overflow: hidden;

    margin-top: 24px;
    margin-bottom: 54px;
    #deliverableLogoWrapper {
        height: 30px;
        #deliverableLogo {
          display: block;
          height: 100%;
        }
    }
    /*
    #deliverableIconWrapper {
        grid-row: 1/2;
        grid-column: 1/2;
        #deliverableIcon {
            $len: 30px;
            display: block;
            width: $len;
            height: $len;
            fill: $color;
        }
    }
    
    #deliverableStrWrapper {
        grid-row: 1/2;
        grid-column: 2/3;
        #deliverableStr {
            margin: 0;

            font-size: 0.6rem;
            font-family: sans-serif;
            font-weight: 100;
            color: $color;
        }
    }
    */
}
#topLogoContainer {
  $color: #64b9ff;

  margin-bottom: 54px;
    #topLogoHeadingWrapper {
        font-family: termina, sans-serif;
        font-weight: 100;
        font-size: 1.5rem;

        margin: 0;
        color: $color;
    }
    #topLogoSubHeadingWrapper {
        font-weight: 100;
        margin: 0 0 30px 0;
        font-size: .75rem;
        line-height: 1.5;
        color: $color;
    }
}

#linksContainer {
  width: 100%;

  #linksUnorderedList {
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;

    .linkList {
      $color: #64b9ff;

      display: grid;
      $height: 60px;
      grid-template-rows: $height;
      grid-template-columns: $height 1fr;

      position: relative;
      
      .linkListAnchor {
        display: block;
        width: 100%;
        height: 100%;

        position: absolute;

        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        &:hover~.linkListTitleWrapper {
          .linkListTitle {
            border-bottom: 1px solid $color;
          }
        }
      }

      .linkListIconWrapper {
        grid-row: 1/2;
        grid-column: 1/2;
      }
      .linkListTitleWrapper {

        grid-row: 1/2;
        grid-column: 2/3;

        transition: all .2s;

        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

        .linkListTitle {
          color: $color;
          line-height: $height;
          padding-bottom: 3px;
          border-bottom: 1px solid transparent;
          transition: all .2s;
          .alphabetWrapper {
            font-family: termina, sans-serif;
            padding:4px;
            font-size: .65rem;
          }
        }
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
    transition: all .3s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
.fade-enter-to, .fade-leave {
    opacity: 1;
}
</style>
