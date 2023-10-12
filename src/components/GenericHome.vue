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
                  Landing
                </a>

                <a class="font-medium text-gray-600 hover:text-gray-500 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                  href="#">
                  Company
                </a>

                <div
                  class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
                  <button type="button"
                    class="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500">
                    Login
                    <svg class="ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    </svg>
                  </button>

                  <div
                    class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full left-0 min-w-[15rem] bg-white md:shadow-2xl rounded-lg py-2 md:p-4 dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:left-0 before:w-full before:h-5">
                    <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div class="flex flex-col mx-1 md:mx-0">
                        <a class="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900"
                          href="#">
                          <svg class="flex-shrink-0 w-6 h-6 mt-1" xmlns="http://www.w3.org/2000/svg" width="16"
                            height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path
                              d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                          </svg>
                          <div class="grow">
                            <p class="font-medium text-gray-800 dark:text-gray-200">Support Docs</p>
                            <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                              Explore advice and explanations for all of Preline's features.</p>
                          </div>
                        </a>

                        <a class="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900"
                          href="#">
                          <svg class="flex-shrink-0 w-6 h-6 mt-1" xmlns="http://www.w3.org/2000/svg" width="16"
                            height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path
                              d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
                          </svg>
                          <div class="grow">
                            <p class="font-medium text-gray-800 dark:text-gray-200">Integrations</p>
                            <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                              Discover the huge range of tools that Preline integrates with.</p>
                          </div>
                        </a>

                        <a class="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900"
                          href="#">
                          <svg class="flex-shrink-0 w-6 h-6 mt-1" xmlns="http://www.w3.org/2000/svg" width="16"
                            height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path
                              d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                            <path
                              d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z" />
                          </svg>
                          <div class="grow">
                            <p class="font-medium text-gray-800 dark:text-gray-200">API Reference</p>
                            <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                              Build custom integrations with our first-class API.</p>
                          </div>
                        </a>
                      </div>

                      <div class="flex flex-col mx-1 md:mx-0">
                        <a class="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900"
                          href="#">
                          <svg class="flex-shrink-0 w-6 h-6 mt-1" xmlns="http://www.w3.org/2000/svg" width="16"
                            height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path
                              d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                          </svg>
                          <div class="grow">
                            <p class="font-medium text-gray-800 dark:text-gray-200">Help Center</p>
                            <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                              Learn how to install, set up, and use Preline.</p>
                          </div>
                        </a>

                        <a class="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900"
                          href="#">
                          <svg class="flex-shrink-0 w-6 h-6 mt-1" xmlns="http://www.w3.org/2000/svg" width="16"
                            height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path
                              d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
                          </svg>
                          <div class="grow">
                            <p class="font-medium text-gray-800 dark:text-gray-200">Developer Hub</p>
                            <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                              Learn how to integrate or build on top of Preline.</p>
                          </div>
                        </a>

                        <a class="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900"
                          href="#">
                          <svg class="flex-shrink-0 w-6 h-6 mt-1" xmlns="http://www.w3.org/2000/svg" width="16"
                            height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path
                              d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                          </svg>
                          <div class="grow">
                            <p class="font-medium text-gray-800 dark:text-gray-200">Community Forum</p>
                            <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                              Learn, share, and connect with other Preline users.</p>
                          </div>
                        </a>
                      </div>

                      <div class="flex flex-col pt-4 md:pt-0 mx-1 md:mx-0">
                        <span class="text-sm font-semibold uppercase text-gray-800 dark:text-gray-200">Customer
                          stories</span>

                        <a class="mt-4 group flex gap-x-5 items-center" href="#">
                          <img class="w-32 h-32 rounded-lg"
                            src="https://images.unsplash.com/photo-1648737967328-690548aec14f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                            alt="Image Description">
                          <div class="grow">
                            <p class="text-gray-800 dark:text-gray-200">Preline Projects has proved to be most efficient
                              cloud based project tracking and bug tracking tool.</p>
                            <p
                              class="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                              Learn more
                              <svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16"
                                height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                                  fill="currentColor" />
                              </svg>
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
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
      <div aria-hidden="true" class="flex absolute -top-48 left-0 -z-[1]">
        <div class="bg-green-200 opacity-30 blur-3xl w-[1036px] h-[600px] dark:bg-green-900 dark:opacity-20"></div>
        <div class="bg-slate-200 opacity-90 blur-3xl w-[577px] h-[300px] transform translate-y-32 dark:bg-slate-800/60">
        </div>
      </div>
      <!-- End Gradients -->

      <div class="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto" style="background-image: url(https://preline.co/assets/svg/component/hyperdrive-dark.svg);  background-repeat: no-repeat; background-size: contain, cover;">
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
          <svg class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500"
            enable-background="new 0 0 2499 614" viewBox="0 0 2499 614" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m431.7 0h-235.5v317.8h317.8v-235.5c0-45.6-36.7-82.3-82.3-82.3zm-308.9 0h-40.5c-45.6 0-82.3 36.7-82.3 82.3v40.5h122.8zm-122.8 196.2h122.8v122.8h-122.8zm392.5 317.8h40.5c45.6 0 82.3-36.7 82.3-82.3v-39.2h-122.8zm-196.3-121.5h122.8v122.8h-122.8zm-196.2 0v40.5c0 45.6 36.7 82.3 82.3 82.3h40.5v-122.8zm828-359.6h-48.1v449.4h254.5v-43h-206.4zm360.8 119c-93.7 0-159.5 69.6-159.5 169.6v11.5c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-21.5-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h243.1v-2.5s1.3-15.2 1.3-22.8c-.3-91.2-53.4-149.5-134.4-149.5zm-108.9 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm521.6-96.2v16.5c-20.3-34.2-58.2-55.7-97.5-55.7h-3.8c-86.1 0-145.6 68.4-145.6 168.4 0 101.3 57 169.6 141.8 169.6 67.1 0 97.5-40.5 107.6-58.2v49.4h45.6v-447h-46.8v157zm-98.8 257c-59.5 0-98.7-50.6-98.7-126.6 0-73.4 41.8-125.3 100-125.3 49.4 0 98.7 39.2 98.7 125.3 0 93.7-51.9 126.6-100 126.6zm424.1-250.7v2.5c-8.9-15.2-36.7-48.1-103.8-48.1-84.8 0-140.5 64.6-140.5 163.3s58.2 165.8 144.3 165.8c46.8 0 78.5-16.5 100-50.6v44.3c0 62-39.2 97.5-108.9 97.5-29.1 0-59.5-7.6-86.1-21.5l-2.5-1.3-17.7 39.2 2.5 1.3c32.9 16.5 69.6 25.3 105.1 25.3 74.7 0 154.4-38 154.4-143.1v-311.3h-46.8zm-93.7 241.8c-62 0-102.5-48.1-102.5-122.8 0-76 35.4-119 96.2-119 67.1 0 98.7 39.2 98.7 119 1.3 78.5-31.6 122.8-92.4 122.8zm331.7-286.1c-93.7 0-158.2 69.6-158.2 168.4v11.4c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-22.8-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h244.2v-2.5s1.3-15.2 1.3-22.8c0-89.9-53.2-148.2-135.5-148.2zm-107.6 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm440.6-127.9c-6.3-1.3-11.4-1.3-17.7-2.5-44.3 0-81 27.9-100 74.7v-72.2h-46.8l1.3 320.3v2.5h48.1v-135.4c0-20.3 2.5-41.8 8.9-60.8 15.2-49.4 49.4-81 89.9-81 5.1 0 10.1 0 15.2 1.3h2.5v-46.8z"
              fill="currentColor" />
          </svg>

          <svg class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-4.126838974812941 0.900767442746961 939.436838974813 230.18142889845947" width="2500" height="607">
            <path
              d="M667.21 90.58c-13.76 0-23.58 4.7-28.4 13.6l-2.59 4.82V92.9h-22.39v97.86h23.55v-58.22c0-13.91 7.56-21.89 20.73-21.89 12.56 0 19.76 7.77 19.76 21.31v58.8h23.56v-63c0-23.3-12.79-37.18-34.22-37.18zm-114.21 0c-27.79 0-45 17.34-45 45.25v13.74c0 26.84 17.41 43.51 45.44 43.51 18.75 0 31.89-6.87 40.16-21l-14.6-8.4c-6.11 8.15-15.87 13.2-25.55 13.2-14.19 0-22.66-8.76-22.66-23.44v-3.89h65.73v-16.23c0-26-17.07-42.74-43.5-42.74zm22.09 43.15h-44.38v-2.35c0-16.11 7.91-25 22.27-25 13.83 0 22.09 8.76 22.09 23.44zm360.22-56.94V58.07h-81.46v18.72h28.56V172h-28.56v18.72h81.46V172h-28.57V76.79zM317.65 55.37c-36.38 0-59 22.67-59 59.18v19.74c0 36.5 22.61 59.18 59 59.18s59-22.68 59-59.18v-19.74c-.01-36.55-22.65-59.18-59-59.18zm34.66 80.27c0 24.24-12.63 38.14-34.66 38.14S283 159.88 283 135.64v-22.45c0-24.24 12.64-38.14 34.66-38.14s34.66 13.9 34.66 38.14zm98.31-45.06c-12.36 0-23.06 5.12-28.64 13.69l-2.53 3.9V92.9h-22.4v131.53h23.56v-47.64l2.52 3.74c5.3 7.86 15.65 12.55 27.69 12.55 20.31 0 40.8-13.27 40.8-42.93v-16.64c0-21.37-12.63-42.93-41-42.93zM468.06 149c0 15.77-9.2 25.57-24 25.57-13.8 0-23.43-10.36-23.43-25.18v-14.72c0-15 9.71-25.56 23.63-25.56 14.69 0 23.82 9.79 23.82 25.56zm298.47-90.92L719 190.76h23.93l9.1-28.44h54.64l.09.28 9 28.16h23.92L792.07 58.07zm-8.66 85.53l21.44-67.08 21.22 67.08zM212.59 95.12a57.27 57.27 0 0 0-4.92-47.05 58 58 0 0 0-62.4-27.79A57.29 57.29 0 0 0 102.06 1a57.94 57.94 0 0 0-55.27 40.14A57.31 57.31 0 0 0 8.5 68.93a58 58 0 0 0 7.13 67.94 57.31 57.31 0 0 0 4.92 47A58 58 0 0 0 83 211.72 57.31 57.31 0 0 0 126.16 231a57.94 57.94 0 0 0 55.27-40.14 57.3 57.3 0 0 0 38.28-27.79 57.92 57.92 0 0 0-7.12-67.95zM126.16 216a42.93 42.93 0 0 1-27.58-10c.34-.19 1-.52 1.38-.77l45.8-26.44a7.43 7.43 0 0 0 3.76-6.51V107.7l19.35 11.17a.67.67 0 0 1 .38.54v53.45A43.14 43.14 0 0 1 126.16 216zm-92.59-39.54a43 43 0 0 1-5.15-28.88c.34.21.94.57 1.36.81l45.81 26.45a7.44 7.44 0 0 0 7.52 0L139 142.52v22.34a.67.67 0 0 1-.27.6l-46.3 26.72a43.14 43.14 0 0 1-58.86-15.77zm-12-100A42.92 42.92 0 0 1 44 57.56V112a7.45 7.45 0 0 0 3.76 6.51l55.9 32.28L84.24 162a.68.68 0 0 1-.65.06L37.3 135.33a43.13 43.13 0 0 1-15.77-58.87zm159 37l-55.9-32.28L144 70a.69.69 0 0 1 .65-.06l46.29 26.73a43.1 43.1 0 0 1-6.66 77.76V120a7.44 7.44 0 0 0-3.74-6.54zm19.27-29c-.34-.21-.94-.57-1.36-.81L152.67 57.2a7.44 7.44 0 0 0-7.52 0l-55.9 32.27V67.14a.73.73 0 0 1 .28-.6l46.29-26.72a43.1 43.1 0 0 1 64 44.65zM78.7 124.3l-19.36-11.17a.73.73 0 0 1-.37-.54V59.14A43.09 43.09 0 0 1 129.64 26c-.34.19-.95.52-1.38.77l-45.8 26.44a7.45 7.45 0 0 0-3.76 6.51zm10.51-22.67l24.9-14.38L139 101.63v28.74l-24.9 14.38-24.9-14.38z"
              fill="currentColor" />
          </svg>

          <svg class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500" fill="none"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2428 1002">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M311.5 389.8h191.8l67 117.5 77.8-117.5h178.3L682.7 590.7l154 220.7H648.1l-77.8-135.8-91.7 135.8h-175l153.2-220.7-145.3-200.9Z"
              fill="currentColor" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M1279.3 640.7H955.4c2.9 26 10 45.2 21 58a76.5 76.5 0 0 0 61.1 27.3c16 0 31.5-4 45.3-12 8.8-5 18.2-13.7 28.2-26.5l159.2 14.7c-24.4 42.4-53.7 72.7-88 91.2-34.5 18.2-83.8 27.5-148.2 27.5-55.8 0-99.7-7.9-131.8-23.6a193.2 193.2 0 0 1-79.6-75c-21-34.4-31.6-74.6-31.6-121 0-65.8 21.2-119.2 63.3-159.8 42.3-40.8 100.6-61.3 175-61.3 60.3 0 108 9.2 142.8 27.5a184 184 0 0 1 79.8 79.3c18.3 34.7 27.4 79.8 27.4 135.3v18.4ZM1115 563.3c-3.2-31.3-11.6-53.7-25.2-67.1a73.1 73.1 0 0 0-53.8-20.3 73.6 73.6 0 0 0-61.6 30.6c-9.7 12.7-16 31.6-18.5 56.8H1115Zm137-173.5h168.3l81.9 267.1 84.5-267H1750l-179.1 421.5h-143.3L1252 389.8Zm463.2 212c0-64.3 21.7-117.4 65-159 43.5-41.7 102-62.6 176-62.6 84.4 0 148.2 24.5 191.3 73.5 34.6 39.4 52 88 52 145.8 0 64.7-21.5 117.8-64.5 159.3-43 41.3-102.4 62-178.5 62-67.7 0-122.5-17.1-164.3-51.5-51.4-42.6-77-98.4-77-167.6Zm162-.5c0 37.7 7.5 65.5 22.8 83.4a72 72 0 0 0 57.3 27.1c23.4 0 42.5-9 57.4-26.7 15-17.8 22.5-46 22.5-85.4 0-36.4-7.6-63.7-22.7-81.5a70.5 70.5 0 0 0-56-26.7c-23.5 0-43 9-58.3 27-15.4 18.2-23 45.9-23 82.8ZM2363.1.1a64 64 0 0 1 0 127.9 64 64 0 0 1 0-128Z"
              fill="currentColor" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M1912.1 671.5c220.3-135 326.4-327 334-419.2 8.7-106.7-71-235.9-358.9-238-345 3.6-790 158.3-1163.6 360.4h138c315.8-152.6 672-266.2 1000.8-275.2 287.7-7.8 304.4 149.2 302 199-3.6 71-74.7 234.5-252.3 373Zm-1315.7-222-36 22.7 10 17.5 26-40.1ZM419.8 567.5C212 717 57 873.2.8 1001.9 77.8 897.1 217 771 394.9 647l40.4-58.1-15.5-21.4Z"
              fill="currentColor" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M2036.3 580a819.8 819.8 0 0 0 114.2-122.8l-3-3.5c-8-9.2-17-17.5-26.5-25-21 39.8-50 83.7-88.2 128.3 1.6 7 2.8 14.7 3.5 23Z"
              fill="currentColor" />
          </svg>

          <svg class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500"
            viewBox="0 -8.881784197001252e-16 267.51517722360785 65.24679557585003" xmlns="http://www.w3.org/2000/svg"
            width="2500" height="610">
            <path
              d="M263.043 56.411a4.418 4.418 0 1 0 .085 0zm0 8.33a3.874 3.874 0 1 1 3.809-3.938v.065a3.791 3.791 0 0 1-3.708 3.871h-.1m-16.96-9.535h-9.6V40.17c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6V24.287h9.216v4.225h.129a10.1 10.1 0 0 1 9.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 1 1 5.57-5.572 5.571 5.571 0 0 1-5.57 5.572m4.8 35.143h-9.61V24.287h9.61zM250.87.004h-55.21a4.728 4.728 0 0 0-4.781 4.67v55.439a4.731 4.731 0 0 0 4.781 4.675h55.21a4.741 4.741 0 0 0 4.8-4.675V4.67a4.738 4.738 0 0 0-4.8-4.67m-86.12 31.749c-4.8 0-7.68 3.205-7.68 7.875s2.879 7.878 7.68 7.878 7.687-3.2 7.687-7.878-2.881-7.875-7.687-7.875m16.525 23.437h-8.838v-4.1h-.131a12.071 12.071 0 0 1-9.544 4.868c-9.224 0-15.3-6.657-15.3-16.071 0-8.646 5.377-16.585 14.216-16.585 3.973 0 7.684 1.087 9.861 4.1h.126V9.577h9.609zm-46.139-19.048a5.756 5.756 0 0 0-5.894-5.89 6.406 6.406 0 0 0-6.784 5.89zm8.132 13.7a16.909 16.909 0 0 1-13.128 6.151c-9.6 0-17.286-6.408-17.286-16.331s7.685-16.328 17.286-16.328c8.973 0 14.6 6.4 14.6 16.328v3.01h-22.282a7.171 7.171 0 0 0 7.235 6.019 8.193 8.193 0 0 0 6.851-3.778zM47.834 24.279h9.219v4.225h.131a10.085 10.085 0 0 1 9.09-4.994c9.735 0 11.527 6.405 11.527 14.726V55.19h-9.6V40.159c0-3.588-.066-8.2-5-8.2-4.99 0-5.76 3.907-5.76 7.939v15.288h-9.6zM82.669 9.58h9.6v27.265l10.88-12.583h11.77l-12.6 14.313 12.335 16.63h-12.066L92.397 39.923h-.126v15.28h-9.6zM32.911 24.276h9.6v30.916h-9.6zm4.8-15.37a5.569 5.569 0 1 1-5.57 5.569 5.569 5.569 0 0 1 5.57-5.569M0 9.587h9.993v36.4h18.5v9.222H0zm263.744 51.522a1.2 1.2 0 0 0 1.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836"
              fill="currentColor" />
          </svg>
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
    <a class="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-white/[.075]" href="#">
      <svg class="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
      </svg>

      <div>
        <div>
          <h3 class="block font-bold text-gray-800 dark:text-white">Build your portfolio</h3>
          <p class="text-gray-600 dark:text-gray-400">The simplest way to keep your portfolio always up-to-date.</p>
        </div>

        <p class="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
          Learn more
          <svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
          </svg>
        </p>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a class="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-white/[.075]" href="#">
      <svg class="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .447.276L8.81 1h4.69A1.5 1.5 0 0 1 15 2.5V11h.5a.5.5 0 0 1 0 1h-2.86l.845 3.379a.5.5 0 0 1-.97.242L12.11 14H3.89l-.405 1.621a.5.5 0 0 1-.97-.242L3.36 12H.5a.5.5 0 0 1 0-1H1V2.5A1.5 1.5 0 0 1 2.5 1h4.691l.362-.724A.5.5 0 0 1 8 0ZM2 11h12V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V11Zm9.61 1H4.39l-.25 1h7.72l-.25-1Z"/>
      </svg>

      <div>
        <div>
          <h3 class="block font-bold text-gray-800 dark:text-white">Get freelance work</h3>
          <p class="text-gray-600 dark:text-gray-400">New design projects delivered to your inbox each morning.</p>
        </div>

        <p class="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
          Learn more
          <svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
          </svg>
        </p>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a class="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-white/[.075]" href="#">
      <svg class="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
      </svg>

      <div>
        <div>
          <h3 class="block font-bold text-gray-800 dark:text-white">Sell your goods</h3>
          <p class="text-gray-600 dark:text-gray-400">Get your goods in front of millions of potential customers with ease.</p>
        </div>

        <p class="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
          Learn more
          <svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
          </svg>
        </p>
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
              Can I cancel at anytime?
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
                  Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if
                  you will give us some feedback.
                </p>
              </div>
            </div>
          </div>

          <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-two">
            <button
              class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
              My team has credits. How do we use them?
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
                  Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and
                  dial in the details.
                </p>
              </div>
            </div>
          </div>

          <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-three">
            <button
              class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
              How does Preline's pricing work?
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
                  Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.
                </p>
              </div>
            </div>
          </div>

          <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-four">
            <button
              class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
              How secure is Preline?
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
                  Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping
                  the project in line to completion.
                </p>
              </div>
            </div>
          </div>

          <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-five">
            <button
              class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
              How do I get access to a theme I purchased?
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
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-five"
              class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
              <div class="pr-8">
                <p class="text-gray-600 dark:text-gray-400">
                  If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to
                  your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login
                  or can't remember the information, you can use our handy Redownload page, just remember to use the same
                  email you originally made your purchases with.
                </p>
              </div>
            </div>
          </div>

          <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-six">
            <button
              class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
              Upgrade License Type
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
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-six"
              class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
              <div class="pr-8">
                <p class="text-gray-600 dark:text-gray-400">
                  There may be times when you need to upgrade your license from the original type you purchased and we
                  have a solution that ensures you can apply your original purchase cost to the new license purchase.
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
        <a class="flex-none text-xl font-semibold text-black dark:text-white" href="#" aria-label="Brand">Brand</a>
      </div>
      <!-- End Col -->

      <ul class="text-center">
        <li class="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
          <a class="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200" href="#">
            About
          </a>
        </li>
        <li class="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
          <a class="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200" href="#">
            Services
          </a>
        </li>
        <li class="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
          <a class="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200" href="#">
            Blog
          </a>
        </li>
      </ul>
      <!-- End Col -->

      <!-- Social Brands -->
      <div class="md:text-right space-x-2">
        <a class="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900" href="#">
          <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
          </svg>
        </a>
        <a class="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900" href="#">
          <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
          </svg>
        </a>
        <a class="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900" href="#">
          <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
        <a class="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900" href="#">
          <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"/>
          </svg>
        </a>
      </div>
      <!-- End Social Brands -->
    </div>
    <!-- End Grid -->
  </div>
</footer>
</template>

<script>
</script>

<style>
.circle-container {
  position: relative;
  width: 100vw;
  height: 100vh;
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