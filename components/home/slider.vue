<template>
    <UCarousel v-slot="{ item }" :items="items" arrows>
        <!-- <img :src="item" width="300" height="400" draggable="false"> -->
        <div class="border border-[#E5E5E5] rounded-[10px] p-4 cursor-pointer w-[90%]" @click="isOpen = !isOpen">
            <div class="relative">
                <div class="absolute left-[40%] right-[50%] top-[38%] bottom-[50%]">
                    <span class="ctaIconHolder ctaIconHolder_m">
                        <svg class="cust_icon icon_sm" viewBox="0 0 64 64" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M23.6298 12.9957C21.6337 11.7041 19 13.1369 19 15.5144V48.4856C19 50.8631 21.6337 52.2959 23.6298 51.0043L49.1074 34.5187C50.9344 33.3365 50.9344 30.6635 49.1074 29.4813L23.6298 12.9957Z" />
                        </svg>
                    </span>
                </div>
                <NuxtImg src="/img/dummy_video_thumb.png" class="rounded-[15px] hover:bg-[rgba(0, 0, 0, 0.5)]" />
            </div>
            <div class="mt-2">
                <h4 class="uppercase text-[#11BDCF] text-xs font-bold">{{ item.subject }}</h4>
                <p class="text-base text-[#113255] font-medium">{{ item.topic }}</p>
            </div>
        </div>
    </UCarousel>
    <section v-if="isOpen">
        <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center modal fade">
                <div class="modal-dialog modal-dialog-centered mediaRenderDialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div class="dialogDismiss">
                                <button type="button" class="close_dialog" @click="isOpen = !isOpen"></button>
                            </div>
                        </div>
                        <div class="modal-body mediaRenderDialogbody">
                            <div class="content_wrapper">
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe width="760" height="515" class="embed-responsive-item"
                                        src="https://www.youtube.com/embed/Cm2z8fwVPvE" title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
let isOpen = ref(false);

const items = [
    {
        videoUrl: 'https://picsum.photos/600/800?random=1',
        subject: 'Mathematics',
        topic: 'Estimation & Accuracy',
        thumbnail: ""
    },
    {
        videoUrl: 'https://picsum.photos/600/800?random=1',
        subject: 'English language',
        topic: 'Estimation & Accuracy'
    },
    {
        videoUrl: 'https://picsum.photos/600/800?random=1',
        subject: 'Physics',
        topic: 'Estimation & Accuracy'
    },
    {
        videoUrl: 'https://picsum.photos/600/800?random=1',
        subject: 'Chemistry',
        topic: 'Estimation & Accuracy'
    },
    {
        videoUrl: 'https://picsum.photos/600/800?random=1',
        subject: 'Biology',
        topic: 'Estimation & Accuracy'
    },
    {
        videoUrl: 'https://picsum.photos/600/800?random=1',
        subject: 'Economics',
        topic: 'Estimation & Accuracy'
    }
]


</script>

<style scoped>
.videoOverlay:hover {
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.4s ease-in-out 0s;
}

.ctaIconHolder {
    display: inline-flex;
    width: 58px;
    height: 58px;
    border-radius: 33%;
    background-color: #FEF7ED;
    align-items: center;
    justify-content: center;
    fill: #FAA017;
    -moz-transition: all 0.4s linear 0s;
    -o-transition: all 0.4s linear 0s;
    -webkit-transition: all 0.4s linear;
    -webkit-transition-delay: 0s;
    transition: all 0.4s linear 0s;
}

/* line 56, ../sass/partials/_controls.scss */
.ctaIconHolder:hover,
.ctaIconHolder:focus {
    background-color: #11bdcf;
    fill: #113255;
}

.icon_sm {
    width: 32px;
    height: 32px;
}

.cust_icon {
    display: inline-block;
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    overflow: hidden;
    vertical-align: middle;
    fill: inherit;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}

/* line 102, ../sass/partials/_dialogs.scss */
.modal-backdrop {
  background-color: black;
  display: none;
}

/* line 107, ../sass/partials/_dialogs.scss */
.modal-content {
  border-radius: 15px;
  overflow: hidden;
}
/* line 111, ../sass/partials/_dialogs.scss */
.mediaRenderDialog .modal-content {
  background-color: black;
  color: #dbf5f8;
  fill: #dbf5f8;
}

