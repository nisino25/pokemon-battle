<template>
  <div style="margin: 10px"></div>

  <section v-if="progressNum <= 3">
    <section v-if="progressNum ==1">
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
  
        <div v-if="myParty.length > 0">
          <strong>Your Party</strong>
          <div class="pokeCard-wrapper">
            <template v-for="(pokemon, i) in myParty" :key="i" >
              <div class="pokeCard" @click="select(pokemon)">
  
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
    </section>
  
    <section v-if="progressNum ==2">
      <strong>VS AI party</strong> 
  
        <div v-if="opponentParty.length > 0">
          
          <div class="pokeCard-wrapper">
            <template v-for="(pokemon, i) in opponentParty" :key="i" >
              <div class="pokeCard">
  
                <section>
                  <img :src="[pokemon.shiny ?  pokemon.sprites.other.home.front_shiny: pokemon.sprites.other.home.front_default] " alt="" style="width: 70%;">
                  <br>
                  
                 
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
  
  
                
                
              </div>
  
              <div class="line-break" v-if="(i+1) % 3 == 0"></div>
              
            </template>
          </div>
  
        </div>
  
        <strong>your party</strong> 
  
        <div v-if="myParty.length > 0">
          
          <div class="pokeCard-wrapper">
            <template v-for="(pokemon, i) in myParty" :key="i">
              <div class="pokeCard" :style="[!pokemon.selected ? 'opacity:0.3' : '']" @click="pokemon.selected= !pokemon.selected">
  
                <section>
                  <img :src="[pokemon.shiny ?  pokemon.sprites.other.home.front_shiny: pokemon.sprites.other.home.front_default] " alt="" style="width: 70%;">
                  <br>
                  
                 
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
  
  
                
                
              </div>
  
              <div class="line-break" v-if="(i+1) % 3 == 0"></div>
              
            </template>
          </div>
  
        </div>
    </section>
  
    <section v-if="progressNum ==3">
      <strong>VS AI party</strong> 
  
        <div v-if="opponentParty.length > 0">
          
          <div class="pokeCard-wrapper">
            <template v-for="(pokemon, i) in opponentParty" :key="i" >
              <div class="pokeCard">
  
                <section>
                  <img :src="[pokemon.shiny ?  pokemon.sprites.other.home.front_shiny: pokemon.sprites.other.home.front_default] " alt="" style="width: 70%;">
                  <br>
                  
                 
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
  
  
                
                
              </div>
              
            </template>
          </div>
  
        </div>
  
        <strong>your party</strong> 
  
        <div v-if="myParty.length > 0">
          
          <div class="pokeCard-wrapper">
            <template v-for="(pokemon, i) in myParty" :key="i" >
              <div class="pokeCard" v-if="pokemon.selected" :style="[!pokemon.isFightingNow ? 'opacity:0.3' : '']" @click="pickFightingPokemon(pokemon)">
  
                <section>
                  <img :src="[pokemon.shiny ?  pokemon.sprites.other.home.front_shiny: pokemon.sprites.other.home.front_default] " alt="" style="width: 70%;">
                  <br>
                  
                 
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
  
  
                
                
              </div>
  
              
            </template>
          </div>
  
        </div>
    </section>
  
  
    <div class="controller">
      <button class="button" style="background-color:crimson" @click="progressNum++" :disabled="canProgress" :style="[canProgress ? 'opacity:0.2' : '']">Next</button>
      <span>#{{progressNum}}</span>
    </div>
  </section>

  <section v-if="progressNum >= 4">

    <div class="battle-field">
      <div>
        <div class="opponentPokemon">
          <div class="opponentPokemon-stats">
            <div class="stats-container">

              <div class="top-bar">
                <div class="left">
                  <span>{{JapaneseNameList[opponentFightingPokemon.id]}}</span>
                  <span>
                    <template v-for="(item,j) in opponentFightingPokemon.types" :key="j">
                      <a href="#" class="type-badge" :style="`background-color:${typeNameList[item.type.name]?.color}`">{{typeNameList[item.type.name]?.name}}</a>
                    </template>
                  </span>
                </div>

                <div class="right">
                  
                  <!-- geneder -->
                  <span>Lv.50</span>
                </div>

              </div>

              <div class="bottom-bar">
                <div class="HP-bar-container">

                  <div class="HP-bar" :style="getHPstyle(opponentFightingPokemon)">
                    <!-- <div class="HP-bar" style="width: 20%"> -->
                  </div>

                  
                </div>

                <div class="HP-numbers">
                    {{opponentFightingPokemon.remainingHP}}/{{opponentFightingPokemon.maxHP}}
                  </div>

              </div>
            </div>
            
          </div>
          <div class="opponentPokemon-img">
            <img :src="getFightingImg(opponentFightingPokemon,true)" alt="" :style="[opponentFightingPokemon.id <= 649 ? 'width: 70%' : 'width: auto; height: 70%']">
          </div>
        </div>
  
        <div class="myPokemon">
          <div class="myPokemon-stats">
            <div class="stats-container">
              <div class="top-bar">
                <div class="left">
                  <span>{{JapaneseNameList[myFightingPokemon.id]}}</span>
                  <span>
                    <template v-for="(item,j) in myFightingPokemon.types" :key="j">
                      <a href="#" class="type-badge" :style="`background-color:${typeNameList[item.type.name]?.color}`">{{typeNameList[item.type.name]?.name}}</a>
                    </template>
                  </span>
                </div>
                

                <div class="right">
                  
                  <!-- geneder -->
                  <span>Lv.50</span>
                </div>

              </div>

              <div class="bottom-bar">
                <div class="HP-bar-container">

                  <div class="HP-bar" :style="getHPstyle(myFightingPokemon)">
                    <!-- <div class="HP-bar" style="width: 20%"> -->
                  </div>

                  
                </div>

                <div class="HP-numbers">
                    {{myFightingPokemon.remainingHP}}/{{myFightingPokemon.maxHP}}
                  </div>

              </div>
            </div>
            
          </div>
          <div class="myPokemon-img">
            <img :src="getFightingImg(myFightingPokemon,false)" :alt="getFightingImg(myFightingPokemon,false)" :style="[myFightingPokemon.id <= 649 ? 'width: 70%' : 'width: auto; height: 70%']">
          </div>
        </div>
  
        <div class="message">
  
        </div>
      </div>
    </div>

    <div class="battle-controller">

      <section v-if="showingController">
        <div :class="buttonClass[0]" class="top-half" @click="toggleClass('fight')" >
          <span class="fight">FIGHT!</span>
        </div>

        <div class="center-circle">
          <div class="inner-circle"></div>
        </div>

        <div class="bottom-half">
          <div :class="buttonClass[1]" class="bag-button" @click="toggleClass('bag')">
            <span class="button-label">BAG</span>
          </div>
          <div :class="buttonClass[2]" class="run-button" @click="toggleClass('run')" >
            <span class="button-label">RUN</span>
          </div>
          <div :class="buttonClass[3]" class="pokemon-button" @click="toggleClass('pokemon')">
            <span class="button-label">Poke</span>
          </div>
        </div>
      </section>

      <section v-else>
        <div class="other-pokemons" v-if="controllerMenu == 'pokemon'">
          <div class="left">
            <strong class="statement">あなたのポケモン</strong>
            <div>
              <template v-for="(pokemon,i) in mySelectedParty" :key="i" >
                <div class="myPokemon" :style="`top:${25 * (i+1)}%;`" >
                  <img :src="getIcon(pokemon)" alt="">
                  <div class="bottom-bar">
                    <div class="HP-bar-container">

                      <div class="HP-bar" :style="getHPstyle(pokemon)">
                        <!-- <div class="HP-bar" style="width: 20%"> -->
                      </div>

                      
                    </div>


                  </div>

                </div>
                <!-- <span>{{pokemon}}</span> -->
                <!-- <br> -->
              </template>
            </div>
          </div>
          <!-- <div class="right"></div> -->
        </div>
      </section>


      <!-- 
      <button style="background-color:crimson;position: absolute; bottom: 0" @click="test()">test attack</button><br> -->
      
    </div>

  </section>
  

