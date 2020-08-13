<template>
  <div class="p-user-list">
    <div class="p-user-list__search">
      <label class="p-user-list__search-field">
        <ElIcon>
          <IconSearch />
        </ElIcon>

        <input
          type="search"
          class="p-user-list__search-field-input"
          :placeholder="$t('labels.search_user_by_name')"
        />
      </label>
    </div>

    <nav class="p-user-list__nav">
      <router-link
        v-for="user in usersTotalList"
        :to="{ name: 'chat' }"
        :key="user.id"
        class="p-user-list__nav-link"
        :class="{ 'p-user-list__nav-link_active': user.id % 2 === 0 }"
      >
        <PUserCard
          :user="user"
          :is-online="true"
          :is-typing="user.id % 2 === 0"
          :count-unread-messages="13"
        />
      </router-link>
    </nav>
  </div>
</template>

<script>
import ElIcon from "@/components/01-elements/ElIcon";
import IconSearch from "@/assets/images/svg/icon-search.svg";
import PUserCard from "@/components/02-patterns/PUserCard";

export default {
  name: "PUsersList",

  components: {
    ElIcon,
    IconSearch,
    PUserCard
  },

  props: {
    prop: String
  },

  data() {
    return {};
  },

  methods: {},

  computed: {
    usersTotalList() {
      return [
        {
          id: 1,
          avatarUrl: null,
          username: "Test username",
          lastMessage: {
            text: "Some message",
            created_at: "9:20 am",
            viewed: false,
          }
        },
        {
          id: 2,
          avatarUrl:
            "https://otvet.imgsmail.ru/download/254281377_910c5ed2d69fc3e4d48488966db186a0_800.jpg",
          username: "Test username",
          lastMessage: {
            text: "Some message",
            created_at: "9:20 am",
            viewed: true,
          }
        },
        {
          id: 3,
          avatarUrl:
            "https://otvet.imgsmail.ru/download/254281377_910c5ed2d69fc3e4d48488966db186a0_800.jpg",
          username: "Test username",
          lastMessage: null,
          viewed: true,
        },
        {
          id: 1,
          avatarUrl: null,
          username: "Test username",
          lastMessage: {
            text: "Some message",
            created_at: "9:20 am",
            viewed: false,
          }
        },
        {
          id: 2,
          avatarUrl:
            "https://otvet.imgsmail.ru/download/254281377_910c5ed2d69fc3e4d48488966db186a0_800.jpg",
          username: "Test username",
          lastMessage: {
            text: "Some message",
            created_at: "9:20 am",
            viewed: true,
          }
        },
        {
          id: 3,
          avatarUrl:
            "https://otvet.imgsmail.ru/download/254281377_910c5ed2d69fc3e4d48488966db186a0_800.jpg",
          username: "Test username",
          lastMessage: null,
          viewed: true,
        },
        {
          id: 1,
          avatarUrl: null,
          username: "Test username",
          lastMessage: {
            text: "Some message",
            created_at: "9:20 am",
            viewed: false,
          }
        },
        {
          id: 2,
          avatarUrl:
            "https://otvet.imgsmail.ru/download/254281377_910c5ed2d69fc3e4d48488966db186a0_800.jpg",
          username: "Test username",
          lastMessage: {
            text: "Some message",
            created_at: "9:20 am",
            viewed: true,
          }
        },
        {
          id: 3,
          avatarUrl:
            "https://otvet.imgsmail.ru/download/254281377_910c5ed2d69fc3e4d48488966db186a0_800.jpg",
          username: "Test username",
          lastMessage: null,
          viewed: true,
        },
        {
          id: 1,
          avatarUrl: null,
          username: "Test username",
          lastMessage: {
            text: "Some message",
            created_at: "9:20 am",
            viewed: false,
          }
        },
        {
          id: 2,
          avatarUrl:
            "https://otvet.imgsmail.ru/download/254281377_910c5ed2d69fc3e4d48488966db186a0_800.jpg",
          username: "Test username",
          lastMessage: {
            text: "Some message",
            created_at: "9:20 am",
            viewed: true,
          }
        },
        {
          id: 3,
          avatarUrl:
            "https://otvet.imgsmail.ru/download/254281377_910c5ed2d69fc3e4d48488966db186a0_800.jpg",
          username: "Test username",
          lastMessage: null,
          viewed: true,
        }
      ];
    }
  }
};
</script>

<style lang="scss">
.p-user-list {
  $block: &;
  width: 520px;
  background-color: $color-gray;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  &__search {
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e2eef7;
    border-bottom: 1px solid rgba(211, 221, 243, 0.5);
    padding: px-to-rem(10px) px-to-rem(30px);
    flex-shrink: 0;

    &-field {
      width: 100%;
      background-color: #fff;
      border-radius: 100px;
      border: 1px solid #d3ddf3;
      padding: 8px px-to-rem(20px);
      display: flex;
      align-items: center;
      height: 46px;

      &-input {
        font-size: 16px;
        width: 100%;
        height: inherit;

        @include input-placeholder() {
          color: $color-gray-2;
        }
      }
    }

    .el-icon {
      flex-shrink: 0;
      margin-right: 10px;
    }
  }

  &__nav {
    overflow-y: auto;
    flex-grow: 1;

    &-link {
      display: block;
      padding: px-to-rem(20px) px-to-rem(30px);
      position: relative;
      transition: $transition-default all ease;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
        z-index: 0;
        opacity: 0;
        transition: inherit;
      }

      &:after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%, 0);
        width: calc(100% - 60px);
        height: 1px;
        background-color: rgba(#000, 0.12);
        z-index: 1;
      }

      > * {
        z-index: 1;
        position: relative;
      }

      &_active:before,
      &:hover:before {
        opacity: 1;
      }
    }
  }
}
</style>
