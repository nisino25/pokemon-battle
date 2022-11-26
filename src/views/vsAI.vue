<template>
  <strong>VS AI party</strong> 
  <div v-if="opponentParty.length > 0">
    
    <div class="pokeCard-wrapper">
      <template v-for="(pokemon, i) in opponentParty" :key="i" >
        <div class="pokeCard">
          <!-- <div class="background-left background" :style="getBorderColor(pokemon,0)"></div>
          <div class="background-top background" :style="getBorderColor(pokemon,1)"></div>
          <div class="background-right background" :style="getBorderColor(pokemon,2)"></div>
          <div class="background-bottom background" :style="getBorderColor(pokemon,3)"></div> -->

          <section v-if="!pokemon.showingStatus">
            <!-- <img  :src="getPokeImg(pokemon)" :style="getImgSize()" alt=""> -->
            <img :src="[pokemon.shiny ?  pokemon.sprites.other.home.front_shiny: pokemon.sprites.other.home.front_default] " alt="">
            <br>
            <div style="" class="button-wrapper">
              <div>
                <button @click="pokemon.showingStatus = true" type="button" class="button" >詳細</button>
              </div>
            </div>

            <span>
              {{JapaneseNameList[(pokemon.id)]}}
              <section class="type-wrapper">
                <template v-for="(item,j) in pokemon.types" :key="j">
                  <div style="">
                    <a href="#" class="type-badge" :style="`background-color:${typeNameList[item.type.name]?.color}`">{{typeNameList[item.type.name]?.name}}</a>

                  </div>
                </template>
              </section>
            </span>
            
          </section>

          <section v-else>
            <div class="base-stats" style="font-size: 85%">
              <div class="stats">HP {{pokemon.stats[0].base_stat}}</div>
              <div class="stats">攻撃 {{pokemon.stats[1].base_stat}}</div>
              <div crlass="line-break"></div>
              <div class="stats">防御 {{pokemon.stats[2].base_stat}}</div>
              <div class="stats">特攻 {{pokemon.stats[3].base_stat}}</div>
              <div crlass="line-break"></div>
              <div class="stats">特防 {{pokemon.stats[4].base_stat}}</div>
              <div class="stats">素早 {{pokemon.stats[5].base_stat}}</div>
              <div class="stats" style="width: 100%" >合計 {{statsSum[i]}}</div>
              <div style="" class="button-wrapper">
                <div class="stats" >
                  <button @click="pokemon.showingStatus= !pokemon.showingStatus"  class="btn btn-danger btn-xs">戻る</button>
                </div>
                <div>
                  <button type="button" class="btn btn-success btn-xs pt-0 px-0">進化</button>
                </div>
              </div>
              

            </div>

            

            
            
          </section>

          
          
        </div>

        <div class="line-break" v-if="(i+1) % 3 == 0"></div>
        
      </template>
    </div>

  </div>

  <div v-if="yourParty.length > 0">
    <strong>Your Party</strong>
    <div class="pokeCard-wrapper">
      <template v-for="(pokemon, i) in yourParty" :key="i" >
        <div class="pokeCard">

          <section v-if="!pokemon.showingStatus">
            <!-- <img  :src="getPokeImg(pokemon)" :style="getImgSize()" alt=""> -->
            <img :src="[pokemon.shiny ?  pokemon.sprites.other.home.front_shiny: pokemon.sprites.other.home.front_default] " alt="">
            <br>
            <div style="" class="button-wrapper">
              <div>
                <button @click="pokemon.showingStatus = true" type="button" class="button" >詳細</button>
              </div>
              <div>
                <button @click="pokemon.shiny = !pokemon.shiny" type="button" class="button  " :style="[pokemon.shiny? '' : 'border: 2px solid Goldenrod']">色違</button>
              </div>
            </div>

            <span>
              {{JapaneseNameList[(pokemon.id)]}}
              <section class="type-wrapper">
                <template v-for="(item,j) in pokemon.types" :key="j">
                  <div style="">
                    <a href="#" class="type-badge" :style="`background-color:${typeNameList[item.type.name]?.color}`">{{typeNameList[item.type.name]?.name}}</a>

                  </div>
                </template>
              </section>
            </span>
            
          </section>

          <section v-else>
            <div class="base-stats" style="font-size: 85%">
              <div class="stats">HP {{pokemon.stats[0].base_stat}}</div>
              <div class="stats">攻撃 {{pokemon.stats[1].base_stat}}</div>
              <div crlass="line-break"></div>
              <div class="stats">防御 {{pokemon.stats[2].base_stat}}</div>
              <div class="stats">特攻 {{pokemon.stats[3].base_stat}}</div>
              <div crlass="line-break"></div>
              <div class="stats">特防 {{pokemon.stats[4].base_stat}}</div>
              <div class="stats">素早 {{pokemon.stats[5].base_stat}}</div>
              <div class="stats" style="width: 100%" >合計 {{statsSum[i]}}</div>
              <div style="" class="button-wrapper">
                <div class="stats" >
                  <button @click="pokemon.showingStatus= !pokemon.showingStatus"  class="btn btn-danger btn-xs">戻る</button>
                </div>
                <div>
                  <button type="button" class="btn btn-success btn-xs pt-0 px-0">進化</button>
                </div>
              </div>
              

            </div>

            

            
            
          </section>

         
          
        </div>

        <div class="line-break" v-if="(i+1) % 3 == 0"></div>
        
      </template>
    </div>

  </div>