</template>

<script>
  import {JapaneseNameList} from '../const/JapaneseName.js'
  import {typeNameList} from '../const/typeNameList'

  export default{
    data(){
      return{
        // developing: false,
        developing: true,

        minIndex: 1,
        maxIndex: 904,
        JapaneseNameList,
        typeNameList,

        myParty: [],
        opponentParty: [],

        progressNum: 0,
        showingController: true,
        controllerMenu: '',

        buttonClass: ['','','','',],
      }
    },
    methods:{
      sleep(ms) {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
      },

      // styling 
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
      getFightingImg(pokemon, front){
        if(pokemon.id <= 649){
          if(front){
            if(!pokemon.shiny){

              return `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.species.name}.gif`
            }else{

              return `https://img.pokemondb.net/sprites/black-white/anim/shiny/${pokemon.species.name}.gif`
            }
          }else{
            if(!pokemon.shiny){
              return `https://img.pokemondb.net/sprites/black-white/anim/back-normal/${pokemon.species.name}.gif`
            }else{
              return `https://img.pokemondb.net/sprites/black-white/anim/back-shiny/${pokemon.species.name}.gif`
            
            }
          }
        }else{
          if(front){
            if(!pokemon.shiny){
              return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
            }else{
              // return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`
    
              return `https://projectpokemon.org/images/normal-sprite/${pokemon.species.name}.gif`
            }
          }else{
            if(!pokemon.shiny){
              if(pokemon.sprites.back_default){
                return pokemon.sprites.back_default
              }
              return pokemon.sprites.front_default
              // return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`
            }else{
              if(pokemon.sprites.back_shiny_default){
                return pokemon.sprites.back_shiny_default
              }
              return pokemon.sprites.front_shiny_default
              // return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokemon.id}.png`
    
            }
          }
        }

      },
      getIcon(pokemon){
        // console.log(pokemon.sprites.versions['generation-viii'].icons.front_default)
        return pokemon.sprites.versions['generation-viii'].icons.front_default
      },

      getHPstyle(pokemon){
        let percent = (pokemon.remainingHP/pokemon.maxHP) * 100

        if(percent <= 0) percent = 0

        let color

        if(percent >= 50){
          color = '#3D8361'
        }else if(percent >= 20){
          color = 'Yellow'
        }else{
          color = 'crimson'
        }

        let style = `width: ${percent}%; background:${color};`

        return style
      },

      async toggleClass(name){
        switch(name){

          case 'fight':
            this.buttonClass[0] = 'miniBounce'
            await this.sleep(500)
            this.buttonClass[0] = ''
            break;

            case 'bag':
            this.buttonClass[1] = 'leftBounce'
            await this.sleep(500)
            this.buttonClass[1] = ''
            break;

          case 'run':
            this.buttonClass[2] = 'miniBounce'
            await this.sleep(500)
            this.buttonClass[2] = ''
            break;

          case 'pokemon':
            this.buttonClass[3] = 'rightBounce'
            await this.sleep(500)
            this.buttonClass[3] = ''
            break;
        }
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
          // if(this.developing){
          //   num=  Math.floor(Math.random() * 250) +650
          // }
          let URL = `https://pokeapi.co/api/v2/pokemon/${num}`
          let res = await fetch(URL)
          let json = await res.json()
          list.push(json)
          count++
        }

        this.myParty = list

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

        this.opponentParty = list
        // console.log(list)

        count = 0

        



        
        this.addDetail()
        // applying property to all pokemon
        
        

        count = 0
        // pick 3 pokemon for the opponent
        
        while(count < 3 ){
          let num = Math.floor(Math.random() * 6)
          let pokemon = this.opponentParty[num]
          if(!pokemon.selected){
            pokemon.selected = true
            if(count == 2){
              pokemon.isFightingNow =true
              pokemon.hasAppeared = true
            }
            count++
          }
        }

        

        


      },
      addDetail(){
        let count =0 
        let countFlag= false
        while(count <6){
          // console.log(count)
          let num = (Math.random() * 100)

          let pokemon = this.myParty[count]
          if(countFlag){
            pokemon = this.opponentParty[count]
          }

          pokemon.selected = false
          pokemon.shiny = false
          // pokemon.shiny = true
          pokemon.showingStatus = false
          pokemon.isFightingNow = false
          pokemon.hasAppeared =  false
          pokemon.level = 50
          pokemon.isFainted = false
          
          pokemon.stats[0].actual_stat = pokemon.stats[0].base_stat + 75
          let i = 1
          while(i < 6){
            pokemon.stats[i].actual_stat = pokemon.stats[i].base_stat + 20
            i++
          }
          pokemon.maxHP = pokemon.stats[0].actual_stat
          pokemon.remainingHP = pokemon.maxHP
          
          
          // get max pokemon hp
          // get pokemon remain hp
          if(num < 10) pokemon.shiny = true

          count++

          if(!countFlag && count == 5){
            count = 0
            countFlag = true
          }
          
          

        }

      },
      
      async skip(){
        while(this.opponentParty.length < 6){
          await this.sleep(500)
        }
        let  count = 0
        let fightingPokemon

        while(count < 3 ){
          let pokemon = this.myParty[count]
          fightingPokemon = pokemon

          pokemon.selected = true 
          count++
        }

        fightingPokemon.isFightingNow = true

        
        // list[num].isFightingNow = true





        this.progressNum = 4

      },

      // ----------------------------
      select(pokemon){
        console.log(pokemon.species.name)
      },

      pickFightingPokemon(pokemon){
        for(let i in this.myParty){
          this.myParty[i].isFightingNow = false
        }
        if(pokemon.isFainted) return 

        pokemon.isFightingNow = true
      },


      // ----------------------------
      test(){
        this.myFightingPokemon.remainingHP-= 25
      },





    },

    computed:{
      statsSum(){
        if(this.myParty.length == 0) return
        let list = []
        

        for(let i in this.myParty){
          let count = 0
          for(let j in this.myParty[i].stats){
            count+= this.myParty[i].stats[j].base_stat
          }
          list.push(count)
        }

        return list
      },
      mySelectedParty(){
        // if(this.myParty.length1) return []

        let list =[]
        for(let i in this.myParty){
          let pokemon = this.myParty[i]
          if(pokemon.selected){

            list.push(pokemon)
          } 
        }

        return list
      },

      myFightingPokemon(){
        if(this.myParty.length < 1) return false
        for(let i in this.myParty){
          if(this.myParty[i].isFightingNow){
            return this.myParty[i]
          }
        }

        return false
      },
      opponentFightingPokemon(){
        if(this.opponentParty.length < 1) return false
        for(let i in this.opponentParty){
          if(this.opponentParty[i].isFightingNow){
            return this.opponentParty[i]
          }
        }

        return false
      }, 


      canProgress(){
        if(this.progressNum == 2){
          if(this.mySelectedParty?.length ==3){
            return false
          }else {
            return true
          }
        }

        if(this.progressNum == 3){
          let count =0 
          for(let i in this.myParty){
            if(this.myParty[i].isFightingNow){
              count++
            }
          }

          if(count == 1){
            return false
          }else{
            return true
          }
        }
        return false
      },
    },

    mounted(){
      console.clear()

      this.getSix()

      this.progressNum =1
      if(this.developing) this.skip()

      
    },
    watch:{
      // opponentFightingPokemon(){
      //   if(!this.opponentFightingPokemon) return
      //   console.log(`HP: ${this.opponentFightingPokemon?.remainingHP}`)
      // }
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





  .pokeCard{
    z-index: 100;
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
    z-index: 101;
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

  .controller{
    margin-top: 10px
  }

  .controller .button{
    background-color: inherit;
    /* background-color: ; */
    border: none;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 125%;
    margin: 2px 2px;
    cursor: pointer;
    border-radius: 5px;

  }


  /* --------------------------------------- */
  .battle-field{
    position: absolute;
    width: 100vw;
    height: 45vh;
    top: 0;
    left: 0;

    /* padding: 20px; */
    /* background-color: crimson; */

    z-index: 100;
  }

  .battle-controller{
    position: absolute;
    width: 100vw;
    height: 50vh;
    top: 47.5vh;
    left: 0;


    /* border: 5px solid darkgreen; */

    z-index: 100;
  }

  .opponentPokemon-stats{
    /* z-index: 200; */
    position: absolute;
    /* border: 2px solid crimson; */
    top: 0;
    left: 0;
    width: 55%;
    height: 40%;
  }

  .opponentPokemon-img{
    /* z-index: 200; */
    position: absolute;
    /* border: 2px solid yellow; */
    top: 0;
    left: 55%;
    width: 45%;
    height: 60%;
  }



  .myPokemon-img{
    /* z-index: 200; */
    position: absolute;
    /* border: 2px solid yellow; */
    top: 40%;
    left: 0%;
    width: 45%;
    height: 60%;
  }

  .myPokemon-stats{
    /* z-index: 200; */
    position: absolute;
    /* border: 2px solid crimson; */
    top: 60%;
    left: 45%;
    width: 55%;
    height: 40%;
  }


  /* ----------------------------------------------- */
  .battle-field img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }


  .stats-container{
    background-color: lightgrey;
    width: 90%;
    padding: 5px auto;
    /* height: 75px; */
    font-size: 80%;
    border-radius: 4px;

    position: absolute;
    top: 10%;
    left: 50%;

    transform: translateX(-50%);
    color: black;
  }

  .stats-container .top-bar{
    margin:5px 5%;
    /* background-color: crimson; */
    display:block;
    width: 90%;
    display: flex;
  }

  .stats-container .left{
    text-align: left;
    /* margin-left: 5px; */
    
  }
  .stats-container .right{
    right: 10px;
    position: absolute;
    float: right;
    text-align: right;
    /* margin-right: 5px; */
    
  }

  

  .stats-container .type-badge{
    color:white;
    padding: 2px 6px;
    border-radius: 3px;
    
    font-weight: bold;
    margin-left: 5px;
  }

  .stats-container .skills strong{
    text-align: center;
    display:block;
    font-size: 2rem;
    margin-bottom: 30px;
  }
  .stats-container .bottom-bar .HP-bar-container{
    width: 90%;
    margin: auto auto 0px;
    background-color: DarkGray;

  }

  .stats-container .HP-bar {
    /* width: 90%;/ */
    margin: .5em 0 5px;
    border: .1em solid darken(#3D8361, 25%);
    border-radius: 0px;
    list-style: none;
    overflow: hidden;

    color: #D6CDA4;
    position: relative;
    height: 1.4em;
    /* background: #3D8361; */
    font-size: 1.2em;
    transition: width 2s;
    /* transition-delay: 1s; */
    
  }

  .HP-numbers{
    margin-top:0;
    text-align:left;
    margin: auto 5%;
  }




  .other-pokemons{
    /* background-color: black; */
    /* z-index:200; */
    position: absolute;
    width:100%;
    height: 50%;
    display: flex;
  }

  .other-pokemons .left{
    /* display: block; */
    position: relative;
    width: 50%;
    position: absolute;
    height: 100%;
    /* background-color: blue; */
    top: 0;
    /* height: 100%; */
    /* padding: 20px auto; */
    /* height: 20px; */
    /* background-color: red; */
    /* border: 2px solid red; */
  }

  .other-pokemons .left .myPokemon{
    /* display: block; */
    position: absolute;
    width: 100%;
    height: 25%;
    border: 1px solid yellow;
  }

  .other-pokemons .myPokemon img{
    position: absolute;
    left: 0;
    top: -8px;
    /* transform: translateY(-50%); */
    /* text-align: center; */
    height: 100%;
    width: auto;

    /* background-color: red; */

    
  }

  .other-pokemons  .HP-bar-container{
    width: 60%;
    margin: auto 30% 0px;
    background-color: DarkGray;

  }

  .other-pokemons .HP-bar {
    /* width: 90%;/ */
    margin: .5em 0;
    border: 5px solid darken(#3D8361, 25%);
    border-radius: 0px;
    list-style: none;
    overflow: hidden;

    color: #D6CDA4;
    position: relative;
    height: 1.4em;
    /* background: #3D8361; */
    /* font-size: 1.2em; */
    transition: width 2s;
    /* transition-delay: 1s; */
    
  }

  .other-pokemons .right{
    width: 50%;
    padding: 20px;
    border: 2px solid red;
    /* background-color: blue; */
  }


  /* ---------------------------------------------------- */

  .top-half  {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX( -50%);
    aspect-ratio: 2/1;
    height: 50%;
    border-radius: 150px 150px 0 0;
    background-color: Crimson;
    border: 8px solid black;
    z-index: 10;

    /* display: inline-block; */

    -moz-box-shadow: 11px 13px 25px -6px rgba(0, 0, 0, 0.8);
    -webkit-box-shadow: 11px 13px 25px -6px rgba(0, 0, 0, 0.8);
    -ms-box-shadow: 11px 13px 25px -6px rgba(0, 0, 0, 0.8);
    box-shadow: 11px 13px 25px -6px rgba(0, 0, 0, 0.8);
  }

  .center-circle{
    z-index: 11;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%,-50%);
    aspect-ratio: 1/1;
    height: 25%;
    background-color: white;
    border: 10px solid black;
    border-radius: 50%;
  }

  .inner-circle{
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%,-50%);
    aspect-ratio: 1/1;
    height: 60%;
    background-color: white;
    border: 5px solid black;
    border-radius: 50%;
  }


  .bottom-half  {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX( -50%);
    aspect-ratio: 2/1;
    height: 50%;
    border-radius: 0px 0px 150px 150px;
    background-color: white;
    border: 8px solid black;
    z-index: 10;

    overflow: hidden;

    -moz-box-shadow: 11px 13px 25px -6px rgba(0, 0, 0, 0.8);
    -webkit-box-shadow: 11px 13px 25px -6px rgba(0, 0, 0, 0.8);
    -ms-box-shadow: 11px 13px 25px -6px rgba(0, 0, 0, 0.8);
    box-shadow: 11px 13px 25px -6px rgba(0, 0, 0, 0.8);
  }

  .fight{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color:black;
    font-weight: bold;
    font-size: 25px;
  }

  .bag-button{
    position: absolute;
    top: 35%;
    left: 0%;
    transform: skew(-20deg);
    /* transform: translateX(-50%); */
    width: 25%;
    height: 100%;
    background-color:Silver;
    border: 8px solid black;

    
  }

  .run-button{
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translateX(-50%);
    width: 25%;
    height: 100%;
    background-color:Silver;
    border: 8px solid black;
  }

  .pokemon-button{
    position: absolute;
    top: 35%;
    right: 0%;
    transform: skew(20deg);
    /* transform: translateX(-50%); */
    width: 25%;
    height: 100%;
    background-color:Silver;
    border: 8px solid black;
  }

  .button-label{
    display:block;
    color:black;
    font-weight: bold;
    padding-top:10px;
  }

  @keyframes press {
    0% {
      transform: scale(1) translate(-50%);
    }
    50% {
      transform: scale(0.96) translate(-51%);
    }
    to {
      transform: scale(1) translate(-50%);
    }
  }

  @keyframes leftPress {
    0% {
      transform: scale(1)  skew(-20deg);
    }
    50% {
      transform: scale(0.94) skew(-20deg);
    }
    to {
      transform: scale(1) skew(-20deg);
    }
  }

  @keyframes rightPress {
    0% {
      transform: scale(1)  skew(20deg);
    }
    50% {
      transform: scale(0.94) skew(20deg);
    }
    to {
      transform: scale(1) skew(20deg);
    }
  }

  .miniBounce {
    animation: press 0.4s ease-in-out; 
  }

  .leftBounce{
    animation: leftPress 0.4s ease-in-out; 
  }

  .rightBounce{
    animation: rightPress 0.4s ease-in-out; 
  }
  




  
</style>