/* line 118, ../sass/partials/_dialogs.scss */
.modal-dialog {
  z-index: 2000;
  margin: 5rem auto;
}

/* Landscape tablets and desktop or laptops */
@media only screen and (min-width: 992px) {
  /* line 124, ../sass/partials/_dialogs.scss */
  .modal-md {
    max-width: 720px;
  }

  /* line 128, ../sass/partials/_dialogs.scss */
  .modal-lg, .modal-xl {
    max-width: 1170px;
  }
}
/* line 133, ../sass/partials/_dialogs.scss */
.mediaRenderDialog {
  max-width: 970px;
}

/* line 137, ../sass/partials/_dialogs.scss */
.modal {
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
}
/* line 140, ../sass/partials/_dialogs.scss */
.modal-open .modal {
  background-color: rgba(0, 0, 0, 0.85);
  padding: none !important;
}
/* line 145, ../sass/partials/_dialogs.scss */
.modal .modal-header {
  border-bottom: none;
  padding: 15px 15px 0;
  align-items: center;
  /* Tablets and phablets */
}
@media only screen and (min-width: 768px) {
  /* line 145, ../sass/partials/_dialogs.scss */
  .modal .modal-header {
    padding-left: 30px;
    padding-right: 30px;
  }
}
/* line 156, ../sass/partials/_dialogs.scss */
.modal .modal-body {
  position: relative;
  padding: 30px 15px;
  /* Tablets and phablets */
}
@media only screen and (min-width: 768px) {
  /* line 156, ../sass/partials/_dialogs.scss */
  .modal .modal-body {
    padding-left: 30px;
    padding-right: 30px;
  }
}
/* line 166, ../sass/partials/_dialogs.scss */
.modal .modal-footer {
  border-top: none;
  padding: 0 15px 10px;
}

/* line 172, ../sass/partials/_dialogs.scss */
.modal-title {
  font-size: 16px;
  font-weight: 700;
  font-family: "Noto Sans", "Hind Madurai", Roboto, Segoe UI, Open Sans, sans-serif;
  text-transform: uppercase;
}

/* line 179, ../sass/partials/_dialogs.scss */
.mediaRenderDialogHeader {
  background-color: black;
}
/* line 182, ../sass/partials/_dialogs.scss */
.mediaRenderDialogHeader.modal-header {
  padding-bottom: 15px;
}

/* line 187, ../sass/partials/_dialogs.scss */
.modalAuthWrapper {
  max-width: 400px;
  margin: auto;
}

.dialogDismiss {
  position: absolute;
  right: 350px;
  top: 125px;
  display: flex;
  z-index: 1000;
}

/* line 370, ../sass/partials/_navigation.scss */
.pageClose {
  position: fixed;
  /* Tablets and phablets */
}
@media only screen and (min-width: 768px) {
  /* line 370, ../sass/partials/_navigation.scss */
  .pageClose {
    top: 30px;
    right: 40px;
  }
}

/* line 379, ../sass/partials/_navigation.scss */
.close_dialog {
  z-index: 5;
  width: 32px;
  height: 32px;
  font-size: 16px;
  text-align: center;
  border-radius: 25%;
  position: relative;
  background-color: white;
  border: 1px solid #E5E5E5;
}
/* line 390, ../sass/partials/_navigation.scss */
.close_dialog::before, .close_dialog::after {
  position: absolute;
  content: "";
  width: 2px;
  background: #113255;
  height: 14px;
  top: 50%;
  left: 50%;
  margin: -7px 0 0 -1px;
}
/* line 401, ../sass/partials/_navigation.scss */
.close_dialog::before {
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
/* line 404, ../sass/partials/_navigation.scss */
.close_dialog::after {
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
/* line 407, ../sass/partials/_navigation.scss */
.close_dialog:hover, .close_dialog:focus {
  opacity: .5;
}

/* line 413, ../sass/partials/_navigation.scss */
.cls_lg {
  width: 48px;
  height: 48px;
}
/* line 417, ../sass/partials/_navigation.scss */
.cls_lg::before, .cls_lg::after {
  height: 24px;
  margin-top: -12px;
}

.fade{
    transition: opacity .15s linear;
}
</style>