<template>
<div id="questionnaire" class="relative grid grid-cols-4 ">
  <!-- LEFT MENU-->
  <div class="relative flex flex-col items-center inset-y-1/2" >
    <p class="font-montserrat text-center my-4 hover:font-bold cursor-pointer" v-for="(group, index) in groups" :key="index" v-on:click="showGroup(group)">{{group.name}}</p>
  </div>
  <!-- SEPARATING LINES-->
  <div  class="absolute h-96 border border-solid left-1/4 border-black rounded mt-36"></div>
  <div  class="absolute h-96 border border-solid left-3/4 border-black rounded mt-36"></div>

            <!-- CENTRAL PART ANALYTICAL PROCESSING-->
            <div id="questionnaire_analytical" class="relative flex flex-col items-center col-start-2 col-end-4 mt-12 mx-4" v-show="active_group[0].active">
              <!-- GROUP NAME AND EXPLANATION-->
              <h1 class="font-montserrat  font-light md:text-3xl lg:text-4xl">{{groups[0].name}}</h1>
              <h2 class="font-montserrat  font-light mt-4 md:text-xl lg:text-2xl">{{groups[0].description}}</h2>
              <!-- QUESTIONNAIRE PART-->
                <div class="relative w-full h-full grid grid-rows-2 mt-28" >
                  <div class="flex flex-row justify-around">
                    <div>
                      <input type="checkbox" id="descriptive processing" value="descriptive_processing" v-model="checkedNames" class="cursor-pointer w-4 h-4 accent-blue-500">
                      <label for="descriptive processing" class="mx-2 font-roboto" ref="btnRef" v-on:mouseenter="toggleTooltip(0)" v-on:mouseleave="toggleTooltip(0)" >{{ $t('Descriptive') }}</label>
                      <!-- TOOLTIP EXPLANATION-->
                      <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow[0], 'block': tooltipShow[0]}" class="absolute bg-blue-500 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg">
                        <div>
                          <div class="text-white p-3">
                            {{information[0]}}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <input type="checkbox" id="diagnostic processing" value="diagnostic_processing" v-model="checkedNames" class="cursor-pointer w-4 h-4 accent-blue-500">
                      <label for="diagnostic processing" class="mx-2 font-roboto" ref="btnRef" v-on:mouseenter="toggleTooltip(1)" v-on:mouseleave="toggleTooltip(1)" >{{ $t('Diagnostic') }}</label>
                      <!-- TOOLTIP EXPLANATION-->
                      <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow[1], 'block': tooltipShow[1]}" class="absolute bg-blue-500 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left break-words rounded-lg">
                        <div>
                          <div class="text-white p-3">
                            {{information[1]}}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-row justify-around mt-12">
                    <div>
                      <input type="checkbox" id="predictive processing" value="predictive_processing" v-model="checkedNames" class="cursor-pointer w-4 h-4 accent-blue-500">
                      <label for="predictive processing" class="mx-2 font-roboto" ref="btnRef" v-on:mouseenter="toggleTooltip(2)" v-on:mouseleave="toggleTooltip(2)" >{{ $t('Predictive') }}</label>
                      <!-- TOOLTIP EXPLANATION-->
                      <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow[2], 'block': tooltipShow [2]}" class="absolute bg-blue-500 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left break-words rounded-lg">
                        <div>
                          <div class="text-white p-3">
                            {{information[2]}}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <input type="checkbox" id="prescriptive processing" value="prescriptive_processing" v-model="checkedNames" class="cursor-pointer w-4 h-4 accent-blue-500">
                      <label for="prescriptive processing" class="mx-2 font-roboto" ref="btnRef" v-on:mouseenter="toggleTooltip(3)" v-on:mouseleave="toggleTooltip(3)" >{{ $t('Prescriptive') }}</label>
                      <!-- TOOLTIP EXPLANATION-->
                      <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow[3], 'block': tooltipShow[3]}" class="absolute bg-blue-500 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left break-words rounded-lg">
                        <div>
                          <div class="text-white p-3">
                            {{information[3]}}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <!-- CENTRAL PART COOKIES & CACHE-->
            <div id="questionnaire_cookies" class="relative flex flex-col items-center col-start-2 col-end-4 mt-12 mx-4" v-show="active_group[1].active">
              <!-- GROUP NAME AND EXPLANATION-->
              <h1 class="font-montserrat font-light md:text-3xl lg:text-4xl">{{groups[1].name}}</h1>
              <h2 class="font-montserrat font-light mt-4 md:text-xl text-center lg:text-2xl">{{groups[1].description}}</h2>
              <!-- QUESTIONNAIRE PART-->
              <div  class="relative w-full h-full grid grid-rows-2 mt-44" >
                <div class="flex flex-row justify-around">
                  <div>
                    <input type="checkbox" id="cookies" value="cookies" v-model="checkedNames" class="cursor-pointer w-4 h-4 accent-blue-500">
                    <label for="cookies" class="mx-2 font-roboto" ref="btnRef" v-on:mouseenter="toggleTooltip(0)" v-on:mouseleave="toggleTooltip(0)" >{{$t('Cookies')}}</label>
                    <!-- TOOLTIP EXPLANATION-->
                    <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow[0], 'block': tooltipShow[0]}" class="absolute bg-blue-500 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left break-words rounded-lg">
                      <div>
                        <div class="text-white p-3">
                          {{information[4]}}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <input type="checkbox" id="local_cache" value="local_cache" v-model="checkedNames" class="cursor-pointer w-4 h-4 accent-blue-500">
                    <label for="local_cache" class="mx-2 font-roboto" ref="btnRef" v-on:mouseenter="toggleTooltip(1)" v-on:mouseleave="toggleTooltip(1)" >{{$t('Cache')}}</label>
                    <!-- TOOLTIP EXPLANATION-->
                    <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow[1], 'block': tooltipShow[1]}" class="absolute bg-blue-500 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left break-words rounded-lg">
                      <div>
                        <div class="text-white p-3">
                          {{information[5]}}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- CENTRAL PART DATA COLLECTION-->
            <div id="questionnaire_data_gathering"  class="relative flex flex-col items-center col-start-2 col-end-4 mt-12 mx-4" v-show="active_group[2].active">
              <!-- GROUP NAME AND EXPLANATION-->
              <h1 class="font-montserrat font-light md:text-3xl lg:text-4xl">{{groups[2].name}}</h1>
              <h2 class="font-montserrat font-light mt-4 md:text-xl text-center lg:text-2xl">{{groups[2].description}}</h2>
              <!-- QUESTIONNAIRE PART-->
              <div class="relative w-full h-full grid grid-rows-2 mt-28" >
                <div class="flex flex-row justify-around">
                  <div>
                    <input type="checkbox" id="personal_data" value="personal_data" v-model="checkedNames" class="cursor-pointer w-4 h-4 accent-blue-500">
                    <label for="personal_data" class="mx-2 font-roboto" ref="btnRef" v-on:mouseenter="toggleTooltip(0)" v-on:mouseleave="toggleTooltip(0)" >{{$t('Personal')}}</label>
                    <!-- TOOLTIP EXPLANATION-->
                    <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow[0], 'block': tooltipShow[0]}" class="absolute bg-blue-500 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left break-words rounded-lg">
                      <div>
                        <div class="text-white p-3">
                            {{information[6]}}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <input type="checkbox" id="general_data" value="general_data" v-model="checkedNames" class="cursor-pointer w-4 h-4 accent-blue-500">
                    <label for="general_data" class="mx-2 font-roboto" ref="btnRef" v-on:mouseenter="toggleTooltip(1)" v-on:mouseleave="toggleTooltip(1)" >{{$t('General')}}</label>
                    <!-- TOOLTIP EXPLANATION-->
                    <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow[1], 'block': tooltipShow[1]}" class="absolute bg-blue-500 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left break-words rounded-lg">
                      <div>
                        <div class="text-white p-3">
                          {{information[7]}}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="relative w-full h-full flex mt-24 justify-center" >
                <div class="flex flex-row">
                  <div>
                    <input type="checkbox" id="metadata" value="metadata" v-model="checkedNames" class="cursor-pointer w-4 h-4 accent-blue-500">
                    <label for="metadata" class="mx-2 font-roboto" ref="btnRef" v-on:mouseenter="toggleTooltip(2)" v-on:mouseleave="toggleTooltip(2)" >{{$t('Metadata')}}</label>
                    <!-- TOOLTIP EXPLANATION-->
                    <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow[2], 'block': tooltipShow[2]}" class="absolute bg-blue-500 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left break-words rounded-lg">
                      <div>
                        <div class="text-white p-3">
                          {{information[8]}}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- CENTRAL PART DATA TRANSFER-->
            <div id="questionnaire_data_transfer" class="relative flex flex-col items-center col-start-2 col-end-4 mt-12 mx-4" v-show="active_group[3].active">
              <!-- GROUP NAME AND EXPLANATION-->
              <h1 class="font-montserrat font-light md:text-3xl lg:text-4xl">{{groups[3].name}}</h1>
              <h2 class="font-montserrat font-light mt-4 md:text-xl text-center lg:text-2xl">{{groups[3].description}}</h2>
              <!-- QUESTIONNAIRE PART-->
              <div  class="relative w-full h-full grid grid-rows-2 mt-44" >
                <div class="flex flex-row lg:justify-around md:mx-5">
                  <div>
                    <input type="checkbox" id="third_party" value="third_party" v-model="checkedNames" class="cursor-pointer w-4 h-4 accent-blue-500">
                    <label for="third_party" class="mx-2 font-roboto" ref="btnRef" v-on:mouseenter="toggleTooltip(0)" v-on:mouseleave="toggleTooltip(0)" >{{$t('TransferExtern')}}</label>
                    <!-- TOOLTIP EXPLANATION-->
                    <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow[0], 'block': tooltipShow[0]}" class="absolute bg-blue-500 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left break-words rounded-lg">
                      <div>
                        <div class="text-white p-3">
                          {{information[9]}}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <input type="checkbox" id="intern" value="intern_transfer" v-model="checkedNames" class="cursor-pointer w-4 h-4 accent-blue-500">
                    <label for="intern" class="mx-2 font-roboto" ref="btnRef" v-on:mouseenter="toggleTooltip(1)" v-on:mouseleave="toggleTooltip(1)" >{{$t('TransferIntern')}}</label>
                    <!-- TOOLTIP EXPLANATION-->
                    <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow[1], 'block': tooltipShow[1]}" class="absolute bg-blue-500 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left break-words rounded-lg">
                      <div>
                        <div class="text-white p-3">
                          {{information[10]}}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- CENTRAL PART DATA STORAGE-->
            <div id="questionnaire_data_storage" class="relative flex flex-col items-center col-start-2 col-end-4 mt-12 lg:mx-4" v-show="active_group[4].active">
              <!-- GROUP NAME AND EXPLANATION-->
              <h1 class="font-montserrat font-light md:text-3xl text-center lg:text-4xl">{{groups[4].name}}</h1>
              <h2 class="font-montserrat font-light mt-4 md:text-xl text-center lg:text-2xl">{{groups[4].description}}</h2>
              <!-- QUESTIONNAIRE PART-->
              <div  class="relative items-center w-full h-full grid grid-rows-3 mt-24 " >
                <div class="flex flex-row lg:justify-around md:justify-center">
                  <div>
                    <input type="checkbox" id="no_anonymized" value="no_anonymized" v-model="checkedNames" class="cursor-pointer w-4 h-4 accent-blue-500">
                    <label for="no_anonymized" class="mx-2 font-roboto" ref="btnRef" v-on:mouseenter="toggleTooltip(0)" v-on:mouseleave="toggleTooltip(0)" >{{$t('NotAnonymized')}} </label>
                    <!-- TOOLTIP EXPLANATION-->
                    <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow[0], 'block': tooltipShow[0]}" class="absolute bg-blue-500 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left break-words rounded-lg">
                      <div>
                        <div class="text-white p-3">
                          {{information[11]}}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <input type="checkbox" id="anonymized" value="anonymized" v-model="checkedNames" class="cursor-pointer w-4 h-4 accent-blue-500">
                    <label for="anonymized" class="mx-2 font-roboto" ref="btnRef" v-on:mouseenter="toggleTooltip(1)" v-on:mouseleave="toggleTooltip(1)" >{{$t('Anonymized')}}</label>
                    <!-- TOOLTIP EXPLANATION-->
                    <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow[1], 'block': tooltipShow[1]}" class="absolute bg-blue-500 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left break-words rounded-lg">
                      <div>
                        <div class="text-white p-3">
                          {{information[12]}}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row md:justify-center lg:justify-around my-8">
                  <div>
                    <input type="checkbox" id="stored_time" value="stored_time" v-model="checkedNames" class="cursor-pointer w-4 h-4 accent-blue-500">
                    <label for="stored_time" class="mx-2 font-roboto" ref="btnRef" v-on:mouseenter="toggleTooltip(2)" v-on:mouseleave="toggleTooltip(2)" >{{$t('QuestionnaireStored')}} </label>
                    <!-- TOOLTIP EXPLANATION-->
                    <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow[2], 'block': tooltipShow[2]}" class="absolute bg-blue-500 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left break-words rounded-lg">
                      <div>
                        <div class="text-white p-3">
                          {{information[13]}}
                        </div>
                      </div>
                    </div>
                  </div>
                  <select id="amounts"  v-model="times_selected.storage_time" class="md:w-12 lg:w-96 bg-gray-100 rounded border-gray-300">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </select>
                  <select id="periods" v-model="times_selected.storage_period" class="bg-gray-100 rounded border-gray-300">
                    <option value="Seconds">{{$t('QuestionnaireSeconds')}}</option>
                    <option value="minutes">{{$t('QuestionnaireMinutes')}}</option>
                    <option value="Hours">{{$t('QuestionnaireHours')}}</option>
                    <option value="Days">{{$t('QuestionnaireDays')}}</option>
                    <option value="Months">{{$t('QuestionnaireMonths')}}</option>
                    <option value="Years">{{$t('QuestionnaireYears')}}</option>
                  </select>
                </div>
                <div class="flex flex-row md:justify-center lg:justify-around">
                  <div>
                    <input type="checkbox" id="pseudoanonymized" value="pseudoanonymized" v-model="checkedNames" class="cursor-pointer w-4 h-4 accent-blue-500">
                    <label for="pseudoanonymized" class="mx-2 font-roboto" ref="btnRef" v-on:mouseenter="toggleTooltip(3)" v-on:mouseleave="toggleTooltip(3)" >{{$t('Pseudoanonymized')}}</label>
                    <!-- TOOLTIP EXPLANATION-->
                    <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow[3], 'block': tooltipShow[3]}" class="absolute bg-blue-500 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left break-words rounded-lg">
                      <div>
                        <div class="text-white p-3">
                          {{information[14]}}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <input type="checkbox" id="encrypted" value="encrypted" v-model="checkedNames" class="cursor-pointer w-4 h-4 accent-blue-500">
                    <label for="encrypted" class="mx-2 font-roboto" ref="btnRef" v-on:mouseenter="toggleTooltip(4)" v-on:mouseleave="toggleTooltip(4)" >{{$t('Encrypted')}}</label>
                    <!-- TOOLTIP EXPLANATION-->
                    <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow[4], 'block': tooltipShow[4]}" class="absolute bg-blue-500 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left break-words rounded-lg">
                      <div>
                        <div class="text-white p-3">
                          {{information[15]}}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- CENTRAL PART DATA PROCESSING-->
            <div id="questionnaire_data_processing" class="relative flex flex-col items-center col-start-2 col-end-4 mt-12 mx-4" v-show="active_group[5].active">
              <!-- GROUP NAME AND EXPLANATION-->
              <h1 class="font-montserrat font-light md:text-3xl lg:text-4xl">{{groups[5].name}}</h1>
              <h2 class="font-montserrat font-light mt-4 md:text-xl text-center lg:text-2xl">{{groups[5].description}}</h2>
              <!-- QUESTIONNAIRE PART-->
              <div  class="relative w-full h-full flex flex-col mt-44" >
                <div class="flex flex-row justify-around my-8">
                  <div>
                    <input type="checkbox" id="processed_time" value="processed_time" v-model="checkedNames" class="cursor-pointer w-4 h-4 accent-blue-500">
                    <label for="processed_time" class="mx-2 font-roboto" ref="btnRef" v-on:mouseenter="toggleTooltip(0)" v-on:mouseleave="toggleTooltip(0)" >{{$t('QuestionnaireProcessed')}}</label>
                    <!-- TOOLTIP EXPLANATION-->
                    <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow[0], 'block': tooltipShow[0]}" class="absolute bg-blue-500 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left break-words rounded-lg">
                      <div>
                        <div class="text-white p-3">
                          {{information[16]}}
                        </div>
                      </div>
                    </div>
                  </div>
                  <select id="amounts1"  v-model="times_selected.processing_time" class=" md:w-12 lg:w-96 bg-gray-100 rounded border-gray-300">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </select>
                  <select id="periods1" v-model="times_selected.processing_period" class="bg-gray-100 rounded border-gray-300">
                    <option value="Seconds">{{$t('QuestionnaireSeconds')}}</option>
                    <option value="minutes">{{$t('QuestionnaireMinutes')}}</option>
                    <option value="Hours">{{$t('QuestionnaireHours')}}</option>
                    <option value="Days">{{$t('QuestionnaireDays')}}</option>
                    <option value="Months">{{$t('QuestionnaireMonths')}}</option>
                    <option value="Years">{{$t('QuestionnaireYears')}}</option>
                  </select>

                </div>
              </div>
            </div>

  <!-- RIGHT PART WITH LICENSE IMAGE-->
  <div id="result_license" class="relative flex flex-col items-center mt-12 mx-2">
      <h1 class="font-montserrat lg:text-4xl font-light mb-20 md:text-3xl">{{$t('QuestionnaireLicense')}}</h1>
      <IconImage v-on:click="openInNewTab('https://ls-leda.github.io/learning-icons/#Icons')" ref="image" v-bind:checkedNames="checkedNames" v-bind:times_selected="times_selected" class="w-full cursor-pointer"></IconImage>

      <div class="relative flex flex-col items-center mt-8 w-full px-2" v-if="this.imageCode">
        <p class="font-montserrat font-bold mb-2">{{$t('QuestionnaireCopyCode')}}</p>
        <textarea id="image_code" name="image_code" v-model="this.imageCode" class="overflow-auto w-full h-32 resize-none focus:outline-blue-500 px-2" readonly></textarea>
        <p class="font-montserrat font-bold my-2">or</p>
        <a download="yourLicense" :href= "this.link">
          <button id="download" class="shadow-md bg-white rounded-xl font-montserrat  hover:bg-slate-200 lg:w-64 h-10 md:w-48 h-10 ">{{$t('QuestionnaireDownload')}}</button>
        </a>
      </div>
    </div>

  <!-- BOTTOM BUTTONS TO PASS PAGES-->
  <div id="buttons" class="absolute grid grid-rows-2 items-center col-start-2 col-end-4 w-full -bottom-60 gap-y-8">
      <div class="flex flex-row justify-around ">
        <!-- PREVIOUS BUTTON-->
        <button v-if="active_group[0].active === false" v-on:click="previousPage" class="mx-8 shadow-md bg-white rounded-xl font-montserrat w-32 h-10 text-xl hover:bg-slate-200 active:bg-slate-200">{{$t('QuestionnairePreviousButton')}}</button>
        <!-- NEXT BUTTON-->
        <button v-if="active_group[5].active === false" v-on:click="nextPage" class="mx-8 shadow-md bg-white rounded-xl font-montserrat w-32 h-10 text-xl hover:bg-slate-200 active:bg-slate-200">{{$t('QuestionnaireNextButton')}}</button>
      </div>
      <div class="flex flex-row justify-center">
        <!-- CREATE LICENSE BUTTON-->
        <button v-on:click="getImageCode" class="shadow-md bg-white rounded-xl font-montserrat w-48 h-10 text-xl hover:bg-slate-50 active:bg-slate-200">{{$t('QuestionnaireCreateButton')}}</button>
      </div>
    </div>
