<template>
  <section id="icones" >
    <div v-for="(group, index) in icons" :key="index" class ="flex flex-col pt-20 md:ml-12">
      <h1 class="font-montserrat text-2xl md:text-4xl font-bold">{{group.category}}</h1>
      <div v-for="(icon, index) in group.icon" :key="index" class ="flex flex-col pt-20">
        <div id="element" class="flex flex-row md:p-1.5 md:m-4 ">
          <img :alt=icon.alt :src= "'LearningIcons/assets/icons/'+ icon.path + '.svg'" class="h-24 lg:h-36 xl:h-52 self-center mx-3">
          <div id="sub-element" class="flex flex-col md:p-1.5">
            <h2 id="name" class="font-montserrat text-xl md:text-3xl font-semibold">{{icon.name}}</h2>
            <p id="description" class="font-roboto md:text-xl">{{ icon.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute left-1/2">
      <a download="icons.json" href="LearningIcons/assets/icons.json" >
        <button aria-label="download JSON button" id="download" class="ml-12 shadow-md bg-white rounded-xl font-montserrat w-48 h-10 text-xl hover:bg-slate-50 active:bg-slate-200">{{$t('JSON')}}</button>
      </a>
    </div>

  </section>
  <FooterPage class="relative self-start -bottom-36 pl-2 scrollbar-hide"></FooterPage>
</template>

<script>
import FooterPage from "@/components/Footer";
export default {
  name: "LearningIcons",
  components: {FooterPage},
  computed: {
    icons() {
      return [
        {
          category: this.$t('QuestionnaireAnalyticalName'),
          icon:[
            {
              name: this.$t('Descriptive'),
              path: "descriptive_processing",
              description: this.$t('QuestionnaireExplanation1'),
              alt: this.$t('AltDescriptive')
            },
            {
              name: this.$t('Diagnostic'),
              path: "diagnostic_processing",
              description: this.$t('QuestionnaireExplanation2'),
              alt: this.$t('AltDiagnostic')
            }, {
              name: this.$t('Predictive'),
              path: "predictive_processing",
              description: this.$t('QuestionnaireExplanation3'),
              alt: this.$t('AltPredictive')
            }, {
              name: this.$t('Prescriptive'),
              path: "prescriptive_processing",
              description: this.$t('QuestionnaireExplanation4'),
              alt: this.$t('AltPrescriptive')
            }
          ]
        },
        {
          category: this.$t('QuestionnaireCookiesName'),
          icon:[
            {
              name: this.$t('Cookies'),
              path: "cookies",
              description: this.$t('QuestionnaireExplanation5'),
              alt: this.$t('AltCookies')
            }, {
              name: this.$t('Cache'),
              path: "local_cache",
              description: this.$t('QuestionnaireExplanation6'),
              alt: this.$t('AltCache')
            }
          ]
        },
        {
          category: this.$t('QuestionnaireCollectionName'),
          icon:[
            {
              name: this.$t('Personal'),
              path: "personal_data",
              description: this.$t('QuestionnaireExplanation7'),
              alt: this.$t('AltPersonal')
            }, {
              name: this.$t('General'),
              path: "general_data",
              description: this.$t('QuestionnaireExplanation8'),
              alt: this.$t('AltGeneral')
            }, {
              name: this.$t('Metadata'),
              path: "metadata",
              description: this.$t('QuestionnaireExplanation9'),
              alt: this.$t('AltMetadata')
            }
          ]
        },
        {
          category: this.$t('QuestionnaireTransferName'),
          icon:[
            {
              name: this.$t('TransferExtern'),
              path: "third_party",
              description: this.$t('QuestionnaireExplanation10'),
              alt: this.$t('AltTransferExtern')
            }, {
              name: this.$t('TransferIntern'),
              path: "intern_transfer",
              description: this.$t('QuestionnaireExplanation11'),
              alt: this.$t('AltTransferIntern')
            }
          ]
        },
        {
          category: this.$t('QuestionnaireStorageName'),
          icon:[
            {
              name: this.$t('NotAnonymized'),
              path: "no_anonymized",
              description: this.$t('QuestionnaireExplanation12'),
              alt: this.$t('AltNotAnonymized')
            }, {
              name: this.$t('Anonymized'),
              path: "anonymized",
              description: this.$t('QuestionnaireExplanation13'),
              alt: this.$t('AltAnonymized')
            }, {
              name: this.$t('Stored'),
              path: "stored_time",
              description: this.$t('QuestionnaireExplanation16'),
              alt: this.$t('AltStored')
            }, {
              name: this.$t('Pseudoanonymized'),
              path: "pseudoanonymized",
              description: this.$t('QuestionnaireExplanation14'),
              alt: this.$t('AltPseudoanonymized')
            }, {
              name: this.$t('Encrypted'),
              path: "encrypted",
              description: this.$t('QuestionnaireExplanation15'),
              alt: this.$t('AltEncrypted')
            }
          ]
        },
        {
          category: this.$t('QuestionnaireProcessingName'),
          icon:[
            {
              name: this.$t('Processed'),
              path: "processed_time",
              description: this.$t('QuestionnaireExplanation17'),
              alt: this.$t('AltQuestionnaireProcessingName')
            }
          ]
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>