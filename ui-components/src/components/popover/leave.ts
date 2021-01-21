import { createAnimation } from '../../utils/animation/animation';

/**
 * 移除动画
 */
export const leaveAnimation = (baseEl: HTMLElement): any => {
    const baseAnimation = createAnimation();
    const wrapperAnimation = createAnimation();

    wrapperAnimation
        .addElement(baseEl.querySelector('.popover-wrapper')!)
        .fromTo('opacity', 0.99, 0);

    return baseAnimation
        .addElement(baseEl)
        .easing('ease')
        .duration(100)
        .addAnimation([wrapperAnimation]);
};
