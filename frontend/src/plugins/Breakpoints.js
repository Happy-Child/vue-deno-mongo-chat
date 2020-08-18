import breakpoints from "@/helpers/breakpoints";

export default {
  install: Vue => {
    if (typeof window !== "undefined") {
      const curWidth = window.innerWidth;
      Vue.prototype.$breakpoints = {
        isMinXLL: curWidth > breakpoints.xl,
        isXL: curWidth > breakpoints.lg && curWidth <= breakpoints.xl,
        isMaxXL: curWidth <= breakpoints.xl,
        isLG: curWidth > breakpoints.md && curWidth <= breakpoints.lg,
        isMaxLG: curWidth <= breakpoints.lg,
        isMD: curWidth > breakpoints.sm && curWidth <= breakpoints.md,
        isMaxMD: curWidth <= breakpoints.md,
        isSM: curWidth > breakpoints.xs && curWidth <= breakpoints.sm,
        isMaxSM: curWidth > breakpoints.xs && curWidth <= breakpoints.sm,
        isMaxXS: curWidth <= breakpoints.xs
      }
    }
  }
};
