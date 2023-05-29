<template>
  <div class="main">
    <div class="input-box">
      <input data-test="password-field" v-model="store.password" />
      <span v-show="store.password.length > 0" data-test="validation-summary">{{
        passwordStrengtLabel
      }}</span>
    </div>
    <PasswordHints />
  </div>
</template>

<script setup>
import PasswordHints from "@/components/PasswordHints.vue";
import {
  StrengthOption,
  StrengthOptionLabel,
} from "@/domain/password/strength-options";
import { computed } from "vue";
import { useStrongPasswordStore } from "./stores/strong-password";

const store = useStrongPasswordStore();

const rulesCheckers = computed(() => store.rulesCheckers);
const isPasswordStrong = computed(
  () => Object.values(rulesCheckers.value).filter((value) => value).length > 4
);

const passwordStrengtLabel = computed(() =>
  isPasswordStrong.value
    ? StrengthOptionLabel[StrengthOption.Strong]
    : StrengthOptionLabel[StrengthOption.Weak]
);
</script>

<style scoped lang="scss">
.main {
  max-width: 350px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 10px;

  .input-box {
    display: flex;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;

    span {
      font-size: 12px;
    }

    input {
      padding: 5px;
      font-size: 16px;
      margin-right: 20px;
    }
  }
}
</style>
