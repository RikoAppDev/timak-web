<template>
  <div class="min-h-screen bg-gradient-to-br from-fiserv-blue/15 via-white to-aws-navy/15">
    <!-- Hero Section -->
    <div class="-bg-linear-75 from-aws-orange/90 via-aws-navy/0 to-fiserv-orange/90 text-aws-navy pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center items-center">
        <BackgroundLogo/>
        <p class="text-xl md:text-2xl mb-2">Cloud-Native Event Gateway Development</p>
        <p class=" text-lg opacity-90">Fiserv Serverless Event Gateway Transformation Project</p>
        <div class="mt-8 flex gap-4 flex-wrap justify-center text-white">
          <span class="px-4 py-2 bg-aws-orange rounded-full font-semibold shadow">☁️ AWS Serverless</span>
          <span class="px-4 py-2 bg-aws-navy/90 rounded-full font-semibold shadow">⚡ Event-Driven</span>
          <span class="px-4 py-2 bg-fiserv-orange/90 rounded-full font-semibold shadow">🤖 AI-Powered</span>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Project Overview -->
      <section class="mb-16">
        <div class="bg-white/80 backdrop-blur-md shadow-md rounded-xl p-8 border border-fiserv-orange/20">
          <h2 class="text-3xl font-bold text-aws-navy mb-4">About the Project</h2>
          <p class="text-aws-navy/80 leading-relaxed mb-4">
            We are building a <strong>Serverless Event Gateway</strong> for Fiserv using AWS cloud-native technologies.
            The project focuses on transforming traditional event processing into a modern, scalable, event-driven
            architecture
            leveraging AWS Lambda, API Gateway, EventBridge, and advanced AI-powered analytics.
          </p>
          <div class="grid md:grid-cols-3 gap-4 mt-6">
            <div class="bg-aws-orange/15 p-4 rounded-lg text-center">
              <div class="text-3xl mb-2">☁️</div>
              <div class="font-semibold text-gray-800">AWS Serverless</div>
              <div class="text-sm text-gray-600">Lambda, EventBridge, API Gateway</div>
            </div>
            <div class="bg-aws-navy/15 p-4 rounded-lg text-center">
              <div class="text-3xl mb-2">⚡</div>
              <div class="font-semibold text-gray-800">Event-Driven</div>
              <div class="text-sm text-gray-600">Real-time event processing</div>
            </div>
            <div class="bg-fiserv-orange/15 p-4 rounded-lg text-center">
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
          <h2 class="text-4xl font-bold text-aws-navy mb-4">Our Team</h2>
          <p class="text-xl text-aws-navy/80">Experienced specialists in cloud, AI, and distributed systems</p>
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
          <div class="bg-gradient-to-br from-aws-navy/80 to-aws-navy/90 text-white p-6 rounded-xl text-center shadow-lg">
            <div class="text-4xl font-bold mb-2">{{ totalLogs }}</div>
            <div class="text-sm opacity-90">Activities</div>
          </div>
          <div class="bg-gradient-to-br from-aws-orange/80 to-aws-orange/90 text-white p-6 rounded-xl text-center shadow-lg">
            <div class="text-4xl font-bold mb-2">{{ totalHours }}</div>
            <div class="text-sm opacity-90">Total Hours</div>
          </div>
          <div class="bg-gradient-to-br from-fiserv-blue/80 to-fiserv-blue/90 text-white p-6 rounded-xl text-center shadow-lg">
            <div class="text-4xl font-bold mb-2">{{ meetingCount }}</div>
            <div class="text-sm opacity-90">Meetings</div>
          </div>
          <div class="bg-gradient-to-br from-fiserv-orange/80 to-fiserv-orange/90 text-white p-6 rounded-xl text-center shadow-lg">
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
              class="px-6 py-3 bg-fiserv-orange/90 hover:bg-fiserv-orange/80 text-white rounded-lg hover:from-aws-navy/90 hover:via-fiserv-blue/90 hover:to-fiserv-orange/90 transition-all font-semibold shadow-lg"
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
