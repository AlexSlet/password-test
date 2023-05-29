import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";
import { RULE } from "@/domain/password/rules";

export const useStrongPasswordStore = defineStore("strong_password", () => {
  const password = ref("");

  const checkOneLetter = computed(
    () => /[a-z]/.test(password.value) || /[A-Z]/.test(password.value)
  );
  const checkLength4 = computed(() => password.value.length > 4);
  const checkLength8 = computed(() => password.value.length > 8);
  const checkLength12 = computed(() => password.value.length > 12);
  const checkUpperAndLower = computed(
    () => /[a-z]/.test(password.value) && /[A-Z]/.test(password.value)
  );
  const checkNumber = computed(() => /\d/.test(password.value));
  const checkSpecialSymbol = computed(() =>
    /[$%^&_\-/ /+*()@!]/.test(password.value)
  );

  const rulesCheckers = reactive({
    [RULE.OneLetter]: checkOneLetter,
    [RULE.UpperAndLower]: checkUpperAndLower,
    [RULE.OneNumber]: checkNumber,
    [RULE.SpecialSymbol]: checkSpecialSymbol,
    [RULE.LongerThan4]: checkLength4,
    [RULE.LongerThan8]: checkLength8,
    [RULE.LongerThan12]: checkLength12,
  });

  return { password, rulesCheckers };
});
