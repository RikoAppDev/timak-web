<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 relative">
      <BackgroundLogo />
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Quantum Leap Crew</h1>
        <p class="text-xl md:text-2xl mb-2">Cloud-Native Event Gateway Development</p>
        <p class="text-lg opacity-90">Fiserv Serverless Event Gateway Transformation Project</p>
        <div class="mt-8 flex gap-4 flex-wrap">
          <span class="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">☁️ AWS Serverless</span>
          <span class="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">⚡ Event-Driven</span>
          <span class="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">🤖 AI-Powered</span>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      <!-- Project Overview -->
      <section class="mb-16">
        <div class="bg-white/80 backdrop-blur-md shadow-md rounded-xl p-8 border border-blue-100">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">About the Project</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            We are building a <strong>Serverless Event Gateway</strong> for Fiserv using AWS cloud-native technologies.
            The project focuses on transforming traditional event processing into a modern, scalable, event-driven
            architecture
            leveraging AWS Lambda, API Gateway, EventBridge, and advanced AI-powered analytics.
          </p>
          <div class="grid md:grid-cols-3 gap-4 mt-6">
            <div class="bg-blue-50 p-4 rounded-lg text-center">
              <div class="text-3xl mb-2">☁️</div>
              <div class="font-semibold text-gray-800">AWS Serverless</div>
              <div class="text-sm text-gray-600">Lambda, EventBridge, API Gateway</div>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg text-center">
              <div class="text-3xl mb-2">⚡</div>
              <div class="font-semibold text-gray-800">Event-Driven</div>
              <div class="text-sm text-gray-600">Real-time event processing</div>
            </div>
            <div class="bg-green-50 p-4 rounded-lg text-center">
              <div class="text-3xl mb-2">🤖</div>
              <div class="font-semibold text-gray-800">AI Analytics</div>
              <div class="text-sm text-gray-600">Anomaly detection & insights</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="mb-16">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p class="text-xl text-gray-600">Experienced specialists in cloud, AI, and distributed systems</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TeamMember
              v-for="member in teamMembers"
              :key="member.id"
              :member="member"
          />
        </div>
      </section>

      <!-- Project Stats -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Project Progress</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center shadow-lg">
            <div class="text-4xl font-bold mb-2">{{ totalLogs }}</div>
            <div class="text-sm opacity-90">Activities</div>
          </div>
          <div class="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl text-center shadow-lg">
            <div class="text-4xl font-bold mb-2">{{ totalHours }}</div>
            <div class="text-sm opacity-90">Total Hours</div>
          </div>
          <div class="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl text-center shadow-lg">
            <div class="text-4xl font-bold mb-2">{{ meetingCount }}</div>
            <div class="text-sm opacity-90">Meetings</div>
          </div>
          <div class="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl text-center shadow-lg">
            <div class="text-4xl font-bold mb-2">99.9%</div>
            <div class="text-sm opacity-90">Uptime</div>
          </div>
        </div>
      </section>

      <!-- Latest Activity -->
      <section>
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900">Latest Activity</h2>
          <NuxtLink
              to="/logs"
              class="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-semibold shadow-lg"
          >
            View All Logs →
          </NuxtLink>
        </div>
        <div class="space-y-4">
          <ProjectLog
              v-for="log in latestLogs"
              :key="log.id"
              :log="log"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { teamMembers, projectLogs, getLatestLogs, getMeetingLogs, getTotalHours } from '~/data/teamData';

const latestLogs = getLatestLogs(3);
const totalLogs = projectLogs.length;
const totalHours = getTotalHours();
const meetingCount = getMeetingLogs().length;
</script>
