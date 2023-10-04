<template>
    <div class="bg-gray-900 text-white min-h-screen flex flex-col">
      <!-- Header -->
      <header class="container mx-auto py-4 px-8 text-2xl font-bold">
        RCL2
      </header>
  
      <!-- Main Content -->
      <main class="flex-grow container mx-auto p-8">
        <!-- Image Section -->
        <div class="flex justify-center items-center mb-8 h-64">
          <img src="rcl.svg" alt="Your Logo" class="w-32 h-32">
        </div>
  
        <!-- Text Section -->
        <div class="text-center mb-8">
          <h1 class="text-3xl font-semibold">Building the Future</h1>
          <p class="text-lg mt-2">One feature at a time.</p>
        </div>
  
        <!-- Features Section -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="feature-box">
            <h2 class="text-xl font-bold">Feature 1</h2>
            <p>Information about feature 1...</p>
          </div>
          <div class="feature-box">
            <h2 class="text-xl font-bold">Feature 2</h2>
            <p>Information about feature 2...</p>
          </div>
          <div class="feature-box">
            <h2 class="text-xl font-bold">Feature 3</h2>
            <p>Information about feature 3...</p>
          </div>
        </div>
      </main>
  
      <!-- Footer -->
      <footer class="container mx-auto py-4 px-8 text-center text-sm">
        © 2023 Your Startup WebApp
      </footer>
    </div>
  </template>
  
  <style scoped>
  .feature-box {
    padding: 1.5rem;
    background-color: #2d2d2d;
    border-radius: 0.5rem;
    border: 1px solid #4a4a4a;
  }
  </style>
  