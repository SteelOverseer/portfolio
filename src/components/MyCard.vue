<template>
  <div class="cards">
    <div class="card-container" :class="{ flip: flipped }">
      <v-card class="modern-gradient magic-card card-front">
        <v-card-title class="title">
          <div>
            Doug Schultz, Software Engineer
          </div>
          <div id='links'>
            <div class="link" :style="{'background-color': '#68c3f7'}">
              <a href="https://www.linkedin.com/in/douglas-schultz-7a9819a7/" target='_blank'>
                <v-tooltip location="bottom" text="LinkedIn">
                  <template v-slot:activator="{ props }">
                    <span v-bind="props">
                      <font-awesome-icon 
                        icon="fa-brands fa-linkedin" 
                        size="xl" 
                        color='black'
                      />
                    </span>
                  </template>
                </v-tooltip>
              </a>
            </div>
            <div class="link" :style="{'background-color': 'grey'}">
              <a href='https://github.com/SteelOverseer' target='_blank'>
                <v-tooltip location="bottom" text="GitHub">
                  <template v-slot:activator="{ props }">
                    <span v-bind="props">
                      <font-awesome-icon 
                        icon="fa-brands fa-github" 
                        size="xl" 
                        color='black'
                      />
                    </span>
                  </template>
                </v-tooltip>
              </a>
            </div>
            <div class="link" :style="{'background-color': 'red'}">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=douglasschultz1@gmail.com" target='_blank'>
                <v-tooltip location="bottom" text="E-mail">
                  <template v-slot:activator="{ props }">
                    <span v-bind="props">
                      <font-awesome-icon 
                        icon="far fa-envelope" 
                        size="xl" 
                        color='black'
                      />
                    </span>
                  </template>
                </v-tooltip>
              </a>
            </div>
          </div> 
        </v-card-title>
        <div id="my-picture-front" class="mx-auto">
          <v-img src="/files/Me.png" height="500px"/>
        </div>
        <v-card-subtitle class="subtitle">Legendary Creature - Human Wizard</v-card-subtitle>
        <v-card-text class="text-box mx-auto">
          <v-row no-gutters class="rules-text">
            Doug Schultz, Software Engineer's power is equal to the number of cups of coffee he has consumed.
          </v-row>
          <v-row no-gutters class="rules-text">
            <span @click="flipCard" style="cursor: pointer;">
              <span class="fa-layers fa-fw" style="width: 2.25em;">
                <font-awesome-icon 
                  icon="fas fa-circle" 
                  size="xl" 
                  color='grey'
                />
                <span class="fa-layers-text fa-inverse" style="font-weight:900; color:black">0</span>
              </span>
              : Exile Doug Schultz, Software Engineer, then return him to the battlefield transformed under his owner's control. Activate only as a sorcery.
            </span>
          </v-row>
          <p class="flavor-text">
            A software engineer with an interest in magic cards, video games and cats.
          </p>
        </v-card-text>
        <div class="power-toughness">* / 2</div>
      </v-card>
      <v-card class="modern-gradient magic-card card-back">
        <v-card-title class="title">
          <div>
            Doug, Cat Dad
          </div>
        </v-card-title>
        <div id="my-picture-back" class="mx-auto">
          <v-img src="/files/MeAndChiChi_Edited.jpg" height="500px"/>
        </div>
        <v-card-subtitle class="subtitle">Legendary Planeswalker - Doug</v-card-subtitle>
        <v-card-text class="text-box mx-auto">
          <v-row no-gutters class="rules-text" @click="flipCard" style="cursor: pointer;">
            <v-col class="symbol-column">
              <span class="fa-layers fa-fw" style="width: 2.25em;">
                <font-awesome-icon 
                  icon="fas fa-shield" 
                  size="2xl" 
                  color='black'
                />
                <span class="fa-layers-text fa-inverse" style="font-weight:900">0</span>
              </span>
              :
            </v-col> 
            <v-col class="action-column">Exile Doug, Cat Dad, then return him to the battlefield transformed under his owner's control.</v-col>
          </v-row>
          <v-row no-gutters class="rules-text" @click="summonRocky" style="cursor: pointer;">
            <v-col class="symbol-column">
              <span class="fa-layers fa-fw" style="width: 2.25em;">
                <font-awesome-icon 
                  icon="fas fa-shield" 
                  size="2xl" 
                  color='black'
                />
                <span class="fa-layers-text fa-inverse" style="font-weight:900">+1</span>
              </span>
              :
            </v-col> 
            <v-col class="action-column">Create "Rocky, Chaos Incarnate" a legendary 2/1 white Cat creature token.</v-col>
          </v-row>
          <v-row no-gutters class="rules-text" @click="summonChiChi" style="cursor: pointer;">
            <v-col class="symbol-column">
              <span class="fa-layers fa-fw" style="width: 2.25em;">
                <font-awesome-icon 
                  icon="fas fa-shield" 
                  size="2xl" 
                  color='black'
                />
                <span class="fa-layers-text fa-inverse" style="font-weight:900">+1</span>
              </span>
              :
            </v-col> 
            <v-col class="action-column">Create "Chi Chi, Void Princess" a legendary 2/1 black Cat creature token.</v-col>
          </v-row>
        </v-card-text>
        <div class="loyalty">
          <span class="fa-layers fa-fw" style="width: 2.25em;">
            <font-awesome-icon 
              icon="fas fa-shield" 
              size="2xl" 
              color='black'
            />
            <span class="fa-layers-text fa-inverse" style="font-weight:900">{{ loyalty }}</span>
          </span>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  let flipped = ref(false);
  let loyalty = ref(2);
  let chiChiSummoned = false;
  let rockySummoned = false;
  const emit= defineEmits(["summonRocky", "summonChiChi"])

  const flipCard = () => {
    flipped.value = !flipped.value
    
    setTimeout(() => {
      loyalty.value = 2;
    }, 1000)
  }

  function summonChiChi() {
    if(!chiChiSummoned) {
      emit("summonChiChi", true);
    }
    loyalty.value++;
  }

  function summonRocky() {
    if(!rockySummoned) {
      emit("summonRocky", true);
    }
    loyalty.value++;
  }
    
