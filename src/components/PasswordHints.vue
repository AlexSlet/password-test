<template>
  <ul class="password-hints">
    <li
      v-for="rule in rules"
      :key="rule"
      :data-test-rule-indicator="rule"
      class="password-hint__rule"
      :class="{
        'password-hint__rule--pass': rulesCheckers[rule],
        'password-hint__rule--fail': !rulesCheckers[rule],
      }"
    >
      {{ RULE_DESCRIPTIONS[rule] }}
    </li>
  </ul>
</template>

<script setup>
import { RULE, RULE_DESCRIPTIONS } from "@/domain/password/rules";
import { useStrongPasswordStore } from "@/stores/strong-password";
import { computed } from "vue";

const rules = Object.values(RULE);

const store = useStrongPasswordStore();

const rulesCheckers = computed(() => store.rulesCheckers);
</script>

<style scoped lang="scss">
.password-hints {
  list-style: none;
  padding: 0;
  font-size: 14px;
  width: 100%;
}
.password-hint__rule {
  &--fail {
    color: red;
  }

  &--pass {
    color: green;
    text-decoration: line-through;
  }
}
</style>
