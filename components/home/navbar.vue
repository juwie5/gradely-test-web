<template>
  <nav class="hidden lg:block w-full bg-white fixed top-0 z-10 drop-shadow-md">
    <div class="container flex justify-between py-5 items-center">
      <div>
        <NuxtLink :to="urls.home">
          <NuxtImg src="/img/logo.svg" alt="Gradely logo" class="w-32" />
        </NuxtLink>
      </div>
      <div class="flex items-center justify-center gap-8">
        <div class="dropdown">
          <NuxtLink 
            class="flex gap-2 items-center text-[#757575] text-sm font-bold hover:text-[#113255]">
            Parents
            <NuxtIcon name="arrow-down-line" class="pt-1" />
          </NuxtLink>
          <div class="dropdown-content">
            <li class="flex flex-col">
              <NuxtLink :to="urls.parents" class="text-[#113255] text-sm font-medium">Learn</NuxtLink>
              <NuxtLink :to="urls.parents" class="text-xs font-light text-[#757575]">Personalized learning with videos & Quizzes</NuxtLink>
            </li>
            <li class="flex flex-col">
              <NuxtLink :to="urls.tutoring" class="text-[#113255] text-sm font-medium">Online Tutoring</NuxtLink>
              <NuxtLink :to="urls.tutoring" class="text-xs font-light text-[#757575]">Hire an experienced Gradely tutor</NuxtLink>
            </li>
            <li class="flex flex-col">
              <NuxtLink :to="urls.exams" class="text-[#113255] text-sm font-medium">Exam Prep</NuxtLink>
              <NuxtLink :to="urls.exams" class="text-xs font-light text-[#757575]">Prepare & Track your exam readiness</NuxtLink>
            </li>
            <li class="flex flex-col">
              <NuxtLink :to="urls.coding" class="text-[#113255] text-sm font-medium">Coding School</NuxtLink>
              <NuxtLink :to="urls.coding" class="text-xs font-light text-[#757575]">Learn to code in a fun way</NuxtLink>
            </li>
          </div>
        </div>
        <NuxtLink :to="urls.schools"
          class="text-[#757575] text-sm font-bold cursor-pointer py-2.5 px-[18px] hover:bg-[#DBF5F8] hover:rounded-[25px] hover:text-[#113255] w-1/2">
          Schools
        </NuxtLink>
        <NuxtLink :to="urls.teacher"
          class="text-[#757575] text-sm font-bold cursor-pointer hover:bg-[#DBF5F8] py-2.5 px-[18px] hover:rounded-[25px] hover:text-[#113255] w-1/2">
          Teachers
        </NuxtLink>
        <div class="dropdown">
          <NuxtLink class="flex gap-2 items-center text-[#757575] text-sm font-bold hover:text-[#113255]">
            Resources
            <NuxtIcon name="arrow-down-line" class="pt-1" />
          </NuxtLink>
          <div class="dropdown-content">
            <li  class="flex flex-col">
              <NuxtLink :to="urls.about" class="text-[#113255] text-sm font-medium">About Us</NuxtLink>
              <NuxtLink :to="urls.about" class="text-xs font-light text-[#757575]">Learn more about us, our Mission & Vision</NuxtLink>
            </li>
            <li  class="flex flex-col">
              <NuxtLink :to="urls.blog"  target="_blank" class="text-[#113255] text-sm font-medium">Blog</NuxtLink>
              <NuxtLink :to="urls.blog"  target="_blank" class="text-xs font-light text-[#757575]">Read about latest trends in education</NuxtLink>
            </li>
            <li  class="flex flex-col">
              <NuxtLink :to="urls.help" class="text-[#113255] text-sm font-medium">Help Center</NuxtLink>
              <NuxtLink :to="urls.help"  class="text-xs font-light text-[#757575]">Find help on how to use Gradely</NuxtLink>
            </li>

          </div>
        </div>
      </div>

      <div class="flex gap-3">
        <NuxtLink :to="urls.start_learning">
          <UiButton outline class="hidden lg:inline-block">
            Start learning
          </UiButton>
        </NuxtLink>
        <NuxtLink :to="urls.login">
          <UiButton secondary>
            Log In
          </UiButton>
        </NuxtLink>
        <div class="lg:hidden">
          <div v-if="open" class="flex flex-col items-center">
            <NuxtImg src="/img/List.svg" class="w-7" />
            <p class="text-[9px] text-[#555555]">Menu</p>
          </div>
          <div v-else class="flex flex-col items-center">
            <NuxtImg src="/img/close-fill.svg" class="w-7" />
            <p class="text-[9px] text-[#555555]">Close</p>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <nav class="lg:hidden w-full fixed bg-white  top-0 z-10 drop-shadow-md">
    <div class="container flex justify-between py-5 items-center">
      <div>
        <NuxtLink :to="urls.home">
          <NuxtImg src="/img/logo.svg" alt="Gradely logo" class="w-32" />
        </NuxtLink>
      </div>
      <div class="flex gap-3">
        <NuxtLink :to="urls.start_learning">
          <UiButton outline class="hidden lg:inline-block">
            Start learning
          </UiButton>
        </NuxtLink>
        <NuxtLink :to="urls.login">
          <UiButton secondary>
            Log In
          </UiButton>
        </NuxtLink>
        <div class="lg:hidden">
          <div v-if="open" class="flex flex-col items-center" @click="open = !open">
            <NuxtImg src="/img/List.svg" class="w-7" />
            <p class="text-[9px] text-[#555555]">Menu</p>
          </div>
          <div v-else class="flex flex-col items-center" @click="open = !open">
            <NuxtImg src="/img/close-fill.svg" class="w-7" />
            <p class="text-[9px] text-[#555555]">Close</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!open" class="bg-white h-screen h-max w-full">
      <div class="flex flex-col items-center justify-between gap-6 py-9 px-7">
        <div class="flex gap-2.5" @click="handleActiveTab(0)">
          <NuxtLink 
          class="flex gap-2 items-center text-[#757575] text-sm font-bold hover:text-[#113255]">
          Parents
          </NuxtLink>
         <NuxtIcon name="arrow-down-line" class="pt-1"  />
        </div>
       
        <div v-if="show" class="flex items-center justify-center flex-col gap-4">
          <div class="">
            <NuxtLink :to="urls.parents" class="text-[#113255] text-sm font-medium">Learn</NuxtLink>
          </div>
          <div class="py-2">
            <NuxtLink :to="urls.tutoring" class="text-[#113255] text-sm font-medium">Online Tutoring</NuxtLink>
          </div>
          <div class="">
            <NuxtLink :to="urls.exams" class="text-[#113255] text-sm font-medium">Exam Prep</NuxtLink>
          </div>
          <div class="py-2">
            <NuxtLink :to="urls.summer_school" class="text-[#113255] text-sm font-medium py-2">Coding School
            </NuxtLink>
          </div>
        </div>
        <NuxtLink :to="urls.schools"
          class="text-[#757575] text-sm font-bold cursor-pointer hover:bg-[#DBF5F8] hover:py-2.5 hover:px-[18px] hover:rounded-[25px] hover:text-[#113255]">
          Schools
        </NuxtLink>
        <NuxtLink :to="urls.teacher"
          class="text-[#757575] text-sm font-bold cursor-pointer hover:bg-[#DBF5F8] hover:py-2.5 hover:px-[18px] hover:rounded-[25px] hover:text-[#113255]">
          Teachers
        </NuxtLink>
        <div class="flex gap-2.5" @click="handleActiveTab(1)" >
            <NuxtLink class="flex gap-2 items-center text-[#757575] text-sm font-bold hover:text-[#113255]">
            Resources 
          </NuxtLink>
          <NuxtIcon name="arrow-down-line" class="pt-1" />
        </div>
        
        <div v-if="show1"  class="flex items-center justify-center flex-col gap-4">
          <div class="">
            <NuxtLink :to="urls.about" class="text-[#113255] text-sm font-medium">About Us</NuxtLink>
          </div>
          <div class="py-2">
            <NuxtLink :to="urls.blog" target="_blank" class="text-[#113255] text-sm font-medium">Blog</NuxtLink>
          </div>
          <div class="">
            <NuxtLink :to="urls.help" class="text-[#113255] text-sm font-medium">Help Center</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>

</template>

<script setup>
import { urls } from "~/assets/urls";
import { ref } from 'vue';

let open = ref(true);

let activeTab = ref(null);
let show = ref(false)
let show1 = ref(false)

const handleActiveTab = (item) => {
  activeTab.value = Number(item);
  if (item === 0) {
    show.value = !show.value
  }
  if (item === 1) {
    show1.value = !show1.value
  }
}
</script>

<style>
.dropdown {
  width: 50%;
  cursor: pointer;
  padding: 10px 18px;

}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  /* padding: 25px; */
  min-width: 240px;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.15);
  z-index: 1;
  border-radius: 10px;
}

.dropdown:hover{
  background-color: #DBF5F8;
}

.dropdown-content li {
  text-decoration: none;
  list-style: none;
  padding: 15px;
}

.dropdown-content li:hover{
  background-color: #DBF5F8;
}

.dropdown-content li:nth-child(1):hover{
  border-radius: 10px 10px 0 0;
}

.dropdown-content li:nth-last-child(1):hover{
  border-radius: 0 0 10px 10px;
}

.dropdown:hover {
  background-color: #DBF5F8;
  border-radius: 25px;
  color: #113255;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>