</div>
  <FooterPage class="absolute self-start bottom-0 pl-2"></FooterPage>

</template>

<script>

import IconImage from "@/components/image";
import { mdiHelpCircleOutline  } from "@mdi/js";
import {createPopper} from "@popperjs/core";
import FooterPage from "@/components/Footer";

export default {
  name: "QuestionnairePage",
  components: {IconImage, FooterPage},
  data() {
    return {
      tooltipShow: [false, false, false, false,false, false],
      information_icon: mdiHelpCircleOutline,
      link:'',
      imageCode:'',
      checkedNames: [],
      times_selected: {
        storage_time: '',
        storage_period: '',
        processing_time: '',
        processing_period: ''
      },
      active_group:[
        {active: true},
        {active: false},
        {active: false},
        {active: false},
        {active: false},
        {active: false}
    ]
    }
  },
  computed:{
    groups(){
      return [
      {
        name: this.$t('QuestionnaireAnalyticalName'),
        description: this.$t('QuestionnaireAnalyticalDescription'),
        active: true
      },
      {
        name: this.$t('QuestionnaireCookiesName'),
        description: this.$t('QuestionnaireCookiesDescription'),
        active: false
      },
      {
        name: this.$t('QuestionnaireCollectionName'),
        description: this.$t('QuestionnaireCollectionDescription'),
        active: false
      },
      {
        name: this.$t('QuestionnaireTransferName'),
        description: this.$t('QuestionnaireTransferDescription'),
        active: false
      },
      {
        name: this.$t('QuestionnaireStorageName'),
        description: this.$t('QuestionnaireStorageDescription'),
        active: false
      },
      {
        name: this.$t('QuestionnaireProcessingName'),
        description: this.$t('QuestionnaireProcessingDescription'),
        active: false
      }
    ]
    },
    information(){
      return[this.$t('QuestionnaireExplanation1'),
        this.$t('QuestionnaireExplanation2'),
        this.$t('QuestionnaireExplanation3'),
        this.$t('QuestionnaireExplanation4'),
        this.$t('QuestionnaireExplanation5'),
        this.$t('QuestionnaireExplanation6'),
        this.$t('QuestionnaireExplanation7'),
        this.$t('QuestionnaireExplanation8'),
        this.$t('QuestionnaireExplanation9'),
        this.$t('QuestionnaireExplanation10'),
        this.$t('QuestionnaireExplanation11'),
        this.$t('QuestionnaireExplanation12'),
        this.$t('QuestionnaireExplanation13'),
        this.$t('QuestionnaireExplanation14'),
        this.$t('QuestionnaireExplanation15'),
        this.$t('QuestionnaireExplanation16'),
        this.$t('QuestionnaireExplanation17')]
    }
  },
  methods:{
    previousPage(){
      const found = this.active_group.findIndex(e => e.active === true);

      this.active_group[found].active = false;
      this.active_group[found - 1].active = true;
    },
    nextPage(){
      const found = this.active_group.findIndex(e => e.active === true);

      this.active_group[found].active = false;
      this.active_group[found + 1].active = true;
    },
    showGroup(group){
      const found = this.groups.findIndex(e => e.name === group.name);
      console.log(found)
      for (let i = 0; i < this.groups.length; i++) {
        this.active_group[i].active = i === found;
      }
      console.log(this.active_group[0].active)
    },
    getImageCode(){
      this.imageCode = this.$refs.image.$el.innerHTML;
      let svgBlob = new Blob([this.$refs.image.$el.innerHTML], {type: "image/svg+xml;charset=utf-8"});
      this.link = URL.createObjectURL(svgBlob);
    },
    openInNewTab(page){
      window.open(page);
    },
    toggleTooltip: function(i){
      if(this.tooltipShow[i]){
        this.tooltipShow[i] = false;
      } else {
        this.tooltipShow[i] = true;
        createPopper(this.$refs.btnRef, this.$refs.tooltipRef, {
        });
      }
    }
  }
}
</script>

<style scoped>

</style>