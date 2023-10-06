<template>
    <div class="header relative items-center flex h-screen max-h-860-px scrollbg">
        <div class="container mx-auto items-center flex flex-wrap">
            <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                <div class="pt-32 sm:pt-0">
                    <h2 class="font-semibold text-4xl text-white">
                        RCL2 - A beautiful extension for Tailwind CSS.
                    </h2>
                    <p class="mt-4 text-lg leading-relaxed text-gray-400">
                        Vue Notus is Free and Open Source. It does not change any of the CSS from
                        <a href="https://tailwindcss.com/?ref=creativetim" class="text-blue-400 hover:text-blue-500"
                            target="_blank">
                            Tailwind CSS.
                        </a>
                        It features multiple HTML elements and it comes with dynamic components for ReactJS, Vue and
                        Angular.
                    </p>
                    <div class="mt-12">
                        <a href="#" target="_blank"
                            class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blue-500 hover:bg-blue-400 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                            Chrome Extension
                        </a>
                        <a href="#" target="_blank"
                            class="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-700 hover:bg-gray-500 active:bg-gray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                            Github
                        </a>
                    </div>
                </div>
            </div>
            <!-- SVG Logo -->
            <div class="absolute top-10 right-10 z-50 logo">
                </div>
        </div>
        <!-- Existing Image -->
        <img class="absolute top-0 b-auto right-0 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px" src="ypupFvV.png"
            alt="..." />
    </div>
</template>

<script setup>
document.addEventListener("DOMContentLoaded", function () {
    const paths = document.querySelectorAll("path");

    paths.forEach(path => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;

        // Trigger reflow
        void path.offsetWidth;

        // No need to add class here as animation is defined in CSS
    });
});
</script>

<style scoped>
.scrollbg {
    position: relative;
    background: linear-gradient(270deg, #1b3d74, #111827);
    background-size: 400% 400%;
    -webkit-animation: AnimationName 400s ease infinite;
    -moz-animation: AnimationName 400s ease infinite;
    animation: AnimationName 400s ease infinite;
    overflow: hidden;
}

#particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
}

@-webkit-keyframes AnimationName {
    0% {
        background-position: 0% 90%
    }

    50% {
        background-position: 100% 11%
    }

    100% {
        background-position: 0% 90%
    }
}

@-moz-keyframes AnimationName {
    0% {
        background-position: 0% 90%
    }

    50% {
        background-position: 100% 11%
    }

    100% {
        background-position: 0% 90%
    }
}

@keyframes AnimationName {
    0% {
        background-position: 0% 90%
    }

    50% {
        background-position: 100% 11%
    }

    100% {
        background-position: 0% 90%
    }
}

.logo {
    position: absolute;
    width: 200px;
    height: 200px;
    z-index: 50;
    top: 10px;
    right: 10px;
}

/* Media Query to adjust logo position */
@media (max-width: 768px) {
    .logo {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
    }
}

.container svg path {
    animation: dash 9s infinite linear;
}

.container {
    max-width: fit-content;
}

.container p {
    text-align: center;
}

@keyframes dash {
    0% {
        stroke-dashoffset: 50000;
    }

    100% {
        stroke-dashoffset: 0;
    }
}</style>
