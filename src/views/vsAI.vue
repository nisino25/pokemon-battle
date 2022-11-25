<template>
  <header>VS AI</header>
  <div v-if="yourParty.length > 0">
    <strong>Your Party</strong>
    <div class="pokeCard-wrapper">
      <template v-for="(pokemon, i) in yourParty" :key="i" >
        <div class="pokeCard">

          <section v-if="!pokemon.showingStatus">
            <img  :src="getPokeImg(pokemon)" :style="getImgSize()" alt="">
            <br>
            <div style="" class="button-wrapper">
              <div>
                <button @click="pokemon.showingStatus = true" type="button" class="btn btn-primary btn-xs">詳細</button>
              </div>
              <div>
                <button @click="pokemon.shiny = !pokemon.shiny" type="button" class="btn btn-warning btn-xs shiny-pic pt-0 px-0">Shiny</button>
              </div>
            </div>
            <span>{{JapaneseNameList[(pokemon.id)] }}</span>
          </section>

          <section v-else>
            <div class="base-stats">
              <div class="stats">HP {{pokemon.stats[0].base_stat}}</div>
              <div class="stats">攻撃 {{pokemon.stats[1].base_stat}}</div>
              <div crlass="line-break"></div>
              <div class="stats">防御 {{pokemon.stats[2].base_stat}}</div>
              <div class="stats">特攻 {{pokemon.stats[3].base_stat}}</div>
              <div crlass="line-break"></div>
              <div class="stats">特防 {{pokemon.stats[4].base_stat}}</div>
              <div class="stats">素早 {{pokemon.stats[5].base_stat}}</div>
              <div crlass="line-break"></div>
              <div class="stats" style="width: 100%" >合計 {{statsSum[i]}}</div>

            </div>

            <hr style="width:70%; margin: auto auto 10px" >
            <div>
              <button @click="pokemon.showingStatus= !pokemon.showingStatus"  class="btn btn-danger btn-xs">戻る</button>
            </div>

            
            <span>{{JapaneseNameList[(pokemon.id)] }}</span>
          </section>
          
        </div>

        <div crlass="line-break" v-if="i % 2 == 0"></div>
        
      </template>
    </div>

  </div>
</template>

<script>
import {JapaneseNameList} from '../const/JapaneseName.js'
export default{
  data(){
    return{

      minIndex: 1,
      maxIndex: 905,
      JapaneseNameList,

      yourParty: [],
    }
  },

  methods:{
    getPokeImg(pokemon){
      if(!pokemon.shiny){
        return `https://img.pokemondb.net/sprites/home/normal/${pokemon.species.name}.png`
      }else{
        return `https://img.pokemondb.net/sprites/home/shiny/${pokemon.species.name}.png`
      }
      // https://img.pokemondb.net/sprites/home/normal/blaziken-f.png
      // if(pokemon.id >= 650){
      //   return `https://projectpokemon.org/images/normal-sprite/${pokemon.species.name}.gif`
      // }

      // return  `https://img.pokemondb.net/sprites/black-white/anim/normal/.gif`
      // https://raw.githubusercontent.com/rileynwong/pokemon-images-dataset-by-type/master/electric/pikachu.png

      // https://pokemon-irasuto-taizen.com/wp-content/uploads/2021/03/025.png

      

      // https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmeleon.gif

      // https://pokemondb.net/pokedex/blaziken"><img src="https://img.pokemondb.net/sprites/black-white/anim/normal/blaziken-f.gif

      // https://projectpokemon.org/images/normal-sprite/primeape.gif

      // https://projectpokemon.org/images/normal-sprite/typenull.gif

      
    },
    getImgSize(){
      // return `height: 80px; width: auto; display:inline`
      return `width: 70%; height: auto;`
    },

    showStatus(pokemon){
      if(!pokemon.showingStatus){
        pokemon.showingStatus = true
      }else{
        pokemon.showingStatus = false
      }
      // pokemon.shiny = true
    }
  },

  computed:{
    statsSum(){
      if(this.yourParty.length == 0) return
      let list = []
      

      for(let i in this.yourParty){
        let count = 0
        for(let j in this.yourParty[i].stats){
          count+= this.yourParty[i].stats[j].base_stat
        }
        list.push(count)
      }

      return list
    },
  },

  mounted(){
    console.clear()
    
    let count = 0
    while(count < 6){
      let num = Math.floor(Math.random() * (this.maxIndex -1)) +1
      fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
      .then((response) => response.json())
      .then((data) => this.yourParty.push(data))
      count++
    }

    for(let i in this.yourParty){
      let pokemon = this.yourParty[i]
      pokemon.shiny = false
      pokemon.showingStatus = false
    }

    console.log(this.yourParty)

    
  },
}
</script>

<style>
.pokeCard-wrapper{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 90vw;
  margin: 0 auto;
  
  border-radius: 10px;
  font-size: 85%;
  /* background-color: red; */

}

.line-break {
  width: 100%;
}
.pokeCard{
  border: 2px solid white;
  /* background-color: lightgray; */
  margin: 10px  0;
  /* color:black; */
  aspect-ratio: 2.5/3;
  width: 46.5%;
  position: relative;
  
}

.button-wrapper{
  width: 80%;
  justify-content:
  space-around;
  display:flex;
  margin: 5px auto;
}

.pokeCard span{
  position: absolute;
  width: 100%;
  display: inline;
  bottom: 5px;
  left:50%;
  transform: translateX(-50%);
  font-size: 85%;
}

.base-stats{
  width: 90%;
  margin: 10px auto;

  margin-top: 10px;
  /* background-color: red; */

  display:flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.base-stats .stats{
  width: 50%;
}



img{
  margin: 7.5px auto 10px;
  /* width: 80px;
  height: auto; */
  /* max-height: 80px; */

}
</style>