</script>

<style lang="scss" scoped>
  .magic-card {
    display: flex;
    flex-direction: column;
    align-content: center;
    border: 20px solid black !important;
    border-bottom: 40px solid black !important;
    border-radius: 10px !important;
  }

  .modern-gradient {
    background-image: 
      conic-gradient(
        from 0deg at -4% 65% in oklab, 
        oklch(100% .5 109) 16% 16%, oklch(100% 0.5 97) 24% 73%
      )
    ;
  }
    
  .title, .subtitle {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    border: 2px solid black;
    max-height: 50px;
    margin: 5px;
    border-radius: 10px;
    font-weight: bold;
  }
  .subtitle {
    color: black !important;
    opacity: 1;
    height: 35px;
  }

  #my-picture-front, #my-picture-back {
    border: 2px solid black;
    width: 98%;
    height: 505px;
    background-color: silver;
  }

  .text-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid black;
    margin: 0px 5px 5px 5px;
    max-width: 98%;
    height: 30%;
    border-radius: 0px !important;
    padding: 10px !important;
    
      .rules-text{
        margin-top: 5px;
        color: black;
      }
  }

  #links {
    display: flex;
    flex-direction: row;
    margin: 5px;

    .link {
      display: flex;
      min-width: 40px;
      min-height: 40px;
      justify-content: center;
      align-items: center;
      margin: 1px;
      border-radius: 30px;
      border: 1px solid black;
    }  
  }

  .mana-symbol {
    display: flex;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    margin: 1px;
    border-radius: 10px;
    border: 1px solid black;
  }

  .symbol-column {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 40px;
    max-height: 40px;
  }

  .action-column {
    display: flex;
    align-items: center;
    max-height: 40px;
  }

  .cards {
    position: absolute;
    height: 900px;
    width: 650px;
  }

  .card-container {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
  }

  .flip {
    transform: rotateY( 180deg );
    transition: transform 1s;
  }

  .card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .card-back {
    transform: rotateY( 180deg );
  }

  .power-toughness {
    display: flex;
    justify-content: center;
    border: 2px solid black;
    width: 50px;
    font-weight: 900;
    border-radius: 0px !important;
    margin-left: 554px;
    margin-bottom: 2px;
  }

  .loyalty {
    display: flex;
    justify-content: center;
    margin-left: 554px;
    margin-bottom: 10px;
    margin-top: 5px;
  }

</style>