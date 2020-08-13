<template>
  <div class="p-user-card">
    <div class="p-user-card__wrap-image">
      <ElImage :src="user.avatarUrl" />
      <ElCount v-if="countUnreadMessages">
        {{ countUnreadMessages }}
      </ElCount>
      <ElStatusOnline v-if="isOnline" />
    </div>

    <div class="p-user-card__content">
      <div class="p-user-card__content-top">
        <span v-if="user.username" class="p-user-card__username">
          {{ user.username }}
        </span>

        <time
          v-if="user.lastMessage && user.lastMessage.created_at"
          class="p-user-card__time"
        >
          {{ user.lastMessage.created_at }}
        </time>
      </div>

      <ElTyping v-if="isTyping" />

      <div
        v-else-if="user.lastMessage && user.lastMessage.text"
        class="p-user-card__message"
        :class="{ 'p-user-card__message_unviewed': !user.lastMessage.viewed }"
      >
        {{ user.lastMessage.text }}
      </div>
    </div>
  </div>
</template>

<script>
import ElImage from "@/components/01-elements/ElImage";
import ElCount from "@/components/01-elements/ElCount";
import ElStatusOnline from "@/components/01-elements/ElStatusOnline";
import ElTyping from "@/components/01-elements/ElTyping";

export default {
  name: "PUserCard",

  components: {
    ElImage,
    ElCount,
    ElStatusOnline,
    ElTyping
  },

  props: {
    user: {
      type: Object,
      default: () => ({})
    },
    isOnline: {
      type: Boolean,
      default: false
    },
    countUnreadMessages: {
      type: Number,
      default: 0
    },
    isTyping: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {};
  },

  methods: {},

  computed: {}
};
</script>

<style lang="scss">
.p-user-card {
  $block: &;
  display: flex;
  align-items: center;

  &__wrap-image {
    width: 60px;
    margin-right: 16px;
    flex-shrink: 0;
    position: relative;

    .el-count,
    .el-status-online {
      position: absolute;
    }

    .el-count {
      top: -3px;
      right: -3px;
    }

    .el-status-online {
      bottom: 0;
      right: 0;
    }
  }

  &__content {
    width: calc(100% - 60px - 16px);

    &-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2px;

      &:only-child {
        margin-bottom: 0;
      }
    }
  }

  &__username {
    @include ellipsis();
    padding-right: 10px;
    font-size: 18px;
    font-family: $font-bold;
  }

  &__time {
    flex-shrink: 0;
    color: $color-gray-2;
  }

  &__message {
    @include ellipsis();
    color: $color-gray-3;
    min-height: 26px;

    &_unviewed {
      color: $color-red;
    }
  }
}
</style>
