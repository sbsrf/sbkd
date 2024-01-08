<script setup lang="ts">
import {
  NConfigProvider,
  NNotificationProvider,
  NDialogProvider,
  NMessageProvider,
  NH1,
  darkTheme,
  useOsTheme
} from 'naive-ui'
import { MyLayout, MyHeader, MyFooter } from '@libreservice/my-widget'
import MyPwa from './components/MyPwa.vue'
import { homepage, appName } from '../package.json'

const osThemeRef = useOsTheme()
</script>

<template>
  <my-pwa />
  <n-config-provider :theme="osThemeRef === 'dark' ? darkTheme : null">
    <my-layout>
      <template #header>
        <my-header
          icon="./LibreService.svg"
          :homepage="homepage"
        />
      </template>
      <template #content>
        <div style="cursor: pointer; text-align: center; margin-top: 16px">
          <n-h1>{{ appName }}</n-h1>
          <p>声笔系列码在线版目前支持全部声笔系列码方案，包括声笔简码、声笔拼音、声笔飞码、声笔飞单、声笔飞讯、声笔自然和声笔小鹤。</p>
          <p>声笔简码、声笔飞码、声笔飞单、声笔飞讯已经基本上完整支持，其他方案中涉及到用户词典的编码还不能打出。</p>
        </div>
        <n-notification-provider :max="1">
          <n-dialog-provider>
            <n-message-provider>
              <router-view v-slot="{ Component }">
                <keep-alive>
                  <component :is="Component" />
                </keep-alive>
              </router-view>
            </n-message-provider>
          </n-dialog-provider>
        </n-notification-provider>
      </template>
      <template #footer>
        <my-footer
          class="my-footer"
          :homepage="homepage"
          commit="__COMMIT__"
          build-date="__BUILD_DATE__"
          copyright="2024 谭淞宸（基于 Qijia Liu 等的 My Rime 项目）"
        />
      </template>
    </my-layout>
  </n-config-provider>
</template>
