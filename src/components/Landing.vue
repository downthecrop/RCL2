<template>
  <div class="overflow-hidden">
    <!-- Header -->
    <header class="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm py-3 md:py-0">
      <nav class="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8" aria-label="Global">
        <div class="relative md:flex md:items-center md:justify-between">
          <div class="flex items-center justify-between">
            <a class="flex-none p-2 text-xl font-semibold tracking-wider text-white uppercase" href="#">
              RCL2
            </a>

            <div class="md:hidden">
              <button type="button"
                class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-violet-900 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation">
                <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                  viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
                <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
                  viewBox="0 0 16 16">
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>

          <div id="navbar-collapse-with-animation"
            class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
            <div class="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
              <div
                class="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
                <a class="font-medium text-gray-600 hover:text-gray-500 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                  href="#" aria-current="page">
                  GitHub
                </a>

                <a class="font-medium text-gray-600 hover:text-gray-500 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                  href="#">
                  Dashboard
                </a>

                <div
                  class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
                  <button type="button"
                    class="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <!-- End Header -->

    <!-- Hero -->
    <div class="relative">
      <!-- Gradients -->
      <div aria-hidden="true" class="flex absolute -top-48 left-0 -z-[1] pointer-events-none">
        <div class="bg-green-200 opacity-30 blur-3xl w-[1036px] h-[600px] dark:bg-green-900 dark:opacity-20"></div>
        <div class="bg-slate-200 opacity-90 blur-3xl w-[577px] h-[300px] transform translate-y-32 dark:bg-slate-800/60">
        </div>
      </div>
      <!-- End Gradients -->

      <div class="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto"
        style="background-image: url(./hyperdrive-dark.svg);  background-repeat: no-repeat; background-size: contain, cover;">
        <!-- ========== END HEADER ========== -->

        <!-- ========== MAIN CONTENT ========== -->
        <main id="content" role="main">
          <div class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <img src="rcl.svg" width="100">
          </div>
          <div class="text-center py-10 px-4 sm:px-6 lg:px-8">
            <h1 class="block text-2xl font-bold text-white sm:text-4xl">Right Click List 2</h1>
            <p class="mt-3 text-lg text-gray-300">Online bookmarks and link sharing without needing to login.</p>
            <div class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
              <a class="w-full sm:w-auto inline-flex justify-center items-center gap-x-3.5 text-center bg-white shadow-sm text-sm font-medium rounded-md hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition py-3 px-4"
                href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html" target="_blank">
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  viewBox="0 0 16 16">
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                Get the source code
              </a>
              <a class="w-full sm:w-auto inline-flex justify-center items-center gap-x-3.5 text-center border border-2 border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-300 hover:text-white hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition py-3 px-4"
                href="../examples.html">
                <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
                Back to examples
              </a>
            </div>
          </div>
        </main>

        <!-- End Grid -->

        <!-- Title -->
        <div class="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mt-10 md:mt-14 mb-6 lg:mt-24">
          <h2 class="text-gray-600 dark:text-gray-400">Built using only Open Source Technology
          </h2>
        </div>
        <!-- End Title -->

        <!-- Clients -->
        <div class="flex justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24">
          <img class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500"
            src="supabase-logo-wordmark--dark.svg" />

          <img class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500" src="vuejs-ar21.svg" />

          <img class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500"
            src="tailwindcss-logotype-white.svg">

          <img class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500" src="preline.svg">
        </div>
        <!-- End Clients -->
      </div>
      <!-- This is where the circles were -->
    </div>
    <!-- End Hero -->
  </div>

  <!-- Icon Blocks -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-3 xl:gap-6">
      <!-- Card -->
      <a class="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-white/[.075]"
        href="#">
        <span class="icon-wrapper flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6 dark:text-gray-200">
          <i class="fa fa-user-secret custom-fa-size" aria-hidden="true"></i>
        </span>

        <div>
          <div>
            <h3 class="block font-bold text-gray-800 dark:text-white">Anonymous Links</h3>
            <p class="text-gray-600 dark:text-gray-400">If you have ever been on another computer and wanted to send
              yourself a link for later RCL2 is a perfect solution. Simply send the link anonymously to your profile to
              later.</p>
          </div>
        </div>
      </a>
      <!-- End Card -->

      <!-- Card -->
      <a class="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-white/[.075]"
        href="#">
        <span class="icon-wrapper flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6 dark:text-gray-200">
          <i class="fa fa-solid fa-puzzle-piece custom-fa-size" aria-hidden="true"></i>
        </span>

        <div>
          <div>
            <h3 class="block font-bold text-gray-800 dark:text-white">Chrome Extension Integration</h3>
            <p class="text-gray-600 dark:text-gray-400">The legacy of the original RCL lives on with the official Right
              Click List Chrome extension. Rightclick any webpage, image, or anything at all to save it to your RCL2
              profile for future reference.</p>
          </div>
        </div>
      </a>
      <!-- End Card -->

      <!-- Card -->
      <a class="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-white/[.075]"
        href="#">
        <span class="icon-wrapper flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6 dark:text-gray-200">
          <i class="fa fa-solid fa-server custom-fa-size" aria-hidden="true"></i>
        </span>

        <div>
          <div>
            <h3 class="block font-bold text-gray-800 dark:text-white">Open Source and Self Host-able</h3>
            <p class="text-gray-600 dark:text-gray-400">RCL2 is Open Source under the MIT license and can be used for any
              and all purposes. Note: This public instance has the right to terminate profiles at any time. If you'd
              rather play by your own rules self hosting instructions can be found here!</p>
          </div>
        </div>
      </a>
      <!-- End Card -->
    </div>
  </div>
  <!-- End Icon Blocks -->

  <!-- FAQ -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Grid -->
    <div class="grid md:grid-cols-6 gap-6">
      <div class="md:col-span-2">
        <div class="max-w-xs">
          <h2 class="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">Frequently<br>asked questions</h2>
          <p class="mt-1 hidden md:block text-gray-600 dark:text-gray-400">Answers to the most frequently asked questions.
          </p>
        </div>
      </div>
      <!-- End Col -->

      <div class="md:col-span-4">
        <!-- Accordion -->
        <div class="hs-accordion-group divide-y divide-gray-200 dark:divide-gray-700">
          <div class="hs-accordion pb-3 active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
            <button
              class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
              What can I use RCL2 for?
              <svg
                class="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" />
              </svg>
              <svg
                class="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-one"
              class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
              <div class="pr-8">
                <p class="text-gray-600 dark:text-gray-400">
                  This public instance allows anyone to sign up and use our service as a anonymous persistent bookmark and
                  link sharing database. Primary usecases are think like quickly saving a pastebin url from a school
                  computer for later
                </p>
              </div>
            </div>
          </div>

          <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-two">
            <button
              class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
              Is the Chrome Extensions available for private instances?
              <svg
                class="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" />
              </svg>
              <svg
                class="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-two"
              class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
              <div class="pr-8">
                <p class="text-gray-600 dark:text-gray-400">
                  Although there is no built-in configuration for selecting a server url this instance uses the exact same
                  source code that is available on GitHub. You are welcome to edit the url and bundle yourself a custom
                  extension!
                </p>
              </div>
            </div>
          </div>

          <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-three">
            <button
              class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
              What are Private Links
              <svg
                class="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" />
              </svg>
              <svg
                class="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-three"
              class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
              <div class="pr-8">
                <p class="text-gray-600 dark:text-gray-400">
                  Private links are not visible to anyone except you. They will not be displayed on your profile. Verified
                  links can be switched from public to private at any time by using the edit function of the dashboard.
                </p>
              </div>
            </div>
          </div>

          <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-four">
            <button
              class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
              Are any third-party services required?
              <svg
                class="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" />
              </svg>
              <svg
                class="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-four"
              class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
              <div class="pr-8">
                <p class="text-gray-600 dark:text-gray-400">
                  Currently RCL2 only allows logins using the OAuth2 Standard. And at that are limited to those services
                  that are common for the demographic that RCL2 would attract. Favicons are fetched using a Google API can
                  can be disabled in the Vite build settings.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- End Accordion -->
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->
  </div>
  <!-- End FAQ -->

  <footer>
    <div class="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-center">
        <div>
        </div>
        <!-- End Col -->

        <ul class="text-center">
          <li
            class="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
            <a class="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
              href="#">
              GitHub
            </a>
          </li>
          <li
            class="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
            <a class="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
              href="#">
              Dashboard
            </a>
          </li>
          <li
            class="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
            <a class="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
              href="#">
              Login
            </a>
          </li>
        </ul>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </div>
  </footer>
</template>

<script setup>
import { useAuthStore } from '../store/authStore'
import router from '../router/index'

const authStore = useAuthStore();
if(() => authStore.user != null){
  // We're already logged in, redirecting...
  router.push('/dashboard')
}


</script>

<style>
.circle-container {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.custom-fa-size {
  font-size: 32px;
  /* Set to the size you want */
}

.custom-svg-size {
  width: 32px;
  /* Set to the size you want */
  height: 32px;
  /* Set to the size you want */
}

.circle {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 2px dashed violet;
  border-radius: 50%;
  opacity: 1;
  transform: translate(-50%, -50%);
  animation: expandAndFade 10s infinite;
}

.circle:nth-child(2) {
  animation-delay: 0.75s;
}

.circle:nth-child(3) {
  animation-delay: 1.5s;
}

.circle:nth-child(4) {
  animation-delay: 2.25s;
}

@keyframes expandAndFade {
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }

  100% {
    width: 1000px;
    height: 1000px;
    opacity: 0;
  }
}
</style>