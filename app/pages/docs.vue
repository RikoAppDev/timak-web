<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
    <!-- Header -->
    <div class="-bg-linear-75 from-aws-orange/90 via-aws-navy/0 to-fiserv-orange/90 text-aws-navy py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">📚 Documentation</h1>
        <p class="text-xl opacity-90">Project architecture, guides, and technical documentation</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      <!-- Coming Soon -->
      <div class="bg-white/80 backdrop-blur-md shadow-md rounded-xl border border-blue-100 p-8 text-center">
        <div class="text-6xl mb-6">🚧</div>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Documentation Coming Soon</h2>
        <p class="text-xl text-gray-600 mb-8">
          We're preparing comprehensive documentation including architecture diagrams,
          API references, deployment guides, and operational runbooks.
        </p>

        <div class="grid md:grid-cols-3 gap-6 mt-12 text-left">
          <div class="bg-fiserv-orange/10 p-6 rounded-xl">
            <div class="text-3xl mb-3">🏗️</div>
            <h3 class="font-bold text-lg mb-2">Architecture</h3>
            <p class="text-sm text-gray-600">System design, AWS infrastructure diagrams, and component interactions</p>
          </div>
          <div class="bg-aws-orange/10 p-6 rounded-xl">
            <div class="text-3xl mb-3">📖</div>
            <h3 class="font-bold text-lg mb-2">API Reference</h3>
            <p class="text-sm text-gray-600">Complete API documentation with examples and integration guides</p>
          </div>
          <div class="bg-fiserv-blue/10 p-6 rounded-xl">
            <div class="text-3xl mb-3">🚀</div>
            <h3 class="font-bold text-lg mb-2">Deployment</h3>
            <p class="text-sm text-gray-600">Step-by-step deployment procedures and operational guides</p>
          </div>
        </div>
      </div>

      <!-- Contact -->
      <div class="mt-8 text-center">
        <p class="text-gray-600 mb-4">For immediate questions, contact us at:</p>
        <a
            href="mailto:quantumleapcrew@gmail.com"
            class="inline-block px-6 py-3 bg-fiserv-orange/90 hover:bg-fiserv-orange/80 text-white rounded-lg hover:from-aws-navy/90 hover:via-fiserv-blue/90 hover:to-fiserv-orange/90 transition-all font-semibold shadow-lg"
        >
          📧 quantumleapcrew@gmail.com
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
