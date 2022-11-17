import { quadOut } from 'svelte/easing';
import { quadIn } from 'svelte/easing';
import { backIn } from 'svelte/easing';
import { backOut } from 'svelte/easing';
import { settings } from './settings';

export function boxIn(node: HTMLElement) {
  const h = node.clientHeight;
  return {
    duration: settings.data.transitionSpeed.value,
    css: (t: number) => {
      const eased = quadOut(t);

      return `
        height: calc(${eased * h}px - var(--padding) * 2);
        overflow: visible;
        clip-path: inset(${(1 - eased) * h - 2}px 0 -${h}px 0);
        transform: translateY(${(1 - eased) * -h}px);
        `;
    },
  };
}
export function boxOut(node: HTMLElement) {
  const h = node.clientHeight;
  return {
    duration: settings.data.transitionSpeed.value,
    css: (t: number) => {
      const eased = quadOut(t);
      return `
        height: ${eased * h}px;
        overflow: visible;
        clip-path: inset(${(1 - eased) * h}px 0 0 0);
        transform: translateY(${(1 - eased) * -h}px);
        `;
    },
  };
}
export function boxButtonIn(node: HTMLElement) {
  return {
    duration: settings.data.transitionSpeed.value,
    css: (t: number) => {
      return `
        opacity:${t};
      `;
    },
  };
}
export function brIn(node: HTMLElement) {
  return {
    duration: settings.data.transitionSpeed.value,
    css: (t: number) => {
      const eased = quadOut(t);

      return `
        clip-path:inset(0% ${(1 - eased) * 100}% 0% 0%);
        transform: translateX(${(1 - eased) * 50}%);
      `;
    },
  };
}

export function brOut(node: HTMLElement) {
  return {
    duration: settings.data.transitionSpeed.value,
    css: (t: number) => {
      const eased = quadIn(t);

      return `
      clip-path:inset(0% ${(1 - eased) * 100}% 0% 0%);
      transform: translateX(${(1 - eased) * 50}%)`;
    },
  };
}

export function tab(node: HTMLElement) {
  const h = node.clientHeight;
  return {
    duration: settings.data.transitionSpeed.value,
    css: (t: number) => {
      const eased = quadOut(t);
      return `
        height: ${h * eased}px;
        margin-bottom: calc(${eased} * var(--padding));
        transform: scale(${eased});
        opacity: ${eased};
      `;
    },
  };
}
export function tabList(node: HTMLElement) {
  const h = node.clientHeight;
  return {
    duration: settings.data.transitionSpeed.value,
    css: (t: number) => {
      const eased = quadOut(t);
      return `
        height: ${h * eased}px;
        transform: scale(${eased});
        opacity: ${eased};
      `;
    },
  };
}

export function flowIn(node: HTMLElement) {
  return {
    duration: settings.data.transitionSpeed.value,
    css: (t: number) => {
      const eased = quadOut(t);

      return `
        transform: translateX(${-100 * (1 - eased)}vw);
      `;
    },
  };
}
export function flowOut(node: HTMLElement) {
  return {
    duration: settings.data.transitionSpeed.value,
    css: (t: number) => {
      const eased = quadOut(t);

      return `
        transform: translateX(${100 * (1 - eased)}vw);
      `;
    },
  };
}

export function tooltipTransition(node: HTMLElement) {
  return {
    duration: settings.data.transitionSpeed.value,
    css: (t: number) => {
      const eased = quadOut(t);

      return `
        transform: scale(${eased});
        opacity: ${t};
      `;
    },
  };
}

export function popupIn(node: HTMLElement) {
  return {
    duration: settings.data.transitionSpeed.value,
    css: (t: number) => {
      const eased = quadOut(t);

      return `
        transform: scale(${eased});
        opacity: ${t};
      `;
    },
  };
}
export function popupOut(node: HTMLElement) {
  return {
    duration: settings.data.transitionSpeed.value,
    css: (t: number) => {
      const eased = quadOut(t);

      return `
        transform: scale(${eased});
        opacity: ${t};
      `;
    },
  };
}
export function screenTransition(node: HTMLElement) {
  return {
    duration: settings.data.transitionSpeed.value,
    css: (t: number) => {
      return `
        opacity: ${t};
      `;
    },
  };
}