</template>

<script>
import {JapaneseNameList} from '../const/JapaneseName.js'
import {typeNameList} from '../const/typeNameList'
export default{
  data(){
    return{

      minIndex: 1,
      maxIndex: 905,
      JapaneseNameList,
      typeNameList,

      yourParty: [],
      opponentParty: [],

      progressNum: 0,
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
      return ``
    },
    getBorderColor(pokemon,num){
      if(num < 2){
        return `background-color:${typeNameList[pokemon.types[0].type.name].color}`
      }

      if(pokemon.types.length <= 1){
        return `background-color:${typeNameList[pokemon.types[0].type.name].color}`
      }else{
        return `background-color:${typeNameList[pokemon.types[1].type.name].color}`
      }
    },

    showStatus(pokemon){
      if(!pokemon.showingStatus){
        pokemon.showingStatus = true
      }else{
        pokemon.showingStatus = false
      }
      // pokemon.shiny = true
    },
    async getSix(){
      
      let count = 0
      let list =[]
      while(count < 6){
        let num = Math.floor(Math.random() * (this.maxIndex -1)) +1
        let URL = `https://pokeapi.co/api/v2/pokemon/${num}`
        let res = await fetch(URL)
        let json = await res.json()
        list.push(json)
        count++
      }

      for(let i in list){
        let num = (Math.random() * 100)

        let pokemon = list[i]
        pokemon.shiny = false
        pokemon.showingStatus = false
        if(num < 5) pokemon.shiny = true
      }

      this.yourParty = list

      // --------------------------------------------

      count = 0
      list = []
      while(count < 6){
        let num = Math.floor(Math.random() * (this.maxIndex -1)) +1
        let URL = `https://pokeapi.co/api/v2/pokemon/${num}`
        let res = await fetch(URL)
        let json = await res.json()
        list.push(json)
        count++
      }

      for(let i in list){
        let num = (Math.random() * 100)

        let pokemon = list[i]
        pokemon.shiny = false
        pokemon.showingStatus = false
        if(num < 5) pokemon.shiny = true
      }

      this.opponentParty = list

      this.progressNum = 1




    },
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


    this.getSix()
    
    

    
  },
}
</script>

<style>
.pokeCard-wrapper{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 95vw;
  margin: 0 auto;
  
  border-radius: 10px;
  font-size: 85%;
  /* background-color: red; */

}

.line-break {
  width: 100%;
}

/* .background{
  z-index: 0;
  position: absolute;
}

.background-left{
  z-index: 9;
  top: 0px;
  left: 0px;
  width: 3px;
  height: 100%;
}
.background-top{
  z-index: 10;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 3px;
}


.background-right{
  z-index: 9;
  top: 0px;
  right: 0px;
  width: 3px;
  height: 100%;
}
.background-bottom{
  z-index: 10;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 3px;
} */




.pokeCard{
  /* background-color: white; */
  
  border: 2px solid darkgrey;
  /* background-color: lightgray; */
  margin: 4px auto;
  /* color:black; */
  aspect-ratio: 10/13;
  width: 31%;
  position: relative;
}

.button-wrapper{
  width: 90%;
  justify-content:
  space-around;
  display:flex;
  margin: 0px auto;
}

.button-wrapper button{
  background-color: inherit;
  /* background-color: ; */
  border: none;
  color: white;
  padding: 2px 3px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 85%;
  margin: 2px 2px;
  cursor: pointer;
  border-radius: 5px;

  border: 2px solid grey;
}

.pokeCard span{
  position: absolute;
  width: 100%;
  display: inline;
  bottom: 2px;
  left:50%;
  transform: translateX(-50%);
  font-size: 95%;
}

.pokeCard .type-badge{
  color:white;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 100%;
  font-weight: bold;
}

.type-wrapper{
  width: 70%;
  justify-content:space-around;
  display:flex;
  margin: 5px auto;
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
  margin: 5px auto 5px;
  width: 45%;
  height: auto;
  /* width: 80px;
  height: auto; */
  /* max-height: 80px; */

}
</style>