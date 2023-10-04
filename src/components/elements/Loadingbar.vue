<template>
    <div class="container">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128.000000 128.000000" preserveAspectRatio="xMidYMid meet">
            <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="20" />
                    <feOffset dx="4" dy="4" result="offsetblur" />
                    <feFlood flood-color="black" result="color" />
                    <feComposite in2="offsetblur" operator="in" />
                    <feComposite in2="SourceAlpha" operator="in" />
                    <feMerge>
                        <feMergeNode in="SourceGraphic" />
                        <feMergeNode />
                    </feMerge>
                </filter>
            </defs>

            <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M767 1243 c-4 -3 -7 -46 -7 -94 l0 -87 81 -4 c73 -3 83 -6 104 -30
29 -34 40 -108 33 -227 -8 -140 -36 -171 -153 -171 l-65 0 0 -99 0 -98 68 -5
c128 -9 144 -35 150 -245 l4 -152 105 -3 c79 -2 107 0 110 10 3 7 3 83 1 170
-4 136 -7 164 -27 210 -22 48 -70 102 -103 115 -9 3 -6 10 12 23 95 69 115
129 115 334 -1 141 
-3 160 -24 208 -30 66 -96 126 -156 141 -47 12 -237 15
-248 4z" filter="url(#glow)" stroke="#fff" stroke-width="30" fill="none" />
                <path d="M299 1226 c-89 -32 -155 -93 -196 -183 -20 -43 -25 -71 -26 -151 l-2
-97 133 -3 132 -3 0 41 c0 44 14 80 36 93 11 6 14 43 14 162 l0 155 -27 0
c-16 -1 -44 -7 -64 -14z" stroke="#fff" stroke-width="30" fill="none" filter="url(#glow)" />

                <path d="M441 1091 c-2 -148 -1 -150 24 -175 19 -19 25 -35 25 -71 l0 -45 125
0 125 0 0 210 c0 116 0 213 0 218 0 4 -67 8 -149 10 l-148 3 -2 -150z" filter="url(#glow)" stroke="#39ff14"
                    stroke-width="30" fill="none" />

                <path d="M72 512 l3 -227 33 -67 c38 -77 92 -130 171 -167 54 -25 63 -26 264
-29 l207 -2 0 360 0 360 -341 0 -341 0 4 -228z" stroke="#fff" filter="url(#glow)" stroke-width="30" fill="none" />

            </g>
        </svg>
        <p>Loading...</p>
    </div>
</template>

<script>
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
}
</style>